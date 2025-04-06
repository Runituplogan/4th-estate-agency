"use client"
import HeroLayout from "../../components/hero_section";
import ServiceCard from "../../components/service_card";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";
// import { useSeoPage } from "@/app/context/seoPageContext";
// import Preloader from "@/app/components/preloader";
import { Metadata } from "next";
import Button from "@/app/components/button";
import Wrapper from "@/app/components/wrapper";
import {
  AuditReportIcon,
  BrickIcon,
  BusinessIcon,
  ChartBoldIcon,
  ChartLineIcon,
  ChartSquareIcon,
  ChartUpIcon,
  FillIcon,
  HomeIcon,
  IssueSolidIcon,
  LinkIcon,
  MapIcon,
  MarketingFieldIcon,
  MedicalBagIcon,
  MoneyBagIcon,
  NotesTickIcon,
  OptimzeIcon,
  PublicIcon,
  SearchFillIcon,
  SearchZoomIn,
  SeoFolderIcon,
  SeoIcon,
  ServiceIcon,
  SignalIcon,
  StoreIcon,
  TabReviewIcon,
  TransactionOrderIcon,
  UserIcon,
  VerifiedIcon,
  WorkHistoryIcon,
} from "@/icons";
import { Fragment } from "react";
import Link from "next/link";
import BookACallBtn from "@/app/components/BookACallBtn";
import Preloader from "@/app/components/preloader";
import { useSeoPage } from "@/app/context/seoPageContext";
import { BannerSection, FaqData } from "@/app/types";
import { motion } from "framer-motion";


