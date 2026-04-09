"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Button({
  className,
  path,
  children,
}: {
  path?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <button
      className={`px-6 py-[1rem]  rounded-[0.75rem]  text-[1rem] font-manrope font-semibold flex gap-[0.5rem] ${className}`}
      onClick={() => router.push(path ? path : "/contact")}
    >
      {children}
      <ArrowUpRight size={20} />
    </button>
  );
}
