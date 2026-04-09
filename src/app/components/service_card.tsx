import { motion } from "framer-motion";
import { JSX } from "react";

interface ServicesCardProps {
  index?:number,
  icon: JSX.Element;
  name: string;
  description: string;
  bgColor?: string;
}

const ServiceCard: React.FC<ServicesCardProps> = ({
  icon, 
  name,
  description,
  bgColor = "bg-white",
  index =0
}) => {
  return (
    <motion.div
    key={index}
    variants={{
      hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
      visible: { opacity: 1, x: 0 },
    }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
      className={`${bgColor} text-left py-[2rem] px-[2.5rem] w-full  flex flex-col gap-[8px]  rounded-[8px] `}
    >
      <i className="flex justify-center items-center size-[2.5rem] lg:size-[4.25rem] ">
        {icon}
      </i>
      <h2 className=" text-[1.5rem] md:text-[2.25rem] leading-[2.25rem] tracking-[-0.3%]  align-middle font-baskerville ">
        {name}
      </h2>

      <p className=" text-[0.875rem] leading-[1.5rem] md:text-sm md:leading-[1.5rem] align-middle tracking-[-0.3%] text-[#66717B] font-manrope ">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
