import Wrapper from "@/app/components/wrapper";
import Image from "next/image";

interface AchievementsProps{
  data:AboutSection3
}
const Achievements:React.FC<AchievementsProps>=({data})=> {
  const achievements = [
    {
      amount: `${data?.content?.subContent[0].title}`,
      title: `${data?.content?.subContent[0].description}`,
    },
    {
      amount: `${data?.content?.subContent[1].title}`,
      title: `${data?.content?.subContent[1].description}`,
    },
    {
      amount: `${data?.content?.subContent[2].title}`,
      title: `${data?.content?.subContent[2].description}`,
    },
    {
      amount: `${data?.content?.subContent[3].title}`,
      title: `${data?.content?.subContent[3].description}`,
    },
  ];

  return (
    <Wrapper className="flex flex-col w-full md:flex-row justify-around items-center gap-11 animate-fade-up">
      <Image
        src="/images/founder_banner.jpeg"
        alt="team image"
        width={500}
        height={500}
        className="animate-fade-right h-full object-cover rounded-md hidden md:block"
      />
      <div className="animate-fade-left w-full md:w-1/2">
        <div className="mb-8">
          <p className="font-baskerville md:text-6xl text-4xl text-center md:text-left">
            {/* We're only just <br className=""/> getting started on <br className=""/> our journey */}
            {data?.content.title}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6  text-left">
          {achievements.map((achievement, index) => (
            <div key={index}>
              <h1 className="md:text-5xl text-3xl font-semibold font-geist mb-3 md:mb-0 text-center md:text-left">{achievement.amount}</h1>
              <p className="text-[#66717B] text-sm font-geist text-center md:text-left">{achievement.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
export default Achievements