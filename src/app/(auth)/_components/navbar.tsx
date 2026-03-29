"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isLogin = pathname === "/login";
  const isRegister = pathname === "/register";

  let href = "/login";
  let label = "SIGN IN";

  if (isLogin) {
    href = "/register";
    label = "SIGN UP";
  } else if (isRegister) {
    href = "/login";
    label = "SIGN IN";
  }
  return (
    <nav className="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/43-logo.png"
          alt="4E AGENCY"
          width={120}
          height={47}
          className="w-25 sm:w-30 h-auto"
        />
      </Link>

      <div className="flex items-center gap-2 sm:gap-4 text-sm whitespace-nowrap">
        <p className="hidden sm:block">
          {isLogin ? "Don't have an account yet?" : "Already have an account?"}
        </p>

        <Link
          href={href}
          className="flex items-center gap-1 font-bold transition text-[#1B3C59]"
        >
          <ArrowUpRight strokeWidth={1.5} size={18} />
          {label}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
