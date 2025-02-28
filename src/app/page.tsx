"use client"
import Image from "next/image";
import HeroLayout from "./components/hero_section";
import { ArrowUpRight } from "lucide-react";
import Card from "./components/card";
import DigitalBrandExpertise from "./components/digital_expertise";
import OurPartners from "./components/our_partner";
import BlogPosts from "./components/blog_post";
import BrandBoost from "./components/brand_boost";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
    <HeroLayout backgroundImage="/images/bg_hero1.png">
      <h1 className="text-3xl md:text-6xl  font-baskerville">An Agency That Gets Your Brand What it Deserves</h1>
      <button className="mt-6 px-6 py-3 bg-[#385065] text-white rounded-lg mb-3 md:mb-0">
        <div className="flex space-x-2">
       <span>Book a Free Consultation</span> 
      <ArrowUpRight size={20} />
        </div>
      </button>
      <button className="bg-white px-6 py-3 rounded-lg text-[#4C5862] ml-3">
       <div className="flex items-center space-x-3">
        <Image src="/images/google-logo.png" alt="google logo" width={40} height={30}/>
        <Image src="/images/rate.png" alt="google logo" width={40} height={30}/>
        <span className="text-xs"> Read Our 22 Review</span>
        <ArrowUpRight size={20} />
       </div>
        </button>
    </HeroLayout>
    <div className="flex flex-col md:flex-row gap-4 lg:gap-6 p-6 md:p-10 bg-[#F8F1E8] justify-center">
    <Card 
        title="Bridging The Gap"
        description="It is said that you can bury a body on the second page of Google. 4E Agency helps clients take center stage by establishing their presence so that your audience can FIND YOU."
        bgColor="bg-[#174A43]"
        textColor={'white'}
      />
      <Card 
        title="What is Performance Press"
        description="Leveraging our network of top-tier journalists, Performance Press increases your website’s domain authority, builds your brand awareness and optimizes your search rankings through our Digital PR strategy."
        bgColor="bg-[#E0E0E0]"
        textColor={'black'}
      />
      <Card 
        title="What Makes Us Different"
        description="4E agency gives the utmost attention to every client, regardless of the price of their campaign. Our dedicated team of experts offer fastidious and methodical approaches that amplify and differentiate your brand – ultimately increasing your online value."
        bgColor="bg-[#385065]"
        textColor={'white'}
      />
    </div>
   
      <DigitalBrandExpertise/>
      <OurPartners/>
      <BlogPosts/>
      <BrandBoost/>
      <Footer/>
    </div>


      );
}
