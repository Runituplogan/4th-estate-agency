import { ArrowUpRight, Heart } from "lucide-react";
import HeroLayout from "../components/hero_section";
import Image from "next/image";
import Faq from "../components/faq";
import SectionCard from "../components/card_section";
import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";

export default function WebsiteServicePage(){
    const websiteServices = [
        {
            name:"Bespoke Design",
            description:"Customers see your web design before they get to your product. If a poor color scheme is used in it, it's not appealing or not convenient to use; then customers won't feel like making a purchase. However, a beautiful website that is easy to use and pleasing to the eyes will surely add to your ROI and convert most visitors.",
             icon:<Heart size={20} color="#385065"/> ,
        },
        {
            name:"Responsive Web Designs",
            description:"Many of Los Angeles's population use and shop from phones. If your website isn't mobile responsive, it won't look good on mobile and phones. It won’t be able to keep the visitors longer on your website.",
             icon:<Heart size={20} color="#385065"/> ,
        },
        {
            name:"Showcasing Brand Identity",
            description:"In LA, businesses can use web design to show off their vibe and stand out. A website is like a virtual shop window, where locals can get a feel for a business. It's a great way to connect with customers and show what makes a brand special.",
             icon:<Heart size={20} color="#385065"/> ,
        },
        {
            name:"Local Expertise",
            description:"LA market is a separate world with such a huge population where people have their own trends, design preferences and interests. When you create a web design for your business according to the interests, design preferences and cultural nuances of LA",
             icon:<Heart size={20} color="#385065"/> ,
        },
       
    ]

    const ourServiceInLA=[
        {
            name:"UX/ UX Design",
            description:"Not only do we just make the page look good, but we also make it convenient for the users to use. We create a clear layout, intuitive navigation bar and buttons on the website that are easy for the users to use. This improves the user's overall UX and helps them easily use your business website.",
            icon:<Heart size={20} color="#385065"/> 
        },
        {
            name:"E-commerce Web Design",
            description:"We also design the best Ecommerce websites for you that help you outrank your competitors and get more sales. If you want us to design your existing website or you want us to create a new one for you from scratch, we can do both for you.",
            icon:<Heart size={20} color="#385065"/> 
        },
        {
            name:"WordPress Web Design",
            description:"If your website is on WordPress and you want it to be designed professionally and beautifully, then 4th Estate will help you. Our team can create a WordPress website for you from scratch and make it SEO-optimized, attractively designed and user-friendly.",
            icon:<Heart size={20} color="#385065"/> 
        },
        {
            name:"Website Maintenance",
            description:"After creating the web design, we also matina our website to keep them fresh. We keep checking the code and also solve if any issues arise in the future. We keep in touch with our clients, and whenever they have any issues, they can easily resolve them by contacting us.",
            icon:<Heart size={20} color="#385065"/> 
        },
    ]
    return (
        <div>
            <HeroLayout backgroundImage="/images/website-bg.png">
                <h1 className="text-2xl md:text-7xl  font-baskerville">Professional Web Design Services in LA</h1>
                <button className="mt-6 px-6 py-3 bg-[#385065] text-white rounded-lg mb-3 md:mb-0 text-sm">
                    <div className="flex space-x-2">
                        <span>Book a Free Website Audit</span> 
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
                        <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[600px] leading-relaxed">An Elite Web Design Service in LA
                        </h1>
                        <p className="text-xs max-w-4xl text-[#66717B] my-2 leading-relaxed mt-5">Most LA-based businesses invest heavily into building their online presence and website and making their products useful. However, the thing that most of them overlook is the web design. Web design is what your potential customers will be interacting with. If it’s not professionally created, the customers are more likely not to consider you an authority and may fall off to another website. </p>
                </div>
            </div>
            <div className="md:m-16 m-5">
            <div className="bg-white w-full rounded grid md:grid-cols-2 p-8 gap-8 place-items-center mt-6">
                    {websiteServices.map((item,index)=><div className="" key={index}>
                    {item.icon}
                        <h1 className="text-xl md:text-2xl font-baskerville pb-2">{item.name}</h1>
                        <p className="text-[#66717B] text-xs md:max-w-sm leading-relaxed max-w-lg">{item.description}</p>
                    </div>)}
                </div>
            </div>
            <div className="md:m-16 m-5 bg-white p-16">
                <div className="flex justify-between items-center flex-col md:flex-row md:text-base text-xs">
                    <div className="mb-2">
                        <h1 className="font-baskerville text-2xl w-full md:text-4xl md:max-w-[400px] leading-relaxed">Top Notch Web Design in LA</h1>
                        <p className="md:max-w-[500px] text-[#66717B] leading-relaxed mt-3">
                        At 4th Estate, we have a team of experienced full-stack developers who can design and build websites. They create the best websites considering the local trends, cultural preferences and interests of Los Angeles people in their mind.
                        <br/>
                        They can also develop the best websites for you that load faster, look attractive and also created specifically for your business, meeting all of its requirements. 
                        </p>
                    </div>
                    <Image src="/images/website1.png" alt="website image" width={500} height={500}/>
                </div>
                <div className="flex justify-between items-center flex-col md:flex-row-reverse md:text-base text-xs mt-16">
                    <div className="mb-2">
                        <h1 className="font-baskerville text-2xl w-full md:text-4xl md:max-w-[400px] leading-relaxed">Professional Web Design Services in Los Angeles</h1>
                        <p className="md:max-w-[500px] text-[#66717B] leading-relaxed mt-3">
                        we’re LA’s Best Social Web Design Services. It’s not what we say but what our customers say about our services. Over the years, we’ve created hundreds of web designs and helped our customers to improve their CTR(Click Through Rate) and, ultimately, their ROI. 
                        </p>
                        <ul className=" text-[#66717B]  list-disc">
                            <li>
                                <p>We Create Unique Design</p>
                            </li>
                            <li>
                                <p>Best Programmers</p>
                            </li>
                            <li>
                                <p>We’re Transparent</p>
                            </li>
                            <li>
                                <p>Punctual</p>
                            </li>
                            <li>
                                <p>Performance-driven Agency</p>
                            </li>
                        </ul>
                    </div>
                    <Image src="/images/website2.png" alt="website image" width={500} height={500}/>
                </div>
            </div>
            <div className="items-center text-center md:m-16 m-8">
                <div className="w-full items-center flex justify-center flex-col">
                        <h1 className="text-center text-xl md:text-5xl font-baskerville max-w-[600px] leading-relaxed">Our Web Design Services in Los Angeles
                        </h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 p-8  mt-6 place-items-center">
                            {ourServiceInLA.map((item,index)=><div className="" key={index}>
                            {item.icon}
                                <h1 className="text-xl md:text-2xl max-w-sm font-baskerville pb-2">{item.name}</h1>
                                <p className="text-[#66717B] text-xs md:max-w-sm leading-relaxed max-w-lg">{item.description}</p>
                            </div>
                        )}
            </div> 
            <Faq/>
            <SectionCard/>
            <BrandBoost/>
            <Footer/>
        </div>
    )
}