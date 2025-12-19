"use client";

import React, { useState } from "react";
import {
  Package,
  MapPin,
  Clock,
  CheckCircle,
  Circle,
  Loader2,
} from "lucide-react";

interface TrackingEvent {
  timestamp: string;
  status: string;
  location: string;
  description: string;
}

interface TrackingData {
  success: boolean;
  status: string;
  events: TrackingEvent[];
  currentLocation: string;
  estimatedDelivery: string;
}

interface ErrorResponse {
  success: false;
  error: string;
}

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setLoading(true);
    setError("");
    setTrackingData(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tracking/${trackingNumber.trim()}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setError("Tracking number not found. Please check and try again.");
        } else {
          setError("Something went wrong. Please try again later.");
        }
        return;
      }

      const data = await response.json();

      if (!data || typeof data !== "object" || !data.success) {
        setError("Tracking number not found. Please check and try again.");
        return;
      }

      if (!data.events || !Array.isArray(data.events)) {
        setError("Tracking information is unavailable at the moment.");
        return;
      }

      setTrackingData(data);
    } catch (err) {
      console.error("Tracking error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getStatusIcon = (status: string, isCompleted: boolean) => {
    if (isCompleted) {
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    }
    if (status === trackingData?.status) {
      return (
        <div className="w-6 h-6 rounded-full border-4 border-blue-500 bg-white" />
      );
    }
    return <Circle className="w-6 h-6 text-gray-300" />;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      created: "bg-gray-100 text-gray-700",
      picked_up: "bg-blue-100 text-blue-700",
      in_transit: "bg-yellow-100 text-yellow-700",
      out_for_delivery: "bg-orange-100 text-orange-700",
      delivered: "bg-green-100 text-green-700",
    };
    return colors[status] || "bg-gray-100 text-gray-700";
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      created: "Package Created",
      picked_up: "Picked Up",
      in_transit: "In Transit",
      out_for_delivery: "Out for Delivery",
      delivered: "Delivered",
    };
    return labels[status] || status.replace("_", " ").toUpperCase();
  };

  return (
    <section className="w-full min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-20">
      <div className="w-11/12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0055a4] mb-4">
            Track Your Shipment
          </h1>
          <p className="text-gray-600">
            Enter your tracking number to see the status of your package
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <form
            onSubmit={handleTrack}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Enter tracking number (e.g., SB123456789)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-[#0055a4] focus:outline-none text-lg"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-[#0055a4] hover:bg-[#003d7a] text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Tracking...
                </>
              ) : (
                <>
                  <Package className="w-5 h-5" />
                  Track Package
                </>
              )}
            </button>
          </form>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-8">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {trackingData && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Track Shipment: {trackingNumber}
                </h2>
                <span
                  className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(
                    trackingData.status
                  )}`}
                >
                  🚚 {trackingData.status.replace("_", " ").toUpperCase()}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#0055a4]" />
                  <div>
                    <p className="text-sm text-gray-600">Current Location</p>
                    <p className="font-semibold text-gray-800">
                      {trackingData.currentLocation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Est. Delivery</p>
                    <p className="font-semibold text-gray-800">
                      {formatDate(trackingData.estimatedDelivery)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                TRACKING TIMELINE
              </h3>

              <div className="space-y-6">
                {trackingData.events.map((event, index) => {
                  const eventIndex = trackingData.events.findIndex(
                    (e) => e.status === trackingData.status
                  );
                  const isCompleted = index < eventIndex;
                  const isCurrent = index === eventIndex;

                  return (
                    <div key={index} className="relative flex gap-4">
                      {index < trackingData.events.length - 1 && (
                        <div
                          className={`absolute left-3 top-10 bottom-0 w-0.5 ${
                            isCompleted ? "bg-green-300" : "bg-gray-200"
                          }`}
                        />
                      )}

                      <div className="relative z-10 shrink-0">
                        {getStatusIcon(event.status, isCompleted)}
                      </div>

                      <div
                        className={`flex-1 pb-6 ${
                          isCurrent
                            ? "bg-blue-50 -ml-10 pl-14 -mr-8 pr-8 py-4 rounded-lg"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-800">
                            {isCompleted ? "✓" : isCurrent ? "◉" : "○"}{" "}
                            {getStatusLabel(event.status)}
                          </h4>
                          {isCurrent && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              ← You are here
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          ├─ {formatDate(event.timestamp)} - {event.location}
                        </p>
                        <p className="text-sm text-gray-500">
                          └─ {event.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.print()}
                className="px-6 py-3 bg-[#0055a4] hover:bg-[#003d7a] text-white rounded-lg font-semibold transition-colors"
              >
                Download Waybill
              </button>

              <a
                href="mailto:starhillslogistics@gmail.com"
                className="px-6 py-3 border-2 border-[#0055a4] text-[#0055a4] hover:bg-[#0055a4] hover:text-white rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: `Track Shipment ${trackingNumber}`,
                      text: `Track your package: ${trackingNumber}`,
                      url: window.location.href,
                    });
                  }
                }}
                className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-semibold transition-colors"
              >
                Share
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
