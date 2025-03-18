import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogCard from "./blog_card";
import { blogPosts } from "../data/dummy_blog_data";
import Wrapper from "./wrapper";
import "swiper/css";

interface BlogPost {
  image: string;
  link: string;
  title: string;
}

export default function BlogPosts() {
  const [slidesPerView, setSlidesPerView] = useState<number>(3);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper className="animate-fade-up">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-baskerville">
          Read Our Blog <br className="md:hidden inline"/> Posts
        </h2>
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={24}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full"
        >
          {blogPosts.map((post: BlogPost, index: number) => (
            <SwiperSlide key={index}>
              <BlogCard
                imageUrl={post.image}
                link={post.link}
                title={post.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-6 mb-9 space-x-6 md:justify-end">
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
}
