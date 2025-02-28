
import { JSX } from "react";

interface ServicesCardProps {
    icon: JSX.Element;
    name: string;
    description: string;
    bgColor?:string;
  }


  
const ServiceCard:React.FC<ServicesCardProps>=({icon,name,description,bgColor = "bg-white"})=>{
    return(
        <div   className={`${bgColor} text-left px-8 py-4 w-full rounded`}>
            {icon}
            <h2 className="text-xl md:text-2xl max-w-sm font-baskerville pb-2">{name}</h2>
            <p className="text-xs md:max-w-sm text-[#66717B]">{description}</p>
        </div>
    )
}

export default ServiceCard;