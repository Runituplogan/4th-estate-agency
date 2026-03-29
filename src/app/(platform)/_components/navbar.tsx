"use client";
import React, { useEffect, useState } from "react";
import {
  ClipboardList,
  Layers2,
  Menu,
  Megaphone,
  ShoppingCart,
  UserRound,
  Trash2,
  ArrowRight,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import useCheckout from "@/hooks/useCheckout";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const { logOut } = useAuth();
  const {
    useGetMyCartItems,
    useDeleteCartMutation,
    useUpdateCartItemMutation,
  } = useCart();
  const { data: cartData, isLoading } = useGetMyCartItems();
  const { mutate: deleteItem, isPending: isDeleting } = useDeleteCartMutation();
  const { useCreateCheckoutMutation } = useCheckout();
  const { mutate: checkout, isPending: isCheckingOut } =
    useCreateCheckoutMutation();
  const { mutate: updateQuantity } = useUpdateCartItemMutation();

  const cart = cartData?.data;
  const items = cart?.items ?? [];

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const navItems = [
    {
      id: "order-content",
      label: "ORDER CONTENT",
      icon: <Layers2 size={20} strokeWidth={2} />,
      href: "/order-content",
    },
    // {
    //   id: "my-campaigns",
    //   label: "MY CAMPAIGNS",
    //   icon: <Megaphone size={20} strokeWidth={2.5} />,
    //   href: "/campaigns",
    // },
    {
      id: "orders",
      label: "ORDERS",
      icon: <ClipboardList size={20} strokeWidth={2} />,
      href: "/orders",
    },
  ];

  return (
    <nav className="border-b border-gray-200 px-4  py-6 flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Image
            src="/images/43-logo.png"
            alt="4E AGENCY"
            width={120}
            height={20}
          />
        </div>

        <div className="hidden lg:flex items-center bg-white border border-gray-200 rounded-full gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs tracking-wide transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-[#1e3a5f] text-white shadow-md"
                    : "hover:text-gray-800"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="relative flex items-center gap-2 px-4 py-4 rounded-2xl shadow-lg bg-white">
                <UserRound size={20} strokeWidth={2.5} />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-80 rounded-2xl p-0 overflow-hidden shadow-lg"
            >
              <div className="flex items-center gap-3 px-5 py-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  <UserRound
                    size={20}
                    strokeWidth={1.5}
                    className="text-gray-500"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">
                    {email || "No email"}
                  </span>
                </div>
              </div>

              <DropdownMenuSeparator className="my-0" />

              <DropdownMenuItem
                onClick={() => logOut.mutate()}
                className="flex items-center gap-3 px-5 py-4 text-base text-gray-800 cursor-pointer hover:bg-gray-50"
              >
                <LogOut size={20} strokeWidth={1.5} className="text-gray-700" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
              <button className="relative flex items-center gap-2 px-4 py-4 rounded-full border border-gray-200 bg-white font-bold text-sm tracking-wide transition-all duration-150">
                <ShoppingCart size={20} strokeWidth={2.5} />
                {cart && items.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#1B3C59] text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {items.length}
                  </span>
                )}
              </button>
            </PopoverTrigger>

            <PopoverContent
              className="w-[75vw] sm:w-100 rounded-3xl p-0"
              align="end"
            >
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <h3 className="text-lg font-bold">
                  Cart ({items.length ?? 0})
                </h3>
              </div>

              <div className="border-t border-gray-200 mx-6" />

              {isLoading && (
                <div className="flex items-center justify-center py-10">
                  <p className="text-gray-400 text-sm">Loading cart...</p>
                </div>
              )}

              {!isLoading && items.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-3 py-10">
                  <h3 className="text-xl font-serif font-semibold">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500">Add items to get started</p>
                </div>
              )}

              {!isLoading && items.length > 0 && (
                <>
                  <div className="flex flex-col divide-y divide-gray-100 max-h-80 overflow-y-auto">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col gap-1 px-6 py-4"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 leading-snug">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                              {item.websiteUrl}
                            </p>
                            {item.contentType &&
                              item.contentType !== "self" && (
                                <p className="text-xs text-gray-500">
                                  +{" "}
                                  {item.contentType === "personal"
                                    ? "Personal Profile"
                                    : "Marketing Blast"}
                                </p>
                              )}
                          </div>
                          <button
                            onClick={() => deleteItem(item.id)}
                            disabled={isDeleting}
                            className="text-gray-400 hover:text-red-500 transition shrink-0 mt-0.5"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1">
                            <button className="text-gray-400 hover:text-black font-bold text-sm">
                              -
                            </button>
                            <span className="text-sm font-semibold w-4 text-center">
                              {item.quantity}
                            </span>
                            <button className="text-gray-400 hover:text-black font-bold text-sm">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-black mx-6" />

                  <div className="flex flex-col gap-1 px-6 py-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>Subtotal</span>
                      <span className="font-bold">
                        ${cart?.subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Processing Fee (3%)</span>
                      <span className="font-bold">
                        ${cart?.processingFee.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-base mt-1">
                      <span>Order Total</span>
                      <span className="font-bold">
                        ${cart?.total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 px-6 pb-6">
                    <button
                      onClick={() => checkout()}
                      disabled={isCheckingOut}
                      className="w-full flex items-center justify-center gap-2 bg-[#1B3C59] text-white py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition"
                    >
                      {isCheckingOut ? "Processing..." : "PROCEED TO CHECKOUT"}
                      <ArrowRight size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setOpen(false);
                        router.push("/cart");
                      }}
                      className="w-full text-center text-sm font-semibold hover:text-gray-800 transition py-2"
                    >
                      VIEW ALL
                    </button>
                  </div>
                </>
              )}
            </PopoverContent>
          </Popover> */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
              <button className="relative flex items-center gap-2 px-4 py-4 rounded-2xl shadow-lg bg-white font-bold text-sm tracking-wide transition-all duration-150">
                <ShoppingCart size={20} strokeWidth={2.5} />
                {cart && items.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#1B3C59] text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {items.length}
                  </span>
                )}
              </button>
            </PopoverTrigger>

            <PopoverContent
              className="w-[75vw] sm:w-80 rounded-3xl p-0"
              align="end"
            >
              <div className="flex items-center justify-between px-4 pt-4 pb-3">
                <h3 className="text-base font-bold">
                  Cart ({items.length ?? 0})
                </h3>
              </div>

              <div className="border-t border-gray-200 mx-4" />

              {isLoading && (
                <div className="flex items-center justify-center py-10">
                  <p className="text-gray-400 text-sm">Loading cart...</p>
                </div>
              )}

              {!isLoading && items.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-3 py-10">
                  <h3 className="text-xl font-serif font-semibold">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500">Add items to get started</p>
                </div>
              )}

              {!isLoading && items.length > 0 && (
                <>
                  <div className="flex flex-col divide-y divide-gray-100 max-h-60 overflow-y-auto">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col gap-1 px-4 py-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 leading-snug">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                              {item.websiteUrl}
                            </p>
                            {item.contentType &&
                              item.contentType !== "self" && (
                                <p className="text-xs text-gray-500">
                                  +{" "}
                                  {item.contentType === "personal"
                                    ? "Personal Profile"
                                    : "Marketing Blast"}
                                </p>
                              )}
                          </div>
                          <button
                            onClick={() => deleteItem(item.id)}
                            disabled={isDeleting}
                            className="text-gray-400 hover:text-red-500 transition shrink-0 mt-0.5"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1">
                            <button
                              onClick={() =>
                                updateQuantity({
                                  itemId: item.id,
                                  data: { quantity: item.quantity - 1 },
                                })
                              }
                              disabled={isDeleting}
                              className="text-gray-400 hover:text-black font-bold text-sm"
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
                              className="text-gray-400 hover:text-black font-bold text-sm"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-black mx-4" />

                  <div className="flex flex-col gap-1 px-4 py-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Subtotal</span>
                      <span className="font-bold">
                        ${cart?.subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Processing Fee (3%)</span>
                      <span className="font-bold">
                        ${cart?.processingFee.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-base mt-1">
                      <span>Order Total</span>
                      <span className="font-bold">
                        ${cart?.total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 px-4 pb-4">
                    <button
                      onClick={() => checkout()}
                      disabled={isCheckingOut}
                      className="w-full flex items-center justify-center gap-2 bg-[#1B3C59] text-white py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition"
                    >
                      {isCheckingOut ? "Processing..." : "PROCEED TO CHECKOUT"}
                      <ArrowRight size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setOpen(false);
                        router.push("/cart");
                      }}
                      className="w-full text-center text-sm font-semibold hover:text-gray-800 transition py-1"
                    >
                      VIEW ALL
                    </button>
                  </div>
                </>
              )}
            </PopoverContent>
          </Popover>
          <div className="lg:hidden">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Menu size={20} />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader />
                <div className="flex flex-col gap-2 px-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={`flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold transition-all duration-150 ${
                          isActive ? "bg-[#1B3C59] text-white" : ""
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
