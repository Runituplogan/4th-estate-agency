import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";
import HeroLayout from "../components/hero_section";
import Image from "next/image";
export default function AboutPage(){
    const teamMember = [
        {
            name:"Amélie Laurent",
            imagePath:"/images/team-member.png",
            role:"Founder & CEO",
            description:"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",

        },
        {
            name:"Amélie Laurent",
            imagePath:"/images/team-member.png",
            role:"Founder & CEO",
            description:"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",

        },
        {
            name:"Amélie Laurent",
            imagePath:"/images/team-member.png",
            role:"Founder & CEO",
            description:"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",

        },
        {
            name:"Amélie Laurent",
            imagePath:"/images/team-member.png",
            role:"Founder & CEO",
            description:"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",

        },
        
    ]

    const achievements =[
       { 
            amount:"200+",
            title:"Projects completed",
        },
       { 
            amount:"500%",
            title:"Return on investment",
        },
       { 
            amount:"30",
            title:"Countries served",
        },
       { 
            amount:"100%",
            title:"5-star reviews",
        },
    ]
    return (
        <div>
        <HeroLayout backgroundImage="/images/bg_hero1.png">
            <h1 className="text-3xl md:text-7xl  font-baskerville">About Us</h1>
        </HeroLayout>
        <div className="flex flex-col md:flex-row md:m-16 m-10 items-left justify-between">
            <h1 className="text-3xl md:text-5xl font-baskerville md:flex-1 mb-2">One Mantra:<br/>Value Over Volume</h1>
            <p className="max-w-[400px] mx-auto leading-relaxed">Our mission is to provide competence, exceptional service, and lasting performance that drive measurable results through strategic innovation and client-focused solutions.</p>
        </div>
        <div>
            <h1 className="text-3xl md:text-5xl font-baskerville text-center">Meet Our Founder</h1>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center md:m-16 m-10 ">
                <div>
                <p className="md:max-w-[500px] mx-auto leading-9 my-2 ">
                    Founded by Jason Aaron Scott, 4th Estate Agency demystifies the technical ins and outs of digital marketing. 
Having so many agencies to choose from, we decided to act as the conduit between Google’s complex engine and your upstart brand. 
Coast to coast, our team of experts translate the complexities of marketing into clear and simple terms for sustainable cost-effective growth.
</p>
                </div>
            <Image src="/images/founder_image.png" alt="founder image" width={400} height={400}/>
            </div>
        </div>
        <div>
            <h1 className="text-3xl md:text-5xl font-baskerville text-center">Meet Our Team</h1>
            <div className="flex flex-col md:flex-row m-16 gap-5 justify-center">
                {teamMember.map((item,index)=><div key={index}>
                    <Image src={item.imagePath} alt="team member" width={300} height={300}/>
                    <div className="mt-3">
                    <h3 className="font-bold text-md mb-2">{item.name}</h3>
                    <h3 className="text-[#66717B] mb-2">{item.role}</h3>
                    <h3 className="text-[#66717B] text-xs max-w-[350px]">{item.description}</h3>
                    </div>
                </div>)}
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-11 m-16">
            <Image src="/images/team-gang.png" alt="team image" width={500} height={500}/>
            <div>
                <div className="mb-8">
                    <p className="font-baskerville text-5xl max-w-[350px]">We’re only just getting started on our journey</p>
                </div>
                <div className="grid grid-cols-2 gap-6 place-items-center  text-left">
                    {achievements.map((achievement,index)=><div key={index}>
                        <h1 className="text-4xl">{achievement.amount}</h1>
                        <p className="text-[#66717B] text-sm">{achievement.title}</p>
                    </div>)}
                </div>
            </div>
        </div>
        <BrandBoost/>
        <Footer/>
        </div>
    )
}