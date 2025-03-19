import { ArrowUpRight, Heart } from "lucide-react";
import HeroLayout from "../../components/hero_section";
import Image from "next/image";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";
import { Metadata } from "next";
import { Fragment } from "react";
import Button from "@/app/components/button";
import Wrapper from "@/app/components/wrapper";
import {
  DesignServicesIcon,
  LayerIcon,
  LicenceMaintenanceDraftIcon,
  MagicpenIcon,
  VerifiedIcon,
  WebIcon,
} from "@/icons";
import { LocalIcon } from "@/icons/local";

export const metadata: Metadata = {
  title: "Web Development",
};

const websiteServices = [
  {
    name: "Bespoke Design",
    description:
      "Customers see your web design before they get to your product. If a poor color scheme is used in it, it's not appealing or not convenient to use; then customers won't feel like making a purchase. However, a beautiful website that is easy to use and pleasing to the eyes will surely add to your ROI and convert most visitors.",
    icon: <MagicpenIcon />,
  },
  {
    name: "Responsive Web Designs",
    description:
      "Many of Los Angeles's population use and shop from phones. If your website isn't mobile responsive, it won't look good on mobile and phones. It won’t be able to keep the visitors longer on your website.",
    icon: <LayerIcon />,
  },
  {
    name: "Showcasing Brand Identity",
    description:
      "In LA, businesses can use web design to show off their vibe and stand out. A website is like a virtual shop window, where locals can get a feel for a business. It's a great way to connect with customers and show what makes a brand special.",
    icon: <VerifiedIcon />,
  },
  {
    name: "Local Expertise",
    description:
      "LA market is a separate world with such a huge population where people have their own trends, design preferences and interests. When you create a web design for your business according to the interests, design preferences and cultural nuances of LA",
    icon: <LocalIcon />,
  },
];

const ourServiceInLA = [
  {
    name: "UX/ UX Design",
    description:
      "Not only do we just make the page look good, but we also make it convenient for the users to use. We create a clear layout, intuitive navigation bar and buttons on the website that are easy for the users to use. This improves the user's overall UX and helps them easily use your business website.",
    icon: <DesignServicesIcon />,
  },
  {
    name: "E-commerce Web Design",
    description:
      "We also design the best Ecommerce websites for you that help you outrank your competitors and get more sales. If you want us to design your existing website or you want us to create a new one for you from scratch, we can do both for you.",
    icon: <WebIcon />,
  },
  {
    name: "WordPress Web Design",
    description:
      "If your website is on WordPress and you want it to be designed professionally and beautifully, then 4th Estate will help you. Our team can create a WordPress website for you from scratch and make it SEO-optimized, attractively designed and user-friendly.",
    icon: <LayerIcon />,
  },
  {
    name: "Website Maintenance",
    description:
      "After creating the web design, we also matina our website to keep them fresh. We keep checking the code and also solve if any issues arise in the future. We keep in touch with our clients, and whenever they have any issues, they can easily resolve them by contacting us.",
    icon: <LicenceMaintenanceDraftIcon />,
  },
];

