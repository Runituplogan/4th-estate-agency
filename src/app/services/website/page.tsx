"use client"
import { ArrowUpRight, Heart } from "lucide-react";
import HeroLayout from "../../components/hero_section";
import Image from "next/image";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";
import { Metadata } from "next";
import { Fragment } from "react";
import Button from "@/app/components/button";
import Wrapper from "@/app/components/wrapper";
import {
  DesignServicesIcon,
  LayerIcon,
  LicenceMaintenanceDraftIcon,
  MagicpenIcon,
  VerifiedIcon,
  WebIcon,
} from "@/icons";
import { LocalIcon } from "@/icons/local";
import Link from "next/link";
import BookACallBtn from "@/app/components/BookACallBtn";
import { useWebDevelopmentPage } from "@/app/context/webDevelopmentPage";
import Preloader from "@/app/components/preloader";
import { BannerSection, FaqData } from "@/app/types";
import { transformFaqData } from "../helper_fn";
// export const metadata: Metadata = {
//   title: "Web Development",
// };


export default function WebsiteServicePage() {
  const {webDevelopmentPageData} = useWebDevelopmentPage()
  if (
      !webDevelopmentPageData ||
      !webDevelopmentPageData.content ||
      webDevelopmentPageData.content.length == 0
    ) {
      return <Preloader />;
    }
  const banner: BannerSection | undefined = webDevelopmentPageData?.content?.find(
    (item: any) => item.type === "banner"
  );  
  const section1: WebSiteDevelopmentService1  | undefined = webDevelopmentPageData?.content?.find(
    (item: any) => item.type === "section1"
  );  
  const section2: WebSiteDevelopmentService2  | undefined = webDevelopmentPageData?.content?.find(
    (item: any) => item.type === "section2"
  );  
  const section3: WebSiteDevelopmentService3  | undefined = webDevelopmentPageData?.content?.find(
    (item: any) => item.type === "section3"
  );  
  const section4: WebSiteDevelopmentService4  | undefined = webDevelopmentPageData?.content?.find(
    (item: any) => item.type === "section4"
  );  
  const section5: FaqData  | undefined = webDevelopmentPageData?.content?.find(
    (item: any) => item.type === "section5"
  );  
  const websiteServices = [
    {
      name: `${section1?.content[0].subContent[0].title}`,
      description:
       `${section1?.content[0].subContent[0].description}`,
      icon: <MagicpenIcon />,
    },
    {
      name: `${section1?.content[0].subContent[1].title}`,
      description:
       `${section1?.content[0].subContent[1].description}`,
      icon: <LayerIcon />,
    },
    {
      name: `${section1?.content[0].subContent[2].title}`,
      description:
       `${section1?.content[0].subContent[2].description}`,
      icon: <VerifiedIcon />,
    },
    {
      name: `${section1?.content[0].subContent[3].title}`,
      description:
       `${section1?.content[0].subContent[3].description}`,
      icon: <LocalIcon />,
    },
  ];
  
  const ourServiceInLA = [
    {
      name: `${section4?.content.subContent[0].title}`,
      description:
      `${section4?.content.subContent[0].description}`,
      icon: <DesignServicesIcon />,
    },
    {
      name: `${section4?.content.subContent[1].title}`,
      description:
      `${section4?.content.subContent[1].description}`,
      icon: <WebIcon />,
    },
    {
      name: `${section4?.content.subContent[2].title}`,
      description:
      `${section4?.content.subContent[2].description}`,
      icon: <LayerIcon />,
    },
    {
      name: `${section4?.content.subContent[3].title}`,
      description:
      `${section4?.content.subContent[3].description}`,
      icon: <LicenceMaintenanceDraftIcon />,
    },
  ];
  
  return (
    <Fragment>
      <HeroLayout
        backgroundImage={`${banner?.content[0].background_image.url}`}
        className="grid place-content-center  h-full pt-[2.2rem] md:pt-0 md:px-[2rem] "
        full={true}
      >
        <h1 className="text-[2.5rem] md:text-7xl pt-20 md:pt-0 xl:text-[6rem]  font-baskerville tracking-[-0.0002em] leading-[1.2em]  capitalize ">
          {banner?.content[0].title}
        </h1>

         <BookACallBtn/>
      </HeroLayout>

      <Wrapper className="w-full items-center flex justify-center flex-col py-[1.875rem] lg:py-[4rem] animate-fade-up lg:px-[12rem] text-center ">
        <h3 className="text-center text-2xl text-[45px] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
         {section1?.content[0].title}
        </h3>
        <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] ">
        {section1?.content[0].description}
        </p>
      </Wrapper>

      <Wrapper>
        <Wrapper
          as="ul"
          className="bg-white mb-[1rem] md:mb-[2rem] lg:mb-[4rem] xl:mb-[6rem] w-full  grid md:grid-cols-2 gap-[1.375rem]  py-[1.875rem] lg:py-[2.8rem] animate-fade-up  rounded-[8px] lg:px-[2.5rem] "
        >
          {websiteServices.map((item, index) => (
            <article className="flex flex-col gap-[0.5rem] " key={index}>
              <i className="size-[2.5rem] lg:size-[4.25rem] overflow-hidden flex items-center justify-center ">
                {item.icon}
              </i>
              <h4 className=" text-[1.5rem] lg:text-[2.25rem] leading-[120%] tracking-[-0.3%] align-middle  font-baskerville text-[#1B1B1B] ">
                {item.name}
              </h4>

              <p className=" text-[0.875rem] leading-[1.5rem]  md:text-[1.125rem] lg:leading-[2.25rem] tracking-[-0.3%] align-middle font-manrope lg:font-geist text-[#66717B] ">
                {item.description}
              </p>
            </article>
          ))}
        </Wrapper>
      </Wrapper>

      <section className="bg-white py-[2rem] lg:py-[4rem]">
        <Wrapper className="flex flex-col gap-[4rem]">
          <figure className="grid grid-cols-1 xl:grid-cols-[1fr_37rem] justify-between  items-center gap-[1.5rem] xl:gap-[4.2rem] ">
            <figcaption>
              <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
                {section2?.content.title}
              </h3>
              <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] flex flex-col gap-[1rem]">
                <span>
                  {section2?.content.description.split(';')[0]}
                </span>
                <span>
                {section2?.content.description.split(';')[1]}
                </span>
              </p>
            </figcaption>
            <div className="relative w-full h-[17.75rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] ">
              <Image
                src={`${section2?.content.image}`}
                alt="Paid Media"
                fill
                className="object-cover object-center"
              />
            </div>
          </figure>
          <figure className="flex flex-col-reverse xl:grid xl:grid-cols-[37rem_1fr] justify-between  items-center gap-[1.5rem] xl:gap-[4.2rem] ">
            <div className="relative w-full h-[21.4375rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] ">
              <Image
                src={`${section3?.content.image}`}
                alt="Paid Media"
                fill
                className="object-cover object-center"
              />
            </div>
            <figcaption>
              <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
                {section3?.content.title}
              </h3>
              <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] flex flex-col gap-[1rem] md:mb-0 mb-5">
              {section3?.content.description.split(';')[0]}
              </p>
              <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[2px]  ">
                {[
                  `${section3?.content.description.split(';')[1]}`,
                  `${section3?.content.description.split(';')[2]}`,
                  `${section3?.content.description.split(';')[3]}`,
                  `${section3?.content.description.split(';')[4]}`,
                  `${section3?.content.description.split(';')[5]}`,
                ].map((item, index) => (
                  <li
                    key={index}
                    className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%]  "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>
        </Wrapper>
      </section>

      <Wrapper className="w-full items-center flex justify-center flex-col pt-[1.875rem] lg:pt-[4rem] animate-fade-up lg:px-[12rem] text-center ">
        <h3 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal ">
          {section4?.content.title}
        </h3>
      </Wrapper>
      <Wrapper
        as="ul"
        className="w-full  grid md:grid-cols-2 gap-[1.375rem]  pt-[1.875rem] lg:pt-[4rem] animate-fade-up  rounded-[8px] "
      >
        {ourServiceInLA.map((item, index) => (
          <article className="flex flex-col gap-[0.5rem] " key={index}>
            <i className="size-[2.5rem] lg:size-[4.25rem] overflow-hidden flex items-center justify-center ">
              {item.icon}
            </i>
            <h4 className=" text-[1.5rem] lg:text-[2.25rem] leading-[120%] tracking-[-0.3%] align-middle  font-baskerville text-[#1B1B1B] ">
              {item.name}
            </h4>

            <p className=" text-[0.875rem] leading-[1.5rem]  md:text-[1.125rem] lg:leading-[2.25rem] tracking-[-0.3%] align-middle font-manrope lg:font-geist text-[#66717B] ">
              {item.description}
            </p>
          </article>
        ))}
      </Wrapper>
      <Faq items={section5!.content.faq}/>
      <SectionCard />
      <Footer />
    </Fragment>
  );
}
