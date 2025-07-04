// App.tsx
// Note: We are now using CDN links for Swiper to resolve the previous import errors.

'use client';

import React, { useState, useRef, useEffect } from 'react';
// Import Swiper React components from CDN
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules from CDN
import type { Swiper as SwiperCore } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';





// --- Main Video Slider Component ---
 const ImageSlider = () => {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);
  const swiperRefV2 = useRef<SwiperCore | null>(null);

  // Effect to load Swiper CSS dynamically
  useEffect(() => {
    const swiperLink = document.createElement('link');
    swiperLink.rel = 'stylesheet';
    swiperLink.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper.min.css';
    document.head.appendChild(swiperLink);

    const navigationLink = document.createElement('link');
    navigationLink.rel = 'stylesheet';
    navigationLink.href = 'https://cdn.jsdelivr.net/npm/swiper@11/modules/navigation.min.css';
    document.head.appendChild(navigationLink);

    return () => {
        // Cleanup the links when the component unmounts
        document.head.removeChild(swiperLink);
        document.head.removeChild(navigationLink);
    };
  }, []);

  interface ImageData {
  id: number;
  url: string;
  title: string;
  orientation: 'portrait' | 'landscape';
}

// More portrait than landscape images, as requested.
const imageData: ImageData[] = [
  { id: 2, url: '/images/image_sliders/image2.jpg', title: 'Mountain Range', orientation: 'landscape' },
    { id: 8, url: '/images/image_sliders/image8.PNG', title: 'Desert Dunes', orientation: 'portrait' },
     { id: 14, url: '/images/image_sliders/image14.png', title: 'Desert Dunes', orientation: 'portrait' },
  { id: 5, url: '/images/image_sliders/image5.jpg', title: 'Ocean Waves', orientation: 'landscape' },
  { id: 6, url: '/images/image_sliders/image6.jpg', title: 'Forest Path', orientation: 'portrait' },
  { id: 1, url: '/images/image_sliders/image1.jpg', title: 'Serene View', orientation: 'portrait' },
    { id: 7, url: '/images/image_sliders/image7.jpg', title: 'Desert Dunes', orientation: 'portrait' },
  
    { id: 10, url: '/images/image_sliders/image10.PNG', title: 'Desert Dunes', orientation: 'portrait' },
    { id: 11, url: '/images/image_sliders/image11.PNG', title: 'Desert Dunes', orientation: 'portrait' },
    { id: 12, url: '/images/image_sliders/image12.PNG', title: 'Desert Dunes', orientation: 'portrait' },
    // { id: 13, url: '/images/image_sliders/image13.PNG', title: 'Desert Dunes', orientation: 'portrait' },
   
    // { id: 15, url: '/images/image_sliders/image15.jpg', title: 'Desert Dunes', orientation: 'portrait' },
    // { id: 16, url: '/images/image_sliders/image16.jpg', title: 'Desert Dunes', orientation: 'portrait' },
];


  const handleSlideChange = () => {
    setPlayingVideoId(null); // Stop video when sliding
  };

  return (
    <>
     <div className=" w-full hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-[10px]">
            <motion.h2 
            className="text-3xl md:text-6xl font-baskerville  text-center md:text-left"
            initial="hidden"
            animate="visible"
          >
            Our Static Work
          </motion.h2>
          {/* Navigation Buttons */}
          <div className="flex space-x-3">
               <motion.button
              onClick={() => swiperRefV2.current?.slidePrev()}
              className="p-3 rounded-full bg-transparent border-[#777777] border-[1px] hover:border-none hover:bg-[#DCD1C5] transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-6 h-6 text-[#777777] hover:text-[#0C2F4D]" />
            </motion.button>
           
           <motion.button
              onClick={() => swiperRefV2.current?.slideNext()}
              className="p-3 rounded-full bg-transparent border-[#777777] border-[1px] hover:border-none hover:bg-[#DCD1C5] transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="w-6 h-6 text-[#777777] hover:text-[#0C2F4D]" />
            </motion.button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRefV2.current = swiper;
          }}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={'auto'}
          className="!pb-12" 
        >
           {imageData.map((image) => (
                <SwiperSlide key={image.id} className="!w-auto">
                    <div className="group">
                        <div
                            className={`
                                rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl
                                md:w-full w-[380px] h-[480px]
                            `}
                        >
                            <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                        </div>
                     
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
    <div className="w-full mt-16 md:hidden block">
        {/* Header using your custom structure */}
        <div className="flex justify-between items-center mb-[10px] mx-[10px]">
            <motion.h2 className="text-3xl md:text-6xl text-center md:text-left">
                Our Static Work
            </motion.h2>
            <div className="flex space-x-3">
                <motion.button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="p-3 rounded-full bg-transparent border-[#777777] border-[1px] hover:border-none hover:bg-[#DCD1C5] transition"
                >
                    <ArrowLeft className="w-6 h-6 text-[#777777] hover:text-[#0C2F4D]" />
                </motion.button>
                <motion.button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="p-3 rounded-full bg-transparent border-[#777777] border-[1px] hover:border-none hover:bg-[#DCD1C5] transition"
                >
                    <ArrowRight className="w-6 h-6 text-[#777777] hover:text-[#0C2F4D]" />
                </motion.button>
            </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            className="!pb-12"
        >
            {imageData.map((image) => (
                // FIXED: Removed !w-auto to allow slide to be full width
                <SwiperSlide key={image.id}>
                    <div className="group">
                        {/* Container for the image */}
                        <div
                            className={`
                                rounded-2xl overflow-hidden shadow-sm 
                                w-full h-[60vh] max-h-[500px] px-2
                                relative
                            `}
                        >
                            {/* Blurred background image */}
                            <img
                                src={image.url}
                                alt=""
                                aria-hidden="true"
                                className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
                                style={{ zIndex: 0, filter: 'blur(24px) brightness(0.85)' }}
                            />
                            {/* Foreground image */}
                            <img
                                src={image.url}
                                alt={image.title}
                                className="relative w-full h-full object-contain z-10"
                                style={{}}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    </>
   
  );

};



export default ImageSlider;