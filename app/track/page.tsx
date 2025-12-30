"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  MapPin,
  Clock,
  CheckCircle2,
  Circle,
  Loader2,
  Phone,
  Mail,
  CreditCard,
  ShieldCheck,
  ExternalLink,
  FileText,
  Truck,
  User,
  Hash,
  Calendar,
} from "lucide-react";

interface PackageStatus {
  status: string;
  datetime: string;
}

interface RiderInfo {
  name: string;
  phone: string;
  photo?: string;
  plate_number?: string;
}

interface Insurance {
  amount: number;
  currency: string;
  provider: string;
  status: string;
}

interface TrackingData {
  success: boolean;
  data: {
    date: string;
    order_id: string;
    status: string;
    courier: {
      name: string;
      service_icon?: string;
      email: string;
      phone: string;
      tracking_code: string;
      tracking_message: string;
      delivery_pin?: string | null;
      rider_info?: RiderInfo | null;
    };
    ship_from: { name: string; address: string; phone: string; email: string };
    ship_to: { name: string; address: string; phone: string; email: string };
    delivery_eta: string;
    payment?: { shipping_fee: number; currency: string };
    package_status: PackageStatus[];
    tracking_url: string;
    waybill_document: string;
    insurance?: Insurance | null;
  };
}

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim())
      return setError("Please enter a tracking number");

    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/v1/tracking/${trackingNumber.trim()}`
      );
      const data = await res.json();
      if (!res.ok || !data.success)
        throw new Error("Tracking number not found");
      setTrackingData(data);
    } catch (err) {
      setError("Unable to find shipment. Please check the ID and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f8fafc] text-slate-900 py-12 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          {/* <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
            Logistics Tracker
          </span> */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            Track your <span className="text-blue-600">Package</span>
          </h1>
        </motion.div>

        <div className="relative max-w-2xl mx-auto mb-12">
          <form onSubmit={handleTrack} className="relative group">
            <input
              type="text"
              placeholder="Paste Tracking ID (e.g. SB-34C391B4...)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full pl-6 pr-40 py-5 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-blue-500/5 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-lg"
            />
            <button
              disabled={loading}
              className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <Package className="w-5 h-5" />
              )}
              {loading ? "Locating..." : "Track"}
            </button>
          </form>
          {error && (
            <p className="text-red-500 mt-3 ml-2 text-sm font-medium">
              ✕ {error}
            </p>
          )}
        </div>

        <AnimatePresence>
          {trackingData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                        Order ID
                      </p>
                      <h2 className="text-2xl font-bold">
                        {trackingData.data.order_id}
                      </h2>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-xl font-bold text-sm uppercase ${
                        trackingData.data.status === "pending"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      ● {trackingData.data.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                        <Truck size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Courier</p>
                        <p className="font-bold">
                          {trackingData.data.courier.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Est. Delivery</p>
                        <p className="font-bold">
                          {trackingData.data.delivery_eta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
                  <h3 className="font-bold mb-6 text-lg">Courier Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-blue-400" />
                      <span className="text-sm">
                        {trackingData.data.courier.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-blue-400" />
                      <span className="text-sm truncate">
                        {trackingData.data.courier.email}
                      </span>
                    </div>
                    {trackingData.data.courier.delivery_pin && (
                      <div className="mt-6 p-4 bg-white/10 rounded-2xl border border-white/10">
                        <p className="text-xs text-slate-400 uppercase">
                          Security PIN
                        </p>
                        <p className="text-xl font-mono font-bold tracking-widest">
                          {trackingData.data.courier.delivery_pin}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {" "}
                <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
                    <Hash className="text-blue-500" /> Movement History
                  </h3>
                  <div className="space-y-0 relative">
                    {trackingData.data.package_status.map((item, idx) => (
                      <div key={idx} className="flex gap-6 pb-10 relative">
                        {idx !==
                          trackingData.data.package_status.length - 1 && (
                          <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-slate-100" />
                        )}
                        <div
                          className={`relative z-10 w-6 h-6 rounded-full border-4 bg-white ${
                            idx === 0 ? "border-blue-500" : "border-slate-200"
                          }`}
                        />
                        <div>
                          <p
                            className={`font-bold ${
                              idx === 0 ? "text-blue-600" : "text-slate-700"
                            }`}
                          >
                            {item.status}
                          </p>
                          <p className="text-sm text-slate-400">
                            {new Date(item.datetime).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="absolute left-2.5 top-8 bottom-0 w-0.5 border-l-2 border-dashed border-slate-200" />
                        <div className="flex gap-4 mb-8">
                          <div className="w-5 h-5 bg-blue-100 rounded-full shrink-0 mt-1 flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase">
                              Origin
                            </p>
                            <p className="text-sm font-semibold leading-snug">
                              {trackingData.data.ship_from.address}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <MapPin className="text-red-500 shrink-0" size={20} />
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase">
                              Destination
                            </p>
                            <p className="text-sm font-semibold leading-snug">
                              {trackingData.data.ship_to.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 rounded-3xl p-6 border border-blue-100">
                    <h4 className="text-sm font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <CreditCard size={16} /> Shipment Details
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Shipping Fee</span>
                        <span className="font-bold">
                          {trackingData.data.payment?.currency}{" "}
                          {trackingData.data.payment?.shipping_fee.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Insurance</span>
                        <span className="text-slate-700">
                          {trackingData.data.insurance
                            ? "Active"
                            : "Not Insured"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={trackingData.data.waybill_document}
                      target="_blank"
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group"
                    >
                      <FileText className="text-slate-400 group-hover:text-blue-600 mb-2" />
                      <span className="text-xs font-bold">Waybill</span>
                    </a>
                    <a
                      href={trackingData.data.tracking_url}
                      target="_blank"
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group"
                    >
                      <ExternalLink className="text-slate-400 group-hover:text-blue-600 mb-2" />
                      <span className="text-xs font-bold">Courier Site</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
