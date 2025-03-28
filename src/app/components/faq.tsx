"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Wrapper from "./wrapper";
import { FAQItem } from "../types";


interface FAQProps {
  items?: FAQItem[];
}

export default function Faq({ items = [] }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className="md:py-16 py-8 animate-fade-up flex flex-col gap-2">
      <h2 className="md:text-center text-left text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville xl:leading-[140%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal">
        Frequently Asked Question
      </h2>

      <div className="w-full">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left text-gray-900 font-medium text-[1rem] md:text-[1.5rem] font-baskerville"
            >
              {item.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="text-[#393b3b] pb-4 font-baskerville text-md">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