export default function WebsiteServicePage() {
  return (
    <Fragment>
      <HeroLayout
        backgroundImage="/images/website-bg.png"
        className="grid place-content-center  h-full pt-[2.2rem] md:pt-0 md:px-[2rem] "
        full={true}
      >
        <h1 className="text-[2.5rem] md:text-7xl pt-20 md:pt-0 xl:text-[6rem]  font-baskerville tracking-[-0.0002em] leading-[1.2em]  capitalize ">
          Professional Web Design Services in LA
        </h1>

        <section className="py-[2rem] sm:py-[2.4rem]  md:py-[2.5rem] grid place-content-center gap-[0.5rem] md:grid-cols-2   ">
          <Button className="bg-[#385065] text-white md:justify-self-end ">
            Book a Free Website Audit
          </Button>
          <Button className="bg-white text-[#4C5862]  md:justify-self-start">
            Book a Strategy Call
          </Button>
        </section>
      </HeroLayout>

      <Wrapper className="w-full items-center flex justify-center flex-col py-[1.875rem] lg:py-[4rem] animate-fade-up lg:px-[12rem] text-center ">
        <h3 className="text-center text-2xl text-[45px] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          An Elite Web Design Service in LA
        </h3>
        <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] ">
          Most LA-based businesses invest heavily into building their online
          presence and website and making their products useful. However, the
          thing that most of them overlook is the web design. Web design is what
          your potential customers will be interacting with. If it’s not
          professionally created, the customers are more likely not to consider
          you an authority and may fall off to another website. 
        </p>
      </Wrapper>

      <Wrapper>
        <Wrapper
          as="ul"
          className="bg-white mb-[1rem] md:mb-[2rem] lg:mb-[4rem] xl:mb-[6rem] w-full  grid md:grid-cols-2 gap-[1.375rem]  py-[1.875rem] lg:py-[2.8rem] animate-fade-up  rounded-[8px] lg:px-[2.5rem] "
        >
          {websiteServices.map((item, index) => (
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
      </Wrapper>

      <section className="bg-white py-[2rem] lg:py-[4rem]">
        <Wrapper className="flex flex-col gap-[4rem]">
          <figure className="grid grid-cols-1 xl:grid-cols-[1fr_37rem] justify-between  items-center gap-[1.5rem] xl:gap-[4.2rem] ">
            <figcaption>
              <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
                Top Notch Web Design in LA
              </h3>
              <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] flex flex-col gap-[1rem]">
                <span>
                  At 4th Estate, we have a team of experienced full-stack
                  developers who can design and build websites. They create the
                  best websites considering the local trends, cultural
                  preferences and interests of Los Angeles people in their mind.
                </span>
                <span>
                  They can also develop the best websites for you that load
                  faster, look attractive and also created specifically for your
                  business, meeting all of its requirements. 
                </span>
              </p>
            </figcaption>
            <div className="relative w-full h-[17.75rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] ">
              <Image
                src="/images/website1.png"
                alt="Paid Media"
                fill
                className="object-cover object-center"
              />
            </div>
          </figure>
          <figure className="flex flex-col-reverse xl:grid xl:grid-cols-[37rem_1fr] justify-between  items-center gap-[1.5rem] xl:gap-[4.2rem] ">
            <div className="relative w-full h-[21.4375rem] lg:h-[32rem]  xl:h-full overflow-hidden rounded-[0.75rem] ">
              <Image
                src="/images/website2.png"
                alt="Paid Media"
                fill
                className="object-cover object-center"
              />
            </div>
            <figcaption>
              <h3 className=" xl:text-[4rem] font-baskerville xl:leading-[140%]   tracking-[-0.3%] capitalize  text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] ">
                Professional Web Design Services in Los Angeles
              </h3>
              <p className="font-geist text-[0.875rem] md:text-[1.25rem] md:leading-[2.25rem] lg:tracking-[-0.2%] leading-[1.875rem] tracking-[-0.3%] text-[#66717B] pt-[1.5rem] flex flex-col gap-[1rem] md:mb-0 mb-5">
                we’re LA’s Best Social Web Design Services. It’s not what we say
                but what our customers say about our services. Over the years,
                we’ve created hundreds of web designs and helped our customers
                to improve their CTR(Click Through Rate) and, ultimately, their
                ROI. 
              </p>
              <ul className="list-disc px-[1rem] text-[#66717B] leading-relaxed md:text-base text-xs text-left font-geist flex flex-col gap-[2px]  ">
                {[
                  "We Create Unique Design",
                  "Best Programmers",
                  "We’re Transparent",
                  "Punctual",
                  "Performance-driven Agency",
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
          </figure>
        </Wrapper>
      </section>

      <Wrapper className="w-full items-center flex justify-center flex-col pt-[1.875rem] lg:pt-[4rem] animate-fade-up lg:px-[12rem] text-center ">
        <h3 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal ">
          Our Web Design Services in Los Angeles
        </h3>
      </Wrapper>
      <Wrapper
        as="ul"
        className="w-full  grid md:grid-cols-2 gap-[1.375rem]  pt-[1.875rem] lg:pt-[4rem] animate-fade-up  rounded-[8px] "
      >
        {ourServiceInLA.map((item, index) => (
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
      <Faq />
      <SectionCard />
      <BrandBoost />
      <Footer />
    </Fragment>
  );
}
