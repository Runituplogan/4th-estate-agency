import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
interface SectionCardProps {
    title?: string;
    description?: string;
    imageUrl?: string;
    showBtn?:false;
    marginStyle?:string;
  }
const SectionCard: React.FC<SectionCardProps> = ({title = "Take Your Business to the Next Level - Contact 4th Estate!",description="With 4th Estate by your side, you can rest assured that your SEO efforts are in expert hands. Our holistic approach to SEO ensures that every aspect of your online presence is optimized for success, driving more traffic, leads, and conversions to your business.",imageUrl='location.png',showBtn = true,marginStyle='md:m-16 m-5'})=>{
    return(
        <div className={`${marginStyle} bg-[#0C2F4D] rounded text-white flex flex-col md:flex-row px-8 items-center py-6 justify-between`}>
        <div>
        <h1 className="font-baskerville text-2xl w-full md:text-4xl md:max-w-[400px] leading-relaxed mb-2">{title}</h1>
        <p className="md:max-w-[500px] leading-relaxed mb-2 md:text-base text-xs">{description}</p>
        {
            showBtn && (
                <button className="mt-6 px-6 py-3 text-[#385065] bg-white rounded-lg mb-3 md:mb-0 text-sm">
                <div className="flex space-x-2">
                    <span>Book a Strategy Call</span> 
                    <ArrowUpRight size={20} />
                </div>
             </button>
            )
        }
         
        </div>
    <Image src={`/images/${imageUrl}`} alt="content image" width={500} height={500}/>
    </div>
    )
}

export default SectionCard