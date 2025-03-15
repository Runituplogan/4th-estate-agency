import { ArrowUpRight, Heart } from "lucide-react";
import HeroLayout from "../../components/hero_section";
import SectionCard from "../../components/card_section";
import Image from "next/image";
import BrandBoost from "../../components/brand_boost";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
export default function SocialMediaPage(){
    const socialMediaServices =[
        {
            name:"Increased Brand Awareness",
            description:"Social media is the best way to increase your business awareness. Billions of people use it on a daily basis. By creating content on social media and engaging with your target audience, you make your business's media presence that helps your business get recognized.",
            icon:<Heart size={20} color="#385065"/> 
        },
        {
            name:"Targeted Advertising",
            description:"Social media apps like Instagram, Facebook, and YouTube give targeted advertising options. With this advertising, your business ads or promotional videos are shown only to your target audience, increasing the chances of higher profitability.",
            icon:<Heart size={20} color="#385065"/> 
        },
        {
            name:"Customer Engagement",
            description:"On social media, you get to engage with your target audience in real time through comments, messages, and inquiries. This makes your business trustworthy for the customers.",
            icon:<Heart size={20} color="#385065"/> 
        },
        {
            name:"Cost-Effectiveness",
            description:"Compared to traditional advertising, social media marketing is way cheaper. Also, you get lots of free marketing tools on social media that you can use to get your business recognized.",
            icon:<Heart size={20} color="#385065"/> 
        },
    ]

    const differentSocialMedia = [
        {
            name:"Facebook Advertising",
            icon:"facebook-icon.png" ,
            description:"Facebook is one of the best social media platforms for advertising your business and getting more sales. We at 4th Estate run social media campaigns for you on Facebook with great copywriting, high-quality attractive images, and even videos that get people to land on your business.",
        },
        {
            name:"Instagram Marketing",
            icon:"insta-icon.png" ,
            description:"Instagram is the second largest social media platform after Facebook, where we can advertise your business. Our dedicated social media team is experienced in Instagram marketing and running the most profitable ads.",
        },
        {
            name:"Tiktok Marketing",
            icon:"titok-icon.png" ,
            description:"With such a vast user base, TikTok can be a goldmine for business if you market your business correctly. We understand TikTok users' interests and needs and create our ads accordingly. Our team creates high-quality content with our ads that keep the users engaged and convert.",
        },
        {
            name:"Influencer Marketing",
            icon:"influencer-icon.png" ,
            description:"Influencer marketing leverages the credibility and reach of social media personalities to endorse products or services, fostering trust among their followers. Influencers can efficiently connect brands with specific demographics, gaining social proof and enhancing their online presence at a relatively low cost .",
        },
    ]
    return (
        <div>
        <HeroLayout backgroundImage="/images/social_media.png">
            <h1 className="text-2xl md:text-7xl  font-baskerville">Los Angeles's Most Result-Oriented Social Media Agency</h1>
            <button className="mt-6 px-6 py-3 bg-[#385065] text-white rounded-lg mb-3 md:mb-0 text-sm">
                <div className="flex space-x-2">
                    <span>Book a Free Social Media Audit</span> 
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
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[600px] leading-relaxed">Our Social Media Services For LA & Beyond
                    </h1>
                    <p className="text-xs max-w-4xl text-[#66717B] my-2 leading-relaxed mt-5">There are 4.95 billion social media users, and a big chunk of those users are probably your business’s target audience. Social media marketing ensures that your business reaches that chunk so that your business can go to new heights. Let’s look at some of the other benefits to make it easier for you to understand why social media marketing is the best fit for your business. </p>
            </div>
        </div>
        <div className="md:m-16 m-5">
        <div className="bg-white w-full rounded grid md:grid-cols-2 p-8 gap-8 place-items-center mt-6">
                    {socialMediaServices.map((item,index)=><div className="" key={index}>
                    {item.icon}
                        <h1 className="text-xl md:text-2xl max-w-sm font-baskerville pb-2">{item.name}</h1>
                        <p className="text-[#66717B] text-xs md:max-w-sm leading-relaxed max-w-lg">{item.description}</p>
                    </div>)}
        </div>  
        </div>
        <div className="bg-[#0C2F4D]  px-8">
        <SectionCard title="Social Media Management" imageUrl="social_groups.png" description="Managing social media of the business is crucial for its success and we’ve got you covered with that. We have a dedicated social media management team that is skilled in managing all types of social media accounts, including Pinterest, Instagram, Facebook, Twitter, Snapchat, TikTok, and many more.  When you connect with us, we manage all of your social media accounts, create content on them, and keep them active so that they can generate more sales for you. " showBtn={false} marginStyle="md:m-0 m-0"/>
        </div>
        <div className="items-center text-center md:m-16 m-8">
            <div className="w-full items-center flex justify-center flex-col">
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[600px] leading-relaxed">Our Social Media Services For LA & Beyond
                    </h1>
                    <p className="text-xs max-w-4xl text-[#66717B] my-2 leading-relaxed mt-5">If you want traffic and sales immediately on your business, then 4th Estate also offers PPC marketing services. You have to tell the keyword that you want to show up on the top of the results in Google, and we’ll make that happen for you with PPC marketing.4thEstate offers you all types of social media marketing services. Let us walk you through each of the services that we provide. </p>
            </div>
        </div>
        <div className="md:m-16 m-5">
        <div className="bg-white w-full rounded grid md:grid-cols-2 p-8 gap-8 place-items-center mt-6">
                    {differentSocialMedia.map((item,index)=><div className="" key={index}>
                        <Image src={`/images/${item.icon}`} alt="Social Icons" width={50} height={50}/>
                        <h1 className="text-xl md:text-2xl max-w-sm font-baskerville pb-2">{item.name}</h1>
                        <p className="text-[#66717B] text-xs md:max-w-sm leading-relaxed max-w-lg">{item.description}</p>
                    </div>)}
        </div>  
        </div>
        <div className="md:m-16 m-5 flex flex-col md:flex-row items-center justify-between md:text-base text-xs">
            <div className="mb-2">
            <h1 className="font-baskerville text-2xl w-full md:text-4xl md:max-w-[400px] leading-relaxed">LA's Top-Tier Social Media Marketing Agency 4th Estate</h1>
            <p className="md:max-w-[500px] text-[#66717B] leading-relaxed mt-3">There are hundreds of social media agencies in Los Angeles. What makes us stand out?</p>
            <ul className="text-[#66717B] list-disc">
                <li>
                    <p>
                    Most Result-Oriented
                    </p>
                </li>
                <li>
                    <p>
                    Experienced team
                    </p>
                </li>
                <li>
                    <p>
                    Data-driven strategies
                    </p>
                </li>
                <li>
                    <p>
                    Dedicated account managers
                    </p>
                </li>
                <li>
                    <p>
                    We’re Transparent
                    </p>
                </li>
                <li>
                    <p>
                    5 Star Ratings
                    </p>
                </li>
            </ul>
            </div>
              <Image src="/images/social_image1.png" alt="Paid Media" width={500} height={500}/>
        </div>
        <Faq/>
        <SectionCard/>
        <BrandBoost/>
        <Footer/>
        </div>
    )
}