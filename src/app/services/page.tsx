import { ArrowUpRight } from "lucide-react";
import HeroLayout from "../components/hero_section";
import Image from "next/image";
import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";
import Link from "next/link";
import Wrapper from "../components/wrapper";
export default function ServicePage() {
  const serviceType = [
    {
      name: "Branding",
      description:
        "From logo and web design to brand ethos, expert guidance on how to reach your audience and convert them into clients",
      link: "/services/branding",
      imageUrl: "/images/service1.png",
    },
    {
      name: "SEO",
      description:
        "Tailored to your site's structure for better crawling and indexing. Beat the competition.​",
      link: "/services/seo",
      imageUrl: "/images/service2.png",
    },
    {
      name: "Paid Media",
      description:
        "Help with the entire process, including budget, keyword analysis, and retargeting your Google, Meta & Amazon Ads.​",
      link: "/services/paid-media",
      imageUrl: "/images/service3.png",
    },
    {
      name: "Press",
      description:
        "Top-tier press features through our direct to publisher relationships.",
      link: "/services/press",
      imageUrl: "/images/service5.png",
    },
    {
      name: "Social",
      description:
        "Maintenance and growth of a social presence, along with team development.​",
      link: "/services/social-media",
      imageUrl: "/images/service6.png",
    },
    {
      name: "Web Development",
      description:
        "Top-tier press features through our direct to publisher relationships.​",
      link: "/services/website",
      imageUrl: "/images/service4.png",
    },
  ];
  return (
    <div >
      <div className="space-y-[5.5rem]">
      <HeroLayout full={true} backgroundImage="/images/services_bg.png">
        <h1 className="text-3xl md:text-7xl  font-baskerville">Our Services</h1>
      </HeroLayout>
      <Wrapper>
        <div className="items-center text-center animate-fade-up">
          <div className="w-full items-center flex justify-center flex-col">
            <h1 className="text-center text-xl md:text-6xl font-baskerville max-w-[900px] leading-relaxed">
              We Offer Various Services To Fit Your Brand
            </h1>
            <p className="text-sm max-w-xl font-geist text-[#66717B] mt-6 mb-[3rem] leading-relaxed">
              'Digital branding' is a comprehensive marketing strategy which
              involves bespoke organic & paid search, social media, press, and
              alternative marketing tactics to develop and authenticate a brand
              across a wide range of avenues.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-9 animate-fade-left">
          {serviceType.map((item, index) => (
            <div key={index} className="bg-white w-full h-full p-4 items-center">
              <Image
                src={item.imageUrl}
                alt="Service Image"
                width={400}
                height={300}
                className="w-full"
              />
              <h2 className="text-2xl font-baskerville py-2">{item.name}</h2>
              <div>
                <p className="max-w-[250px] font-geist text-xs leading-relaxed text-[#66717B]">
                  {item.description}
                </p>
              </div>
              <Link href={item.link}>
                <div className="flex space-x-2 items-center py-2">
                  <h3 className="text-xs font-geist">See More</h3>
                  <ArrowUpRight size={15} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Wrapper>
      </div>
      <BrandBoost />
      <Footer />
    </div>
  );
}
