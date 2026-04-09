import React from "react";
import Image from "next/image";
import Wrapper from "./wrapper";
import { Section3 } from "../types";
import { motion } from "framer-motion";

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

const OurPartners: React.FC<OurPartnersProps> = ({ data }) => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Partner logo animation variants
  const partnerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  // Title animation variants
  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  return (
    <Wrapper className="animate-fade-up">
      <div>
        <div className="flex flex-col">
          <motion.h2 
            className="text-3xl md:text-6xl font-baskerville mb-[2.2rem] text-center md:text-left"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {data?.content.title}
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-[2.4rem]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data?.content.content.images.map((partner, index) => (
              <motion.div 
                key={index} 
                className="w-full max-w-[165px] flex justify-center"
                variants={partnerVariants}
                whileHover="hover"
              >
                <Image
                  src={partner}
                  alt={`partner Image-${index}`}
                  width={200} 
                  height={80}
                  className="object-contain w-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};
export default OurPartners