import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight} from "lucide-react";
import BlogCard from "./blog_card";
import {blogPosts} from "../data/dummy_blog_data"

export default function BlogPosts() {
  const [startIndex, setStartIndex] = useState(0);
 
  const [postsPerPage, setPostsPerPage] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      setPostsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const visiblePosts = blogPosts.slice(startIndex, startIndex + postsPerPage);
  const nextSlide = () => {
    if (startIndex + 3 < blogPosts.length) setStartIndex(startIndex + 1);
  };

  const prevSlide = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <section className="py-10 px-6 animate-fade-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-baskerville">Read Our Blog Posts</h2>
      </div>
      <div className="flex justify-center space-x-6">
        {visiblePosts.map((post, index) => (
        <BlogCard imageUrl={post.image} link={post.link} title={post.title} key={index}/>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button 
          onClick={prevSlide} 
          className={` p-2 rounded-ful ${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={startIndex === 0}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={nextSlide} 
          className={`p-2 rounded-full  ${
            startIndex + 3 >= blogPosts.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={startIndex + 3 >= blogPosts.length}
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
