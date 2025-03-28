"use client"
import { Fragment } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";
import HeroLayout from "../../components/hero_section";
import ServiceCard from "../../components/service_card";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";
import {
  BrandAwarenessIcon,
  DollarLegIcon,
  GoogleIcon,
  HeartCircleIcon,
  LabResearchIcon,
  MoneyIcon,
  TrackChangesIcon,
  VerifiedIcon,
} from "@/icons";
import Button from "@/app/components/button";
import Link from "next/link";
import BookACallBtn from "@/app/components/BookACallBtn";
import { usePPCPage } from "@/app/context/ppcPageContext";
import Preloader from "@/app/components/preloader";
import { BannerSection, FaqData } from "@/app/types";
import { transformFaqData } from "../helper_fn";


// export const metadata: Metadata = {
//   title: "PPC Management",
// };

export default function PaidMediaPage() {
  const {ppcPageData} = usePPCPage()
  if (!ppcPageData || !ppcPageData.content || ppcPageData.content.length == 0){
        return <Preloader/>
      }
  const banner: BannerSection | undefined = ppcPageData?.content?.find(
    (item: any) => item.type === "banner"
  );
  const section1: PaidMediaSection1 | undefined = ppcPageData?.content?.find(
    (item: any) => item.type === "section1"
  );
  const section2: PaidMediaSection2 | undefined = ppcPageData?.content?.find(
    (item: any) => item.type === "section2"
  );
  const section3: PaidMediaSection3 | undefined = ppcPageData?.content?.find(
    (item: any) => item.type === "section3"
  );
  const section4: PaidMediaSection4 | undefined = ppcPageData?.content?.find(
    (item: any) => item.type === "section4"
  );
  const section: FaqData| undefined = ppcPageData?.content?.find(
    (item: any) => item.type === "section"
  );
  const whyPaidMedia = [
    {
      name: `${section1?.content[0].subContent[0].title}`,
      description:
        `${section1?.content[0].subContent[0].description}`,
      icon: <DollarLegIcon />,
    },
    {
      name: `${section1?.content[0].subContent[1].title}`,
      description:
        `${section1?.content[0].subContent[1].description}`,
      icon: <MoneyIcon />,
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
      icon: <BrandAwarenessIcon />,
    },
  ];
  const paidMediaManagementServices = [
    {
      name: `${section3?.content.subContent[0].title}`,
      description:
      `${section3?.content.subContent[0].description}`,
      icon: <GoogleIcon />,
    },
    {
      name: `${section3?.content.subContent[1].title}`,
      description:
      `${section3?.content.subContent[1].description}`,
      icon: <HeartCircleIcon />,
    },
    {
      name: `${section3?.content.subContent[2].title}`,
      description:
      `${section3?.content.subContent[2].description}`,
      icon: <BrandAwarenessIcon />,
    },
    {
      name: `${section3?.content.subContent[3].title}`,
      description:
      `${section3?.content.subContent[3].description}`,
      icon: <LabResearchIcon />,
    },
    {
      name: `${section3?.content.subContent[4].title}`,
      description:
      `${section3?.content.subContent[4].description}`,
      icon: <LabResearchIcon />,
    },
    {
      name: `${section3?.content.subContent[5].title}`,
      description:
      `${section3?.content.subContent[5].description}`,
      icon: <TrackChangesIcon />,
    },
  ];
  return (
    <Fragment>
      <HeroLayout
        backgroundImage={`${banner?.content[0].background_image.url}`}
        className="grid place-content-center  h-full pt-[2.2rem] md:pt-0 "
        full={true}
      >
        <h1 className="text-2xl text-[35px] pt-20 md:pt-0 md:text-7xl xl:text-[6rem]  font-baskerville tracking-[-0.0002em] leading-[1.2em] capitalize  ">
      {banner?.content[0].title}
        </h1>
      <BookACallBtn/>
      </HeroLayout>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[6.25rem] text-center pt-[2.43rem] lg:pt-[9.875rem] animate-fade-up ">
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[140%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
        {section1?.content[0].title}
        </h2>

        <p className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%] xl:px-[3.475rem] ">
        {section1?.content[0].description}
        </p>
      </Wrapper>

      <Wrapper className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up">
        {whyPaidMedia.map((item, index) => (
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </Wrapper>

      <Wrapper className="items-center flex flex-col lg:py-[4rem] text-center gap-[2.1rem]  ">
        <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]  lg:px-[3.125rem] tracking-[-0.3%] capitalize text-center text-2xl text-[35px] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
        {section2?.content.title}
        </h3>
        <p className="text-left text-[#66717B] md:hidden block">{section2?.content.description.split(';')[0]}</p>
        <figure className="grid lg:grid-cols-[1fr_40rem] justify-between  items-center gap-[3.875rem] ">
          <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[2px] lg:gap-[8px] pb-[2rem]  ">
            {[
              
              `${section2?.content.description.split(';')[0]}`,
              `${section2?.content.description.split(';')[1]}`,
              `${section2?.content.description.split(';')[2]}`,
              `${section2?.content.description.split(';')[3]}`,
              `${section2?.content.description.split(';')[4]}`,
              `${section2?.content.description.split(';')[5]}`,
            ].map((item, index) => (
              <li
                key={index}
                className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%]  "
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="relative h-[31.75rem]  rounded-[12.13px] overflow-hidden hidden md:block  ">
            <Image
              src={section2?.content?.image!}
              alt={`${section2?.content.image}`}
              fill
              className="object-cover object-center"
            />
          </div>
        </figure>
      </Wrapper>

      <section className="bg-white py-[1.875rem] lg:py-[4rem] animate-fade-up ">
        <Wrapper className="flex flex-col  gap-[1.5rem]">
          <h3 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
           {section3?.content.title}
          </h3>

          <div className="bg-white w-full rounded grid md:grid-cols-2 gap-[1.375rem]  ">
            {paidMediaManagementServices.map((item, index) => (
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
          </div>
        </Wrapper>
      </section>
      <Wrapper className="grid grid-cols-1 xl:grid-cols-[1fr_37rem] justify-between  items-center gap-[1.5rem] xl:gap-[3.875rem] xl:pt-[5.875rem] py-[2.1rem] ">
        <figcaption>
          <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
            {section4?.content.title}
          </h3>
          <p className="font-geist text-[0.875rem] md:mb-0 mb-3 md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] ">
          {section4?.content.description.split(';')[0]}
          </p>
          <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[2px]  ">
            {[
              `${section4?.content.description.split(';')[1]}`,
              `${section4?.content.description.split(';')[2]}`,
              `${section4?.content.description.split(';')[3]}`,
              `${section4?.content.description.split(';')[4]}`,
              `${section4?.content.description.split(';')[5]}`,
              `${section4?.content.description.split(';')[6]}`,
             `${section4?.content.description.split(';')[7]}`,
              `${section4?.content.description.split(';')[8]}`,
             `${section4?.content.description.split(';')[9]}`,
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
        <div className="relative w-full h-[24.5rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] ">
          <Image
            src={`${section4?.content.image}`}
            alt={`${section4?.content.image}`}
            fill
            className="object-cover object-center"
          />
        </div>
      </Wrapper>
      <Faq items={section!.content.faq} />
      <SectionCard />
      <Footer />
    </Fragment>
  );
}
