import type { Product } from "@/components/product/ProductCard";

const WISHLIST_KEY = "vyro-wishlist";
const CART_KEY = "vyro-cart";

function readProducts(key: string): Product[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return [];
    }

    return JSON.parse(value) as Product[];
  } catch {
    return [];
  }
}

function writeProducts(key: string, products: Product[]) {
  localStorage.setItem(key, JSON.stringify(products));
}

export function getWishlist(): Product[] {
  return readProducts(WISHLIST_KEY);
}

export function getCart(): Product[] {
  return readProducts(CART_KEY);
}

export function toggleWishlist(product: Product): Product[] {
  const current = getWishlist();
  const exists = current.some((item) => item.id === product.id);

  const updated = exists
    ? current.filter((item) => item.id !== product.id)
    : [...current, product];

  writeProducts(WISHLIST_KEY, updated);

  return updated;
}

export function toggleCart(product: Product): Product[] {
  const current = getCart();
  const exists = current.some((item) => item.id === product.id);

  const updated = exists
    ? current.filter((item) => item.id !== product.id)
    : [...current, product];

  writeProducts(CART_KEY, updated);

  return updated;
}

export function removeFromWishlist(id: number): Product[] {
  const updated = getWishlist().filter((item) => item.id !== id);

  writeProducts(WISHLIST_KEY, updated);

  return updated;
}

export function removeFromCart(id: number): Product[] {
  const updated = getCart().filter((item) => item.id !== id);

  writeProducts(CART_KEY, updated);

  return updated;
}