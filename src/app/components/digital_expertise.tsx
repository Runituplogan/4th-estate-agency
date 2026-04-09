import React, { JSX } from "react";
import {
  Briefcase,
  Search,
  Calendar,
  Globe,
  User,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import {
  BrandIcon,
  PaidMediaIcon,
  PressIcon,
  SeoIcon,
  SocialIcon,
  WebDevelopment,
} from "./icons/homePage";
import Link from "next/link";
import Wrapper from "./wrapper";
import { Section1, Section2 } from "../types";
import { motion } from "framer-motion";

interface ExpertiseCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  route: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon,
  title,
  description,
  route,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="w-full bg-[#E0E0E0] p-6 rounded-xl shadow-md flex flex-col justify-between md:w-1/3"
    >
      <div className="flex items-center gap-3 text-[#2F4858] justify-between">
        <div className="mb-3 w-[4px]">{icon}</div>
        <div className="rounded-full bg-[#FBF0E5] p-2">
          <Link href={route}>
            <ArrowRight className="text-gray-500" size={20} />
          </Link>
        </div>
      </div>
      <h3 className="text-lg font-semibold font-baskerville">{title}</h3>
      <p className="text-gray-600 text-md leading-relaxed mt-2">{description}</p>
    </motion.div>
  );
};

interface DigitalBrandExpertiseProps{
  data:Section2;
}
const DigitalBrandExpertise:React.FC<DigitalBrandExpertiseProps>=({data}) =>{
  return (
    <section className=" animate-fade-up">
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-10 px-4"
      >
      <h2 className="text-[32px] leading-[1.2] md:text-7xl font-serif mb-3">
        {/* Digital Brand <br className="md:hidden inline"/> Expertise */}
        {data?.content[0].title}
      </h2>
      <p className="text-gray-700 mt-4 leading-[1.6] md:max-w-3xl mx-auto text-base md:text-md max-w-[414px]">
         {data?.content[0].description}
      </p>
    </motion.div>
      <Wrapper>
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-5"
        >
          <ExpertiseCard
            icon={<BrandIcon />}
            title={`${data?.content[0].subContent[0].title}`}
            description={`${data?.content[0].subContent[0].description}`}
            route="/services/branding"
          />
          <ExpertiseCard
            icon={<SeoIcon />}
            title={`${data?.content[0].subContent[1].title}`}
            description={`${data?.content[0].subContent[1].description}`}
            route="/services/seo"
          />
          <ExpertiseCard
            icon={<PaidMediaIcon />}
            title={`${data?.content[0].subContent[2].title}`}
            description={`${data?.content[0].subContent[2].description}`}
            route="/services/paid-media"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.2, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6"
        >
          <ExpertiseCard
            icon={<PressIcon />}
            title={`${data?.content[0].subContent[3].title}`}
            description={`${data?.content[0].subContent[3].description}`}
            route="/services/press"
          />
          <ExpertiseCard
            route="/services/social-media"
            icon={<SocialIcon />}
            title={`${data?.content[0].subContent[4].title}`}
            description={`${data?.content[0].subContent[4].description}`}
          />
          <ExpertiseCard
            route="/services/website"
            icon={<WebDevelopment />}
            title={`${data?.content[0].subContent[5].title}`}
            description={`${data?.content[0].subContent[5].description}`}
          />
        </motion.div>
      </Wrapper>
    </section>
  );
}
export default DigitalBrandExpertise;