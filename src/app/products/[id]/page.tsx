"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShoppingBag, X, LoaderCircle } from "lucide-react";
import Image from "next/image";

import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/product/ProductActions";
import { getProductById, type Product } from "@/features/products/data/products";
import { getCart, toggleCart, getWishlist, toggleWishlist } from "@/features/products/lib/cart-actions";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);

  useEffect(() => {
    async function load() {
      if (!params.id) return;
      
      const data = await getProductById(params.id);
      setProduct(data);

      if (data) {
        // Cek status cart & wishlist saat halaman dimuat
        const cartItems = await getCart();
        const wishlistItems = await getWishlist();
        
        setAddedToCart(cartItems.some(item => item.id === data.id));
        setIsWishlisted(wishlistItems.some(item => item.id === data.id));
      }
      
      setIsLoading(false);
    }
    load();
  }, [params.id]);

  async function handleToggleWishlist() {
    if (!product) return;
    const newStatus = await toggleWishlist(product);
    setIsWishlisted(newStatus);
  }

  async function handleToggleCart() {
    if (!product) return;
    
    const newStatus = await toggleCart(product);
    setAddedToCart(newStatus);

    if (newStatus) {
      setShowCartPopup(true);
    }
  }

  if (isLoading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white">
        <LoaderCircle className="animate-spin text-teal-600" size={32} />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
        <ShoppingBag size={48} strokeWidth={1.3} className="text-gray-300" />
        <h1 className="mt-5 text-2xl font-semibold text-gray-900">Product Not Found</h1>
        <Link href="/products" className="mt-6 inline-flex items-center gap-2 bg-teal-600 px-5 py-3 text-sm font-medium text-white hover:bg-teal-700">
          Browse Products <ArrowRight size={16} />
        </Link>
      </main>
    );
  }

  const imgSrc = product.image_url || "/images/products/placeholder.jpg";
  const formatPrice = (p: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(p);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ProductBreadcrumb productName={product.name} category={product.category_name || "Uncategorized"} />

        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="flex items-start justify-center">
            <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
              <Image src={imgSrc} alt={product.name} fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col">
            <ProductInfo product={product} />
            <ProductActions
              isWishlisted={isWishlisted}
              addedToCart={addedToCart}
              onToggleWishlist={handleToggleWishlist}
              onToggleCart={handleToggleCart}
            />

            <div className="mt-8 border-t border-gray-200 pt-5">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={17} className="text-teal-600" />
                <span>Product available</span>
              </div>
              <p className="mt-3 text-sm text-gray-500">Sold by <span className="font-medium text-gray-700">{product.seller_name}</span></p>
            </div>
          </div>
        </div>
      </div>

      {showCartPopup && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowCartPopup(false)}>
          <div className="relative w-full max-w-lg bg-white p-6 shadow-xl sm:p-8" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setShowCartPopup(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-900"><X size={21} /></button>
            <div className="border-b border-gray-200 pb-5 pr-6">
              <div className="flex items-center gap-2 text-sm font-medium text-teal-700"><CheckCircle2 size={18} /><span>Added to cart!</span></div>
              <h2 className="mt-3 text-xl font-semibold text-gray-900">Added to Shopping Cart</h2>
            </div>
            <div className="flex gap-4 py-6">
              <div className="relative h-24 w-24 shrink-0 bg-gray-100"><Image src={imgSrc} alt={product.name} fill className="object-cover" /></div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{product.name}</p>
                <p className="mt-3 text-base font-semibold text-gray-900">{formatPrice(product.price)}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 border-t border-gray-200 pt-5 sm:flex-row">
              <button type="button" onClick={() => setShowCartPopup(false)} className="flex-1 border border-gray-300 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Continue Shopping</button>
              <button type="button" onClick={() => router.push("/cart")} className="flex flex-1 items-center justify-center gap-2 bg-teal-600 px-4 py-3 text-sm text-white hover:bg-teal-700"><ShoppingBag size={17} /> View Cart</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}