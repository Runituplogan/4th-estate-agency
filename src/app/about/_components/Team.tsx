"use client";
import Wrapper from "@/app/components/wrapper";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

interface TeamProps{
  data:AboutSection2
}
const Team:React.FC<TeamProps> = ({data}) => {
  const MAX_LENGTH = 100;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const team1DescriptionSplit = data?.content.subContent[0].subTitle.split(';');
  const team2DescriptionSplit = data?.content.subContent[1].subTitle.split(';');
  const team3DescriptionSplit = data?.content.subContent[2].subTitle.split(';');
  const team4DescriptionSplit = data?.content.subContent[3].subTitle.split(';');

  const teamMembers = [
    {
      name: `${data?.content.subContent[0].title}`,
      imagePath: `${data?.content.subContent[0].image}`,
      role: `${team1DescriptionSplit[0]}`,
      description:
       `${team1DescriptionSplit[1]}`,
    },
    {
      name: `${data?.content.subContent[1].title}`,
      imagePath: `${data?.content.subContent[1].image}`,
      role: `${team2DescriptionSplit[0]}`,
      description:
       `${team2DescriptionSplit[1]}`,
    },
    {
      name: `${data?.content.subContent[2].title}`,
      imagePath: `${data?.content.subContent[2].image}`,
      role: `${team3DescriptionSplit[0]}`,
      description:
       `${team3DescriptionSplit[1]}`,
    },
    {
      name: `${data?.content.subContent[3].title}`,
      imagePath: `${data?.content.subContent[3].image}`,
      role: `${team4DescriptionSplit[0]}`,
      description:
       `${team4DescriptionSplit[1]}`,
    },
  ];

  return (
    <Wrapper className="animate-fade-up">
      <h1 className="text-4xl mb-2 md:mb-[3rem] md:text-5xl font-baskerville text-center">
      {data?.content.title}
      </h1>

      <div className="relative w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 50000 }}
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1 },
            450: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {teamMembers.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full">
                <div className="w-full h-[400px] overflow-hidden">
                  <Image
                    src={item.imagePath}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-bold text-md mb-2">{item.name}</h3>
                  <h3 className="text-[#66717B] mb-2">{item.role}</h3>
                  <p className="text-[#66717B] text-sm max-w-[300px]">
                    {expandedIndex === index
                      ? item.description
                      : `${item.description.slice(0, MAX_LENGTH)}...`}
                  </p>
                  {item.description.length > MAX_LENGTH && (
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-blue-500 transition-all text-xs duration-300 ease-in-out"
                    >
                      {expandedIndex === index ? "See less" : "See more"}
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" justify-center mt-6 space-x-6 flex md:justify-end lg:hidden">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 rounded-full bg-transparent border-[#777777] border-[1px] hover:border-none hover:bg-[#DCD1C5] transition"
          >
            <ArrowLeft className="w-6 h-6 text-[#777777] hover:text-[#0C2F4D]" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 rounded-full bg-transparent border-[#777777] border-[1px] hover:border-none hover:bg-[#DCD1C5] transition"
          >
            <ArrowRight className="w-6 h-6 text-[#777777] hover:text-[#0C2F4D]" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Team;
