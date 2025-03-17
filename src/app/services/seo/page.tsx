import HeroLayout from "../../components/hero_section";
import ServiceCard from "../../components/service_card";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";
// import { useSeoPage } from "@/app/context/seoPageContext";
// import Preloader from "@/app/components/preloader";
import { Metadata } from "next";
import Button from "@/app/components/button";
import Wrapper from "@/app/components/wrapper";
import {
  AuditReportIcon,
  BrickIcon,
  BusinessIcon,
  ChartBoldIcon,
  ChartLineIcon,
  ChartSquareIcon,
  ChartUpIcon,
  FillIcon,
  HomeIcon,
  IssueSolidIcon,
  LinkIcon,
  MapIcon,
  MarketingFieldIcon,
  MedicalBagIcon,
  MoneyBagIcon,
  NotesTickIcon,
  OptimzeIcon,
  PublicIcon,
  SearchFillIcon,
  SearchZoomIn,
  SeoFolderIcon,
  SeoIcon,
  ServiceIcon,
  SignalIcon,
  StoreIcon,
  TabReviewIcon,
  TransactionOrderIcon,
  UserIcon,
  VerifiedIcon,
  WorkHistoryIcon,
} from "@/icons";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "SEO",
};

const seoGrowthPlan = [
  {
    name: "Average ROI",
    description:
      "Studies have shown that businesses can expect an average ROI ranging from 5:1 to 20:1 from SEO efforts. The ROI of SEO tends to increase over time as SEO efforts compound and the website's authority and visibility grow in search engines. However, these numbers can vary depending on the factors mentioned earlier.",
    icon: <MoneyBagIcon />,
  },
  {
    name: "Percentage Increase in Traffic",
    description:
      "A successful SEO campaign can lead to a substantial increase in organic search traffic. Depending on the starting point and the level of optimization, businesses may see traffic increases ranging from 20% to 200% or more within the first year of implementing SEO strategies.",
    icon: <ChartUpIcon />,
  },
  {
    name: "Conversion Rate Improvements",
    description:
      "Improvements in website optimization and targeting can lead to higher conversion rates. Even modest improvements in conversion rates, such as 1% to 3%, can translate into significant revenue gains over time.",
    icon: <VerifiedIcon />,
  },
  {
    name: "Revenue Growth",
    description:
      "Businesses that invest in SEO often experience steady revenue growth over time. While it's difficult to provide exact figures, revenue increases of 10% to 50% or more within the first year of implementing SEO strategies are not uncommon for businesses in competitive industries.",
    icon: <ChartLineIcon />,
  },
];

const localBusinessSeo = [
  {
    name: "Brick-and-mortar",
    description:
      "Any business with a physical location, like restaurants, retail stores, salons, gyms, or automotives. People searching for these services will almost always be looking for options nearest to their location. Local SEO helps them find your business!",
    icon: <BrickIcon />,
  },
  {
    name: "Home service providers",
    description:
      "People don't want to wait hours for a plumber who lives across town. Plumbers, electricians, cleaners, and other home service providers depend on local SEO to show up in searches for people in their area.",
    icon: <HomeIcon />,
  },
  {
    name: "Medical professionals",
    description:
      "When someone needs a dentist or doctor or a therapist, they typically want someone convenient. Local SEO helps dentists, doctors, therapists, and other medical providers like MED SPAs attract patients in their area.",
    icon: <MedicalBagIcon />,
  },
  {
    name: "Professional service providers",
    description:
      "Personal Injury Lawyers, accountants, realtors, and other local professionals all rely on getting clients in their area. Local SEO helps them show up in searches for people needing their services.",
    icon: <ServiceIcon />,
  },
];

