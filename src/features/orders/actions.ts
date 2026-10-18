import { createClient } from "@/lib/supabase/client";
import type { Product } from "@/features/products/data/products";

export type CheckoutPayload = {
  addressId: string;
  shippingMethod: string;
  shippingCost: number;
  paymentMethod: string;
  taxAmount: number; // Total VAT + Sales Tax + Transaction Fee
};

export async function createOrder(payload: CheckoutPayload, cart: Product[]) {
  const supabase = createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) throw new Error("Silakan login terlebih dahulu.");
  if (cart.length === 0) throw new Error("Keranjang Anda kosong.");

  // 1. Ambil data alamat
  const { data: address, error: addrError } = await supabase
    .from("shipping_addresses")
    .select("*")
    .eq("id", payload.addressId)
    .single();

  if (addrError || !address) throw new Error("Alamat pengiriman tidak ditemukan.");

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const totalAmount = subtotal + payload.shippingCost + payload.taxAmount;

  // 2. Buat Order
  const { data: orderData, error: orderError } = await supabase
    .from("orders")
    .insert({
      user_id: user.id,
      total_amount: totalAmount,
      shipping_name: address.recipient_name,
      shipping_phone: address.phone,
      shipping_address: address.address,
      shipping_city: address.city,
      shipping_state: address.state,
      shipping_zip_code: address.zip_code,
      shipping_country: address.country,
      shipping_method: payload.shippingMethod,
      shipping_cost: payload.shippingCost,
      payment_method: payload.paymentMethod,
      status: "pending",
    })
    .select("id")
    .single();

  if (orderError) throw new Error("Gagal membuat pesanan: " + orderError.message);

  // 3. Buat Order Items
  const orderItems = cart.map((item) => ({
    order_id: orderData.id,
    product_id: item.id,
    product_name: item.name,
    price: item.price,
    quantity: 1,
  }));

  const { error: itemsError } = await supabase.from("order_items").insert(orderItems);
  if (itemsError) throw new Error("Gagal menyimpan detail pesanan: " + itemsError.message);

  // 4. Kosongkan Cart user
  await supabase.from("cart_items").delete().eq("user_id", user.id);

  return orderData.id;
}