import HeroLayout from "../../components/hero_section";
import SectionCard from "../../components/card_section";
import Image from "next/image";
import BrandBoost from "../../components/brand_boost";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import { Metadata } from "next";
import { Fragment } from "react";
import Button from "@/app/components/button";
import Wrapper from "@/app/components/wrapper";
import {
  AddBusinessIcon,
  BrandAwarenessIcon,
  ChatIcon,
  FacebookIcon,
  InstagramIcon,
  MoneyIcon,
  SpeakerIcon,
  TiktokIcon,
} from "@/icons";
// import { useSocialsPage } from "../../context/socialPageContext";
// import Preloader from "@/app/components/preloader";

export const metadata: Metadata = {
  title: "Social Media",
};

const socialMediaServices = [
  {
    name: "Increased Brand Awareness",
    description:
      "Social media is the best way to increase your business awareness. Billions of people use it on a daily basis. By creating content on social media and engaging with your target audience, you make your business's media presence that helps your business get recognized.",
    icon: <AddBusinessIcon />,
  },
  {
    name: "Targeted Advertising",
    description:
      "Social media apps like Instagram, Facebook, and YouTube give targeted advertising options. With this advertising, your business ads or promotional videos are shown only to your target audience, increasing the chances of higher profitability.",
    icon: <BrandAwarenessIcon />,
  },
  {
    name: "Customer Engagement",
    description:
      "On social media, you get to engage with your target audience in real time through comments, messages, and inquiries. This makes your business trustworthy for the customers.",
    icon: <ChatIcon />,
  },
  {
    name: "Cost-Effectiveness",
    description:
      "Compared to traditional advertising, social media marketing is way cheaper. Also, you get lots of free marketing tools on social media that you can use to get your business recognized.",
    icon: <MoneyIcon />,
  },
];

const differentSocialMedia = [
  {
    name: "Facebook Advertising",
    icon: <FacebookIcon />,
    description:
      "Facebook is one of the best social media platforms for advertising your business and getting more sales. We at 4th Estate run social media campaigns for you on Facebook with great copywriting, high-quality attractive images, and even videos that get people to land on your business.",
  },
  {
    name: "Instagram Marketing",
    icon: <InstagramIcon />,
    description:
      "Instagram is the second largest social media platform after Facebook, where we can advertise your business. Our dedicated social media team is experienced in Instagram marketing and running the most profitable ads.",
  },
  {
    name: "Tiktok Marketing",
    icon: <TiktokIcon />,
    description:
      "With such a vast user base, TikTok can be a goldmine for business if you market your business correctly. We understand TikTok users' interests and needs and create our ads accordingly. Our team creates high-quality content with our ads that keep the users engaged and convert.",
  },
  {
    name: "Influencer Marketing",
    icon: <SpeakerIcon />,
    description:
      "Influencer marketing leverages the credibility and reach of social media personalities to endorse products or services, fostering trust among their followers. Influencers can efficiently connect brands with specific demographics, gaining social proof and enhancing their online presence at a relatively low cost .",
  },
];

export default function SocialMediaPage() {
  //   const { socialsPageData } = useSocialsPage();
  //   if (
  //     !socialsPageData ||
  //     !socialsPageData.content ||
  //     socialsPageData.content.length == 0
  //   ) {
  //     return <Preloader />;
  //   }

  return (
    <Fragment>
      <HeroLayout
        backgroundImage="/images/social_media.png"
        className="grid place-content-center  h-full pt-[2.2rem] md:pt-0 md:px-[2rem] "
        full={true}
      >
        <h1 className="text-xl text-[40px] md:text-7xl xl:text-[6rem]  font-baskerville tracking-[-0.0002em] leading-[1.2em] capitalize md:pt-0 pt-32">
          Los Angeles's Most Result-Oriented Social Media Agency
        </h1>

        <section className="py-[2rem] sm:py-[2.4rem]  md:py-[2.5rem] grid place-content-center gap-[0.5rem] md:grid-cols-2   ">
          <Button className="bg-[#385065] text-white md:justify-self-end ">
            Book a Free Social Media Audit
          </Button>
          <Button className="bg-white text-[#4C5862]  md:justify-self-start">
            Book a Strategy Call
          </Button>
        </section>
      </HeroLayout>

      <Wrapper className="w-full items-center flex justify-center flex-col py-[1.875rem] lg:py-[4rem] animate-fade-up lg:px-[7rem] text-center ">
        <h3 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          Our Social Media Services For LA & Beyond
        </h3>
        <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] ">
          There are 4.95 billion social media users, and a big chunk of those
          users are probably your business’s target audience. Social media
          marketing ensures that your business reaches that chunk so that your
          business can go to new heights. Let’s look at some of the other
          benefits to make it easier for you to understand why social media
          marketing is the best fit for your business. 
        </p>
      </Wrapper>

      <Wrapper
        as="ul"
        className="bg-white mb-[1rem] md:mb-[2rem] lg:mb-[4rem] xl:mb-[6rem] w-full  grid md:grid-cols-2 gap-[1.375rem]  py-[1.875rem] lg:py-[4rem] animate-fade-up  rounded-[8px] "
      >
        {socialMediaServices.map((item, index) => (
          <article className="flex flex-col gap-[0.5rem] " key={index}>
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

      <section className="bg-[#0C2F4D]  md:px-8">
        <SectionCard
          title="Social Media Management"
          imageUrl="social_groups.png"
          description="Managing social media of the business is crucial for its success and we’ve got you covered with that. We have a dedicated social media management team that is skilled in managing all types of social media accounts, including Pinterest, Instagram, Facebook, Twitter, Snapchat, TikTok, and many more.  When you connect with us, we manage all of your social media accounts, create content on them, and keep them active so that they can generate more sales for you. "
          showBtn={false}
          marginStyle="md:m-0 m-0"
        />
      </section>

      <Wrapper className="w-full items-center flex justify-center flex-col py-[1.875rem] lg:py-[4rem] animate-fade-up lg:px-[7rem] text-center ">
        <h3 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          Our Social Media Services For LA & Beyond
        </h3>
        <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] ">
          If you want traffic and sales immediately on your business, then 4th
          Estate also offers PPC marketing services. You have to tell the
          keyword that you want to show up on the top of the results in Google,
          and we’ll make that happen for you with PPC marketing.4thEstate offers
          you all types of social media marketing services. Let us walk you
          through each of the services that we provide. 
        </p>
      </Wrapper>

      <Wrapper
        as="ul"
        className="bg-white w-full  grid md:grid-cols-2 gap-[1.375rem]  py-[1.875rem] lg:py-[4rem] animate-fade-up  rounded-[8px] "
      >
        {differentSocialMedia.map((item, index) => (
          <article className="flex flex-col gap-[0.5rem] " key={index}>
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

      <Wrapper className="grid grid-cols-1 xl:grid-cols-[1fr_37rem] justify-between  items-center gap-[1.5rem] xl:gap-[1.875rem] xl:pt-[5.875rem] py-[2.1rem] ">
        <figcaption>
          <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-2xl text-[45px] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
            LA's Top-Tier Social Media Marketing Agency 4th Estate
          </h3>
          <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] md:mb-0 mb-2 ">
            There are hundreds of social media agencies in Los Angeles. What
            makes us stand out?
          </p>
          <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[2px]  ">
            {[
              "Most Result-Oriented",
              "Experienced team",
              "Data-driven strategies",
              "Dedicated account managers",
              "We’re Transparent",
              "5 Star Ratings",
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
            src="/images/social_image1.png"
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
