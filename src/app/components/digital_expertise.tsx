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
    <div className="w-full bg-white p-6 rounded-xl shadow-md flex flex-col justify-between md:w-1/3">
      <div className="flex items-center gap-3 text-[#2F4858] justify-between">
        <div className="mb-3 w-[4px]">{icon}</div>
        <div className="rounded-full bg-[#FBF0E5] p-2">
          <Link href={route}>
            <ArrowRight className="text-gray-500" size={20} />
          </Link>
        </div>
      </div>
      <h3 className="text-lg font-semibold font-baskerville">{title}</h3>
      <p className="text-gray-600 text-md leading-relaxed mt-2">
        {description}
      </p>
      <div className="flex justify-end mt-4"></div>
    </div>
  );
};

export default function DigitalBrandExpertise() {
  return (
    <section className=" animate-fade-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-7xl font-serif mb-2">
          Digital Brand Expertise
        </h2>
        <p className="text-gray-600 mt-4 leading-loose max-w-3xl mx-auto text-md">
          Digital branding is a comprehensive marketing strategy which involves
          bespoke organic and paid search, social media, press, and alternative
          marketing tactics to develop and authenticate a brand across a wide
          range of avenues.
        </p>
      </div>

      <Wrapper>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-5 animate-fade-right">
          <ExpertiseCard
            icon={<BrandIcon />}
            title="Branding"
            description="From logo and web design to brand ethos, expert guidance on how to reach your audience and convert them into customers."
            route="/services/branding"
          />
          <ExpertiseCard
            icon={<SeoIcon />}
            title="SEO"
            description="Tailored to your site's structure for better crawling and indexing. Beat the competition."
            route="/services/seo"
          />
          <ExpertiseCard
            icon={<PaidMediaIcon />}
            title="Paid Media"
            description="Help with the entire process, including budget, keyword analysis, and retargeting your Google, Meta & Amazon Ads."
            route="/services/paid-media"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 animate-fade-left">
          <ExpertiseCard
            icon={<PressIcon />}
            title="Press"
            route="/services/press"
            description="Top-tier press features through our direct-to-publisher relationships."
          />
          <ExpertiseCard
            route="/services/social-media"
            icon={<SocialIcon />}
            title="Social"
            description="Maintenance and growth of a social presence, along with team development."
          />
          <ExpertiseCard
            route="/services/website"
            icon={<WebDevelopment />}
            title="Web Development"
            description="Take your E-commerce strategy to the next level with expert campaign management and optimization."
          />
        </div>
      </Wrapper>
    </section>
  );
}
