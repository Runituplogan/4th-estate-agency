import Wrapper from "@/app/components/wrapper";
import { motion } from "framer-motion";
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
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // Triggers animation each time in view
    >
      <Wrapper className="flex flex-col w-full md:flex-row justify-around items-center gap-11">
        
        {/* Left Side - Image with Sliding Effect */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="hidden md:block"
        >
          <Image
            src="/images/founder_banner.jpeg"
            alt="team image"
            width={500}
            height={500}
            className="h-full object-cover rounded-md shadow-lg"
          />
        </motion.div>

        {/* Right Side - Text & Achievements */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="w-full md:w-1/2"
        >
          {/* Animated Title with Slide Down Effect */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="font-baskerville md:text-6xl text-4xl text-center md:text-left"
          >
            {data?.content.title}
          </motion.h1>

          {/* Achievements Grid with Staggered Slide-Up Effect */}
          <div className="grid grid-cols-2 gap-6 mt-8 text-left">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" } }
                }}
                className="p-4 rounded-lg  transition-all duration-300"
              >
                <h1 className="md:text-5xl text-3xl font-semibold font-geist mb-2 text-center md:text-left">
                  {achievement.amount}
                </h1>
                <p className="text-[#66717B] text-sm font-geist text-center md:text-left">
                  {achievement.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </Wrapper>
    </motion.div>
  );
}
export default Achievements