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
import { motion } from "framer-motion";

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

      <Wrapper >
        <motion.div className="w-full items-center flex justify-center flex-col py-[1.875rem] lg:py-[4rem] animate-fade-up lg:px-[12rem] text-center ">
        <h3 className="text-center text-2xl text-[45px] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
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

      <Wrapper>
        <Wrapper
          as="ul"
          className="bg-white mb-[1rem] md:mb-[2rem] lg:mb-[4rem] xl:mb-[6rem] w-full  grid md:grid-cols-2 gap-[1.375rem]  py-[1.875rem] lg:py-[2.8rem] animate-fade-up  rounded-[8px] lg:px-[2.5rem] "
        >
          {websiteServices.map((item, index) => (
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

      <section className="bg-white py-[2rem] lg:py-[4rem]">
        <Wrapper className="flex flex-col gap-[4rem]">
          <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // Re-triggers animation when in view
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
              }} 
           className="grid grid-cols-1 xl:grid-cols-[1fr_37rem] justify-between  items-center gap-[1.5rem] xl:gap-[4.2rem] ">
            <motion.figcaption
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
                {section2?.content.title}
              </h3>
              <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
               viewport={{ once: false, amount: 0.3 }}
               className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] flex flex-col gap-[1rem]">
                <span>
                  {section2?.content.description.split(';')[0]}
                </span>
                <span>
                {section2?.content.description.split(';')[1]}
                </span>
              </motion.p>
            </motion.figcaption>
            <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             viewport={{ once: false, amount: 0.3 }}
            className="relative w-full h-[17.75rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] ">
              <Image
                src={`${section2?.content.image}`}
                alt="Paid Media"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </motion.figure>
          <motion.figure className="flex flex-col-reverse xl:grid xl:grid-cols-[37rem_1fr] justify-between  items-center gap-[1.5rem] xl:gap-[4.2rem] ">
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full h-[21.4375rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] ">
              <Image
                src={`${section3?.content.image}`}
                alt="Paid Media"
                fill
                className="object-cover object-center"
              />
            </motion.div>
            <motion.figcaption
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
                {section3?.content.title}
              </h3>
              <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] flex flex-col gap-[1rem] md:mb-0 mb-5">
              {section3?.content.description.split(';')[0]}
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
                {[
                  `${section3?.content.description.split(';')[1]}`,
                  `${section3?.content.description.split(';')[2]}`,
                  `${section3?.content.description.split(';')[3]}`,
                  `${section3?.content.description.split(';')[4]}`,
                  `${section3?.content.description.split(';')[5]}`,
                ].map((item, index) => (
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
          </motion.figure>
        </Wrapper>
      </section>

      <Wrapper className="w-full items-center flex justify-center flex-col pt-[1.875rem] lg:pt-[4rem] animate-fade-up lg:px-[12rem] text-center ">
        <motion.h3 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal ">
          {section4?.content.title}
        </motion.h3>
      </Wrapper>
      <Wrapper
        as="ul"
        className="w-full  grid md:grid-cols-2 gap-[1.375rem]  pt-[1.875rem] lg:pt-[4rem] animate-fade-up  rounded-[8px] "
      >
        {ourServiceInLA.map((item, index) => (
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
      <Faq items={section5!.content.faq}/>
      <SectionCard />
      <Footer />
    </Fragment>
  );
}
