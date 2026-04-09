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


// Define the type for our video data
interface VideoData {
  id: number;
  thumbnailUrl: string;
  youtubeId: string;
  title: string;
}

// --- Data for the videos ---
// Replace with your actual video data
const videoData: VideoData[] = [
  { id: 1, thumbnailUrl: '/images/thumbnails/thumbnail_1.png', youtubeId: 'EAhGFA-zHYk', title: 'Andrea Hanks' },
  { id: 2, thumbnailUrl: '/images/thumbnails/thumbnail_2.png', youtubeId: 'hHxQFJ5izqk', title: 'Manuel Cortes' },
  { id: 3, thumbnailUrl: '/images/thumbnails/thumbnail_3.png', youtubeId: 'vGuk0aBRKSw', title: 'John Doe' },
  { id: 4, thumbnailUrl: '/images/thumbnails/thumbnail_4.png', youtubeId: 'yJqKXzYLBIs', title: 'Jane Smith' },
  { id: 5, thumbnailUrl: '/images/thumbnails/thumbnail_5.png', youtubeId: 'Zws9zI-wmK4', title: 'Peter Jones' },
];


// --- Play Button Icon Component ---
const PlayIcon = () => (
 <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_661_585" maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="44">
<path d="M0 0H44V44H0V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_661_585)">
<path fillRule="evenodd" clipRule="evenodd" d="M40.579 28.3589C45.1577 25.7134 45.1577 19.1024 40.579 16.4542L17.1902 2.9324C12.6087 0.28415 6.875 3.5924 6.875 8.88615V35.9297C6.875 41.2234 12.6087 44.5317 17.1902 41.8807L40.579 28.3589Z" fill="white"/>
</g>
</svg>
);


// --- Main Video Slider Component ---
 const VideoSlider = () => {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

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

  interface VideoData {
  id: number;
  // URL to a lightweight poster image (thumbnail)
  posterUrl: string; 
  // URL to your self-hosted video file (.mp4, .webm)
  videoUrl: string;  
  title: string;
}

// --- Sample Data with Self-Hosted Video URLs ---
// Replace these with links to your actual video files and posters.
const videoData: VideoData[] = [
  // Example using generic placeholder videos. 
  // For your project, upload your video files to a CDN or hosting service.
    { id: 11, posterUrl: '/images/thumbnails/5.png', videoUrl: '/videos/5.mp4', title: 'Peter Jones' },
  { id: 3, posterUrl: '/images/thumbnails/3.jpg', videoUrl: '/videos/Gabby.mp4', title: 'John Doe' },
  // { id: 2, posterUrl: '/images/thumbnails/2.jpg', videoUrl: '/videos/Lamb_reel.mp4', title: 'Manuel Cortes' },
  // { id: 1, posterUrl: '/images/thumbnails/1.jpg', videoUrl: '/videos/3.mp4', title: 'Andrea Hanks' },
  { id: 5, posterUrl: '/images/thumbnails/5.jpg', videoUrl: '/videos/1.mp4', title: 'Peter Jones' },
  { id: 10, posterUrl: '/images/thumbnails/4.0.png', videoUrl: '/videos/4.mp4', title: 'Peter Jones' },

  { id: 12, posterUrl: '/images/thumbnails/6.0.png', videoUrl: '/videos/6.mp4', title: 'Peter Jones' },
  { id: 13, posterUrl: '/images/thumbnails/7.0.png', videoUrl: '/videos/7.mp4', title: 'Peter Jones' },
  { id: 14, posterUrl: '/images/thumbnails/8.0.png', videoUrl: '/videos/8.mp4', title: 'Peter Jones' },
  // { id: 4, posterUrl: '/images/thumbnails/4.jpg', videoUrl: '/videos/hrsc.mp4', title: 'Jane Smith' },
];
  const handlePlay = (id: number) => {
    setPlayingVideoId(id);
  };

  const handleSlideChange = () => {
    setPlayingVideoId(null); // Stop video when sliding
  };

  return (
    <div className=" w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-[10px]">
            <motion.h2 
            className="text-3xl md:text-6xl font-baskerville  text-center md:text-left"
            initial="hidden"
            animate="visible"
          >
           Our Video Work
          </motion.h2>
          {/* Navigation Buttons */}
          <div className="flex space-x-3">
               <motion.button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-3 rounded-full bg-transparent border-[#777777] border-[1px] hover:border-none hover:bg-[#DCD1C5] transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-6 h-6 text-[#777777] hover:text-[#0C2F4D]" />
            </motion.button>
           
           <motion.button
              onClick={() => swiperRef.current?.slideNext()}
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
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={'auto'}
          className="!pb-12" // Add padding-bottom for the titles
        >
          {videoData.map((video) => (
            <SwiperSlide key={video.id} className="!w-auto">
              <div className="w-[320px] sm:w-[350px]">
                <div className="relative w-full h-[480px] bg-gray-900 rounded-2xl overflow-hidden shadow-sm">
                  {playingVideoId === video.id ? (
                    // HTML5 Video Player
                    <video
                      src={video.videoUrl}
                      poster={video.posterUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      controls // Use browser-native controls
                      playsInline // Important for iOS
                    ></video>
                  ) : (
                    // Poster Image and Play Button
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${video.posterUrl})` }}
                    >
                      <div
                        onClick={() => handlePlay(video.id)}
                        className="w-full h-full flex items-center justify-center cursor-pointer group bg-black/20"
                      >
                        <div className="w-16 h-16  rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110 shadow-lg">
                          <PlayIcon />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Video Title */}
                {/* <div className="flex items-center mt-4">
                  <span className="w-5 h-5 bg-gray-300 rounded-full mr-3"></span>
                  <p className="text-lg text-gray-700">{video.title}</p>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};



export default VideoSlider;