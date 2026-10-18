import { createClient } from "@/lib/supabase/client";

export type Product = {
  id: string;
  name: string;
  seller_id: string | null;
  category_id: string | null;
  price: number;
  old_price: number | null;
  image_url: string | null;
  description: string | null;
  created_at: string;
  category_name?: string;
  seller_name?: string;
};

export async function getProducts(): Promise<Product[]> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (name)
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return (data || []).map((item: any) => ({
    ...item,
    category_name: item.categories?.name || "Uncategorized",
    seller_name: "Admin",
  }));
}

export async function getProductById(id: string): Promise<Product | null> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (name)
    `)
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Error fetching product:", error);
    return null;
  }

  return {
    ...data,
    category_name: data.categories?.name || "Uncategorized",
    seller_name: "Admin",
  };
}