export default function SeoPage() {
  const { seoPageData } = useSeoPage();
  if (!seoPageData || !seoPageData.content || seoPageData.content.length == 0) {
    return <Preloader />;
  }
  const banner: BannerSection | undefined = seoPageData?.content?.find(
    (item: any) => item.type === "banner"
  );  
  const section1: SeoSection1 | undefined = seoPageData?.content?.find(
      (item: any) => item.type === "section1"
    );
  const section2: SeoSection2 | undefined = seoPageData?.content?.find(
      (item: any) => item.type === "section2"
    );
  const section3: SeoSection3 | undefined = seoPageData?.content?.find(
      (item: any) => item.type === "section3"
    );
  const section5: SeoSection5 | undefined = seoPageData?.content?.find(
      (item: any) => item.type === "section5"
    );
  const section4: SeoSection4 | undefined = seoPageData?.content?.find(
      (item: any) => item.type === "section4"
    );
  const section6: SeoSection6 | undefined = seoPageData?.content?.find(
      (item: any) => item.type === "section6"
    );
  const section7: FaqData | undefined = seoPageData?.content?.find(
      (item: any) => item.type === "section7"
    );

// export const metadata: Metadata = {
//   title: "SEO",
// };

const seoGrowthPlan = [
  {
    name:`${section1?.content[0].subContent[0].title}`,
    description:
    `${section1?.content[0].subContent[0].description}`,
    icon: <MoneyBagIcon />,
  },
  {
    name:`${section1?.content[0].subContent[1].title}`,
    description:
    `${section1?.content[0].subContent[1].description}`,
    icon: <ChartUpIcon />,
  },
  {
    name:`${section1?.content[0].subContent[2].title}`,
    description:
    `${section1?.content[0].subContent[2].description}`,
    icon: <VerifiedIcon />,
  },
  {
    name:`${section1?.content[0].subContent[3].title}`,
    description:
    `${section1?.content[0].subContent[3].description}`,
    icon: <ChartLineIcon />,
  },
];

const localBusinessSeo = [
  {
    name: `${section2?.content.subContent[0].title}`,
    description:
      `${section2?.content.subContent[0].description}`,
    icon: <BrickIcon />,
  },
  {
    name: `${section2?.content.subContent[1].title}`,
    description:
      `${section2?.content.subContent[1].description}`,
    icon: <HomeIcon />,
  },
  {
    name: `${section2?.content.subContent[2].title}`,
    description:
      `${section2?.content.subContent[2].description}`,
    icon: <MedicalBagIcon />,
  },
  {
    name: `${section2?.content.subContent[3].title}`,
    description:
      `${section2?.content.subContent[3].description}`,
    icon: <ServiceIcon />,
  },
];

const howLocalSeoWorks = [
  {
    name: `${section3?.content.subContent[0].title}`,
    description:
      `${section3?.content.subContent[0].description}`,
    icon: <SearchZoomIn />,
  },
  {
    name: `${section3?.content.subContent[1].title}`,
    description:
      `${section3?.content.subContent[1].description}`,
    icon: <MapIcon />,
  },
  {
    name: `${section3?.content.subContent[2].title}`,
    description:
      `${section3?.content.subContent[2].description}`,
    icon: <PublicIcon />,
  },
  {
    name: `${section3?.content.subContent[3].title}`,
    description:
      `${section3?.content.subContent[3].description}`,
    icon: <StoreIcon />,
  },
  {
    name: `${section3?.content.subContent[4].title}`,
    description:
      `${section3?.content.subContent[4].description}`,
    icon: <LinkIcon />,
  },
  {
    name: `${section3?.content.subContent[5].title}`,
    description:
      `${section3?.content.subContent[5].description}`,
    icon: <TabReviewIcon />,
  },
];

const seoSolutionForYourBusiness = [
  {
    name: `${section5?.content.subContent[0].title}`,
    description:
      `${section5?.content.subContent[0].description}`,
    icon: <OptimzeIcon />,
  },
  {
    name: `${section5?.content.subContent[1].title}`,
    description:
      `${section5?.content.subContent[1].description}`,
    icon: <FillIcon />,
  },
  {
    name: `${section5?.content.subContent[2].title}`,
    description:
      `${section5?.content.subContent[2].description}`,
    icon: <SeoFolderIcon />,
  },
  {
    name: `${section5?.content.subContent[3].title}`,
    description:
      `${section5?.content.subContent[3].description}`,
    icon: <MarketingFieldIcon />,
  },
  {
    name: `${section5?.content.subContent[4].title}`,
    description:
      `${section5?.content.subContent[4].description}`,
    icon: <BusinessIcon />,
  },
  {
    name: `${section5?.content.subContent[5].title}`,
    description:
      `${section5?.content.subContent[5].description}`,
    icon: <SearchFillIcon />,
  },
];

const seoAduitProcess = [
  {
    name: `${section4?.content.subContent[0].title}`,
    description:
      `${section4?.content.subContent[0].description}`,
    icon: <ChartSquareIcon />,
  },
  {
    name: `${section4?.content.subContent[1].title}`,
    description:
      `${section4?.content.subContent[1].description}`,
    icon: <TransactionOrderIcon />,
  },
  {
    name: `${section4?.content.subContent[2].title}`,
    description:
      `${section4?.content.subContent[2].description}`,
    icon: <AuditReportIcon />,
  },
  {
    name: `${section4?.content.subContent[3].title}`,
    description:
      `${section4?.content.subContent[3].description}`,
    icon: <WorkHistoryIcon />,
  },
];

const benefitOfSeo = [
  {
    name: `${section6?.content.subContent[0].title}`,
    description:
      `${section6?.content.subContent[0].description}`,
    icon: <IssueSolidIcon />,
  },
  {
    name: `${section6?.content.subContent[1].title}`,
    description:
      `${section6?.content.subContent[1].description}`,
    icon: <SignalIcon />,
  },
  {
    name: `${section6?.content.subContent[2].title}`,
    description:
      `${section6?.content.subContent[2].description}`,
    icon: <NotesTickIcon />,
  },
  {
    name: `${section6?.content.subContent[3].title}`,
    description:
      `${section6?.content.subContent[3].description}`,
    icon: <SeoIcon />,
  },
  {
    name: `${section6?.content.subContent[4].title}`,
    description:
      `${section6?.content.subContent[4].description}`,
    icon: <ChartBoldIcon />,
  },
  {
    name: `${section6?.content.subContent[5].title}`,
    description:
      `${section6?.content.subContent[5].description}`,
    icon: <UserIcon />,
  },
];


  return (
    <Fragment>
      <HeroLayout
        backgroundImage={`${banner?.content[0].background_image.url}`}
        className="grid place-content-center  h-full pt-[2.2rem] md:pt-0 "
        full={true}
      >
        <h1 className="text-2xl md:text-7xl xl:text-[6rem] text-[40px] font-baskerville pt-32 md:pt-0	 md:leading-relaxed leading-[1.2] capitalize ">
        {banner?.content[0].title}
        </h1>
        <BookACallBtn/>    
       </HeroLayout>
      <Wrapper>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] py-[1.5rem]  text-center lg:py-[4rem] animate-fade-up "
        >
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[130%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          {section1?.content[0].title}
        </h2>
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%]  ">
        {section1?.content[0].description}
        </motion.p>
        </motion.div>
      </Wrapper>

      <Wrapper >
        <motion.div  
        className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up "
         initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}>
             {seoGrowthPlan.map((item, index) => (
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
        </motion.div>
       
      </Wrapper>

      <Wrapper>
        <motion.div
        className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[6.25rem] text-center pt-[2.43rem] lg:pt-[3.875rem] animate-fade-up "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        >
        <h2 className="text-center text-2xl text-[40px] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[130%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          {section2?.content.title}
        </h2>
        <motion.p 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%] lg:px-[3.875rem] xl:px-[7.875rem] ">
        {section2?.content.description}
        </motion.p>
        </motion.div>
      </Wrapper>

      <Wrapper>
         <motion.div 
                 className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up"
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
                >
        {localBusinessSeo.map((item, index) => (
          
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
        </motion.div>
      </Wrapper>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[4.25rem] text-center pt-[2.43rem] lg:pt-[4rem] animate-fade-up  ">
        <motion.h2 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal xl:px-[10.275rem]  ">
         {section3?.content.title}
        </motion.h2>
      </Wrapper>

      <section className="bg-white py-[1.875rem] lg:py-[4rem] animate-fade-up ">
        <Wrapper className="bg-white w-full rounded grid md:grid-cols-2 gap-8 place-items-center">
          {howLocalSeoWorks.map((item, index) => (
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
      </section>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[6.25rem] text-center pt-[2.43rem] lg:pt-[2.875rem] animate-fade-up ">
        <motion.h2 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[130%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          {section5?.content.title}
        </motion.h2>
      </Wrapper>
        <Wrapper>
        <motion.div 
                 className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up"
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
                >
        {seoSolutionForYourBusiness.map((item, index) => (
          
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
        </motion.div>
        </Wrapper>
      <Wrapper >
        <motion.div
        className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[6.25rem] text-center pt-[2.43rem] lg:pt-[3.875rem] animate-fade-up "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        >
        <h2 className="md:text-center text-left text-2xl text-[35px] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[130%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal xl:px-[11.275rem] ">
        {section4?.content.title}
        </h2>
        <motion.p 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%] lg:px-[3.875rem] xl:px-[7.875rem] text-left md:text-center">
        {section4?.content.description}
        </motion.p>
        </motion.div>
      </Wrapper>

      <Wrapper >
      <motion.div 
          className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up"
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
        >
        {seoAduitProcess.map((item, index) => (
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
        </motion.div>
      </Wrapper>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[4.25rem] text-center pt-[2.43rem] lg:pt-[4rem] animate-fade-up ">
        <motion.h2 
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
         viewport={{ once: false, amount: 0.3 }}
        className="text-center text-2xl text-[40px] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[140%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal xl:px-[4.275rem]  ">
        {section6?.content.title}
        </motion.h2>
      </Wrapper>

      <Wrapper className="">
        <Wrapper className="bg-white w-full rounded grid py-[1.875rem] lg:py-[4rem]  md:grid-cols-2 gap-12 place-items-center animate-fade-up lg:px-[2.5rem] ">

          {benefitOfSeo.map((item, index) => (
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
      </Wrapper>

      <Faq items={(section7!.content.faq)}/>
      <SectionCard />
      <Footer />
    </Fragment>
  );
}
