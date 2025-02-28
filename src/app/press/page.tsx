import { ArrowUpRight, ChartCandlestickIcon } from "lucide-react";
import HeroLayout from "../components/hero_section";
import Image from "next/image";
import ServiceCard from "../components/service_card";
import Faq from "../components/faq";
import SectionCard from "../components/card_section";
import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";

export default function PressPage(){
    const prTailoredForBusiness = [
        {
            name:"Media Outreach & Relations",
            description:"We develop contacts with journalists and influencers to get your brand featured in the media. Product mentions and brand stories are published in top-tier media and publications within your industry. We follow an ethical approach so that you have a say in who features your brand.",
              icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Customizable Digital PR Strategies",
            description:"Your digital PR strategy begins with the end goals you want to achieve. Whether it's enhancing your website's value, targeting specific audiences, telling compelling stories, or being featured on preferred websites, we tailor a strategy focused on driving measurable value.",
              icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Creative Campaigns & Consumer PR",
            description:"We deliver coverage across relevant publications and increase brand awareness through innovative campaigns tailored to your business values and customer insights. Our ideas cut through the noise to drive bottom-line impact.",
              icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Reactive PR & Newsjacking",
            description:"Our team keeps a close eye on the news cycle, identifying opportunities to place your brand in the spotlight. We proactively insert your expertise into relevant trends and stories, ensuring your brand stays relevant and visible.",
              icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Customer Engagement",
            description:"Ensure your team is ready to respond to journalist requests with our Press Office Function. We identify your internal assets, such as expert spokespeople and proprietary data, positioning your company as a go-to source for expert comments and insights.",
              icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Trade PR & Local PR",
            description:"With extensive experience across various sectors, we can share your stories through trade-specific websites and publications. If you have local SEO goals or aspirations to grow in specific areas, our hyperlocal campaigns will place your business at the heart of the local news agenda.",
              icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Resource-Led Digital PR",
            description:"Every business has valuable insights to share. We transform your owned data and internal expertise into newsworthy resources like reports, white papers, and guides that earn valuable links and drive traffic.",
              icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Rapid Growth",
            description:"A local fitness startup needed to build brand awareness quickly. A targeted digital PR strategy led to a 60% increase in social media followers and a 25% boost in class sign-ups for a local fitness startup within six months.",
              icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
    ]
    const keyFeatures = [
        {
            name:"Data-Driven Strategies",
            description:"Performance press relies heavily on data and analytics to inform PR strategies. By setting specific, measurable goals, PR professionals can track the effectiveness of campaigns. For example, a study by the Public Relations Society of America found that data-driven PR campaigns are 20% more effective in achieving desired outcomes than traditional PR approaches.",
            icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Targeted Media Outreach",
            description:"Performance press emphasizes reaching the right audience through targeted media placements. This involves selecting publications, blogs, and influencers that align with the brand’s target market. For instance, a PR campaign for a tech startup might target top technology blogs like TechCrunch, Gizmodo, and Wired, which collectively reach over 50 million monthly readers.",
            icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Integration with Marketing",
            description:"Performance PR integrates closely with marketing efforts, ensuring PR activities support broader marketing goals. According to a survey by Cision, 78% of marketers believe that integrated PR and marketing campaigns are crucial for achieving business objectives.",
            icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Continuous Optimization",
            description:"Performance press involves ongoing analysis and optimization. By continually assessing the performance of PR activities, strategies can be adjusted to improve results over time. A report by Meltwater showed that businesses using continuous PR optimization saw a 25% improvement in campaign outcomes year-over-year.",
            icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
      
    ]
    return (
        <div>
            <HeroLayout backgroundImage="/images/press_bg.png">
                <h1 className="text-2xl md:text-7xl  font-baskerville">Performance Focused Digital PR Agency</h1>
                <button className="mt-6 px-6 py-3 bg-[#385065] text-white rounded-lg mb-3 md:mb-0 text-sm">
                    <div className="flex space-x-2">
                        <span>Get a Free PR Audit</span> 
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
                        <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[600px] leading-relaxed">Digital PR Services Tailored for Your Business</h1>
                        <p className="text-xs max-w-4xl text-[#66717B] my-2 leading-relaxed mt-5">Digital PR is more than just securing big placements and viral campaigns; it’s about building measurable strategies that deliver relevant and quality results. We help brands across the globe stand out online while achieving their business goals. Discover how our Services can benefit your business.</p>
                </div>
            </div>
            <div className="bg-white  rounded grid md:grid-cols-2 gap-8 p-8  mt-6 place-items-center">
                            {prTailoredForBusiness.map((item,index)=><div className="" key={index}>
                            {item.icon}
                                <h1 className="text-xl md:text-2xl max-w-sm font-baskerville pb-2">{item.name}</h1>
                                <p className="text-[#66717B] text-xs md:max-w-sm leading-relaxed max-w-lg">{item.description}</p>
                            </div>
                        )}
            </div> 
            <div className="items-center text-center md:m-16 m-8">
                <div className="w-full items-center flex justify-center flex-col">
                        <h1 className="text-center text-xl md:text-5xl font-baskerville leading-relaxed">Performance Press Approach to Digital PR</h1>
                        <p className="text-xs max-w-4xl text-[#66717B] my-2 leading-relaxed mt-5">Performance press, also known as performance PR or performance-driven press, is a strategic approach to Digital PR that focuses on achieving quantifiable results and a high return on investment (ROI) from media coverage and PR activities. This method uses data and analytics to track and optimize the effectiveness of PR campaigns, ensuring that every effort contributes directly to business goals.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:m-16 m-5 items-center">
                <div className="mb-2">
                    <ul className="list-disc text-[#66717B] max-w-xl leading-relaxed md:text-base text-xs">
                        <li>
                            <p>Website traffic: Monitoring the increase in site visitors from PR-generated sources</p>
                        </li>
                        <li>
                            <p>Conversion Rates: Tracking how many visitors from PR campaigns become customers.</p>
                        </li>
                        <li>
                            <p>Social Media Engagement: Measuring likes, shares, comments, and follower growth.</p>
                        </li>
                        <li>
                            <p>Media Coverage Impact: Assessing changes in brand sentiment and awareness.</p>
                        </li>
                        <li>
                            <p>ROI: Comparing the cost of PR activities with the value generated, ensuring a positive ROI.</p>
                        </li>
                    </ul>
                </div>
                <Image src="/images/press_image1.png" alt="Press Image" width={500} height={500}/>
            </div>
            <div className="items-center text-center md:m-16 m-8">
                <div className="w-full items-center flex justify-center flex-col">
                        <h1 className="text-center text-xl md:text-5xl font-baskerville leading-relaxed max-w-[700px]">Key Features of Performance Press/Digital PR Service</h1>
                </div>
            </div>
            <div className="md:m-16 mt-5">
                <div className="grid  md:grid-cols-2 gap-4 w-full ">
                   {keyFeatures.map((item,index)=>
                  <ServiceCard key={index} description={item.description} name={item.name} icon={item.icon}/>)}
                </div>
         </div>
         <div className="md:m-16 m-5 flex flex-col md:flex-row items-center justify-between md:text-base text-xs">
                <div className="mb-2">
                    <h1 className="font-baskerville text-2xl w-full md:text-4xl md:max-w-[450px] leading-relaxed">Why Choose 4th Estate Performance Press Digital PR</h1>
                    <ul className="text-[#66717B] list-disc max-w-[500px] mt-2">
                        <li>
                            <p>Enhanced Accountability: Track outcomes like increased traffic and conversions.</p>
                        </li>
                        <li>
                            <p>
                            Improved ROI: Link PR efforts to financial performance; e.g., a $50K campaign generating $500K in sales.</p>
                        </li>
                        <li>
                            <p>Informed Decisions: Use data-driven insights to optimize strategies.
                            Aligned Goals: Ensure PR activities meet business objectives like market share growth.</p>
                        </li>
                        <li>
                            <p>Proven Success: Success stories across various industries.Tailored Strategies: PR based on your goals, product, industry, and audience.</p>
                        </li>
                        <li>
                            <p>Expert Team: Experienced PR, content, and digital marketing professionals.</p>
                        </li>
                        <li>
                            <p>Innovative Approaches: Leverage the latest trends and techniques.</p>
                        </li>
                        <li>
                            <p>Comprehensive Analytics: Complete campaign analytics with actionable insights.</p>
                        </li>
                        <li>
                            <p>Client-Centric: Personalized service and support.</p>
                        </li>
                        <li>
                            <p>
                            Affordable & Transparent: Budget-friendly pricing with no hidden fees.</p>
                        </li>
                    </ul>
                </div>
                <Image src="/images/content-image.png" alt="Paid Media" width={500} height={500}/>
            </div>
             <Faq/>
            <SectionCard/>
            <BrandBoost/>
            <Footer/>
        </div>
    )
}