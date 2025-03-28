"use client"
import HeroLayout from "../../components/hero_section";
import Image from "next/image";
import ServiceCard from "../../components/service_card";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";
import { Metadata } from "next";
import { Fragment } from "react";
import Button from "@/app/components/button";
import Wrapper from "@/app/components/wrapper";
import {
  BrandAwarenessIcon,
  BulbIcon,
  ChartLineIcon,
  ChartSquareIcon,
  IntegrationInstructionsIcon,
  NewsIcon,
  PieChartIcon,
  PublicIcon,
  TargetIcon,
  TrayGrowthChartIcon,
  VideoIcon,
} from "@/icons";
import Link from "next/link";
import BookACallBtn from "@/app/components/BookACallBtn";
import { usePressPage } from "@/app/context/pressPageContext";
import Preloader from "@/app/components/preloader";
import { BannerSection, FaqData } from "@/app/types";

// export const metadata: Metadata = {
//   title: "Press",
// };

export default function PressPage() {
  const {pressPageData} = usePressPage()
   if (!pressPageData || !pressPageData.content || pressPageData.content.length == 0){
      return <Preloader/>
    }
    const banner: BannerSection | undefined = pressPageData?.content?.find(
      (item: any) => item.type === "banner"
    );
    const section1: PressSection1 | undefined = pressPageData?.content?.find(
      (item: any) => item.type === "section1"
    );
    const section2: PressSection2 | undefined = pressPageData?.content?.find(
      (item: any) => item.type === "section2"
    );
    const section3: PressSection3 | undefined = pressPageData?.content?.find(
      (item: any) => item.type === "section3"
    );
    const section4: PressSection4 | undefined = pressPageData?.content?.find(
      (item: any) => item.type === "section4"
    );
    const section5: FaqData | undefined = pressPageData?.content?.find(
      (item: any) => item.type === "section5"
    );

    
const prTailoredForBusiness = [
  {
    name: `${section1?.content[0].subContent[0].title}`,
    description:
      `${section1?.content[0].subContent[0].description}`,
    icon: <VideoIcon />,
  },
  {
    name: `${section1?.content[0].subContent[1].title}`,
    description:
      `${section1?.content[0].subContent[1].description}`,
    icon: <ChartSquareIcon />,
  },
  {
    name: `${section1?.content[0].subContent[2].title}`,
    description:
      `${section1?.content[0].subContent[2].description}`,
    icon: <BrandAwarenessIcon />,
  },
  {
    name: `${section1?.content[0].subContent[3].title}`,
    description:
      `${section1?.content[0].subContent[3].description}`,
    icon: <ChartLineIcon />,
  },
  {
    name: `${section1?.content[0].subContent[4].title}`,
    description:
      `${section1?.content[0].subContent[4].description}`,
    icon: <PublicIcon />,
  },
  {
    name: `${section1?.content[0].subContent[5].title}`,
    description:
      `${section1?.content[0].subContent[5].description}`,
    icon: <NewsIcon />,
  },
  {
    name: `${section1?.content[0].subContent[6].title}`,
    description:
      `${section1?.content[0].subContent[6].description}`,
    icon: <BulbIcon />,
  },
  {
    name: `${section1?.content[0].subContent[7].title}`,
    description:
      `${section1?.content[0].subContent[7].description}`,
    icon: <TrayGrowthChartIcon />,
  },
];
const keyFeatures = [
  {
    name: `${section3?.content.subContent[0].title}`,
    description:
      `${section3?.content.subContent[0].description}`,
    icon: <PieChartIcon />,
  },
  {
    name: `${section3?.content.subContent[1].title}`,
    description:
      `${section3?.content.subContent[1].description}`,
    icon: <TargetIcon />,
  },
  {
    name: `${section3?.content.subContent[2].title}`,
    description:
      `${section3?.content.subContent[2].description}`,
    icon: <IntegrationInstructionsIcon />,
  },
  {
    name: `${section3?.content.subContent[3].title}`,
    description:
      `${section3?.content.subContent[3].description}`,
    icon: <ChartLineIcon />,
  },
];

  return (
    <Fragment>
      <HeroLayout
        backgroundImage={`${banner?.content[0].background_image.url}`}
        className="grid place-content-center  h-full pt-[2.2rem] md:pt-0 "
        full={true}
      >
        <h1 className="text-2xl text-[40px] md:pt-0 pt-20 md:text-7xl xl:text-[6rem]  font-baskerville tracking-[-0.0002em] leading-[1.2em] capitalize ">
          {banner?.content[0].title}
        </h1>
        <BookACallBtn/>
      </HeroLayout>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] py-[1.5rem]  text-center lg:py-[4rem] animate-fade-up ">
        <h2 className="text-center text-[40px] text-2xl[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[130%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
        {section1?.content[0].title}
        </h2>
        <p className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%]  ">
        {section1?.content[0].description}
        </p>
      </Wrapper>

      <section className="bg-white py-[1.875rem] lg:py-[4rem] animate-fade-up ">
        <Wrapper className="bg-white w-full rounded grid md:grid-cols-2 gap-8 place-items-center">
          {prTailoredForBusiness.map((item, index) => (
            <article className="flex flex-col gap-[0.5rem]" key={index}>
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
      </section>

      <Wrapper className="items-center flex flex-col py-[1.75rem] lg:py-[4rem] text-center gap-[2.1rem]  ">
        <div className="lg:px-[3.125rem] flex flex-col gap-[1rem] ">
          <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
            {section2?.content.title}
          </h3>

          <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] ">
          {section2?.content.description}
          </p>
        </div>

        <figure className="grid lg:grid-cols-[1fr_40rem] justify-between  items-center gap-[3.875rem] ">
          <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[0.75rem] lg:gap-[8px] pb-[2rem]  ">
            {[
              `${section2?.content.subContent.description.split(';')[0]}`,
              `${section2?.content.subContent.description.split(';')[1]}`,
              `${section2?.content.subContent.description.split(';')[2]}`,
              `${section2?.content.subContent.description.split(';')[3]}`,
              `${section2?.content.subContent.description.split(';')[4]}`,
            ].map((item, index) => (
              <li
                key={index}
                className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%]  "
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="relative h-[26.5rem]  rounded-[12.13px] overflow-hidden hidden md:block  ">
            <Image
              src={`${section2?.content.subContent.image.url}`}
              alt={`${section2?.content.subContent.image.url}`}
              fill
              className="object-cover object-center"
            />
          </div>
        </figure>
      </Wrapper>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[3.75rem] text-center  lg:pt-[2.75rem] animate-fade-up ">
        <h2 className="text-center text-2xl text-[30px] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[140%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          {section3?.content.title}
        </h2>
      </Wrapper>

      <Wrapper className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up">
        {keyFeatures.map((item, index) => (
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </Wrapper>

      <Wrapper className="grid grid-cols-1 xl:grid-cols-[1fr_27rem] justify-between  items-center gap-[1.5rem] xl:gap-[3.875rem] xl:pt-[3.875rem] pb-[2.1rem]">
        <figcaption className="flex flex-col gap-[1rem] lg:gap-[0.5rem] ">
          <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
          {section4?.content.title}
          </h3>

          <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col    ">
            {[
              `${section4?.content.description.split(';')[0]}`,
              `${section4?.content.description.split(';')[1]}`,
              `${section4?.content.description.split(';')[2]}`,
              `${section4?.content.description.split(';')[3]}`,
              `${section4?.content.description.split(';')[4]}`,
              `${section4?.content.description.split(';')[5]}`,
              `${section4?.content.description.split(';')[6]}`,
              `${section4?.content.description.split(';')[7]}`,
              `${section4?.content.description.split(';')[8]}`,
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
        <div className="relative w-full h-[24.5rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] md:block hidden items-center">
          <Image
            src={section4?.content.images!}
            alt={section4?.content.images!}
            fill
            className=" object-fill object-center "
          />
        </div>
          <Image
            src="/images/single.png"
            alt="Paid Media"
            width={400}
            height={400}
            className=" object-fill object-center block md:hidden"
          />
      </Wrapper>
      <Faq items={(section5!.content.faq)}/>
      <SectionCard />
      <Footer />
    </Fragment>
  );
}
