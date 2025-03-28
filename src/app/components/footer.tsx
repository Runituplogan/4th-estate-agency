import React from "react";
import Image from "next/image";
import { InstagramIcon,MailIcon as MailIcon2,LinkedIn } from "./icons/socials";
import LogoImage from "../../../public/images/logov2.png";
import Link from "next/link";
import { LocationIcon, MailIcon, PhoneIcon } from "./icons/contact";
import BrandBoost from "./brand_boost";
import { useFooterPage } from "../context/footerPageContext";
import Preloader from "./preloader";
import { BannerSection, FooterBannerSection, FooterSection1, FooterSection2 } from "../types";
export default function Footer() {
  const {footerPageData} = useFooterPage()
    if (
      !footerPageData ||
      !footerPageData.content ||
      footerPageData.content.length == 0
    ) {
      return <Preloader />;
    }
  
    const banner: FooterBannerSection | undefined = footerPageData?.content?.find(
      (item: any) => item.type === "banner"
    );
    const section1: FooterSection1 | undefined = footerPageData?.content?.find(
      (item: any) => item.type === "section1"
    );
    const section2: FooterSection2 | undefined = footerPageData?.content?.find(
      (item: any) => item.type === "section2"
    );
    const section3: FooterSection2 | undefined = footerPageData?.content?.find(
      (item: any) => item.type === "section3"
    );
    const section4: FooterSection2 | undefined = footerPageData?.content?.find(
      (item: any) => item.type === "section4"
    );
    console.log(banner,"heyo")
  return (
    <>
    <BrandBoost data={banner!}/>
    <footer className="bg-[#F7EFE5] text-gray-800 px-3 md:px-6 py-20">
      <div className="max-w-7xl mx-auto flex justify-around flex-col md:flex-row gap-12">
        <div>
        <Image src={LogoImage} alt="Logo" width={100} height={100} />
          <p className="mt-2 text-md leading-relaxed py-4 text-gray-600 max-w-[500px]">
            {section1?.content[0].description}
          </p>
          <div className="flex items-center space-x-3 mt-4 my-3">
          <Link href={section1?.content[0].socials[0].url!}>
            <MailIcon2/>
        </Link>
        <Link href={section1?.content[0].socials[2].url!}>
          <LinkedIn/>
        </Link>
        <Link href={section1?.content[0].socials[1].url!}>
        <InstagramIcon/>
        </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <h3 className="font-medium text-[#192031]">{section2?.content.title}</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li><a href="" className="hover:text-gray-900">{section2?.content.description[0].name}</a></li>
            <li><a href="/about" className="hover:text-gray-900">{section2?.content.description[1].name}</a></li>
            <li><a href="/services" className="hover:text-gray-900">{section2?.content.description[2].name}</a></li>
            <li><a href="/blogs" className="hover:text-gray-900">{section2?.content.description[3].name}</a></li>
            <li><a href="/contact" className="hover:text-gray-900">{section2?.content.description[4].name}</a></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h3 className=" font-medium text-[#192031]">{section3?.content.title}</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li><a href="/" className="hover:text-gray-900">{section3?.content.description[0].name}</a></li>
            <li><a href="/" className="hover:text-gray-900">{section3?.content.description[1].name}</a></li>
          </ul>
        </div>
        <div className="md:hidden flex justify-between">
        <div>
          <h3 className="font-medium text-[#192031]">{section2?.content.title}</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li><a href="" className="hover:text-gray-900">{section2?.content.description[0].name}</a></li>
            <li><a href="/about" className="hover:text-gray-900">{section2?.content.description[1].name}</a></li>
            <li><a href="/services" className="hover:text-gray-900">{section2?.content.description[2].name}</a></li>
            <li><a href="/blogs" className="hover:text-gray-900">{section2?.content.description[3].name}</a></li>
            <li><a href="/contact" className="hover:text-gray-900">{section2?.content.description[4].name}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-[#192031]">{section4?.content.title}</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <PhoneIcon />
              <span>{section4?.content.description[0].name}</span>
            </li>
            <li className="flex items-center space-x-2">
              <MailIcon/>
              <span>{section4?.content.description[1].name}</span>
            </li>
            <li className="flex items-center space-x-2">
              <LocationIcon />
              {section4?.content.description[2].name}
            </li>
          </ul>
        </div>
        </div>
        <div className="md:hidden block">
        <h3 className=" font-medium text-[#192031]">{section3?.content.title}</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li><a href="/" className="hover:text-gray-900">{section3?.content.description[0].name}</a></li>
            <li><a href="/" className="hover:text-gray-900">{section3?.content.description[1].name}</a></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h3 className="font-medium text-[#192031]">{section4?.content.title}</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <PhoneIcon />
              <span>{section4?.content.description[0].name}</span>
            </li>
            <li className="flex items-center space-x-2">
              <MailIcon/>
              <span>{section4?.content.description[1].name}</span>
            </li>
            <li className="flex items-center space-x-2">
              <LocationIcon />
              <span>{section4?.content.description[2].name}</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}
