import React from "react";
import Image from "next/image";

const partners = [
  { name: "Google", src: "/images/paterner1.png" },
  { name: "Ahrefs", src: "/images/paterner2.png" },
  { name: "SEMRush", src: "/images/paterner3.png" },
  { name: "Adobe", src: "/images/paterner4.png" },
  { name: "Shopify", src: "/images/paterner5.png" },
  { name: "Buffer", src: "/images/paterner6.png" },
  { name: "Klaviyo", src: "/images/paterner7.png" },
  { name: "HubSpot", src: "/images/paterner8.png" },
  { name: "Recharge", src: "/images/paterner9.png" },
  { name: "Stripe", src: "/images/paterner10.png" },
];

export default function OurPartners() {
  return (
    <section className="py-10 px-6 animate-fade-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-baskerville text-center md:text-left">Our Partners</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="w-32">
            <Image src={partner.src} alt={partner.name} width={120} height={50} className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}