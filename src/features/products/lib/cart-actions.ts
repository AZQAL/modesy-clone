import { createClient } from "@/lib/supabase/client";
import type { Product } from "@/features/products/data/products";

// === CART ACTIONS ===

export async function getCart(): Promise<Product[]> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("cart_items")
    .select(`
      products (
        *,
        categories (name)
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  return data.map((item: any) => ({
    ...item.products,
    category_name: item.products.categories?.name || "Uncategorized",
    seller_name: "Admin",
  }));
}

export async function toggleCart(product: Product): Promise<boolean> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    alert("Silakan login untuk menambahkan ke keranjang.");
    return false;
  }

  // Cek apakah sudah ada
  const { data: existing } = await supabase
  .from("cart_items")
  .select("id")
  .eq("user_id", user.id)
  .eq("product_id", product.id)
  .maybeSingle();

  if (existing) {
    // Jika ada, hapus
    await supabase.from("cart_items").delete().eq("id", existing.id);
    return false; // Mengembalikan false artinya sekarang TIDAK ada di cart
  } else {
    // Jika belum, tambahkan
    await supabase.from("cart_items").insert({
      user_id: user.id,
      product_id: product.id,
    });
    return true; // Mengembalikan true artinya sekarang ADA di cart
  }
}

export async function removeFromCart(productId: string): Promise<void> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  await supabase
    .from("cart_items")
    .delete()
    .eq("user_id", user.id)
    .eq("product_id", productId);
}

// === WISHLIST ACTIONS ===

export async function getWishlist(): Promise<Product[]> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("wishlist_items")
    .select(`
      products (
        *,
        categories (name)
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  return data.map((item: any) => ({
    ...item.products,
    category_name: item.products.categories?.name || "Uncategorized",
    seller_name: "Admin",
  }));
}

export async function toggleWishlist(product: Product): Promise<boolean> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    alert("Silakan login untuk menambahkan ke wishlist.");
    return false;
  }

  const { data: existing } = await supabase
  .from("wishlist_items")
  .select("id")
  .eq("user_id", user.id)
  .eq("product_id", product.id)
  .maybeSingle();

  if (existing) {
    await supabase.from("wishlist_items").delete().eq("id", existing.id);
    return false;
  } else {
    await supabase.from("wishlist_items").insert({
      user_id: user.id,
      product_id: product.id,
    });
    return true;
  }
}

export async function removeFromWishlist(productId: string): Promise<void> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  await supabase
    .from("wishlist_items")
    .delete()
    .eq("user_id", user.id)
    .eq("product_id", productId);
}