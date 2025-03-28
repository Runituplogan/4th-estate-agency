"use client";
import {
  ArrowUpRight,
  ChevronUp,
  Medal,
  ShieldCheck,
  StarHalf,
  Target,
  ChartColumn,
  CheckIcon,
  Edit,
  Goal,
  BriefcaseBusiness,
} from "lucide-react";
import HeroLayout from "../../components/hero_section";
import Image from "next/image";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";
import ServiceCard from "../../components/service_card";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import { useBrandingPage } from "@/app/context/brandingPageContext";
import Preloader from "@/app/components/preloader";
import Link from "next/link";
import Wrapper from "@/app/components/wrapper";
import MedalIcon from "@/app/icons/medal";
import TrustIcon from "@/app/icons/trust";
import BoostIcon from "@/app/icons/boost";
import UserStar from "@/app/icons/userStar";
import Approach from "./_component/Approach";
import ContentFormat from "./_component/content-format";
import ContentMarketing from "./_component/content-marketing";
import WhyUs from "./_component/why-us";
import BookACallBtn from "@/app/components/BookACallBtn";
import { BannerSection, FaqData } from "@/app/types";
import { transformFaqData } from "../helper_fn";
export default function Branding() {
  const { brandingPageData } = useBrandingPage();
  if (
    !brandingPageData ||
    !brandingPageData.content ||
    brandingPageData.content.length == 0
  ) {
    return <Preloader />;
  }

  const banner: BannerSection | undefined = brandingPageData?.content?.find(
    (item: any) => item.type === "banner"
  );
  const section1: BrandingSection1 | undefined = brandingPageData?.content?.find(
    (item: any) => item.type === "section1"
  );
  const section2: BrandingSection2 | undefined = brandingPageData?.content?.find(
    (item: any) => item.type === "section2"
  );
  const section3: BrandingSection3 | undefined = brandingPageData?.content?.find(
    (item: any) => item.type === "section3"
  );
  const section4: BrandingSection4 | undefined = brandingPageData?.content?.find(
    (item: any) => item.type === "section4"
  );
  const section5: FaqData | undefined = brandingPageData?.content?.find(
    (item: any) => item.type === "section5"
  );

  console.log("Branding page", brandingPageData);

  return (
    <div>
      <div className="md:space-y-[5rem] space-y-9">
      <HeroLayout backgroundImage={`${banner?.content[0].background_image.url}`} full={true}>
        <h1 className="text-2xl md:text-7xl  font-baskerville text-[43px] leading-[1.2] md:mt-0 mt-10">
          {" "}
        {banner?.content[0].title}
        </h1>
        <BookACallBtn/>
      </HeroLayout>
      <Wrapper className="space-y-[5rem]">
        <Approach data={section1!}/>
        <ContentFormat data={section2!}/>
        <ContentMarketing data={section3!}/>
        <WhyUs data={section4!}/>
      </Wrapper>
      <Faq items={section5?.content.faq!}/>
      <SectionCard />
      </div>
      <Footer />
    </div>
  );
}
