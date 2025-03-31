import CopyIcon from "@/app/icons/copy";
import GrowthIcon from "@/app/icons/growth";
import JotIcon from "@/app/icons/jot";
import TargetIcon from "@/app/icons/target";
import TargetDevice from "@/app/icons/target_device";
import UserStar from "@/app/icons/userStar";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronUp,
  Medal,
  ShieldCheck,
  StarHalf,
  Target,
  ChartColumn,
  CheckIcon,
  Edit,
  Goal,
  BriefcaseBusiness,
} from "lucide-react";

interface ContentMarketingProps{
  data:BrandingSection3,
}
const ContentMarketing:React.FC<ContentMarketingProps>=({data})=> {
  const contentAndMarketingService = [
    {
      name: `${data?.content.subContent[0].title}`,
      description:
      `${data?.content.subContent[0].description}`,
      icon: <UserStar />,
    },
    {
      name: `${data?.content.subContent[1].title}`,
      description:
      `${data?.content.subContent[1].description}`,
      icon: <CopyIcon />,
    },
    {
      name: `${data?.content.subContent[2].title}`,
      description:
      `${data?.content.subContent[2].description}`,
      icon: <JotIcon />,
    },
    {
      name: `${data?.content.subContent[3].title}`,
      description:
      `${data?.content.subContent[3].description}`,
      icon: <TargetDevice />,
    },
    {
      name: `${data?.content.subContent[4].title}`,
      description:
      `${data?.content.subContent[4].description}`,
      icon: <TargetIcon />,
    },

    {
      name: `${data?.content.subContent[5].title}`,
      description:
      `${data?.content.subContent[5].description}`,
      icon: <GrowthIcon />,
    },
  ];

  return (
    <motion.div 
      className="animate-fade-up"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // Re-triggers animation when in view
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
      }}
    >
      {/* Title Section - Smooth Fade-in */}
      <motion.div 
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="font-baskerville mb-3 md:text-6xl text-2xl text-center md:leading-relaxed text-[43px] leading-[1.0]">
          {data?.content.title}
        </h1>
      </motion.div>
  
      {/* Service Section with Staggered Animation */}
      <motion.div 
        className="bg-white w-full rounded grid md:grid-cols-2 p-8 gap-12 place-items-center mt-6"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {contentAndMarketingService.map((item, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-left text-left"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Slide left/right alternately
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Icon Animation - Slight Bounce Effect */}
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {item.icon}
            </motion.div>
  
            {/* Text Section */}
            <h1 className="text-xl md:text-2xl font-baskerville pb-2">
              {item.name}
            </h1>
            <p className="text-[#66717B] text-sm font-geist leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ContentMarketing