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
import { BannerSection, Section1, Section2, Section3 } from "./types";
export default function Home() {
  const { homePageData } = useHomePage();
  if (!homePageData || !homePageData.content || homePageData.content.length == 0){
    return <Preloader/>
  }
  const banner: BannerSection | undefined = homePageData?.content?.find(
    (item: any) => item.type === "banner"
  );
  const section1: Section1 | undefined = homePageData?.content?.find(
    (item: any) => item.type === "section1"
  );
  const section2: Section2 | undefined = homePageData?.content?.find(
    (item: any) => item.type === "section2"
  );
  const section3: Section3 | undefined = homePageData?.content?.find(
    (item: any) => item.type === "section3"
  );
  
  console.log("banner", banner);
  console.log("homePage", homePageData);
  return (
    <div >
      <div className="flex flex-col md:gap-y-[5.5rem] gap-10">
      <HeroLayout full={true} backgroundImage={`${banner?.content[0].background_image.url}`}>
        <Wrapper>
          <h1 className="text-[43px] md:text-7xl leading-[1.2] font-baskerville">
          {banner?.content[0].title}
        </h1>
          
          <Link href={"/contact"}>
            <button className="mt-6 px-6 py-3 max-w-[253px] bg-[#385065] text-white rounded-lg mb-3 md:mb-0">
              <div className="flex text-sm space-x-2">
                <span>{banner?.content[0].cta_buttons[0].text}</span>
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
                <span className="text-xs"> {banner?.content[0].cta_buttons[1].text}</span>
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
                <span className="text-xs"> {banner?.content[0].cta_buttons[1].text}</span>
                <ArrowUpRight size={20} />
              </div>
          </button>
          </Link>
        </Wrapper>
      </HeroLayout>
      <Wrapper className="flex flex-col w-full justify-between md:flex-row gap-4 lg:gap-6 bg-[#F8F1E8] animate-fade-down">
        <Card
          title={`${section1?.content[0].title}`}
          description={`${section1?.content[0].description}`}
          bgColor="bg-[#174A43]"
          textColor={"white"}
        />
        <Card
          title={`${section1?.content[1].title}`}
          description={`${section1?.content[1].description}`}
          bgColor="bg-[#E0E0E0]"
          textColor={"black"}
        />
        <Card
          title={`${section1?.content[2].title}`}
          description={`${section1?.content[2].description}`}
          bgColor="bg-[#385065]"
          textColor={"white"}
        />
      </Wrapper>

      <DigitalBrandExpertise data={section2!}/>
      <OurPartners data={section3!} />
      <BlogPosts />
      </div>
      <Footer />
    </div>
  );
}
