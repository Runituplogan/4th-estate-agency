import { ArrowUpRight,BadgeDollarSign,ChartColumnIncreasingIcon,BadgeCheckIcon,ChartLineIcon,BrickWallIcon,Home,HospitalIcon,Headphones,Globe2Icon,Building,PlusCircle, MapPlus, Link2,MessageSquareMoreIcon,Star,SearchCheckIcon,Folder,Lightbulb,Search,ChartCandlestickIcon,FolderEdit,FileBarChart,BriefcaseBusiness,FileArchiveIcon,SquareGanttChartIcon,UserRoundIcon} from "lucide-react";
import HeroLayout from "../../components/hero_section";
import ServiceCard from "../../components/service_card";
import Faq from "../../components/faq";
import SectionCard from "../../components/card_section";
import BrandBoost from "../../components/brand_boost";
import Footer from "../../components/footer";

export default function SeoPage(){
    const seoGrowthPlan= [
        {
            name:"Average ROI",
            description:"Studies have shown that businesses can expect an average ROI ranging from 5:1 to 20:1 from SEO efforts. The ROI of SEO tends to increase over time as SEO efforts compound and the website's authority and visibility grow in search engines. However, these numbers can vary depending on the factors mentioned earlier.",
            icon:<BadgeDollarSign size={20} color="#385065"/>    
        },
        {
            name:"Percentage Increase in Traffic",
            description:"A successful SEO campaign can lead to a substantial increase in organic search traffic. Depending on the starting point and the level of optimization, businesses may see traffic increases ranging from 20% to 200% or more within the first year of implementing SEO strategies.",
            icon:<ChartColumnIncreasingIcon size={20} color="#385065"/>    
        },
        {
            name:"Conversion Rate Improvements",
            description:"Improvements in website optimization and targeting can lead to higher conversion rates. Even modest improvements in conversion rates, such as 1% to 3%, can translate into significant revenue gains over time.",
            icon:<BadgeCheckIcon size={20} color="#385065"/>    
        },
        {
            name:"Revenue Growth",
            description:"Businesses that invest in SEO often experience steady revenue growth over time. While it's difficult to provide exact figures, revenue increases of 10% to 50% or more within the first year of implementing SEO strategies are not uncommon for businesses in competitive industries.",
            icon:<ChartLineIcon size={20} color="#385065"/>    
        },
    ]

    const localBusinessSeo = [
        {
            name:"Brick-and-mortar",
            description:"Any business with a physical location, like restaurants, retail stores, salons, gyms, or automotives. People searching for these services will almost always be looking for options nearest to their location. Local SEO helps them find your business!",
            icon:<BrickWallIcon size={20} color="#385065"/>    
        },
        {
            name:"Home service providers",
            description:"People don't want to wait hours for a plumber who lives across town. Plumbers, electricians, cleaners, and other home service providers depend on local SEO to show up in searches for people in their area.",
            icon:<Home size={20} color="#385065"/>    
        },
        {
            name:"Medical professionals",
            description:"When someone needs a dentist or doctor or a therapist, they typically want someone convenient. Local SEO helps dentists, doctors, therapists, and other medical providers like MED SPAs attract patients in their area.",
            icon:<HospitalIcon size={20} color="#385065"/>    
        },
        {
            name:"Professional service providers",
            description:"Personal Injury Lawyers, accountants, realtors, and other local professionals all rely on getting clients in their area. Local SEO helps them show up in searches for people needing their services.",
            icon:<Headphones size={20} color="#385065"/>    
        },
    ]

    const howLocalSeoWorks = [
        {
            name:"Keyword Research for Local Searches",
            description:"With a 900% surge in 'near me' searches, precise and high value keyword research by 4th Estate results in businesses ranking up higher in local search results. They help drive a significant increase in website traffic from local customers and a higher conversion rate.",
            icon:<PlusCircle size={20} color="#385065"/>    
        },
        {
            name:"Google My Business Optimization",
            description:"LA locals rely on Google Maps and search results for business information. 4th Estate offers expert optimization to boost your online visibility on Google Maps and search results. Our team of professionals ensures that potential customers can easily find your business information, such as hours of operation, contact details, and customer reviews.",
            icon:<MapPlus size={20} color="#385065"/>    
        },
        {
            name:"Website On-Page SEO for Local Businesses",
            description:"Optimize your website's content and structure f\or local search algorithms, improving your search engine rankings and local presence. 4th Estate's on-page SEO strategies range from image optimization to internal content linking, title tags, and meta descriptions.",
            icon:<Globe2Icon size={20} color="#385065"/>    
        },
        {
            name:"Local Citation Building",
            description:"Listings on local business directories like Yelp, Angie's List, Yellow Pages, and Google My Business significantly impact consumer decisions, with around 70% of users trusting online reviews and ratings. 4th Estate's authoritative citations increase visibility, promoting a rise in customer trust and loyalty, which is essential for building a strong brand presence.",
            icon:<Building size={20} color="#385065"/>    
        },
        {
            name:"Link Building For Local SEO",
            description:"Links pass SEO power and authority from one website to another. Getting high quality links from niche relevant as well as local city websites helps rank high on Google. It is also a great way of promoting your business and generating referral traffic. At 4th Estate, we go beyond that and do high quality press releases.",
            icon:<Link2 size={20} color="#385065"/>    
        },
        {
            name:"Online Reputation Management",
            description:"As most LA consumers trust online reviews, effective reputation management by 4th Estate ensures a positive brand image among local customers. Our expert team monitors and responds to customer reviews, builds trust, and attracts more business with a strong online reputation management strategy.",
            icon:<MessageSquareMoreIcon size={20} color="#385065"/>    
        },
    ]

    const seoSolutionForYourBusiness =[
      {
        name:"Keyword Research for Local Searches",
        description:"We find the words and phrases people in LA search for online and then strategically incorporate those terms into your website content. It will improve your ranking in search results. The higher you rank, the more likely people find your business.",
        icon:<Star size={20} color="#385065"/> 
      },
      {
        name:"On-Page SEO Optimization for Ecommerce Websites",
        description:"We optimize product descriptions, images, titles, and other website elements. It makes it easier for search engines to understand your offerings and show them to the right customers.",
        icon:<SearchCheckIcon size={20} color="#385065"/> 
      },
      {
        name:"Technical SEO Audit & Implementation",
        description:"We'll identify technical issues preventing search engines from effectively crawling and indexing your site. We'll then help you fix those issues to ensure your website runs smoothly for search engines and visitors.",
        icon:<Folder size={20} color="#385065"/> 
      },
      {
        name:"Content Marketing Strategies Tailored for Ecommerce",
        description:"It's not just about selling – it's about informing and engaging. We'll help you create valuable content like blog posts, product descriptions, and social media content that attracts potential customers. Also, the goal is to educate them about your products and ultimately persuade them to buy.",
        icon:<Lightbulb size={20} color="#385065"/> 
      },
      {
        name:"Local SEO Strategies for Los Angeles Businesses",
        description:"Since you're located in LA, we'll help you leverage local SEO tactics to get your business noticed by potential customers searching for products or services in your area. This might involve optimizing your Google My Business listing, building local citations, and creating content that targets local keywords.",
        icon:<Building size={20} color="#385065"/> 
      },
      {
        name:"Dominate Search Engine Results",
        description:"Our expertise helps you achieve top rankings on search engine results pages (SERPs) for searches relevant to your products and target audience in LA. This prime real estate translates into more clicks, more website visitors, and, ultimately, more sales.",
        icon:<Search size={20} color="#385065"/> 
      },
    ]

    const seoAduitProcess = [
        {
            name:"The Opportunity Analysis",
            description:"Our team manually uses SEO tools like Ahrefs, Moz, Semrush, and many others to search for high-volume keywords that are less competitive for your website. We ensure that the keywords are relevant to your target audience, their search intent meets what your website provides, and they have an excellent overall trend so that their search doesn’t get specific. We analyze competitors' keywords, content, backlinks, and rankings to refine your SEO strategy effectively.",
           icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Website SEO Audit",
            description:"We analyze your website's on-page SEO factors like meta tags, headings, content, URL structure, internal linking, and site speed. By fixing these issues, we help your site rank higher in search engine results. Our team audits content quality, keywords, meta details, titles, and tone. We create high-quality content with integrated keywords, leading to better engagement and Google rankings. We analyze your backlinks for quality, relevance, and diversity to optimize your profile for improved rankings.",
           icon:<FolderEdit size={20} color="#385065"/> 
        },
        {
            name:"GMB Audit",
            description:"4th estate SEO experts also include the GMB Audit in which they make sure your Google My Business (GMB) listing is fully optimized for local search. This means we optimize your business info, verify your location, manage customer reviews, and use GMB features to boost your online visibility and attract local customers. We review and maintain consistent NAP info across online directories, improving local search rankings and online reputation.",
           icon:<FileBarChart size={20} color="#385065"/> 
        },
        {
            name:"The Strategy & Action Plan",
            description:"We identify and fix technical issues like crawling errors, broken links, duplicate content, and site speed through our technical SEO audit, making your website faster, SEO-optimized, and mobile-friendly. On-Page Optimization: Optimize tags, content, links for visibility. Content Development: Create quality pages, blogs for traffic. Link Building: Acquire high-authority links for rankings. Detailed SEO Plan: Goals, tasks, traffic predictions for improvement.",
           icon:<BriefcaseBusiness size={20} color="#385065"/> 
        },
    ]

    const benefitOfSeo =[
        {
            name:"Identifying Technical Issues",
            description:"SEO Audit allows you to determine the technical errors of your websites, including mobile friendliness, page loading speed, broken links, and crawl errors.",
            icon:<FileArchiveIcon size={20} color="#385065"/> 
        },
        {
            name:"Improving Website Performance",
            description:"When you catch the errors, you address and solve them, which results in fast performance and more leads and conversion rates.",
            icon:<SquareGanttChartIcon size={20} color="#385065"/> 
        },
        {
            name:"Ensuring Website Compliance",
            description:"SEO audits ensure your website complies with search engine guidelines and best practices, reducing the risk of penalties and ranking drops.",
            icon:<FileBarChart size={20} color="#385065"/> 
        },
        {
            name:"Identifying On-Page SEO Opportunities",
            description:"The SEO audit also helps you find what’s wrong with the title tags, meta description, content, header, and page design.",
            icon:<SearchCheckIcon size={20} color="#385065"/> 
        },
        {
            name:"Competitive Analysis",
            description:"You get a good insight into your competitors, what they’re good at, and what they’re lacking so you can hit the spot and beat them.",
            icon:<ChartCandlestickIcon size={20} color="#385065"/> 
        },
        {
            name:"Enhancing User Experience",
            description:"The SEO audit also helps improve the user experience by making the website mobile-friendly and improving its designs, navigation, and website speed.",
            icon:<UserRoundIcon size={20} color="#385065"/> 
        },
     
    ]
    return (
        <div>
        <HeroLayout backgroundImage="/images/services_bg.png">
            <h1 className="text-2xl md:text-7xl  font-baskerville">Drive more traffic, leads, and sales to your website</h1>
            <button className="mt-6 px-6 py-3 bg-[#385065] text-white rounded-lg mb-3 md:mb-0 text-sm">
                <div className="flex space-x-2">
                    <span>Book a Free SEO Audit</span> 
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
        <div className="items-center text-center md:m-16 m-8 animate-fade-up">
            <div className="w-full items-center flex justify-center flex-col">
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[600px] leading-relaxed">Business Growth With SEO</h1>
                    <p className="text-xs max-w-4xl text-[#66717B] my-2 leading-relaxed mt-5">Businesses see significant returns on investment from SEO over time. Here are some rough stats backed by DATA:</p>
            </div>
        </div>

        <div className="md:m-16 mt-5 animate-fade-right">
                <div className="grid  md:grid-cols-2 gap-4 w-full ">
                   {seoGrowthPlan.map((item,index)=>
                  <ServiceCard key={index} description={item.description} name={item.name} icon={item.icon}/>)}
                </div>
         </div>
        <div className="items-center text-center md:m-16 m-8 animate-fade-up">
            <div className="w-full items-center flex justify-center flex-col">
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[700px] leading-relaxed">Local Businesses That Absolutely Need local SEO in LA, CA</h1>
                    <p className="text-xs max-w-4xl text-[#66717B] my-2 leading-relaxed mt-5">As a leading SEO agency in LA, we have worked and delivered results for various clients across different industries and neighborhoods in Los Angeles, such as Beverly Hills, Venice Beach, and Downtown LA.</p>
            </div>
        </div>
        <div className="md:m-16 mt-5">
                <div className="grid  md:grid-cols-2 gap-4 w-full animate-fade-up">
                   {localBusinessSeo.map((item,index)=>
                  <ServiceCard key={index} description={item.description} name={item.name} icon={item.icon} />)}
                </div>
         </div>
         <div className="items-center text-center md:m-16 m-8 animate-fade-up">
            <div className="w-full items-center flex justify-center flex-col">
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[500px] leading-relaxed">How Our Local SEO Process Work</h1>
            </div>
        </div>
        <div className="bg-white animate-fade-up">
        <div className="bg-white w-full rounded grid md:grid-cols-2 p-8 gap-8 place-items-center mt-6">
                    {howLocalSeoWorks.map((item,index)=><div className="" key={index}>
                    {item.icon}
                        <h1 className="text-xl md:text-2xl max-w-sm font-baskerville pb-2">{item.name}</h1>
                        <p className="text-[#66717B] text-xs md:max-w-sm leading-relaxed max-w-lg">{item.description}</p>
                    </div>)}
        </div>            
        </div>
        <div className="items-center text-center md:m-16 m-8">
            <div className="w-full items-center flex justify-center flex-col">
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[700px] leading-relaxed">Los Angeles E-commerce SEO Solutions for Your Business</h1>
            </div>
        </div>
        <div className="md:m-16 animate-fade-up">
        <div className="bg-white  rounded grid md:grid-cols-2 gap-8 p-8 place-items-center mt-6">
                    {seoSolutionForYourBusiness.map((item,index)=><div className="" key={index}>
                    {item.icon}
                        <h1 className="text-xl md:text-2xl max-w-sm font-baskerville pb-2">{item.name}</h1>
                        <p className="text-[#66717B] text-xs md:max-w-sm leading-relaxed max-w-lg">{item.description}</p>
                    </div>)}
        </div> 
        </div>
        <div className="items-center text-center md:m-16 m-8 animate-fade-up">
            <div className="w-full items-center flex justify-center flex-col">
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[500px] leading-relaxed">4th Estate LA-Based SEO Audit Process</h1>
                    <p className="text-xs max-w-2xl text-[#66717B] my-2 leading-relaxed mt-5">We delegate 2 highly experienced SEO experts for your site who have analyzed thousands of websites in their careers. There are over 50 SEO factors that they make your website go through to audit it and then keep noticing the results.  This is how our  4th Estate SEO audit works.</p>
            </div>
        </div>
        <div className="md:m-16 mt-5 animate-fade-up">
                <div className="grid  md:grid-cols-2 gap-4 w-full ">
                   {seoAduitProcess.map((item,index)=>
                  <ServiceCard key={index} description={item.description} name={item.name} icon={item.icon} />)}
                </div>
         </div>
         <div className="items-center text-center md:m-16 m-8 animate-fade-up">
            <div className="w-full items-center flex justify-center flex-col">
                    <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[700px] leading-relaxed">Benefits of Getting SEO Audit Services For Your Website</h1>
            </div>
        </div>
        <div className="md:m-16 animate-fade-up">
        <div className="bg-white  rounded grid md:grid-cols-2 gap-8 p-8 place-items-center mt-6">
                    {benefitOfSeo.map((item,index)=><div className="" key={index}>
                    {item.icon}
                        <h1 className="text-xl md:text-2xl max-w-sm font-baskerville pb-2">{item.name}</h1>
                        <p className="text-[#66717B] text-xs md:max-w-sm leading-relaxed max-w-lg">{item.description}</p>
                    </div>)}
        </div> 
        </div>
        <Faq/>
        <SectionCard/>
        <BrandBoost/>
        <Footer/>
        </div>
    )
}