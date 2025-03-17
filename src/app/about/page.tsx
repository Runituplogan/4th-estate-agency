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

export default function AboutPage() {
  const { aboutPageData } = useAboutPage();


  if (
    !aboutPageData ||
    !aboutPageData.content ||
    aboutPageData.content.length == 0
  ) {
    return <Preloader />;
  }

  console.log("about page", aboutPageData);

  return (
    <div className="flex flex-col gap-y-[5.5rem]">
      <HeroLayout backgroundImage="/images/bg_hero1.png">
        <h1 className="text-3xl md:text-7xl  font-baskerville">About Us</h1>
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
        <h1 className="text-3xl mb-[3rem] md:text-5xl font-baskerville text-center">
          Meet Our Founder
        </h1>
        <div className="flex gap-x-[14rem] flex-col-reverse md:flex-row justify-around items-center ">
          <div className="w-full md:w-1/2">
            <p className=" leading-9 my-2 animate-fade-right">
              Founded by Jason Aaron Scott, 4th Estate Agency demystifies the
              technical ins and outs of digital marketing. Having so many
              agencies to choose from, we decided to act as the conduit between
              Google's complex engine and your upstart brand. Coast to coast,
              our team of experts translate the complexities of marketing into
              clear and simple terms for sustainable cost-effective growth.
            </p>
          </div>
          <div className="h-fit w-full animate-fade-left md:w-1/2">
            <Image
              src="/images/founder_image.png"
              alt="founder image"
              width={400}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
      </Wrapper>
       <Team />
       <Achievements />
      <BrandBoost />
      <Footer />
    </div>
  );
}
