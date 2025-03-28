import ServiceCard from "@/app/components/service_card";
import BoostIcon from "@/app/icons/boost";
import MedalIcon from "@/app/icons/medal";
import TrustIcon from "@/app/icons/trust";
import UserStar from "@/app/icons/userStar";

interface ApproachProps{
  data:BrandingSection1;
}
const Approach:React.FC<ApproachProps>=({data})=> {
  const ourApproach = [
    {
      name: `${data?.content[0].subContent[0].title}`,
      description:
       `${data?.content[0].subContent[0].description}`,
      icon: <MedalIcon />,
    },
    {
      name: `${data?.content[0].subContent[1].title}`,
      description:
       `${data?.content[0].subContent[1].description}`,
      icon: <TrustIcon />,
    },
    {
      name: `${data?.content[0].subContent[2].title}`,
      description:
       `${data?.content[0].subContent[2].description}`,
      icon: <BoostIcon />,
    },
    {
      name: `${data?.content[0].subContent[3].title}`,
      description:
       `${data?.content[0].subContent[3].description}`,
      icon: <UserStar />,
    },
  ];

  return (
    <div className="items-center text-center animate-fade-up">
      <div className="w-full items-center flex justify-center flex-col">
        <h1 className="text-center text-4xl md:text-6xl font-baskerville max-w-[900px] leading-relaxed">
          {data?.content[0].title}
        </h1>
        <p className="text-base max-w-4xl font-geist text-[#66717B] mb-4 md:leading-relaxed mt-5 leading-loose">
        {data?.content[0].description}
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
export default Approach;