"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  UserRoundCog, MapPin, Truck, Link2, Share2, LockKeyhole, UserRoundX,
  LoaderCircle, AlertCircle, ChevronRight, TruckIcon, Edit3, Trash2, PlusCircle, X
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type ShippingAddress = {
  id: string;
  label: string;
  recipient_name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
};

const sidebarItems = [
  { label: "Update Profile", href: "/settings/edit-profile", icon: UserRoundCog },
  { label: "Location", href: "/settings/location", icon: MapPin },
  { label: "Shipping Address", href: "/settings/shipping-address", icon: Truck },
  { label: "Affiliate Links", href: "/settings/affiliate-links", icon: Link2 },
  { label: "Social Media", href: "/settings/social-media", icon: Share2 },
  { label: "Change Password", href: "/settings/change-password", icon: LockKeyhole },
  { label: "Delete Account", href: "/settings/delete-account", icon: UserRoundX },
];

const inputClass = "block h-10 w-full rounded-sm border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-teal-600";
const labelClass = "mb-1 block text-sm font-medium text-gray-800";

export default function ShippingAddressPage() {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  const [addresses, setAddresses] = useState<ShippingAddress[]>([]);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // State untuk Modal Form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    label: "", recipient_name: "", phone: "", address: "", city: "", state: "", zip_code: "", country: "Indonesia"
  });

  useEffect(() => {
    let active = true;
    async function loadData() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) { router.replace("/login"); return; }
        if (!active) return;
        setUserId(user.id);

        const { data, error } = await supabase
          .from("shipping_addresses")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (error) throw error;
        if (active) setAddresses(data || []);
      } catch (err: any) {
        if (active) setErrorMessage(err.message || "Gagal memuat alamat.");
      } finally {
        if (active) setLoading(false);
      }
    }
    loadData();
    return () => { active = false; };
  }, [router, supabase]);

  const openAddModal = () => {
    setEditingId(null);
    setFormData({ label: "", recipient_name: "", phone: "", address: "", city: "", state: "", zip_code: "", country: "Indonesia" });
    setIsModalOpen(true);
  };

  const openEditModal = (addr: ShippingAddress) => {
    setEditingId(addr.id);
    setFormData({
      label: addr.label, recipient_name: addr.recipient_name, phone: addr.phone,
      address: addr.address, city: addr.city, state: addr.state, zip_code: addr.zip_code, country: addr.country
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus alamat ini?")) return;
    try {
      const { error } = await supabase.from("shipping_addresses").delete().eq("id", id);
      if (error) throw error;
      setAddresses((prev) => prev.filter((a) => a.id !== id));
    } catch (err: any) {
      alert("Gagal menghapus: " + err.message);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!userId || saving) return;
    setSaving(true);

    try {
      const payload = { ...formData, user_id: userId };
      
      if (editingId) {
        const { error } = await supabase.from("shipping_addresses").update(payload).eq("id", editingId);
        if (error) throw error;
        setAddresses((prev) => prev.map((a) => (a.id === editingId ? { ...payload, id: editingId } : a)));
      } else {
        const { data, error } = await supabase.from("shipping_addresses").insert(payload).select().single();
        if (error) throw error;
        setAddresses((prev) => [data, ...prev]);
      }
      setIsModalOpen(false);
    } catch (err: any) {
      alert("Gagal menyimpan: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <main className="flex min-h-screen items-center justify-center bg-white"><LoaderCircle size={28} className="animate-spin text-teal-600" /></main>;
  }

  return (
    <main className="min-h-screen bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-7 sm:px-6 lg:px-8">
        <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-gray-400">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <ChevronRight size={14} />
          <span>Profile Settings</span>
          <ChevronRight size={14} />
          <span className="text-gray-700">Shipping Address</span>
        </nav>

        <h1 className="mb-5 text-2xl font-medium text-gray-900">Profile Settings</h1>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
          {/* SIDEBAR */}
          <aside className="space-y-1 md:col-span-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}
                  className={`flex min-h-10 items-center gap-3 rounded-sm px-3 text-sm transition ${active ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"}`}>
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </aside>

          {/* KONTEN UTAMA */}
          <section className="min-w-0 md:col-span-3">
            {errorMessage && (
              <div className="mb-5 flex items-center gap-2 border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                <AlertCircle size={17} /> {errorMessage}
              </div>
            )}

            <div className="mb-6">
              {addresses.length === 0 ? (
                <p className="text-sm text-gray-500 mb-4">Anda belum memiliki alamat pengiriman.</p>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="relative border border-gray-200 p-5 shadow-sm">
                      <div className="flex items-center gap-1.5 text-sm font-medium text-teal-600 mb-3">
                        <TruckIcon size={16} />
                        {addr.label}
                      </div>
                      <div className="text-sm text-gray-600 space-y-1 leading-relaxed">
                        <p className="font-semibold text-gray-800">{addr.recipient_name}</p>
                        <p>{addr.address} {addr.zip_code} {addr.city}/{addr.state}/{addr.country}</p>
                        <p>Telp: {addr.phone}</p>
                      </div>
                      <div className="mt-5 flex gap-4">
                        <button onClick={() => openEditModal(addr)} className="text-gray-400 hover:text-teal-600" title="Edit">
                          <Edit3 size={18} />
                        </button>
                        <button onClick={() => handleDelete(addr.id)} className="text-gray-400 hover:text-red-500" title="Hapus">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button onClick={openAddModal}
              className="mt-2 inline-flex items-center gap-2 bg-[#00a99d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#008f85]">
              <PlusCircle size={18} /> Add New Address
            </button>
          </section>
        </div>
      </div>

      {/* MODAL FORM ADD / EDIT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div className="w-full max-w-lg rounded-md bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {editingId ? "Edit Shipping Address" : "Add New Address"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={labelClass}>Label (e.g. Home, Office)</label>
                <input required value={formData.label} onChange={(e) => setFormData({ ...formData, label: e.target.value })} className={inputClass} placeholder="Home" />
              </div>
              <div>
                <label className={labelClass}>Recipient Name</label>
                <input required value={formData.recipient_name} onChange={(e) => setFormData({ ...formData, recipient_name: e.target.value })} className={inputClass} placeholder="John Doe" />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="08123456789" />
              </div>
              <div>
                <label className={labelClass}>Full Address</label>
                <input required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className={inputClass} placeholder="Street, building, house number" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>City</label>
                  <input required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>State / Province</label>
                  <input required value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>ZIP Code</label>
                  <input required value={formData.zip_code} onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Country</label>
                  <select value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} className={inputClass}>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="France">France</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3 border-t border-gray-200 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-sm text-gray-600 hover:text-gray-900">Cancel</button>
                <button type="submit" disabled={saving} className="bg-[#00a99d] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#008f85] disabled:opacity-50">
                  {saving ? "Saving..." : "Save Address"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}