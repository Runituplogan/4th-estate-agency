"use client";
import { useState } from "react";
import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";
import HeroLayout from "../components/hero_section";
import Image from "next/image";
import { useAboutPage } from "../context/aboutPageContext";
import Preloader from "../components/preloader";
import Wrapper from "../components/wrapper";
import Team from "./_components/Team";
import Achievements from "./_components/achievements";
import { BannerSection } from "../types";
export default function AboutPage() {
  const { aboutPageData } = useAboutPage();

  if (
    !aboutPageData ||
    !aboutPageData.content ||
    aboutPageData.content.length == 0
  ) {
    return <Preloader />;
  }

  const banner: BannerSection | undefined = aboutPageData?.content?.find(
    (item: any) => item.type === "banner"
  );
  const section1: AboutSection1 | undefined = aboutPageData?.content?.find(
    (item: any) => item.type === "section1"
  );
  const section2: AboutSection2 | undefined = aboutPageData?.content?.find(
    (item: any) => item.type === "section2"
  );
  const section3:AboutSection3  | undefined = aboutPageData?.content?.find(
    (item: any) => item.type === "section3"
  );
  const aboutFounderText = section1?.content[0].description.split('.');

  return (
    <div>
      <div className="flex flex-col gap-y-10 md:gap-y-[5.5rem]">
      <HeroLayout backgroundImage={`${banner?.content[0].background_image.url}`}>
        <h1 className="text-3xl md:text-7xl  font-baskerville">{banner?.content[0].title}</h1>
      </HeroLayout>

      <Wrapper className="flex justify-between flex-col gap-y-[1.2rem] md:gap-y-0 md:flex-row">
        <h1 className="text-3xl md:text-5xl font-baskerville animate-fade-right flex-1">
          One Mantra:
          <br />
          Value Over Volume
        </h1>
        <p className=" mx-auto leading-relaxed md:max-w-[400px]">
          Our mission is to provide competence, exceptional service, and lasting
          performance that drive measurable results through strategic innovation
          and client-focused solutions.
        </p>
      </Wrapper>
      <Wrapper className="animate-fade-up">
        <h1 className="text-4xl mb-2 md:mb-[3rem] md:text-5xl font-baskerville text-center">
          {section1?.content[0].title}
        </h1>
        <div className="flex gap-x-[14rem] flex-col-reverse md:flex-row justify-around items-center ">
          <div className="w-full md:w-1/2">
            <div className=" leading-9 font-geist my-2 animate-fade-right">
              <div className="mb-[1rem]">
                {aboutFounderText![0]}.
              </div>
              <div className="mb-[1rem]">
              {aboutFounderText![1]}.
              </div>
              {aboutFounderText![2]}.
            </div>
          </div>
          <div className="h-fit w-full animate-fade-left md:w-1/2">
            <Image
              src={`${section1?.content[0].image}`}
              alt="founder image"
              width={400}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
      </Wrapper>
      <Team data={section2!}/>
      <Achievements data={section3!}/>
      </div>
      <Footer />
    </div>
  );
}
