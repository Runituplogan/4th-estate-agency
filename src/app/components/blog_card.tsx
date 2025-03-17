import { ChevronRight } from "lucide-react";
import Image from "next/image"
import Chevron from "../icons/chevron";

interface BlogCardProps {
    imageUrl: string;
    title: string;
    link:string;
  }
  
 const BlogCard:React.FC<BlogCardProps> = ({imageUrl,title,link})=>{
    return (
        <div  className="w-full rounded-lg shadow-none overflow-hidden md:w-full">
        <Image src={imageUrl} alt={title} width={300} height={180} className="object-cover w-full" />
        <div className="p-4">
          <h3 className="text-md font-baskerville min-h-[50px]">{title.slice(0, 59)}{title.length > 59 && "..."}</h3>
          <a href={link} className="text-blue-600 text-sm mt-2 inline-flex items-center font-semibold underline">
            Read Post <span className="ml-2"><Chevron /></span>
          </a>
        </div>
      </div>
    )
}

export default BlogCard;