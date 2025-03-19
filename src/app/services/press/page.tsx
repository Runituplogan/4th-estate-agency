import HeroLayout from "../../components/hero_section";
import Image from "next/image";
import ServiceCard from "../../components/service_card";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";
import { Metadata } from "next";
import { Fragment } from "react";
import Button from "@/app/components/button";
import Wrapper from "@/app/components/wrapper";
import {
  BrandAwarenessIcon,
  BulbIcon,
  ChartLineIcon,
  ChartSquareIcon,
  IntegrationInstructionsIcon,
  NewsIcon,
  PieChartIcon,
  PublicIcon,
  TargetIcon,
  TrayGrowthChartIcon,
  VideoIcon,
} from "@/icons";
import Link from "next/link";
import BookACallBtn from "@/app/components/BookACallBtn";

export const metadata: Metadata = {
  title: "Press",
};

const prTailoredForBusiness = [
  {
    name: "Media Outreach & Relations",
    description:
      "We develop contacts with journalists and influencers to get your brand featured in the media. Product mentions and brand stories are published in top-tier media and publications within your industry. We follow an ethical approach so that you have a say in who features your brand.",
    icon: <VideoIcon />,
  },
  {
    name: "Customizable Digital PR Strategies",
    description:
      "Your digital PR strategy begins with the end goals you want to achieve. Whether it's enhancing your website's value, targeting specific audiences, telling compelling stories, or being featured on preferred websites, we tailor a strategy focused on driving measurable value.",
    icon: <ChartSquareIcon />,
  },
  {
    name: "Creative Campaigns & Consumer PR",
    description:
      "We deliver coverage across relevant publications and increase brand awareness through innovative campaigns tailored to your business values and customer insights. Our ideas cut through the noise to drive bottom-line impact.",
    icon: <BrandAwarenessIcon />,
  },
  {
    name: "Reactive PR & Newsjacking",
    description:
      "Our team keeps a close eye on the news cycle, identifying opportunities to place your brand in the spotlight. We proactively insert your expertise into relevant trends and stories, ensuring your brand stays relevant and visible.",
    icon: <ChartLineIcon />,
  },
  {
    name: "Customer Engagement",
    description:
      "Ensure your team is ready to respond to journalist requests with our Press Office Function. We identify your internal assets, such as expert spokespeople and proprietary data, positioning your company as a go-to source for expert comments and insights.",
    icon: <PublicIcon />,
  },
  {
    name: "Trade PR & Local PR",
    description:
      "With extensive experience across various sectors, we can share your stories through trade-specific websites and publications. If you have local SEO goals or aspirations to grow in specific areas, our hyperlocal campaigns will place your business at the heart of the local news agenda.",
    icon: <NewsIcon />,
  },
  {
    name: "Resource-Led Digital PR",
    description:
      "Every business has valuable insights to share. We transform your owned data and internal expertise into newsworthy resources like reports, white papers, and guides that earn valuable links and drive traffic.",
    icon: <BulbIcon />,
  },
  {
    name: "Rapid Growth",
    description:
      "A local fitness startup needed to build brand awareness quickly. A targeted digital PR strategy led to a 60% increase in social media followers and a 25% boost in class sign-ups for a local fitness startup within six months.",
    icon: <TrayGrowthChartIcon />,
  },
];
const keyFeatures = [
  {
    name: "Data-Driven Strategies",
    description:
      "Performance press relies heavily on data and analytics to inform PR strategies. By setting specific, measurable goals, PR professionals can track the effectiveness of campaigns. For example, a study by the Public Relations Society of America found that data-driven PR campaigns are 20% more effective in achieving desired outcomes than traditional PR approaches.",
    icon: <PieChartIcon />,
  },
  {
    name: "Targeted Media Outreach",
    description:
      "Performance press emphasizes reaching the right audience through targeted media placements. This involves selecting publications, blogs, and influencers that align with the brand’s target market. For instance, a PR campaign for a tech startup might target top technology blogs like TechCrunch, Gizmodo, and Wired, which collectively reach over 50 million monthly readers.",
    icon: <TargetIcon />,
  },
  {
    name: "Integration with Marketing",
    description:
      "Performance PR integrates closely with marketing efforts, ensuring PR activities support broader marketing goals. According to a survey by Cision, 78% of marketers believe that integrated PR and marketing campaigns are crucial for achieving business objectives.",
    icon: <IntegrationInstructionsIcon />,
  },
  {
    name: "Continuous Optimization",
    description:
      "Performance press involves ongoing analysis and optimization. By continually assessing the performance of PR activities, strategies can be adjusted to improve results over time. A report by Meltwater showed that businesses using continuous PR optimization saw a 25% improvement in campaign outcomes year-over-year.",
    icon: <ChartLineIcon />,
  },
];

