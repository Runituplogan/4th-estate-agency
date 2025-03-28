"use client"
import { ArrowUpRight } from "lucide-react";
import HeroLayout from "../components/hero_section";
import Image from "next/image";
import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";
import Link from "next/link";
import Wrapper from "../components/wrapper";
import { useServicePage } from "../context/servicePageContext";
import Preloader from "../components/preloader";
import { BannerSection } from "../types";
import { Section1 } from "./types";
export default function ServicePage() {
  const {servicePageData} = useServicePage()
  if (!servicePageData || !servicePageData.content || servicePageData.content.length == 0){
    return <Preloader/>
  }
  const banner: BannerSection | undefined = servicePageData?.content?.find(
    (item: any) => item.type === "banner"
  );
  const section1: Section1 | undefined = servicePageData?.content?.find(
    (item: any) => item.type === "section1"
  );
  const serviceType = [
    {
      name: `${section1?.content[0].subContent[0].title}`,
      description:
       `${section1?.content[0].subContent[0].description}`,
      link: "/services/branding",
      imageUrl: "/images/service1.png",
    },
    {
      name: `${section1?.content[0].subContent[1].title}`,
      description:
       `${section1?.content[0].subContent[1].description}`,
      link: "/services/seo",
      imageUrl: "/images/service2.png",
    },
    {
      name: `${section1?.content[0].subContent[2].title}`,
      description:
       `${section1?.content[0].subContent[2].description}`,
      link: "/services/paid-media",
      imageUrl: "/images/service3.png",
    },
    {
      name: `${section1?.content[0].subContent[3].title}`,
      description:
       `${section1?.content[0].subContent[3].description}`,
      link: "/services/press",
      imageUrl: "/images/service5.png",
    },
    {
      name: `${section1?.content[0].subContent[4].title}`,
      description:
       `${section1?.content[0].subContent[4].description}`,
      link: "/services/social-media",
      imageUrl: "/images/service6.png",
    },
    {
      name: `${section1?.content[0].subContent[5].title}`,
      description:
       `${section1?.content[0].subContent[5].description}`,
      link: "/services/website",
      imageUrl: "/images/service4.png",
    },
  ];
  return (
    <div >
      <div className="md:space-y-[5.5rem] gap-y-10">
      <HeroLayout full={true} backgroundImage={`${banner?.content[0].background_image.url}`}>
        <h1 className="text-3xl md:text-7xl  font-baskerville">{banner?.content[0].title}</h1>
      </HeroLayout>
      <Wrapper>
        <div className="items-center text-center animate-fade-up">
          <div className="w-full items-center flex justify-center flex-col">
            <h1 className="md:text-center md:mt-0 mt-10 text-left text-4xl md:text-6xl font-baskerville max-w-[900px] md:leading-relaxed">
              {section1?.content[0].title}
            </h1>
            <p className="text-sm max-w-xl font-geist text-[#66717B] mt-6 mb-[3rem] leading-loose md:leading-relaxed md:text-center text-left">
             {section1?.content[0].description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-9 animate-fade-left md:mb-0 mb-10">
          {serviceType.map((item, index) => (
            <div key={index} className="bg-white w-full h-full p-4 items-center">
              <Image
                src={item.imageUrl}
                alt="Service Image"
                width={400}
                height={300}
                className="w-full"
              />
              <h2 className="text-2xl font-baskerville py-2">{item.name}</h2>
              <div>
                <p className="max-w-[250px] font-geist text-xs leading-relaxed text-[#66717B]">
                  {item.description}
                </p>
              </div>
              <Link href={item.link}>
                <div className="flex space-x-2 items-center py-2">
                  <h3 className="text-xs font-geist">See More</h3>
                  <ArrowUpRight size={15} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Wrapper>
      </div>
      <Footer />
    </div>
  );
}
