"use client"
import { ArrowUpRight, ChevronUp, Medal, ShieldCheck, StarHalf,Target , ChartColumn, CheckIcon,Edit,Goal,BriefcaseBusiness,} from "lucide-react";
import HeroLayout from "../../components/hero_section";
import Image from "next/image";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";
import ServiceCard from "../../components/service_card";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import { useBrandingPage } from "@/app/context/brandingPageContext";
import Preloader from "@/app/components/preloader";
import Link from "next/link";
export default function Branding(){
    const {brandingPageData} = useBrandingPage()
          if (!brandingPageData || !brandingPageData.content || brandingPageData.content.length == 0){
            return <Preloader/>
          }
    
          console.log("Branding page",brandingPageData)
    const ourApproach = [
        {
            name:"Cuts through the noise",
            description:"With countless businesses grabbing online attention, high-quality content cuts through the clutter and positions your brand as a thought leader.",
            icon:<Medal size={20} color="#385065"/>
        },
        {
            name:"Builds trust and credibility",
            description:"By consistently providing valuable content, you educate and engage potential customers, building trust and credibility in your brand.",
            icon:<ShieldCheck size={20} color="#385065"/>
        },
        {
            name:"Boosts SEO",
            description:"Search engines love fresh, informative content. Content marketing helps you rank higher in search results, driving organic traffic to your website.",
            icon:<ChevronUp size={20} color="#385065"/>
        },
        {
            name:"Targeted lead generation",
            description:"Content allows you to target specific customer segments with relevant content, attracting qualified leads genuinely interested in your offerings.",
            icon:<StarHalf size={20} color="#385065"/>
        },
    ]

    const contentAndMarketingService =[
        {
            name:"Understand Your Customers",
            description:"We don't use a one-size-fits-all approach. We take the time to understand your brand and target audience. Whether you're selling fitness apparel to health-conscious millennials or sustainable products to eco-friendly families, we'll develop content that speaks directly to their interests.",     
            icon:<BriefcaseBusiness size={20} color="#385065"/>  
        },
        {
            name:"Content with a Goal",
            description:"We don't create generic content. We develop data-driven content plans based on your specific goals. Need to drive traffic to your website showcasing locally-made activewear? We'll create engaging blog posts highlighting the latest fitness trends and featuring your products. We'll craft informative articles with tips for achieving a glowing complexion using your products.",   
            icon:<Goal size={20} color="#385065"/>      
        },
        {
            name:"Go Beyond the Blog",
            description:"We create high-quality content in various formats. It may include social media posts featuring your products in iconic locations, clear website copy that converts visitors into customers. Moreover, our interactive quizzes provide a fun and engaging way to connect with the vibrant LA community, ensuring your brand stays an integral part of their daily experience.",   
            icon:<Edit size={20} color="#385065"/>      
        },
        {
            name:"Targeted Distribution",
            description:"Your content won't just sit on your website. We strategically distribute it across relevant channels to reach your ideal customers. This might involve local online publications popular with your target audience, social media platforms where they're active, and even partnerships with local influencers.",       
            icon:<Target size={20} color="#385065"/>  
        },
        {
            name:"Track Your Success",
            description:"We don't just create content – we track its performance with precise analytics and reporting. This lets us see what's working and what's not so that we can refine your strategy for maximum impact. We'll show you how your content attracts new customers, generates leads, and boosts your business growth in the competitive LA market.",   
            icon:<CheckIcon size={20} color="#385065"/>      
        },

        {
            name:"Long-term growth",
            description:"Effective content marketing is a long-term investment that keeps your brand relevant and fosters ongoing customer relationships. Consistently offering valuable and relevant content, you not only maintain your brand's relevance but also foster ongoing connections with your audience.",       
            icon:<ChartColumn size={20} color="#385065"/>  
        },

    ]
    return(
        <div>
            <HeroLayout backgroundImage="/images/braning_service.png">
                <h1 className="text-2xl md:text-7xl  font-baskerville"> Elevate Your Business Through Cohesive Branding</h1>
                <button className="mt-6 px-6 py-3 bg-[#385065] text-white rounded-lg mb-3 md:mb-0 text-sm">
                    <div className="flex space-x-2">
                        <span>Book a Free Content Audition</span> 
                        <ArrowUpRight size={20} />
                    </div>
                 </button>
                 <Link href="/contact">
                <button className="mt-6 px-6 py-3 bg-white text-[#385065] rounded-lg  text-sm md:ml-2">
                    <div className="flex space-x-2">
                        <span>Book a Strategy Call</span> 
                        <ArrowUpRight size={20} />
                    </div>
                 </button>
                 </Link>
            </HeroLayout>
            <div className="items-center text-center md:m-16 m-8 animate-fade-up">
                <div className="w-full items-center flex justify-center flex-col">
                 <h1 className="text-center text-xl md:text-6xl font-baskerville max-w-[600px] leading-relaxed">Our  Approach</h1>
                 <p className="text-base max-w-4xl text-[#66717B] my-2 leading-relaxed mt-5">In today’s digital world, attention is currency. Content marketing is creating valuable and informative content that attracts your target audience, establishes your brand as an authority, and ultimately drives sales. Here’s why it’s crucial:</p>
                </div>
                <div className="md:m-16 mt-5">
                <div className="grid  md:grid-cols-2 gap-4 w-full  animate-fade-left">
                   {ourApproach.map((item,index)=>
                  <ServiceCard key={index} description={item.description} name={item.name} icon={item.icon}/>)}
                </div>
                </div>
            </div>
            
            <div className="flex flex-col-reverse  md:flex-row justify-between md:m-32 m-8 items-center gap-6 md:text-base text-xs">
                <div className="animate-fade-right">
                    <Image src="/images/braining_image.png" alt="Brand Image" width={500} height={500}/>
                </div>
                <div className="animate-fade-left">
                    <h1 className="font-baskerville text-2xl w-full md:text-4xl md:max-w-[400px] leading-relaxed">Content Formats & Channels To Reach Consumers</h1>
                    <p className="md:max-w-[500px] text-[#66717B] leading-relaxed mt-3">At 4th Estate, we create content and develop data-driven strategies to reach your target audience in the vibrant los angeles content marketing. Here’s how we leverage various formats and channels to amplify your brand message:</p>
                    <ul className="text-[#66717B] list-disc">
                        <li>
                            <span>Written Content</span>
                        </li>
                        <li>
                            <span>Visual Content</span>
                        </li>
                        <li>
                            <span>Engaging Videos</span>
                        </li>
                        <li>
                            <span>Social Media Management</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:m-32 m-8 animate-fade-up">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-baskerville md:text-5xl text-2xl text-center max-w-2xl leading-relaxed">Amplify Your Brand in Content Marketing Services</h1>
                </div>
                <div className="bg-white w-full rounded grid md:grid-cols-2 p-8 gap-8 place-items-center mt-6">
                    {contentAndMarketingService.map((item,index)=><div className="" key={index}>
                    {item.icon}
                        <h1 className="text-xl md:text-2xl font-baskerville pb-2">{item.name}</h1>
                        <p className="text-[#66717B] text-xs md:max-w-sm leading-relaxed max-w-lg">{item.description}</p>
                    </div>)}
                </div>
            </div>
            <div className="md:m-32 m-8 text-[#66717B] flex gap-4 flex-col md:flex-row justify-between items-center md:text-base text-xs animate-fade-right" >
                <div className="mb-2">
                    <h1 className="font-baskerville text-2xl w-full md:text-4xl md:max-w-[400px] leading-relaxed text-black">Why Choose 4th Estate for Content Marketing?</h1>
                    <p className="md:max-w-[500px] text-[#66717B] leading-relaxed mt-3">Los Angeles is a unique mix of cultures and trends. Your content marketing strategy must be just as diverse to win in this market. Here’s what makes 4th Estate your perfect partner for conquering LA’s content marketing scene:</p>
                    <ul className="list-disc">
                        <li>
                            <span>Deep LA Expertise</span>
                        </li>
                        <li>
                            <span>Trusted by LA Businesses</span>
                        </li>
                        <li>
                            <span>Engaging Videos</span>
                        </li>
                        <li>
                            <span>Social Media Management</span>
                        </li>
                    </ul>
                    <p className="md:max-w-[500px] text-[#66717B] leading-relaxed">We’ll gladly connect you with testimonials and reviews from local clients who have thrived thanks to our LA-focused content marketing strategies.</p>
                </div>
                <Image src="/images/content-image.png" alt="content image" width={500} height={500} className="animate-fade-left"/>
            </div>
            <Faq/>
            <SectionCard />
            <BrandBoost/>
            <Footer/>
        </div>
    )
}