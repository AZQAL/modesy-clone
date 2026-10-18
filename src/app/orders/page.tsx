"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Package, ChevronRight, LoaderCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Order = {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
};

export default function OrdersHistoryPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (data) setOrders(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <main className="flex min-h-[60vh] items-center justify-center bg-white"><LoaderCircle className="animate-spin text-teal-600" size={32} /></main>;

  return (
    <main className="min-h-screen bg-white py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-semibold text-gray-900">Riwayat Pesanan</h1>

        {orders.length === 0 ? (
          <div className="py-12 text-center text-gray-500">
            <Package size={48} className="mx-auto mb-3 text-gray-300" />
            <p>Belum ada pesanan.</p>
            <Link href="/products" className="mt-4 inline-block text-teal-600 hover:underline">Mulai Belanja</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Link key={order.id} href={`/orders/${order.id}`} className="flex items-center justify-between rounded border border-gray-200 p-5 transition hover:bg-gray-50">
                <div>
                  <p className="font-semibold text-gray-900">Pesanan #{order.id.slice(0, 8).toUpperCase()}</p>
                  <p className="mt-1 text-sm text-gray-500">{new Date(order.created_at).toLocaleDateString("id-ID")}</p>
                  <p className="mt-2 inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium uppercase text-gray-700">{order.status}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-900">${order.total_amount}</span>
                  <ChevronRight className="text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}