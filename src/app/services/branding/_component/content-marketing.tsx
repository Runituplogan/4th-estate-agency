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

export default function ContentMarketing() {
  const contentAndMarketingService = [
    {
      name: "Understand Your Customers",
      description:
        "We don't use a one-size-fits-all approach. We take the time to understand your brand and target audience. Whether you're selling fitness apparel to health-conscious millennials or sustainable products to eco-friendly families, we'll develop content that speaks directly to their interests.",
      icon: <UserStar />,
    },
    {
      name: "Content with a Goal",
      description:
        "We don't create generic content. We develop data-driven content plans based on your specific goals. Need to drive traffic to your website showcasing locally-made activewear? We'll create engaging blog posts highlighting the latest fitness trends and featuring your products. We'll craft informative articles with tips for achieving a glowing complexion using your products.",
      icon: <CopyIcon />,
    },
    {
      name: "Go Beyond the Blog",
      description:
        "We create high-quality content in various formats. It may include social media posts featuring your products in iconic locations, clear website copy that converts visitors into customers. Moreover, our interactive quizzes provide a fun and engaging way to connect with the vibrant LA community, ensuring your brand stays an integral part of their daily experience.",
      icon: <JotIcon />,
    },
    {
      name: "Targeted Distribution",
      description:
        "Your content won't just sit on your website. We strategically distribute it across relevant channels to reach your ideal customers. This might involve local online publications popular with your target audience, social media platforms where they're active, and even partnerships with local influencers.",
      icon: <TargetDevice />,
    },
    {
      name: "Track Your Success",
      description:
        "We don't just create content – we track its performance with precise analytics and reporting. This lets us see what's working and what's not so that we can refine your strategy for maximum impact. We'll show you how your content attracts new customers, generates leads, and boosts your business growth in the competitive LA market.",
      icon: <TargetIcon />,
    },

    {
      name: "Long-term growth",
      description:
        "Effective content marketing is a long-term investment that keeps your brand relevant and fosters ongoing customer relationships. Consistently offering valuable and relevant content, you not only maintain your brand's relevance but also foster ongoing connections with your audience.",
      icon: <GrowthIcon />,
    },
  ];

  return (
    <div className="animate-fade-up">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-baskerville mb-3 md:text-6xl text-2xl text-center md:leading-relaxed text-[43px] leading-[1.0]">
          Amplify Your Brand in Content <br className="hidden md:flex" />{" "}
          Marketing Services
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
