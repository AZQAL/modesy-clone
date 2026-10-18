
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShoppingBag, X } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/product/ProductActions";

import { products } from "@/features/products/data/products";
import type { Product } from "@/components/product/ProductCard";

import {
    getWishlist,
    getCart,
    toggleWishlist,
    toggleCart,
} from "@/features/products/lib/shop-storage";

function formatPrice(price: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(price);
}

export default function ProductDetailPage() {
    const params = useParams<{ id: string }>();
    const router = useRouter();

    const productId = Number(params.id);

    const product: Product | undefined = products.find(
        (item) => item.id === productId
    );

    const [isWishlisted, setIsWishlisted] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const [showCartPopup, setShowCartPopup] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!product) {
            setIsLoaded(true);
            return;
        }

        setIsWishlisted(
            getWishlist().some((item) => item.id === product.id)
        );

        setAddedToCart(
            getCart().some((item) => item.id === product.id)
        );

        setIsLoaded(true);
    }, [product]);

    function handleToggleWishlist() {
        if (!product) return;

        const updatedWishlist = toggleWishlist(product);

        setIsWishlisted(
            updatedWishlist.some((item) => item.id === product.id)
        );
    }

    function handleToggleCart() {
        if (!product) return;

        // Jika produk sudah ada di keranjang, klik akan menghapusnya.
        if (addedToCart) {
            const updatedCart = toggleCart(product);

            setAddedToCart(
                updatedCart.some((item) => item.id === product.id)
            );

            return;
        }

        // Jika belum ada, tambahkan produk dan tampilkan popup.
        const updatedCart = toggleCart(product);

        setAddedToCart(
            updatedCart.some((item) => item.id === product.id)
        );

        setShowCartPopup(true);
    }

    if (!product) {
        return (
            <>
                <SiteHeader />

                <main className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
                    <ShoppingBag
                        size={48}
                        strokeWidth={1.3}
                        className="text-gray-300"
                    />

                    <h1 className="mt-5 text-2xl font-semibold text-gray-900">
                        Product Not Found
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        The product you are looking for does not exist.
                    </p>

                    <Link
                        href="/products"
                        className="mt-6 inline-flex items-center gap-2 bg-teal-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
                    >
                        Browse Products
                        <ArrowRight size={16} />
                    </Link>
                </main>

                <SiteFooter />
            </>
        );
    }

    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-white">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <ProductBreadcrumb
                        productName={product.name}
                        category={product.category}
                    />

                    <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                        {/* Product image */}
                        <div className="flex items-start justify-center">
                            <div className="w-full overflow-hidden bg-gray-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="aspect-square h-auto w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Product information */}
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
                                    <CheckCircle2
                                        size={17}
                                        className="text-teal-600"
                                    />
                                    <span>Product available</span>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    Sold by{" "}
                                    <span className="font-medium text-gray-700">
                                        {product.seller}
                                    </span>
                                </p>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Category: {product.category}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <SiteFooter />

            {/* Add to Cart popup */}
            {showCartPopup && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setShowCartPopup(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="cart-popup-title"
                        className="relative w-full max-w-lg bg-white p-6 shadow-xl sm:p-8"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Close popup"
                            onClick={() => setShowCartPopup(false)}
                            className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-900"
                        >
                            <X size={21} />
                        </button>

                        <div className="border-b border-gray-200 pb-5 pr-6">
                            <div className="flex items-center gap-2 text-sm font-medium text-teal-700">
                                <CheckCircle2 size={18} />
                                <span>Product successfully added to your cart!</span>
                            </div>

                            <h2
                                id="cart-popup-title"
                                className="mt-3 text-xl font-semibold text-gray-900"
                            >
                                Added to Shopping Cart
                            </h2>
                        </div>

                        <div className="flex gap-4 py-6">
                            <div className="h-24 w-24 shrink-0 overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <Link
                                    href={`/products/${product.id}`}
                                    onClick={() => setShowCartPopup(false)}
                                    className="text-sm font-medium text-gray-900 transition-colors hover:text-teal-600"
                                >
                                    {product.name}
                                </Link>

                                <p className="mt-2 text-xs text-gray-500">
                                    Sold by {product.seller}
                                </p>

                                <p className="mt-3 text-base font-semibold text-gray-900">
                                    {formatPrice(product.price)}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-gray-200 pt-5 sm:flex-row">
                            <button
                                type="button"
                                onClick={() => setShowCartPopup(false)}
                                className="flex-1 border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Continue Shopping
                            </button>

                            <button
                                type="button"
                                onClick={() => router.push("/cart")}
                                className="flex flex-1 items-center justify-center gap-2 bg-teal-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
                            >
                                <ShoppingBag size={17} />
                                View Cart
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={() => router.push("/checkout")}
                            className="mt-3 w-full border border-teal-600 px-4 py-3 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-50"
                        >
                            Proceed to Checkout
                            <ArrowRight size={16} className="ml-2 inline" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
