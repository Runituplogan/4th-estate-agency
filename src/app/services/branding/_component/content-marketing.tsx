import CopyIcon from "@/app/icons/copy";
import GrowthIcon from "@/app/icons/growth";
import JotIcon from "@/app/icons/jot";
import TargetIcon from "@/app/icons/target";
import TargetDevice from "@/app/icons/target_device";
import UserStar from "@/app/icons/userStar";
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
    <div className="animate-fade-up">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-baskerville mb-3 md:text-6xl text-2xl text-center md:leading-relaxed text-[43px] leading-[1.0]">
          {/* Amplify Your Brand in Content <br className="hidden md:flex" />{" "}
          Marketing Services */}
          {data?.content.title}
        </h1>
      </div>
      <div className="bg-white w-full rounded grid md:grid-cols-2 p-8 gap-12 place-items-center mt-6">
        {contentAndMarketingService.map((item, index) => (
          <div className="" key={index}>
            {item.icon}
            <h1 className="text-xl md:text-2xl font-baskerville pb-2">
              {item.name}
            </h1>
            <p className="text-[#66717B] text-sm font-geist leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentMarketing