"use client"
import { useState } from "react";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import HeroLayout from "../components/hero_section";
import BlogCard from "../components/blog_card";
import { blogPosts } from "../data/dummy_blog_data";
import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";
import Wrapper from "../components/wrapper";
import SideChevron from "../icons/side-chevron";

export default function BlogPage() {
  const searchTerm = [
    { name: "Blog categories" },
    { name: "View all" },
    { name: "Design" },
    { name: "Product" },
    { name: "Software Development" },
    { name: "Customer Success" },
    { name: "Leadership" },
    { name: "Management" },
  ];

  const postsPerPage = 9;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="space-y-[5rem]">
        <HeroLayout backgroundImage="/images/bg_hero1.png">
          <h1 className="text-3xl md:text-6xl font-baskerville text-center">Blog</h1>
          <div className="flex bg-white px-4 md:px-6 py-3 rounded-md items-center mt-4 w-full max-w-lg mx-auto text-black shadow-md border border-gray-300 focus-within:border-gray-500 transition">
            <Search color="grey" size={18} />
            <input
              className="border-none w-full ml-2 focus:outline-none bg-transparent placeholder-gray-500 text-sm md:text-base"
              placeholder="Search articles..."
            />
          </div>
          <div className="grid md:grid-cols-8 grid-cols-2 mt-8 text-xs md:text-sm gap-3 place-content-center text-center">
            {searchTerm.map((item, index) => (
              <p key={index} className="px-3 py-1 cursor-pointer font-geist">
                {item.name}
              </p>
            ))}
          </div>
        </HeroLayout>

        <div className="my-14 animate-fade-up">
          <Wrapper>
            <div className="flex flex-wrap gap-6 justify-between">
              {currentPosts.map((post, index) => (
                <div className="md:w-[30%] w-full" key={index}>
                  <BlogCard imageUrl={post.image} link={post.link} title={post.title} />
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="w-full">
              <div className="p-4 w-full">
                <hr className="border-gray-500 border-t-3 mb-4" />
                <div className="flex items-center justify-between font-g">
                  <button
                    className={`cursor-pointer font-geist flex items-center gap-x-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                  >
                    <ArrowLeft/> <span className="md:inline hidden">Previous</span>
                  </button>
                  <span className="font-geist">Page {currentPage} of {totalPages}</span>
                  <button
                    className={`cursor-pointer font-geist flex items-center gap-x-2 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                  >
                    <span className="md:inline hidden">Next</span> <ArrowRight/>
                  </button>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
      <BrandBoost />
      <Footer />
    </div>
  );
}