"use client";
import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import CheckoutService from "@/service/checkoutService";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const CheckoutSuccessPage = () => {
  return (
    <Suspense fallback={<Loader2 className="animate-spin" />}>
      <CheckoutSuccess />
    </Suspense>
  );
};

const CheckoutSuccess = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get("session_id") ?? "";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["checkout-session", sessionId],
    queryFn: async () => {
      const response = await CheckoutService.getCheckoutSession(sessionId);
      return response.data;
    },
    enabled: !!sessionId,
    retry: false,
  });

  const session = data?.data;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white border border-gray-200 rounded-2xl p-10 max-w-md w-full text-center shadow-sm">
        {isLoading && (
          <>
            <div className="flex justify-center text-5xl mb-4 animate-pulse">
              <Image
                src={"/icons/processing.svg"}
                alt="confirming payment"
                width={500}
                height={10}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#1B3C59] mb-3">
              Confirming your payment...
            </h2>
            <p className="text-gray-500 text-base">
              Please wait while we confirm your order.
            </p>
          </>
        )}

        {!isLoading && !isError && session?.paymentStatus === "paid" && (
          <>
            <div className="flex justify-center text-5xl mb-4">
              <Image
                src={"/icons/success.svg"}
                alt="confirmed payment"
                width={200}
                height={10}
              />
            </div>
            <h2 className="text-2xl font-bold mb-3">Payment Successful!</h2>
            <p className="text-gray-500 text-base mb-2">
              Your order has been placed successfully.
            </p>
            <p className="text-gray-400 text-sm mb-8">
              A confirmation email has been sent to your inbox.
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-8 text-left">
              <p className="text-sm text-gray-500 mb-1">Amount Paid</p>
              <p className="text-2xl font-bold text-[#1B3C59]">
                ${session.amountTotal?.toFixed(2)}{" "}
                <span className="text-sm font-normal text-gray-400">
                  {session.currency?.toUpperCase()}
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.push("/orders")}
                className="w-full bg-[#1B3C59] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer"
              >
                View My Orders
              </button>
              <button
                onClick={() => router.push("/order-content")}
                className="w-full border border-gray-200 text-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
              >
                Back to Dashboard
              </button>
            </div>
          </>
        )}

        {!isLoading && (isError || session?.paymentStatus !== "paid") && (
          <>
            <div className="flex justify-center text-5xl mb-4">
              <Image
                src={"/icons/failed.svg"}
                alt="failed payment"
                width={200}
                height={10}
              />
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-3">
              Payment Failed
            </h2>
            <p className="text-gray-500 text-base mb-8">
              Something went wrong with your payment. Your cart has not been
              cleared — please try again.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.push("/cart")}
                className="w-full bg-[#1B3C59] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Back to Cart
              </button>
              <button
                onClick={() => router.push("/dashboard")}
                className="w-full border border-gray-200 text-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Back to Dashboard
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
