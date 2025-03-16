import { ChevronRight } from "lucide-react";
import Image from "next/image"

interface BlogCardProps {
    imageUrl: string;
    title: string;
    link:string;
  }
  
 const BlogCard:React.FC<BlogCardProps> = ({imageUrl,title,link})=>{
    return (
        <div  className="w-[360px]  rounded-lg shadow-none overflow-hidden">
        <Image src={imageUrl} alt={title} width={300} height={180} className="object-cover" />
        <div className="p-4">
          <h3 className="text-md font-baskerville">{title}</h3>
          <a href={link} className="text-blue-600 font-sm mt-2 inline-flex items-center underline">
            Read Post <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    )
}

export default BlogCard;