"use client";
"use client";
import Image from "next/image";
import HeroLayout from "./components/hero_section";
import { ArrowUpRight } from "lucide-react";
import Card from "./components/card";
import DigitalBrandExpertise from "./components/digital_expertise";
import OurPartners from "./components/our_partner";
import BlogPosts from "./components/blog_post";
import BrandBoost from "./components/brand_boost";
import Footer from "./components/footer";
import { useHomePage } from "./context/homePageContext";
import Preloader from "./components/preloader";
import Link from "next/link";
import Wrapper from "./components/wrapper";
import { GoogleIcon } from "./icons/googleIcon";
import { OneStar } from "./icons/oneStart";
export default function Home() {
  const { homePageData } = useHomePage();
  // if (!homePageData || !homePageData.content || homePageData.content.length == 0){
  //   return <Preloader/>
  // }
  console.log("homePage", homePageData);
  console.log("homePage", homePageData);
  return (
    <div >
      <div className="flex flex-col md:gap-y-[5.5rem] gap-10">
      <HeroLayout full={true} backgroundImage="/images/bg_hero1.png">
        <Wrapper>
          <h1 className="text-[43px] md:text-7xl leading-[1.2] font-baskerville">
          An Agency That Gets
          Your Brand What it Deserves
        </h1>
          <Link href={"/contact"}>
            <button className="mt-6 px-6 py-3 max-w-[253px] bg-[#385065] text-white rounded-lg mb-3 md:mb-0">
              <div className="flex text-sm space-x-2">
                <span>Book a Free Consultation</span>
                <ArrowUpRight size={20} />
              </div>
            </button>
          </Link>
          <Link
            href={
              "https://www.bing.com/ck/a?!&&p=96bcfb1aaf2f5e881e83c9a2208129613e371e454821c198bd6c5e324adc51baJmltdHM9MTc0MjA4MzIwMA&ptn=3&ver=2&hsh=4&fclid=20eb0161-86f2-62e2-1dd5-14cd874b63c2&psq=4th+estate+agency+google+reviews&u=a1aHR0cHM6Ly9yZXZpZXdzLmJpcmRleWUuY29tLzR0aC1lc3RhdGUtMTcwOTAzMjg2MzY5NjA4&ntb=1"
            }
          >
            <button className="bg-white px-6 py-3 rounded-lg text-[#4C5862] ml-3 hidden md:inline">
              <div className="md:flex items-center space-x-3">
                <Image
                  src="/images/google-logo.png"
                  alt="google logo"
                  width={40}
                  height={30}
                />
                <Image
                  src="/images/rate.png"
                  alt="google logo"
                  width={60}
                  height={30}
                />
                <span className="text-xs"> Read Our 22 Reviews</span>
                <ArrowUpRight size={20} />
              </div>
            </button>
          </Link>
          <Link href={
              "https://www.bing.com/ck/a?!&&p=96bcfb1aaf2f5e881e83c9a2208129613e371e454821c198bd6c5e324adc51baJmltdHM9MTc0MjA4MzIwMA&ptn=3&ver=2&hsh=4&fclid=20eb0161-86f2-62e2-1dd5-14cd874b63c2&psq=4th+estate+agency+google+reviews&u=a1aHR0cHM6Ly9yZXZpZXdzLmJpcmRleWUuY29tLzR0aC1lc3RhdGUtMTcwOTAzMjg2MzY5NjA4&ntb=1"
            }
            className="md:hidden block"
            >
          <button className="bg-white px-6 py-3 rounded-lg text-[#4C5862] max-w-[253px]">
          <div className="flex items-center text-center gap-2">
                <GoogleIcon/>
                <span className="text-xs"> Read Our 22 Reviews</span>
                <ArrowUpRight size={20} />
              </div>
          </button>
          </Link>
        </Wrapper>
      </HeroLayout>
      <Wrapper className="flex flex-col w-full justify-between md:flex-row gap-4 lg:gap-6 bg-[#F8F1E8] animate-fade-down">
        <Card
          title="Bridging The Gap"
          description="It is said that you can bury a body on the second page of Google. 4E Agency helps clients take center stage by establishing their presence so that your audience can FIND YOU."
          bgColor="bg-[#174A43]"
          textColor={"white"}
        />
        <Card
          title="What is Performance Press"
          description="Leveraging our network of top-tier journalists, Performance Press increases your website’s domain authority, builds your brand awareness and optimizes your search rankings through our Digital PR strategy."
          bgColor="bg-[#E0E0E0]"
          textColor={"black"}
        />
        <Card
          title="What Makes Us Different"
          description="4E agency gives the utmost attention to every client, regardless of the price of their campaign. Our dedicated team of experts offer fastidious and methodical approaches that amplify and differentiate your brand – ultimately increasing your online value."
          bgColor="bg-[#385065]"
          textColor={"white"}
        />
      </Wrapper>

      <DigitalBrandExpertise />
      <OurPartners />
      <BlogPosts />
      </div>
      
      <BrandBoost />
      <Footer />
    </div>
  );
}
