import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BrandBoost() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <Image 
        src="/images/ocean.png" // Replace with your actual image path
        alt="Ocean waves"
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-3xl md:text-7xl font-baskerville">Ready For a Brand Boost?</h2>
        
        <a 
          href="#" 
          className="mt-6 bg-white text-black font-medium px-6 py-3 rounded-lg flex items-center space-x-2 shadow-md hover:bg-gray-100 transition"
        >
          <span>Book a consultation</span>
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
