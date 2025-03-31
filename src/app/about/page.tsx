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
import { motion } from "framer-motion";
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
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <HeroLayout backgroundImage={`${banner?.content[0].background_image.url}`}>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-7xl font-baskerville"
            >
              {banner?.content[0].title}
            </motion.h1>
          </HeroLayout>
        </motion.div>

        {/* One Mantra Section */}
        <Wrapper className="flex justify-between flex-col gap-y-[1.2rem] md:gap-y-0 md:flex-row">
          <motion.h1
            className="text-3xl md:text-5xl font-baskerville flex-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            One Mantra:
            <br />
            Value Over Volume
          </motion.h1>
          <motion.p
            className="mx-auto leading-relaxed md:max-w-[400px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Our mission is to provide competence, exceptional service, and lasting
            performance that drive measurable results through strategic innovation
            and client-focused solutions.
          </motion.p>
        </Wrapper>

        {/* Founder Section */}
        <Wrapper>
          <motion.h1
            className="text-4xl mb-2 md:mb-[3rem] md:text-5xl font-baskerville text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {section1?.content[0].title}
          </motion.h1>
          <div className="flex gap-x-[14rem] flex-col-reverse md:flex-row justify-around items-center">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="leading-9 font-geist my-2">
                {aboutFounderText!.map((text, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-[1rem]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    {text}.
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="h-fit w-full md:w-1/2"
              initial={{ x: 100, opacity: 0, scale: 0.9 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src={`${section1?.content[0].image}`}
                alt="founder image"
                width={400}
                height={300}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </Wrapper>

        {/* Team and Achievements */}
        <Team data={section2!}/>
        <Achievements data={section3!}/>
      </div>
      <Footer />
    </div>
  );
}
