"use client";
import React from "react";
import { Trash2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/useCart";
import useCheckout from "@/hooks/useCheckout";

const CartPage = () => {
  const router = useRouter();
  const {
    useGetMyCartItems,
    useDeleteCartMutation,
    useUpdateCartItemMutation,
  } = useCart();
  const { useCreateCheckoutMutation } = useCheckout();

  const { data: cartData, isLoading } = useGetMyCartItems();
  const { mutate: deleteItem, isPending: isDeleting } = useDeleteCartMutation();
  const { mutate: updateQuantity } = useUpdateCartItemMutation();
  const { mutate: checkout, isPending: isCheckingOut } =
    useCreateCheckoutMutation();

  const cart = cartData?.data;
  const items = cart?.items ?? [];

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="h-9 w-24 bg-gray-200 rounded-lg animate-pulse mb-8" />
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-3 px-6 py-6 border-b border-gray-100"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2 flex-1">
                  <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-32 bg-gray-100 rounded animate-pulse" />
                  <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-12 bg-gray-100 rounded animate-pulse" />
                </div>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <div className="h-8 w-24 bg-gray-100 rounded-full animate-pulse" />
                <div className="h-4 w-4 bg-gray-100 rounded animate-pulse ml-auto" />
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-2 px-6 py-6 bg-gray-50">
            <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse mt-1" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="text-[38px] leading-12 font-semibold">Cart</h2>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-20">
          <p className="text-xl font-semibold text-gray-700">
            Your cart is empty
          </p>
          <p className="text-gray-400 text-sm">Add items to get started</p>
          <button
            onClick={() => router.push("/order-content")}
            className="mt-4 px-6 py-3 bg-[#1B3C59] text-white rounded-full text-sm font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Browse Publications
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-0 overflow-hidden border-t mt-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col gap-3 px-6 py-6 ${
                index !== items.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-base font-semibold">{item.name}</p>
                  <p className="text-sm text-[#525866] truncate">
                    {item.websiteUrl}
                  </p>
                  {item.contentType && item.contentType !== "self" && (
                    <p className="text-sm">
                      +{" "}
                      {item.contentType === "personal"
                        ? "Personal Profile"
                        : "Marketing Blast"}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-end shrink-0">
                  <p className="text-base font-semibold">
                    ${item.unitAmount.toFixed(2)}
                  </p>
                  {item.contentTypeFee > 0 && (
                    <p className="text-sm text-[#525866]">
                      +${item.contentTypeFee.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5">
                  <button
                    onClick={() =>
                      updateQuantity({
                        itemId: item.id,
                        data: { quantity: item.quantity - 1 },
                      })
                    }
                    disabled={isDeleting}
                    className="text-gray-400 hover:text-black font-bold text-sm w-4 text-center"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity({
                        itemId: item.id,
                        data: { quantity: item.quantity + 1 },
                      })
                    }
                    disabled={isDeleting}
                    className="text-gray-400 hover:text-black font-bold text-sm w-4 text-center"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => deleteItem(item.id)}
                  disabled={isDeleting}
                  className="ml-auto hover:text-red-500 transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-2 px-6 py-6 border-t">
            <div className="flex items-center justify-between text-sm text-[#525866]">
              <span>Subtotal</span>
              <span>${cart?.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-[#525866]">
              <span>Processing Fee (3%)</span>
              <span>${cart?.processingFee.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-base font-bold mt-1">
              <span>Total</span>
              <span>${cart?.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-5 border-t">
            <p className="text-xs sm:text-sm text-[#525866]">
              Fees and taxes calculated at checkout.
            </p>
            <button
              onClick={() => checkout()}
              disabled={isCheckingOut}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1B3C59] text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition disabled:opacity-50"
            >
              {isCheckingOut ? "Processing..." : "PROCEED TO CHECKOUT"}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
