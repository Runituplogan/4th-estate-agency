import { Fragment } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";
import { ArrowUpRight } from "lucide-react";
import HeroLayout from "../../components/hero_section";
import ServiceCard from "../../components/service_card";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";
import {
  BrandAwarenessIcon,
  DollarLegIcon,
  GoogleIcon,
  HeartCircleIcon,
  LabResearchIcon,
  MoneyIcon,
  TrackChangesIcon,
  VerifiedIcon,
} from "@/icons";
import Button from "@/app/components/button";

const whyPaidMedia = [
  {
    name: "Traffic & Lead Boost: Maximize ROI with Budget Optimization",
    description:
      "Effective PPC management boosts website traffic and leads by targeting ads on relevant keywords. It maximizes ROI through optimized budget allocation, continuously monitoring and adjusting campaigns for optimal results, ensuring competitiveness in Los Angeles.",
    icon: <DollarLegIcon />,
  },
  {
    name: "Drive Sales and Conversions",
    description:
      "PPC management in Los Angeles will allow you to increase sales and conversions through the best and most targeted keyword research, creatively crafted ad copies, and optimized landing pages. This will ultimately lead to an ROI.",
    icon: <MoneyIcon />,
  },
  {
    name: "Enhance Brand Awareness",
    description:
      "When your target audience sees your business ranking on the keywords that they search for, it will make them aware of your brand. They will consider you an authority and want to learn more about your business. Ultimately, they will convert.",
    icon: <VerifiedIcon />,
  },
  {
    name: "Targeted Advertising to Reach Your Ideal Customers",
    description:
      "The Los Angeles market is a highly contested market to target. In millions of people, there are a couple of thousands of people who are interested in your business. Since the PPC managers know the LA market and the people’s interests well, they help you reach your potential customers.",
    icon: <BrandAwarenessIcon />,
  },
];
const paidMediaManagementServices = [
  {
    name: "Google Ads Management",
    description:
      "Google Ads, also known as Google AdWords, is one of the oldest and most effective advertising networks. Our PPC management Los Angeles team has provided our clients with Google Ads services over the years. We understand this network well and have had a great success rate with it. We assure you that we’ll help you get 100% results with Google ads on your business.",
    icon: <GoogleIcon />,
  },
  {
    name: "Social Media Advertising ",
    description:
      "Social media is the most suitable place to advertise your business as 90% of your target audience hangs out on it. With our social media advertising strategies, which we develop after analyzing your business, we run targeted ads on Facebook, Twitter, Instagram, TikTok, and even LinkedIn. Our ads are well-targeted and run with content that resonates with the LA people, encouraging them to land on your website.",
    icon: <HeartCircleIcon />,
  },
  {
    name: "Campaign Creation & Ad Copy Creation",
    description:
      "Our team will create and set up your Google Ads campaign from scratch, including keyword research, ad group creation, and copywriting. We'll create multiple ad variations and optimize them to achieve the highest conversion rates.",
    icon: <BrandAwarenessIcon />,
  },
  {
    name: "Keyword Research & Competitor Ads Analysis",
    description:
      "If you rank for the wrong keywords, you won’t benefit and will waste your investment. To avoid that, we at 4thEstate, an LA-based PPC management company, conduct thorough keyword research. We find all of the keywords that are the most profitable for your business. To confirm that we're targeting the right keywords, we also analyze the ad campaigns of your business competitors. After collecting all the keywords based on our research and the competitor analysis, we run the ads for you.",
    icon: <LabResearchIcon />,
  },
  {
    name: "Monthly Google Ads Manager Reports",
    description:
      "We create professional monthly Google Ads Manager reports to keep you informed about how your ads are performing for your business. These reports include things like click-through rates, conversation rates, and ROI. With these reports, you can develop better ideas to grow your business.",
    icon: <LabResearchIcon />,
  },
  {
    name: "Conversion-Focused PPC Landing Page Creation and Optimization",
    description:
      "We implement conversion tracking to monitor post-ad click actions like purchases, form submissions, and calls, optimizing campaigns for better ROI. Our PPC management includes creating user-friendly landing pages tailored to your target audience by expert programmers, ensuring visitors stay engaged and convert effectively.",
    icon: <TrackChangesIcon />,
  },
];

export const metadata: Metadata = {
  title: "PPC Management",
};

