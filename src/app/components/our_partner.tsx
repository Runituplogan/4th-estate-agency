import React from "react";
import Image from "next/image";
import Wrapper from "./wrapper";
import { Section3 } from "../types";

const partners = [
  { name: "Google", src: "/images/paterner3.png" },
  { name: "Ahrefs", src: "/images/paterner7.png" },
  { name: "SEMRush", src: "/images/paterner9.png" },
  { name: "Adobe", src: "/images/paterner2.png" },
  { name: "Shopify", src: "/images/paterner4.png" },
  { name: "Buffer", src: "/images/paterner6.png" },
  { name: "Klaviyo", src: "/images/paterner1.png" },
  { name: "HubSpot", src: "/images/paterner5.png" },
  { name: "Recharge", src: "/images/paterner8.png" },
  { name: "Stripe", src: "/images/paterner10.png" },
];
interface OurPartnersProps{
  data:Section3,
}
const OurPartners:React.FC<OurPartnersProps>=({data})=> {
  return (
    <Wrapper className="animate-fade-up">
      <div>
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-6xl font-baskerville mb-[2.2rem] text-center md:text-left">
          {data?.content.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-[2.4rem]">
            {data?.content.content.images.map((partner,index) => (
              <div key={index} className="w-full max-w-[165px] flex justify-center">
                <Image
                  src={partner}
                  alt={`partner Image-${index}`}
                  width={200} 
                  height={80}
                  className="object-contain w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default OurPartners