const howLocalSeoWorks = [
  {
    name: "Keyword Research for Local Searches",
    description:
      "With a 900% surge in 'near me' searches, precise and high value keyword research by 4th Estate results in businesses ranking up higher in local search results. They help drive a significant increase in website traffic from local customers and a higher conversion rate.",
    icon: <SearchZoomIn />,
  },
  {
    name: "Google My Business Optimization",
    description:
      "LA locals rely on Google Maps and search results for business information. 4th Estate offers expert optimization to boost your online visibility on Google Maps and search results. Our team of professionals ensures that potential customers can easily find your business information, such as hours of operation, contact details, and customer reviews.",
    icon: <MapIcon />,
  },
  {
    name: "Website On-Page SEO for Local Businesses",
    description:
      "Optimize your website's content and structure for local search algorithms, improving your search engine rankings and local presence. 4th Estate's on-page SEO strategies range from image optimization to internal content linking, title tags, and meta descriptions.",
    icon: <PublicIcon />,
  },
  {
    name: "Local Citation Building",
    description:
      "Listings on local business directories like Yelp, Angie's List, Yellow Pages, and Google My Business significantly impact consumer decisions, with around 70% of users trusting online reviews and ratings. 4th Estate's authoritative citations increase visibility, promoting a rise in customer trust and loyalty, which is essential for building a strong brand presence.",
    icon: <StoreIcon />,
  },
  {
    name: "Link Building For Local SEO",
    description:
      "Links pass SEO power and authority from one website to another. Getting high quality links from niche relevant as well as local city websites helps rank high on Google. It is also a great way of promoting your business and generating referral traffic. At 4th Estate, we go beyond that and do high quality press releases.",
    icon: <LinkIcon />,
  },
  {
    name: "Online Reputation Management",
    description:
      "As most LA consumers trust online reviews, effective reputation management by 4th Estate ensures a positive brand image among local customers. Our expert team monitors and responds to customer reviews, builds trust, and attracts more business with a strong online reputation management strategy.",
    icon: <TabReviewIcon />,
  },
];

const seoSolutionForYourBusiness = [
  {
    name: "Keyword Research for Local Searches",
    description:
      "We find the words and phrases people in LA search for online and then strategically incorporate those terms into your website content. It will improve your ranking in search results. The higher you rank, the more likely people find your business.",
    icon: <OptimzeIcon />,
  },
  {
    name: "On-Page SEO Optimization for Ecommerce Websites",
    description:
      "We optimize product descriptions, images, titles, and other website elements. It makes it easier for search engines to understand your offerings and show them to the right customers.",
    icon: <FillIcon />,
  },
  {
    name: "Technical SEO Audit & Implementation",
    description:
      "We'll identify technical issues preventing search engines from effectively crawling and indexing your site. We'll then help you fix those issues to ensure your website runs smoothly for search engines and visitors.",
    icon: <SeoFolderIcon />,
  },
  {
    name: "Content Marketing Strategies Tailored for Ecommerce",
    description:
      "It's not just about selling – it's about informing and engaging. We'll help you create valuable content like blog posts, product descriptions, and social media content that attracts potential customers. Also, the goal is to educate them about your products and ultimately persuade them to buy.",
    icon: <MarketingFieldIcon />,
  },
  {
    name: "Local SEO Strategies for Los Angeles Businesses",
    description:
      "Since you're located in LA, we'll help you leverage local SEO tactics to get your business noticed by potential customers searching for products or services in your area. This might involve optimizing your Google My Business listing, building local citations, and creating content that targets local keywords.",
    icon: <BusinessIcon />,
  },
  {
    name: "Dominate Search Engine Results",
    description:
      "Our expertise helps you achieve top rankings on search engine results pages (SERPs) for searches relevant to your products and target audience in LA. This prime real estate translates into more clicks, more website visitors, and, ultimately, more sales.",
    icon: <SearchFillIcon />,
  },
];

