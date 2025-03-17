import ServiceCard from "@/app/components/service_card";
import BoostIcon from "@/app/icons/boost";
import MedalIcon from "@/app/icons/medal";
import TrustIcon from "@/app/icons/trust";
import UserStar from "@/app/icons/userStar";

export default function Approach() {
  const ourApproach = [
    {
      name: "Cuts through the noise",
      description:
        "With countless businesses grabbing online attention, high-quality content cuts through the clutter and positions your brand as a thought leader.",
      icon: <MedalIcon />,
    },
    {
      name: "Builds trust and credibility",
      description:
        "By consistently providing valuable content, you educate and engage potential customers, building trust and credibility in your brand.",
      icon: <TrustIcon />,
    },
    {
      name: "Boosts SEO",
      description:
        "Search engines love fresh, informative content. Content marketing helps you rank higher in search results, driving organic traffic to your website.",
      icon: <BoostIcon />,
    },
    {
      name: "Targeted lead generation",
      description:
        "Content allows you to target specific customer segments with relevant content, attracting qualified leads genuinely interested in your offerings.",
      icon: <UserStar />,
    },
  ];

  return (
    <div className="items-center text-center animate-fade-up">
      <div className="w-full items-center flex justify-center flex-col">
        <h1 className="text-center text-3xl md:text-6xl font-baskerville max-w-[900px] leading-relaxed">
          Our Approach
        </h1>
        <p className="text-base max-w-4xl font-geist text-[#66717B] mb-4 leading-relaxed mt-5">
          In today’s digital world, attention is currency. Content marketing is
          creating valuable and informative content that attracts your target
          audience, establishes your brand as an authority, and ultimately
          drives sales. Here’s why it’s crucial:
        </p>
      </div>
      <div className="mt-5">
        <div className="grid  md:grid-cols-2 gap-4 w-full  animate-fade-left">
          {ourApproach.map((item, index) => (
            <ServiceCard
              key={index}
              description={item.description}
              name={item.name}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
