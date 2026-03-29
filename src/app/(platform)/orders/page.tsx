"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useOrder from "@/hooks/useOrder";

const OrderPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { useGetMyOrders } = useOrder();
  const { data: ordersData, isLoading } = useGetMyOrders(undefined, page, 10);

  const orders = ordersData?.data?.data ?? [];
  const meta = ordersData?.data?.meta;

  if (isLoading) {
    return (
      <div className="">
        <div className="h-9 w-32 bg-gray-200 rounded-lg animate-pulse mb-2" />
        <div className="h-4 w-48 bg-gray-100 rounded animate-pulse mb-8" />
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-3 px-6 py-4 border-b border-gray-100 bg-gray-50">
            {["Date Purchased", "Services", "Price"].map((h) => (
              <div
                key={h}
                className="h-3 w-24 bg-gray-200 rounded animate-pulse"
              />
            ))}
          </div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col sm:grid sm:grid-cols-3 px-4 sm:px-6 py-4 border-b border-gray-100 gap-2 sm:gap-0"
            >
              <div className="h-3 w-32 bg-gray-100 rounded animate-pulse" />
              <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />
              <div className="h-3 w-16 bg-gray-100 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="text-[38px] leading-12 font-semibold">Orders</h2>
      <h2 className="text-base text-[#777777] mt-1 mb-6 sm:mb-8">
        Showing {orders.length} of{" "}
        <span className="font-semibold text-black">
          {meta?.total ?? 0} results
        </span>
      </h2>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-16 sm:py-20 border border-gray-200 rounded-2xl px-4 text-center">
          <p className="text-lg sm:text-2xl font-semibold">No orders yet</p>
          <p className="text-gray-500 text-base">Your orders will appear here</p>
          <button
            onClick={() => router.push("/order-content")}
            className="mt-4 px-6 py-3 bg-[#1B3C59] text-white rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            Browse Publications
          </button>
        </div>
      ) : (
        <>
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="hidden sm:grid grid-cols-3 px-6 py-4 border-b border-gray-100 bg-[#F6F8FA] text-[#525866]">
              <p className="text-sm">Date Purchased</p>
              <p className="text-sm">Services</p>
              <p className="text-sm">Price</p>
            </div>

            {orders.map((order, index) => (
              <div
                key={order.id}
                onClick={() => router.push(`/orders/order-details/${order.id}`)}
                className={`cursor-pointer hover:bg-gray-50 transition px-4 sm:px-6 py-4 ${
                  index !== orders.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex items-start justify-between sm:hidden gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {order.items?.[0]?.logoUrl ? (
                      <img
                        src={order.items[0].logoUrl}
                        alt={order.items[0].name}
                        className="w-7 h-7 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-gray-200 shrink-0" />
                    )}
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <p className="text-sm truncate">
                        {order.items?.[0]?.name ?? "—"}
                        {order.items?.length > 1 && (
                          <span className="text-gray-400 text-xs ml-1">
                            +{order.items.length - 1} more
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-gray-400">
                        {new Date(order.createdAt).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 shrink-0">
                    ${order.amountTotal.toFixed(2)}
                  </p>
                </div>

                <div className="hidden sm:grid grid-cols-3 items-center">
                  <p className="text-sm">
                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>

                  <div className="flex items-center gap-2 min-w-0">
                    {order.items?.[0]?.logoUrl ? (
                      <img
                        src={order.items[0].logoUrl}
                        alt={order.items[0].name}
                        className="w-6 h-6 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-gray-200 shrink-0" />
                    )}
                    <p className="text-sm truncate">
                      {order.items?.[0]?.name ?? "—"}
                      {order.items?.length > 1 && (
                        <span className="text-gray-600 text-xs ml-1">
                          +{order.items.length - 1} more
                        </span>
                      )}
                    </p>
                  </div>

                  <p className="text-sm">
                    ${order.amountTotal.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {meta && meta.totalPages > 1 && (
            <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6 sm:mt-8 flex-wrap">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={!meta.hasPreviousPage}
                className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-800 disabled:opacity-30 transition flex items-center gap-1"
              >
                ← <span className="hidden sm:inline">Previous</span>
              </button>

              {[...Array(meta.totalPages)].map((_, i) => {
                const pageNum = i + 1;
                if (
                  pageNum === 1 ||
                  pageNum === meta.totalPages ||
                  Math.abs(pageNum - page) <= 1
                ) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full text-sm font-semibold transition ${
                        page === pageNum
                          ? "bg-[#1B3C59] text-white"
                          : "text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                }
                if (Math.abs(pageNum - page) === 2) {
                  return (
                    <span key={pageNum} className="text-gray-400 text-sm">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
                disabled={!meta.hasNextPage}
                className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-800 disabled:opacity-30 transition flex items-center gap-1"
              >
                <span className="hidden sm:inline">Next</span> →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OrderPage;