const seoAduitProcess = [
  {
    name: "The Opportunity Analysis",
    description:
      "Our team manually uses SEO tools like Ahrefs, Moz, Semrush, and many others to search for high-volume keywords that are less competitive for your website. We ensure that the keywords are relevant to your target audience, their search intent meets what your website provides, and they have an excellent overall trend so that their search doesn’t get specific. We analyze competitors' keywords, content, backlinks, and rankings to refine your SEO strategy effectively.",
    icon: <ChartSquareIcon />,
  },
  {
    name: "Website SEO Audit",
    description:
      "We analyze your website's on-page SEO factors like meta tags, headings, content, URL structure, internal linking, and site speed. By fixing these issues, we help your site rank higher in search engine results. Our team audits content quality, keywords, meta details, titles, and tone. We create high-quality content with integrated keywords, leading to better engagement and Google rankings. We analyze your backlinks for quality, relevance, and diversity to optimize your profile for improved rankings.",
    icon: <TransactionOrderIcon />,
  },
  {
    name: "GMB Audit",
    description:
      "4th estate SEO experts also include the GMB Audit in which they make sure your Google My Business (GMB) listing is fully optimized for local search. This means we optimize your business info, verify your location, manage customer reviews, and use GMB features to boost your online visibility and attract local customers. We review and maintain consistent NAP info across online directories, improving local search rankings and online reputation.",
    icon: <AuditReportIcon />,
  },
  {
    name: "The Strategy & Action Plan",
    description:
      "We identify and fix technical issues like crawling errors, broken links, duplicate content, and site speed through our technical SEO audit, making your website faster, SEO-optimized, and mobile-friendly. On-Page Optimization: Optimize tags, content, links for visibility. Content Development: Create quality pages, blogs for traffic. Link Building: Acquire high-authority links for rankings. Detailed SEO Plan: Goals, tasks, traffic predictions for improvement.",
    icon: <WorkHistoryIcon />,
  },
];

const benefitOfSeo = [
  {
    name: "Identifying Technical Issues",
    description:
      "SEO Audit allows you to determine the technical errors of your websites, including mobile friendliness, page loading speed, broken links, and crawl errors.",
    icon: <IssueSolidIcon />,
  },
  {
    name: "Improving Website Performance",
    description:
      "When you catch the errors, you address and solve them, which results in fast performance and more leads and conversion rates.",
    icon: <SignalIcon />,
  },
  {
    name: "Ensuring Website Compliance",
    description:
      "SEO audits ensure your website complies with search engine guidelines and best practices, reducing the risk of penalties and ranking drops.",
    icon: <NotesTickIcon />,
  },
  {
    name: "Identifying On-Page SEO Opportunities",
    description:
      "The SEO audit also helps you find what’s wrong with the title tags, meta description, content, header, and page design.",
    icon: <SeoIcon />,
  },
  {
    name: "Competitive Analysis",
    description:
      "You get a good insight into your competitors, what they’re good at, and what they’re lacking so you can hit the spot and beat them.",
    icon: <ChartBoldIcon />,
  },
  {
    name: "Enhancing User Experience",
    description:
      "The SEO audit also helps improve the user experience by making the website mobile-friendly and improving its designs, navigation, and website speed.",
    icon: <UserIcon />,
  },
];

