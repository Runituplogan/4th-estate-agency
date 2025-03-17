"use client";
import Wrapper from "@/app/components/wrapper";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

const Team = () => {
  const MAX_LENGTH = 100;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const teamMembers = [
    {
      name: "Emma Lombardi",
      imagePath: "/images/teams/team-member4.JPG",
      role: "Senior Project Manager",
      description:
        "Emma strategically plans and executes digital marketing projects, leading teams to deliver innovative campaigns that exceed client expectations and drive measurable results.",
    },
    {
      name: "Logan Maurer",
      imagePath: "/images/teams/team-member3.JPG",
      role: "Head of Web Development",
      description:
        "Logan leads a team of talented developers in crafting innovative, high-performance websites and web applications that are strategically optimized to drive our clients' marketing goals and deliver exceptional user experiences.",
    },
    {
      name: "Adi Attias",
      imagePath: "/images/teams/team-member2.JPG",
      role: "UGC Manager",
      description:
        "Adi strategizes and oversees the integration of user-generated content into our clients' campaigns, collaborating with creative and social media teams to amplify brand authenticity and foster deeper audience engagement across digital platforms.",
    },
    {
      name: "Adel Fares",
      imagePath: "/images/teams/team-member1.JPG",
      role: "Brand Manager",
      description:
        "Adel strategically shapes and amplifies our clients' brands across digital platforms, collaborating with creative teams to deliver cohesive and impactful campaigns that resonate with audiences.",
    },
  ];

  return (
    <Wrapper className="animate-fade-up">
      <h1 className="text-3xl mb-[3rem] md:text-5xl font-baskerville text-center">
        Meet Our Team
      </h1>

      <div className="relative w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
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
                <div className="w-full h-[350px] overflow-hidden">
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
                      className="text-blue-500 transition-all duration-300 ease-in-out"
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