export default function PressPage() {
  return (
    <Fragment>
      <HeroLayout
        backgroundImage="/images/press_bg.png"
        className="grid place-content-center  h-full pt-[2.2rem] md:pt-0 "
        full={true}
      >
        <h1 className="text-2xl text-[40px] md:pt-0 pt-20 md:text-7xl xl:text-[6rem]  font-baskerville tracking-[-0.0002em] leading-[1.2em] capitalize ">
          Performance Focused Digital PR Agency
        </h1>
        <BookACallBtn/>
      </HeroLayout>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] py-[1.5rem]  text-center lg:py-[4rem] animate-fade-up ">
        <h2 className="text-center text-[40px] text-2xl[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[130%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          Digital PR Services Tailored for Your Business
        </h2>
        <p className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%]  ">
          Digital PR is more than just securing big placements and viral
          campaigns; it’s about building measurable strategies that deliver
          relevant and quality results. We help brands across the globe stand
          out online while achieving their business goals. Discover how our
          Services can benefit your business.
        </p>
      </Wrapper>

      <section className="bg-white py-[1.875rem] lg:py-[4rem] animate-fade-up ">
        <Wrapper className="bg-white w-full rounded grid md:grid-cols-2 gap-8 place-items-center">
          {prTailoredForBusiness.map((item, index) => (
            <article className="flex flex-col gap-[0.5rem]" key={index}>
              <i className="size-[2.5rem] lg:size-[4.25rem] overflow-hidden flex items-center justify-center ">
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
        </Wrapper>
      </section>

      <Wrapper className="items-center flex flex-col py-[1.75rem] lg:py-[4rem] text-center gap-[2.1rem]  ">
        <div className="lg:px-[3.125rem] flex flex-col gap-[1rem] ">
          <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
            Performance Press Approach to Digital PR
          </h3>

          <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] ">
            Performance press, also known as performance PR or
            performance-driven press, is a strategic approach to Digital PR that
            focuses on achieving quantifiable results and a high return on
            investment (ROI) from media coverage and PR activities. This method
            uses data and analytics to track and optimize the effectiveness of
            PR campaigns, ensuring that every effort contributes directly to
            business goals.
          </p>
        </div>

        <figure className="grid lg:grid-cols-[1fr_40rem] justify-between  items-center gap-[3.875rem] ">
          <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[0.75rem] lg:gap-[8px] pb-[2rem]  ">
            {[
              " Website traffic: Monitoring the increase in site visitors from PR-generated sources",
              "Conversion Rates: Tracking how many visitors from PR campaigns become customers.",
              " Social Media Engagement: Measuring likes, shares, comments, and follower growth.",
              " Media Coverage Impact: Assessing changes in brand sentiment and awareness.",
              "  ROI: Comparing the cost of PR activities with the value generated, ensuring a positive ROI.",
            ].map((item, index) => (
              <li
                key={index}
                className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%]  "
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="relative h-[26.5rem]  rounded-[12.13px] overflow-hidden hidden md:block  ">
            <Image
              src="/images/press_image1.png"
              alt="Paid Media Image 1"
              fill
              className="object-cover object-center"
            />
          </div>
        </figure>
      </Wrapper>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[3.75rem] text-center  lg:pt-[2.75rem] animate-fade-up ">
        <h2 className="text-center text-2xl text-[30px] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[140%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          Key Features of Performance Press/Digital PR Service
        </h2>
      </Wrapper>

      <Wrapper className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up">
        {keyFeatures.map((item, index) => (
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </Wrapper>

      <Wrapper className="grid grid-cols-1 xl:grid-cols-[1fr_27rem] justify-between  items-center gap-[1.5rem] xl:gap-[3.875rem] xl:pt-[3.875rem] pb-[2.1rem]">
        <figcaption className="flex flex-col gap-[1rem] lg:gap-[0.5rem] ">
          <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
            Why Choose 4th Estate Performance Press Digital PR
          </h3>

          <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col    ">
            {[
              " Enhanced Accountability: Track outcomes like increased traffic and conversions.",
              "Improved ROI: Link PR efforts to financial performance; e.g., a $50K campaign generating $500K in sales.",
              "Informed Decisions: Use data-driven insights to optimize strategies. Aligned Goals: Ensure PR activities meet business objectives like market share growth.",
              " Proven Success: Success stories across various industries.Tailored Strategies: PR based on your goals, product, industry, and audience.",
              "  Expert Team: Experienced PR, content, and digital marketing professionals.",
              " Innovative Approaches: Leverage the latest trends and techniques.",
              " Comprehensive Analytics: Complete campaign analytics with actionable insights.",
              "Client-Centric: Personalized service and support.",
              "Affordable & Transparent: Budget-friendly pricing with no hidden fees.",
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
        <div className="relative w-full h-[24.5rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] md:block hidden items-center">
          <Image
            src="/images/content-image.png"
            alt="Paid Media"
            fill
            className=" object-fill object-center "
          />
        </div>
          <Image
            src="/images/single.png"
            alt="Paid Media"
            width={400}
            height={400}
            className=" object-fill object-center block md:hidden"
          />
      </Wrapper>
      <Faq />
      <SectionCard />
      <BrandBoost />
      <Footer />
    </Fragment>
  );
}
