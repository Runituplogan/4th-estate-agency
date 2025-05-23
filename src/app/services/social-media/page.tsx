"use client"
import HeroLayout from "../../components/hero_section";
import SectionCard from "../../components/card_section";
import Image from "next/image";
import BrandBoost from "../../components/brand_boost";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import { Metadata } from "next";
import { Fragment } from "react";
import Button from "@/app/components/button";
import Wrapper from "@/app/components/wrapper";
import {
  AddBusinessIcon,
  BrandAwarenessIcon,
  ChatIcon,
  FacebookIcon,
  InstagramIcon,
  MoneyIcon,
  SpeakerIcon,
  TiktokIcon,
} from "@/icons";
import Link from "next/link";
import BookACallBtn from "@/app/components/BookACallBtn";
import { useSocialsPage } from "@/app/context/socialPageContext";
import Preloader from "@/app/components/preloader";
import { BannerSection, FaqData } from "@/app/types";
import { motion } from "framer-motion";
// import { useSocialsPage } from "../../context/socialPageContext";
// import Preloader from "@/app/components/preloader";

// export const metadata: Metadata = {
//   title: "Social Media",
// };

export default function SocialMediaPage() {
    const { socialsPageData } = useSocialsPage();
    if (
      !socialsPageData ||
      !socialsPageData.content ||
      socialsPageData.content.length == 0
    ) {
      return <Preloader />;
    }
  const banner: BannerSection | undefined = socialsPageData?.content?.find(
    (item: any) => item.type === "banner"
  );  
  const section1: SocialSection1 | undefined = socialsPageData?.content?.find(
    (item: any) => item.type === "section1"
  );  
  const section2: SocialSection2 | undefined = socialsPageData?.content?.find(
    (item: any) => item.type === "section2"
  );  
  const section3: SocialSection3 | undefined = socialsPageData?.content?.find(
    (item: any) => item.type === "section3"
  );  
  const section4: SocialSection4 | undefined = socialsPageData?.content?.find(
    (item: any) => item.type === "section4"
  );  
  const section5: FaqData | undefined = socialsPageData?.content?.find(
    (item: any) => item.type === "section5"
  );  

  
const socialMediaServices = [
  {
    name: `${section1?.content[0].subContent[0].title}`,
    description:
      `${section1?.content[0].subContent[0].description}`,
    icon: <AddBusinessIcon />,
  },
  {
    name: `${section1?.content[0].subContent[1].title}`,
    description:
      `${section1?.content[0].subContent[1].description}`,
    icon: <BrandAwarenessIcon />,
  },
  {
    name: `${section1?.content[0].subContent[2].title}`,
    description:
      `${section1?.content[0].subContent[2].description}`,
    icon: <ChatIcon />,
  },
  {
    name: `${section1?.content[0].subContent[3].title}`,
    description:
      `${section1?.content[0].subContent[3].description}`,
    icon: <MoneyIcon />,
  },
];

const differentSocialMedia = [
  {
    name: `${section3?.content.subContent[0].title}`,
    description:
    `${section3?.content.subContent[0].description}`,
    icon: <FacebookIcon />,
  },
  {
    name: `${section3?.content.subContent[1].title}`,
    description:
    `${section3?.content.subContent[1].description}`,
    icon: <InstagramIcon />,
  },
  {
    name: `${section3?.content.subContent[2].title}`,
    description:
    `${section3?.content.subContent[2].description}`,
    icon: <TiktokIcon />,
  },
  {
    name: `${section3?.content.subContent[3].title}`,
    description:
    `${section3?.content.subContent[3].description}`,
    icon: <SpeakerIcon />,
  },
];

const descriptionSplited = section4?.content.description.split(';').slice(1)

  return (
    <Fragment>
      <HeroLayout
        backgroundImage="/images/social_media.png"
        className="grid place-content-center  h-full pt-[2.2rem] md:pt-0 md:px-[2rem] "
        full={true}
      >
        <h1 className="text-2xl text-[40px] md:text-6xl xl:text-[6rem] font-baskerville leading-[1.2em] capitalize md:pt-0 pt-32">
          {banner?.content[0].title}
        </h1>
       <BookACallBtn/>
      </HeroLayout>

      <Wrapper >
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full items-center flex justify-center flex-col py-[1.875rem] lg:py-[4rem] animate-fade-up lg:px-[7rem] text-center ">
          <h3 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          {section1?.content[0].title}
          </h3>
          <motion.p 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] ">
          {section1?.content[0].description}
          </motion.p>
        </motion.div>
      </Wrapper>

      <Wrapper
        as="ul"
        className="bg-white md:mb-[2rem] lg:mb-[4rem] xl:mb-[6rem] w-full  grid md:grid-cols-2 gap-[1.375rem]  py-[1.875rem] lg:py-[4rem] animate-fade-up  rounded-[8px] "
      >
        {socialMediaServices.map((item, index) => (
         <motion.article 
         initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Slide left/right alternately
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, ease: "easeOut" }}
         viewport={{ once: false, amount: 0.3 }}
         
         className="flex flex-col gap-[0.5rem]"
          key={index}
         
         >
           <motion.i
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="size-[2.5rem] lg:size-[4.25rem] overflow-hidden flex items-center justify-center ">
             {item.icon}
           </motion.i>
           <motion.h4 className=" text-[1.5rem] lg:text-[2.25rem] leading-[120%] tracking-[-0.3%] align-middle  font-baskerville text-[#1B1B1B] ">
             {item.name}
           </motion.h4>
           <motion.p className=" text-[0.875rem] leading-[1.5rem]  md:text-[1.125rem] lg:leading-[2.25rem] tracking-[-0.3%] align-middle font-manrope lg:font-geist text-[#66717B] ">
             {item.description}
           </motion.p>
         </motion.article>
        ))}
      </Wrapper>

      <section className="bg-[#0C2F4D]  md:px-8">
        <SectionCard
          title={`${section2?.content.title}`}
          imageUrl={`${section2?.content.image}`}
          description={`${section2?.content.description}`}
          showBtn={false}
          marginStyle="md:m-0 m-0"
        />
      </section>

      <Wrapper>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
         className="w-full items-center flex justify-center flex-col py-[1.875rem] lg:py-[4rem] animate-fade-up lg:px-[7rem] text-center ">  
        <h3 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          {section3?.content.title}
        </h3>
        <motion.p 
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
         viewport={{ once: false, amount: 0.3 }}
        className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] ">
           {section3?.content.description}
        </motion.p>
        </motion.div>
      </Wrapper>

      <Wrapper
        as="ul"
        className="bg-white w-full  grid md:grid-cols-2 gap-[40px]  py-[1.875rem] lg:py-[4rem] animate-fade-up  rounded-[8px] "
      >
        {differentSocialMedia.map((item, index) => (
          <motion.article 
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Slide left/right alternately
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          
          className="flex flex-col gap-[0.5rem]"
           key={index}
          
          >
            <motion.i
             initial={{ scale: 0.8 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 0.5, ease: "easeOut" }}
             viewport={{ once: false, amount: 0.3 }}
             className="size-[2.5rem] lg:size-[4.25rem] overflow-hidden flex items-center justify-center ">
              {item.icon}
            </motion.i>
            <motion.h4 className=" text-[1.5rem] lg:text-[2.25rem] leading-[120%] tracking-[-0.3%] align-middle  font-baskerville text-[#1B1B1B] ">
              {item.name}
            </motion.h4>
            <motion.p className=" text-[0.875rem] leading-[1.5rem]  md:text-[1.125rem] lg:leading-[2.25rem] tracking-[-0.3%] align-middle font-manrope lg:font-geist text-[#66717B] ">
              {item.description}
            </motion.p>
          </motion.article>
        ))}
      </Wrapper>

      <Wrapper>
        <motion.div
        className="grid grid-cols-1 xl:grid-cols-[1fr_37rem] justify-between  items-center gap-[1.5rem] xl:gap-[1.875rem] xl:pt-[5.875rem] py-[2.1rem] "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Re-triggers animation when in view
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
        }} 
        >
        <motion.figcaption
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-2xl text-[45px] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
            {section4?.content.title}
          </h3>
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
           className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] md:mb-0 mb-2 ">
            {section4?.content.description.split(';')[0]}
          </motion.p>
          <motion.ul 
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            viewport={{ once: false, amount: 0.3 }}
          className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[2px]  ">
            {descriptionSplited?.filter((item) => item.trim() !== "").map((item, index) => (
              <motion.li
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
                key={index}
                className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%]  "
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.figcaption>
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
         className="relative w-full h-[24.5rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] ">
          <Image
            src="/images/social_image1.png"
            alt="Paid Media"
            fill
            className="object-cover object-center"
          />
        </motion.div>
        </motion.div>
      </Wrapper>
      <Faq items={section5!.content.faq}/>
      <SectionCard />
      <Footer />
    </Fragment>
  );
}
