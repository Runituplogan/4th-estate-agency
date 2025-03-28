import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "./button";
import Wrapper from "./wrapper";
import { BannerSection, FooterBannerSection } from "../types";

interface BrandBoostProps{
  data:FooterBannerSection
}
const BrandBoost:React.FC<BrandBoostProps>=({data})=> {
  console.log(data,"bitchess")
  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] lg:h-[37.68rem] overflow-hidden 
      before:absolute before:inset-0 before:bg-[#00000033] 
      "
    >
      <Image
        src={data?.content[0]?.background_image.url} // Replace with your actual image path
        alt="Ocean waves"
        layout="fill"
        objectFit="cover"
        priority
      />
      <Wrapper className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 gap-[1.5rem] lg:gap-[1.5rem] ">
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[140%] capitalize tracking-[-0.3%] font-normal  ">
          {data?.content[0]?.title}
        </h2>

        <Button className="bg-white text-black">{data?.content[0]?.cta_buttons.text}</Button>
      </Wrapper>
    </section>
  );
}
export default BrandBoost