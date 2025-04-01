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
import { motion } from "framer-motion";



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
      <Wrapper >
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[6.25rem] text-center pt-[2.43rem] lg:pt-[9.875rem] animate-fade-up "
        >
        
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[140%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
        {section1?.content[0].title}
        </h2>

        <motion.p  
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }} 
          className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%] xl:px-[3.475rem] ">
        {section1?.content[0].description}
        </motion.p>
      </motion.div>
      </Wrapper>
   
      <Wrapper >
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          viewport={{ once: false, amount: 0.3 }} 
          className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up">
        {whyPaidMedia.map((item, index) => (
           <ServiceCard
             key={index}
             index={index}
             description={item.description}
             name={item.name}
             icon={item.icon}
           />
         
        ))}
        </motion.div>
      </Wrapper>
    

      <Wrapper>
        <motion.div className="items-center flex flex-col lg:py-[4rem] text-center gap-[2.1rem]"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, amount: 0.3 }} // Re-triggers animation when in view
         variants={{
           hidden: { opacity: 0 },
           visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
         }}
        >
       
        <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]  lg:px-[3.125rem] tracking-[-0.3%] capitalize text-center text-2xl text-[35px] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
        {section2?.content.title}
        </h3>
        <p className="text-left text-[#66717B] md:hidden block">{section2?.content.description.split(';')[0]}</p>
        <figure className="grid lg:grid-cols-[1fr_40rem] justify-between  items-center gap-[3.875rem] ">
          <motion.ul 
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            viewport={{ once: false, amount: 0.3 }}
          className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[2px] lg:gap-[8px] pb-[2rem]  ">
            {section2?.content.description.split(';').filter((item) => item.trim() !== "").map((item, index) => (
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
          <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}           
          className="relative h-[31.75rem]  rounded-[12.13px] overflow-hidden hidden md:block  ">
            <Image
              src={section2?.content?.image!}
              alt={`${section2?.content.image}`}
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </figure>
        </motion.div>
      </Wrapper>

      <section className="bg-white py-[1.875rem] lg:py-[4rem] animate-fade-up ">
        <Wrapper>
        <motion.div  className="flex flex-col  gap-[1.5rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Re-triggers animation when in view
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
          }}>
            <motion.div   
            className="flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}>
             <h3 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
           {section3?.content.title}
             </h3>
            </motion.div>

          <motion.div 
          className="bg-white w-full rounded grid md:grid-cols-2 gap-[1.375rem]  ">
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
          </motion.div>
        </motion.div>
         
        </Wrapper>
      </section>
      <Wrapper >
        <motion.div   
        className="grid grid-cols-1 xl:grid-cols-[1fr_37rem] justify-between  items-center gap-[1.5rem] xl:gap-[3.875rem] xl:pt-[5.875rem] py-[2.1rem] " 
         initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Re-triggers animation when in view
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
      }}>
        <figcaption>
          
          <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
            {section4?.content.title}
          </h3>
          <p className="font-geist text-[0.875rem] md:mb-0 mb-3 md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] ">
          {section4?.content.description.split(';')[0]}
          </p>
          <motion.ul 
           initial="hidden"
           whileInView="visible"
           variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
           }}
           viewport={{ once: false, amount: 0.3 }}
          className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[2px]  ">
            {section4?.content.description.split(';').slice(1).filter((item) => item.trim() !== "").map((item, index) => (
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
        </figcaption>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        className="relative w-full h-[24.5rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] ">
          <Image
            src={`${section4?.content.image}`}
            alt={`${section4?.content.image}`}
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>
      </Wrapper>
      <Faq items={section!.content.faq} />
      <SectionCard />
      <Footer />
    </Fragment>
  );
}