export default function PaidMediaPage() {
  return (
    <Fragment>
      <HeroLayout
        backgroundImage="/images/media_bg.png"
        className="grid place-content-center  h-full pt-[2.2rem] md:pt-0 "
      >
        <h1 className="text-[2.5rem] md:text-7xl xl:text-[6rem]  font-baskerville tracking-[-0.0002em] leading-[1.2em]  ">
          Expert PPC Management: <br className="hidden md:block " /> Drive
          Sales, Not Just Clicks
        </h1>

        <section className="py-[2rem] sm:py-[2.4rem]  md:py-[2.5rem] grid place-content-center gap-[0.5rem] md:grid-cols-2   ">
          <Button className="bg-[#385065] text-white md:justify-self-end ">
            Book a Free PPC Audit
          </Button>
          <Button className="bg-white text-[#4C5862]  md:justify-self-start">
            Book a Strategy Call
          </Button>
        </section>
      </HeroLayout>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[6.25rem] text-center pt-[2.43rem] lg:pt-[10.875rem] ">
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[140%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          What’s Paid Media? and Why Is It Important To Take Paid Media
          Management?
        </h2>

        <p className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%] ">
          PPC (pay-per-click) is a powerful advertising technique where you bid
          on keywords your customers search for. This helps Google rank your
          business at the top of related search results. Thousands of new
          businesses with great and creative ideas enter the Los Angeles market
          but get beaten by the competition. Most of them neglect PP management
          and the ones that think of it, try to do it themselves. As a business
          owner,  you have many other things to focus on. When you try to do PPC
          yourself, you may lose your investments due to the lack of experience.
          Second, you may not consider all the factors due to insufficient
          time.  This is why getting PPC management is crucial. Furthermore, it
          also gives you the following benefits: 
        </p>
      </Wrapper>

      <Wrapper className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] ">
        {whyPaidMedia.map((item, index) => (
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </Wrapper>

      <Wrapper className="items-center flex flex-col lg:py-[4rem] text-center gap-[2.1rem]  ">
        <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]  lg:px-[3.125rem] tracking-[-0.3%] capitalize text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
          Let 4th Estate Be Your Paid Media Manager and Ensure Success At Your
          Paid Visits
        </h3>

        <figure className="grid lg:grid-cols-[1fr_40rem] justify-between  items-center gap-[3.875rem] ">
          <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[2px] lg:gap-[8px] pb-[2rem]  ">
            {[
              "PPC strategies vary based on business stage and needs, especially in Los Angeles.",
              "Continuous adoption of effective advertising techniques is crucial for success.",
              " Our experienced PPC management team analyzes your business to identify areas for improvement.",
              "We collaborate with you to understand your goals and tailor strategies accordingly.",
              "Thousands of satisfied customers have benefited from our PPC management services.",
              " Serving clients in Los Angeles, Chicago, Burbank, California, and New York. Hire us for profitable PPC outcomes.",
            ].map((item, index) => (
              <li
                key={index}
                className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%]  "
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="relative h-[31.75rem]  rounded-[12.13px] overflow-hidden hidden md:block  ">
            <Image
              src="/images/paid_media1.png"
              alt="Paid Media Image 1"
              fill
              className="object-cover object-center"
            />
          </div>
        </figure>
      </Wrapper>
      <section className="bg-white py-[1.875rem] lg:py-[4rem] ">
        <Wrapper className="flex flex-col  gap-[1.5rem]">
          <h3 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
            Our Paid Media Management Services Include
          </h3>

          <div className="bg-white w-full rounded grid md:grid-cols-2 gap-[1.375rem]  ">
            {paidMediaManagementServices.map((item, index) => (
              <article className="flex flex-col gap-[0.5rem]" key={index}>
                <i className="size-[2rem] lg:size-fit overflow-hidden flex items-center justify-center ">
                  {item.icon}
                </i>
                <h4 className=" text-[1.5rem] lg:text-[2.25rem] leading-[120%] tracking-[-0.3%] align-middle  font-baskerville text-[#1B1B1B] ">
                  {item.name}
                </h4>

                <p className=" text-[0.875rem] leading-[1.5rem]  md:text-[1.125rem] lg:leading-[2.25rem] tracking-[-0.3%] align-middle font-manrope lg:font-geist text-[#66717B] ">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Wrapper>
      </section>
      <Wrapper className="grid grid-cols-1 xl:grid-cols-[1fr_37rem] justify-between  items-center gap-[1.5rem] xl:gap-[3.875rem] xl:pt-[5.875rem] py-[2.1rem] ">
        <figcaption>
          <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
            Other Services that we provide
          </h3>
          <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] ">
            These are other services we provide at 4thEstate that could benefit
            you.
          </p>
          <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[2px]  ">
            {[
              "Social Media Management (Engagement and Growth)",
              "Search Engine Optimization (SEO) (Increase Online Visibility)",
              "Content Creation and Distribution (Engage Your Audience)",
              "Social Media Advertising (Targeted Advertising Campaigns)",
              "Influencer Marketing (Leverage Influencer Relationships)",
              "Analytics and Performance Tracking (Data-Driven Insights)",
              " Website Optimization (Improve User Experience and Conversion Rate)",
              "Email Marketing (Targeted Email Campaigns)",
              "              E-commerce SEO (Optimise Your Online Store for Search Engines)",
            ].map((item, index) => (
              <li
                key={index}
                className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%]  "
              >
                {item}
              </li>
            ))}
          </ul>
        </figcaption>
        <div className="relative w-full h-[24.5rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] ">
          <Image
            src="/images/paid_media2.png"
            alt="Paid Media"
            fill
            className="object-cover object-center"
          />
        </div>
      </Wrapper>
      <Faq />
      <SectionCard />
      <BrandBoost />
      <Footer />
    </Fragment>
  );
}
