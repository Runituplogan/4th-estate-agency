import { ArrowUpRight, BadgeDollarSign, FileArchiveIcon,Speaker,BadgeCheckIcon,CreditCardIcon,Heart, SearchCheckIcon, TargetIcon } from "lucide-react";
import HeroLayout from "../components/hero_section";
import ServiceCard from "../components/service_card";
import Image from "next/image";
import Faq from "../components/faq";
import SectionCard from "../components/card_section";
import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";

export default function PaidMediaPage(){
    const whyPaidMedia = [
        {
            name:"Traffic & Lead Boost: Maximize ROI with Budget Optimization",
            description:"Effective PPC management boosts website traffic and leads by targeting ads on relevant keywords. It maximizes ROI through optimized budget allocation, continuously monitoring and adjusting campaigns for optimal results, ensuring competitiveness in Los Angeles.",
            icon:<BadgeDollarSign size={20} color="#385065"/> 
        },
        {
            name:"Drive Sales and Conversions",
            description:"PPC management in Los Angeles will allow you to increase sales and conversions through the best and most targeted keyword research, creatively crafted ad copies, and optimized landing pages. This will ultimately lead to an ROI.",
            icon:<CreditCardIcon size={20} color="#385065"/> 
        },
        {
            name:"Enhance Brand Awareness",
            description:"When your target audience sees your business ranking on the keywords that they search for, it will make them aware of your brand. They will consider you an authority and want to learn more about your business. Ultimately, they will convert.",
            icon:<BadgeCheckIcon size={20} color="#385065"/> 
        },
        {
            name:"Targeted Advertising to Reach Your Ideal Customers",
            description:"The Los Angeles market is a highly contested market to target. In millions of people, there are a couple of thousands of people who are interested in your business. Since the PPC managers know the LA market and the people’s interests well, they help you reach your potential customers.",
            icon:<Speaker size={20} color="#385065"/> 
        },
    ]
    const paidMediaManagementServices =[
        {
            name:"Google Ads Management",
            description:"Google Ads, also known as Google AdWords, is one of the oldest and most effective advertising networks. Our PPC management Los Angeles team has provided our clients with Google Ads services over the years. We understand this network well and have had a great success rate with it. We assure you that we’ll help you get 100% results with Google ads on your business.",
              icon:<Speaker size={20} color="#385065"/> 
        },
        {
            name:"Social Media Advertising ",
            description:"Social media is the most suitable place to advertise your business as 90% of your target audience hangs out on it. With our social media advertising strategies, which we develop after analyzing your business, we run targeted ads on Facebook, Twitter, Instagram, TikTok, and even LinkedIn. Our ads are well-targeted and run with content that resonates with the LA people, encouraging them to land on your website.",
              icon:<Heart size={20} color="#385065"/> 
        },
        {
            name:"Campaign Creation & Ad Copy Creation",
            description:"Our team will create and set up your Google Ads campaign from scratch, including keyword research, ad group creation, and copywriting. We'll create multiple ad variations and optimize them to achieve the highest conversion rates.",
              icon:<Speaker size={20} color="#385065"/> 
        },
        {
            name:"Keyword Research & Competitor Ads Analysis",
            description:"If you rank for the wrong keywords, you won’t benefit and will waste your investment. To avoid that, we at 4thEstate, an LA-based PPC management company, conduct thorough keyword research. We find all of the keywords that are the most profitable for your business. To confirm that we're targeting the right keywords, we also analyze the ad campaigns of your business competitors. After collecting all the keywords based on our research and the competitor analysis, we run the ads for you.",
              icon:<SearchCheckIcon size={20} color="#385065"/> 
        },
        {
            name:"Monthly Google Ads Manager Reports",
            description:"We create professional monthly Google Ads Manager reports to keep you informed about how your ads are performing for your business. These reports include things like click-through rates, conversation rates, and ROI. With these reports, you can develop better ideas to grow your business.",
              icon:<SearchCheckIcon size={20} color="#385065"/> 
        },
        {
            name:"Conversion-Focused PPC Landing Page Creation and Optimization",
            description:"We implement conversion tracking to monitor post-ad click actions like purchases, form submissions, and calls, optimizing campaigns for better ROI. Our PPC management includes creating user-friendly landing pages tailored to your target audience by expert programmers, ensuring visitors stay engaged and convert effectively.",
              icon:<TargetIcon size={20} color="#385065"/> 
        },
    ]
    return (
        <div>
        <HeroLayout backgroundImage="/images/media_bg.png">
            <h1 className="text-2xl md:text-7xl  font-baskerville">Expert PPC Management: Drive Sales, Not Just Clicks</h1>
            <button className="mt-6 px-6 py-3 bg-[#385065] text-white rounded-lg mb-3 md:mb-0 text-sm">
                <div className="flex space-x-2">
                    <span>Book a Free PPC Audit</span> 
                    <ArrowUpRight size={20} />
                </div>
                </button>
        <button className="mt-6 px-6 py-3 bg-white text-[#385065] rounded-lg  text-sm md:ml-2">
                <div className="flex space-x-2">
                    <span>Book a Strategy Call</span> 
                    <ArrowUpRight size={20} />
                </div>
                </button>
        </HeroLayout>
        <div className="items-center text-center md:m-16 m-8">
            <div className="w-full items-center flex justify-center flex-col">
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[700px] leading-relaxed">What’s Paid Media? and Why Is It Important To Take Paid Media Management?
                    </h1>
                    <p className="text-xs max-w-4xl text-[#66717B] my-2 leading-relaxed mt-5">PPC (pay-per-click) is a powerful advertising technique where you bid on keywords your customers search for. This helps Google rank your business at the top of related search results. Thousands of new businesses with great and creative ideas enter the Los Angeles market but get beaten by the competition. Most of them neglect PP management and the ones that think of it, try to do it themselves. As a business owner,  you have many other things to focus on. When you try to do PPC yourself, you may lose your investments due to the lack of experience. Second, you may not consider all the factors due to insufficient time.  This is why getting PPC management is crucial. Furthermore, it also gives you the following benefits: </p>
            </div>
        </div>
        <div className="md:m-16 mt-5">
                <div className="grid  md:grid-cols-2 gap-4 w-full ">
                   {whyPaidMedia.map((item,index)=>
                  <ServiceCard key={index} description={item.description} name={item.name} icon={item.icon}/>)}
                </div>
         </div>
         <div className="items-center text-center md:m-16 m-8">
            <div className="w-full items-center flex justify-center flex-col">
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[900px] leading-relaxed">Let 4th Estate Be Your Paid Media Manager and Ensure Success At Your Paid Visits
                    </h1>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:m-16 m-5 items-center">
            <div className="mb-2">
                <ul className="list-disc text-[#66717B] max-w-xl leading-relaxed md:text-base text-xs">
                    <li>
                        <p>PPC strategies vary based on business stage and needs, especially in Los Angeles.</p>
                    </li>
                    <li>
                        <p>Continuous adoption of effective advertising techniques is crucial for success.</p>
                    </li>
                    <li>
                        <p>Our experienced PPC management team analyzes your business to identify areas for improvement.</p>
                    </li>
                    <li>
                        <p>We collaborate with you to understand your goals and tailor strategies accordingly.</p>
                    </li>
                    <li>
                        <p>Thousands of satisfied customers have benefited from our PPC management services.</p>
                    </li>
                    <li>
                        <p>Serving clients in Los Angeles, Chicago, Burbank, California, and New York. Hire us for profitable PPC outcomes.</p>
                    </li>
                </ul>
            </div>
            <Image src="/images/paid_media1.png" alt="Paid Media Image 1" width={500} height={500}/>
        </div>
        <div className="bg-white mt-16 py-8">
        <div className="items-center text-center md:m-16 m-8">
            <div className="w-full items-center flex justify-center flex-col">
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[700px] leading-relaxed">Our Paid Media Management Services Include
                    </h1>
            </div>
        </div>
        <div className="bg-white w-full rounded grid md:grid-cols-2 p-8 gap-8 place-items-center mt-6">
                    {paidMediaManagementServices.map((item,index)=><div className="" key={index}>
                    {item.icon}
                        <h1 className="text-xl md:text-2xl max-w-sm font-baskerville pb-2">{item.name}</h1>
                        <p className="text-[#66717B] text-xs md:max-w-sm leading-relaxed max-w-lg">{item.description}</p>
                    </div>)}
        </div>  
        </div>
        <div className="md:m-16 m-5 flex flex-col md:flex-row items-center justify-between md:text-base text-xs">
            <div className="mb-2">
                <h1 className="font-baskerville text-2xl w-full md:text-4xl md:max-w-[400px] leading-relaxed">Other Services that we provide</h1>
                <p className="md:max-w-[500px] text-[#66717B] leading-relaxed mt-3">These are other services we provide at 4thEstate that could benefit you.</p>
                <ul className="text-[#66717B] list-disc">
                    <li>
                        <p>Social Media Management (Engagement and Growth)</p>
                    </li>
                    <li>
                        <p>Search Engine Optimization (SEO) (Increase Online Visibility)</p>
                    </li>
                    <li>
                        <p>Content Creation and Distribution (Engage Your Audience)</p>
                    </li>
                    <li>
                        <p>Social Media Advertising (Targeted Advertising Campaigns)</p>
                    </li>
                    <li>
                        <p>Influencer Marketing (Leverage Influencer Relationships)</p>
                    </li>
                    <li>
                        <p>Analytics and Performance Tracking (Data-Driven Insights)</p>
                    </li>
                    <li>
                        <p>Website Optimization (Improve User Experience and Conversion Rate)</p>
                    </li>
                    <li>
                        <p>Email Marketing (Targeted Email Campaigns)</p>
                    </li>
                    <li>
                        <p>E-commerce SEO (Optimise Your Online Store for Search Engines)</p>
                    </li>
                </ul>
            </div>
            <Image src="/images/paid_media2.png" alt="Paid Media" width={500} height={500}/>
        </div>
        <Faq/>
        <SectionCard/>
        <BrandBoost/>
        <Footer/>
        </div>
    )
}