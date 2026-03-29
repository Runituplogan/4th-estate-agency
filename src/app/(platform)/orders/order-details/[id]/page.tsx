"use client";
import React, { useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import useOrder from "@/hooks/useOrder";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const OrderDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const orderId = params?.id as string;
  const invoiceRef = useRef<HTMLDivElement>(null);

  const { useGetMyOrdersById } = useOrder();
  const { data: orderData, isLoading } = useGetMyOrdersById(orderId);

  const order = orderData?.data;
  const shortId = order?.id.slice(0, 8).toUpperCase();

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-8" />
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6" />
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />
              <div className="h-3 w-32 bg-gray-100 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <p className="">Order not found.</p>
        <button
          onClick={() => router.push("/orders")}
          className="mt-4 px-6 py-3 bg-[#1B3C59] text-white rounded-full text-sm font-semibold hover:opacity-90 transition"
        >
          Back to Orders
        </button>
      </div>
    );
  }

  const handleDownloadInvoice = () => {
    if (!order) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    let y = 20;

    pdf.setFontSize(18);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(27, 60, 89);
    pdf.text("4E | AGENCY", 20, y);

    y += 10;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(150, 150, 150);
    pdf.text("Invoice", 20, y);

    y += 6;
    pdf.setDrawColor(229, 231, 235);
    pdf.line(20, y, pageWidth - 20, y);

    y += 10;
    pdf.setFontSize(10);
    pdf.setTextColor(100, 100, 100);

    const meta = [
      ["Order ID", shortId ?? ""],
      ["Items", order.items.length.toString()],
      [
        "Date",
        new Date(order.paidAt ?? order.createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      ],
      ...(order.payments?.[0]?.cardBrand
        ? [
            [
              "Payment",
              `${order.payments[0].cardBrand} •••• ${order.payments[0].last4 ?? ""}`,
            ],
          ]
        : []),
    ];

    meta.forEach(([label, value]) => {
      pdf.setTextColor(150, 150, 150);
      pdf.text(label, 20, y);
      pdf.setTextColor(30, 30, 30);
      pdf.text(value, 100, y);
      y += 7;
    });

    y += 3;
    pdf.line(20, y, pageWidth - 20, y);

    y += 10;
    pdf.setFontSize(9);
    pdf.setTextColor(150, 150, 150);
    pdf.setFont("helvetica", "bold");
    pdf.text("ITEM DETAILS", 20, y);

    y += 8;
    pdf.setFont("helvetica", "normal");

    order.items.forEach((item) => {
      pdf.setTextColor(30, 30, 30);
      pdf.setFontSize(10);
      pdf.text(`${item.name} x${item.quantity}`, 20, y);
      pdf.text(`$${item.lineTotal.toFixed(2)}`, pageWidth - 20, y, {
        align: "right",
      });

      y += 6;
      pdf.setFontSize(9);
      pdf.setTextColor(150, 150, 150);
      pdf.text(item.websiteUrl, 20, y);

      if (item.contentType && item.contentType !== "self") {
        y += 5;
        pdf.text(
          `+ ${item.contentType === "personal" ? "Personal Profile" : "Marketing Blast"} ($${item.contentTypeFee.toFixed(2)})`,
          20,
          y,
        );
      }

      y += 8;
    });

    pdf.line(20, y, pageWidth - 20, y);
    y += 8;

    const totals = [
      ["Subtotal", `$${order.subtotal.toFixed(2)}`],
      ["Processing Fee (3%)", `$${order.processingFee.toFixed(2)}`],
    ];

    totals.forEach(([label, value]) => {
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text(label, 20, y);
      pdf.text(value, pageWidth - 20, y, { align: "right" });
      y += 7;
    });

    y += 2;
    pdf.setDrawColor(229, 231, 235);
    pdf.line(20, y, pageWidth - 20, y);
    y += 8;
    pdf.setFontSize(13);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(27, 60, 89);
    pdf.text("Total", 20, y);
    pdf.text(`$${order.amountTotal.toFixed(2)}`, pageWidth - 20, y, {
      align: "right",
    });

    y += 20;
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(180, 180, 180);
    pdf.text("Thank you for your business — 4E Agency", pageWidth / 2, y, {
      align: "center",
    });

    pdf.save(`invoice-${shortId}.pdf`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <button
        onClick={() => router.push("/orders")}
        className="flex items-center gap-2 text-sm transition mb-6 cursor-pointer"
      >
        <ArrowLeft size={14} />
        BACK TO ORDERS
      </button>

      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <h2 className="text-2xl sm:text-[25px] font-bold text-gray-900 flex items-center gap-3">
          Order <p className="font-normal text-xl">{shortId}</p>
        </h2>
        <button
          onClick={handleDownloadInvoice}
          className="flex items-center gap-2 bg-[#1B3C59] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition cursor-pointer"
        >
          <Download size={14} />
          DOWNLOAD INVOICE
        </button>
      </div>

      <div
        ref={invoiceRef}
        className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
      >
        <div className="px-6 sm:px-8 py-6 border-b border-gray-100 flex items-center justify-between">
          <p className="text-lg font-bold text-[#1B3C59]">4E | AGENCY</p>
        </div>

        <div className="px-6 sm:px-8 py-6 border-t flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm text-[#525866] w-36 shrink-0">Order ID</p>
            <p className="text-sm font-medium text-right">{shortId}</p>
          </div>
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm text-[#525866] w-36 shrink-0">Items</p>
            <p className="text-sm font-medium text-right">
              {order.items.length}
            </p>
          </div>
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm text-[#525866] w-36 shrink-0">Date</p>
            <p className="text-sm font-medium text-right">
              {new Date(order.paidAt ?? order.createdAt).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                },
              )}
            </p>
          </div>
          {order.payments?.[0] && (
            <>
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm text-[#525866] w-36 shrink-0">Payment</p>
                <p className="text-sm font-medium text-right capitalize">
                  {order.payments[0].cardBrand ??
                    order.payments[0].paymentMethod ??
                    "—"}
                  {order.payments[0].last4 &&
                    ` •••• ${order.payments[0].last4}`}
                </p>
              </div>
            </>
          )}
        </div>

        <div className="px-6 sm:px-8 py-6 border-t">
          <p className="text-xs text-[#525866] tracking-widest mb-4">
            Item Details
          </p>
          <div className="flex flex-col gap-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3 min-w-0">
                  {item.logoUrl ? (
                    <img
                      src={item.logoUrl}
                      alt={item.name}
                      className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0 mt-0.5" />
                  )}
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <p className="text-sm font-medium text-gray-800">
                      {item.name} x{item.quantity}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {item.websiteUrl}
                    </p>
                    {item.contentType && item.contentType !== "self" && (
                      <p className="text-xs text-gray-500">
                        +{" "}
                        {item.contentType === "personal"
                          ? "Personal Profile"
                          : "Marketing Blast"}{" "}
                        (${item.contentTypeFee.toFixed(2)})
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-sm font-semibold shrink-0">
                  ${item.lineTotal.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 sm:px-8 py-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm text-[#525866]">
              <span>Subtotal</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-[#525866]">
              <span>Processing Fee (3%)</span>
              <span>${order.processingFee.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-xl font-bold mt-2 pt-3">
              <span>Total</span>
              <span>${order.amountTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