export default function SeoPage() {
  //   const { seoPageData } = useSeoPage();
  //   if (!seoPageData || !seoPageData.content || seoPageData.content.length == 0) {
  //     return <Preloader />;
  //   }

  return (
    <Fragment>
      <HeroLayout
        backgroundImage="/images/services_bg.png"
        className="grid place-content-center  h-full pt-[2.2rem] md:pt-0 "
        full={true}
      >
        <h1 className="text-[2.5rem] md:text-7xl xl:text-[6rem]  font-baskerville tracking-[-0.0002em] leading-[1.2em] capitalize ">
          Drive more traffic, leads, and sales to your website
        </h1>
        <section className="py-[2rem] sm:py-[2.4rem]  md:py-[2.5rem] grid place-content-center gap-[0.5rem] md:grid-cols-2   ">
          <Button className="bg-[#385065] text-white md:justify-self-end ">
            Book a Free SEO Audit
          </Button>
          <Button className="bg-white text-[#4C5862]  md:justify-self-start">
            Book a Strategy Call
          </Button>
        </section>
      </HeroLayout>
      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] py-[1.5rem]  text-center lg:py-[4rem] animate-fade-up ">
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[130%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          Business Growth With SEO
        </h2>
        <p className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%]  ">
          Businesses see significant returns on investment from SEO over time.
          Here are some rough stats backed by DATA:
        </p>
      </Wrapper>

      <Wrapper className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up ">
        {seoGrowthPlan.map((item, index) => (
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </Wrapper>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[6.25rem] text-center pt-[2.43rem] lg:pt-[3.875rem] animate-fade-up ">
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[130%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          Local Businesses That Absolutely Need local SEO in LA, CA
        </h2>
        <p className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%] lg:px-[3.875rem] xl:px-[7.875rem] ">
          As a leading SEO agency in LA, we have worked and delivered results
          for various clients across different industries and neighborhoods in
          Los Angeles, such as Beverly Hills, Venice Beach, and Downtown LA.
        </p>
      </Wrapper>

      <Wrapper className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up">
        {localBusinessSeo.map((item, index) => (
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </Wrapper>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[4.25rem] text-center pt-[2.43rem] lg:pt-[4rem] animate-fade-up  ">
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[120%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal xl:px-[10.275rem]  ">
          How Our Local SEO Process Work
        </h2>
      </Wrapper>

      <section className="bg-white py-[1.875rem] lg:py-[4rem] animate-fade-up ">
        <Wrapper className="bg-white w-full rounded grid md:grid-cols-2 gap-8 place-items-center">
          {howLocalSeoWorks.map((item, index) => (
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

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[6.25rem] text-center pt-[2.43rem] lg:pt-[2.875rem] animate-fade-up ">
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[130%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal  ">
          Los Angeles E-commerce SEO Solutions for Your Business
        </h2>
      </Wrapper>

      <Wrapper className="grid  md:grid-cols-2 gap-y-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up">
        {seoSolutionForYourBusiness.map((item, index) => (
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </Wrapper>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[6.25rem] text-center pt-[2.43rem] lg:pt-[3.875rem] animate-fade-up ">
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[130%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal xl:px-[11.275rem] ">
          4th Estate LA-Based SEO Audit Process
        </h2>
        <p className="text-[#66717B] text-[0.875rem] leading-[1.875rem]  md:text-[1.25rem] tracking-[-0.03%] md:leading-[2.25rem] md:tracking-[-0.2%] lg:px-[3.875rem] xl:px-[7.875rem] ">
          We delegate 2 highly experienced SEO experts for your site who have
          analyzed thousands of websites in their careers. There are over 50 SEO
          factors that they make your website go through to audit it and then
          keep noticing the results.  This is how our  4th Estate SEO audit
          works.
        </p>
      </Wrapper>

      <Wrapper className="grid  md:grid-cols-2 gap-[1.25rem] w-full  pb-[3.25rem] lg:pb-[1.5rem] animate-fade-up">
        {seoAduitProcess.map((item, index) => (
          <ServiceCard
            key={index}
            description={item.description}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </Wrapper>

      <Wrapper className="items-center flex justify-center flex-col gap-[1.25rem] px-[2rem] pb-[1.5rem] lg:pb-[4.25rem] text-center pt-[2.43rem] lg:pt-[4rem] animate-fade-up ">
        <h2 className="text-center text-[2.62rem] leading-[2.62rem] md:text-5xl md:leading-[4rem] xl:text-[5.62rem] font-baskerville  xl:leading-[140%] capitalize tracking-[-0.3%] text-[#1B1B1B] font-normal xl:px-[4.275rem]  ">
          Benefits of Getting SEO Audit Services For Your Website
        </h2>
      </Wrapper>

      <Wrapper className="">
        <Wrapper className="bg-white w-full rounded grid py-[1.875rem] lg:py-[4rem]  md:grid-cols-2 gap-8 place-items-center animate-fade-up lg:px-[2.5rem] ">
          {benefitOfSeo.map((item, index) => (
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
      </Wrapper>

      <Faq />
      <SectionCard />
      <BrandBoost />
      <Footer />
    </Fragment>
  );
}
