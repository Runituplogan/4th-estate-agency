import React, { JSX } from "react";
import { Briefcase, Search, Calendar, Globe, User, ShoppingBag, ArrowRight } from "lucide-react";

interface ExpertiseCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md flex flex-col justify-between  md:max-w-[300px]">
      <div className="flex items-center gap-3 text-[#2F4858] justify-between">
        {icon}
        <div className=" rounded-full bg-[#FBF0E5] p-2">
        <ArrowRight className="text-gray-500" size={20} />
        </div>
      </div>
        <h3 className="text-lg  font-baskerville">{title}</h3>
      <p className="text-gray-600 text-xs mt-2">{description}</p>
      <div className="flex justify-end mt-4">
       
      </div>
    </div>
  );
};

export default function DigitalBrandExpertise() {
  return (
    <section className="py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-serif ">Digital Brand Expertise</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-md">
          Digital branding is a comprehensive marketing strategy which involves bespoke organic and paid 
          search, social media, press, and alternative marketing tactics to develop and authenticate a 
          brand across a wide range of avenues.
        </p>
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-5">
        <ExpertiseCard 
          icon={<Briefcase size={24}/>}
          title="Branding"
          description="From logo and web design to brand ethos, expert guidance on how to reach your audience and convert them into customers."
        />
        <ExpertiseCard 
          icon={<Search size={24}/>}
          title="SEO"
          description="Tailored to your site's structure for better crawling and indexing. Beat the competition."
        />
        <ExpertiseCard 
          icon={<Calendar size={24}/>}
          title="Paid Media"
          description="Help with the entire process, including budget, keyword analysis, and retargeting your Google, Meta & Amazon Ads."
        />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
        <ExpertiseCard 
          icon={<Globe size={24} />}
          title="Press"
          description="Top-tier press features through our direct-to-publisher relationships."
        />
        <ExpertiseCard 
          icon={<User size={24} />}
          title="Social"
          description="Maintenance and growth of a social presence, along with team development."
        />
        <ExpertiseCard 
          icon={<ShoppingBag size={24} />}
          title="Web Development"
          description="Take your E-commerce strategy to the next level with expert campaign management and optimization."
        />
        </div>
        
      </div>
    </section>
  );
}
