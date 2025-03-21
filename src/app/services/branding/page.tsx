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
export default function Branding() {
  const { brandingPageData } = useBrandingPage();
  if (
    !brandingPageData ||
    !brandingPageData.content ||
    brandingPageData.content.length == 0
  ) {
    return <Preloader />;
  }

  console.log("Branding page", brandingPageData);

  return (
    <div>
      <div className="md:space-y-[5rem] space-y-9">
      <HeroLayout backgroundImage="/images/braning_service.png" full={true}>
        <h1 className="text-2xl md:text-7xl  font-baskerville text-[43px] leading-[1.2] md:mt-0 mt-10">
          {" "}
          Elevate Your Business Through Cohesive Branding
        </h1>
        <BookACallBtn/>
      </HeroLayout>
      <Wrapper className="space-y-[5rem]">
        <Approach />
        <ContentFormat />
        <ContentMarketing />
        <WhyUs />
      </Wrapper>
      <Faq />
        <SectionCard />
      </div>
      <BrandBoost />
      <Footer />
    </div>
  );
}
