import { Search } from "lucide-react";
import HeroLayout from "../components/hero_section";
import BlogCard from "../components/blog_card";
import { blogPosts } from "../data/dummy_blog_data";
import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";
import Wrapper from "../components/wrapper";

export default function BlogPage() {
  const searchTerm = [
    {
      name: "Blog categories",
    },
    {
      name: "View all",
    },
    {
      name: "Design",
    },
    {
      name: "Product",
    },
    {
      name: "Software Development",
    },
    {
      name: "Customer Success",
    },
    {
      name: "Leadership",
    },
    {
      name: "Management",
    },
  ];

  return (
    <div>
      <div>
        <HeroLayout backgroundImage="/images/bg_hero1.png">
          <h1 className="text-3xl md:text-6xl font-baskerville text-center">
            Blog
          </h1>
          <div className="flex bg-white px-4 md:px-6 py-3 rounded-md items-center mt-4 w-full max-w-lg mx-auto text-black shadow-md border border-gray-300 focus-within:border-gray-500 transition">
            <Search color="grey" size={18} />
            <input
              className="border-none w-full ml-2 focus:outline-none bg-transparent placeholder-gray-500 text-sm md:text-base"
              placeholder="Search articles..."
            />
          </div>
          <div className="grid md:grid-cols-8 grid-cols-2 mt-8 text-xs md:text-sm gap-3 text-left">
            {searchTerm.map((item, index) => (
              <p key={index} className="px-3 py-1 cursor-pointer">
                {item.name}
              </p>
            ))}
          </div>
        </HeroLayout>

        <div className="m-16 animate-fade-up">
          <Wrapper>
            <div className="flex flex-wrap gap-6 justify-center">
              {blogPosts.map((post, index) => (
                <div className="w-1/3" key={index}>
                  <BlogCard
                    imageUrl={post.image}
                    link={post.link}
                    title={post.title}
                    key={index}
                  />
                </div>
              ))}
            </div>
          </Wrapper>
        </div>
      </div>
      <BrandBoost />
      <Footer />
    </div>
  );
}
