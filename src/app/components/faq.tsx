"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";


const faqData = [
    { question: "How much do local SEO services cost?", answer: "SEO pricing varies based on scope and location." },
    { question: "How do I find the best content marketing agency?", answer: "Look for agencies with a proven track record." },
    { question: "What is the concept of content marketing?", answer: "Content marketing focuses on valuable, relevant content." },
    { question: "What is the content strategy in digital marketing?", answer: "It involves planning, creating, and distributing content." },
  ];


interface FAQItem {
    question: string;
    answer: string;
  }
  
  interface FAQProps {
    items?: FAQItem[];
  }
  
export default function Faq({ items=faqData }: FAQProps){
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
        <div className="md:m-16 m-8 animate-fade-up" >
            <div className="flex flex-col justify-center items-center">
                    <h1 className="font-baskerville md:text-5xl text-2xl text-center max-w-2xl leading-relaxed">Frequently Asked Question</h1>
                </div>
                <div className="p- mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="border-b border-gray-300">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center py-4 text-left text-gray-900 font-medium"
                        >
                            {item.question}
                            <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                                openIndex === index ? "rotate-180" : ""
                            }`}
                            />
                        </button>
                        {openIndex === index && (
                            <p className="text-gray-700 pb-4 text-sm">{item.answer}</p>
                        )}
                </div>
      ))}
            </div>
        </div>
    )
}