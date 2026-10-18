"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, LoaderCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type OrderDetail = {
  id: string;
  status: string;
  total_amount: number;
  shipping_name: string;
  shipping_address: string;
  created_at: string;
};

type OrderItem = {
  id: string;
  product_name: string;
  price: number;
  quantity: number;
};

export default function OrderDetailPage() {
  const params = useParams<{ id: string }>();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [items, setItems] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      
      const { data: orderData } = await supabase.from("orders").select("*").eq("id", params.id).single();
      const { data: itemsData } = await supabase.from("order_items").select("*").eq("order_id", params.id);

      if (orderData) setOrder(orderData);
      if (itemsData) setItems(itemsData);
      setLoading(false);
    }
    load();
  }, [params.id]);

  if (loading) return <main className="flex min-h-[60vh] items-center justify-center bg-white"><LoaderCircle className="animate-spin text-teal-600" size={32} /></main>;
  if (!order) return <main className="p-10 text-center">Pesanan tidak ditemukan.</main>;

  return (
    <main className="min-h-screen bg-white py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-5 flex items-center gap-1 text-xs text-gray-400">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <ChevronRight size={14} />
          <Link href="/orders" className="hover:text-teal-600">Pesanan Saya</Link>
          <ChevronRight size={14} />
          <span className="text-gray-700">Detail Pesanan</span>
        </nav>

        <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b pb-5 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Pesanan #{order.id.slice(0, 8).toUpperCase()}</h1>
            <p className="mt-1 text-sm text-gray-500">Dibuat pada {new Date(order.created_at).toLocaleDateString("id-ID", { dateStyle: "long" })}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            <CheckCircle2 size={16} /> {order.status.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-lg font-medium text-gray-900">Alamat Pengiriman</h2>
            <div className="rounded border border-gray-200 p-4 text-sm text-gray-700">
              <p className="font-semibold">{order.shipping_name}</p>
              <p className="mt-1">{order.shipping_address}</p>
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-medium text-gray-900">Rincian Barang</h2>
            <div className="rounded border border-gray-200">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between border-b p-4 text-sm last:border-0">
                  <span>{item.product_name} (x{item.quantity})</span>
                  <span className="font-semibold">${item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between rounded border border-gray-200 bg-gray-50 p-4 font-semibold">
              <span>Total</span>
              <span>${order.total_amount}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}