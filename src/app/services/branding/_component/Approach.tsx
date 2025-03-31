import ServiceCard from "@/app/components/service_card";
import BoostIcon from "@/app/icons/boost";
import MedalIcon from "@/app/icons/medal";
import TrustIcon from "@/app/icons/trust";
import UserStar from "@/app/icons/userStar";
import { motion } from "framer-motion";

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
    <motion.div 
      className="items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // Re-triggers when in view
    >
      {/* Title Section */}
      <motion.div 
        className="w-full items-center flex justify-center flex-col"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-center text-4xl md:text-6xl font-baskerville max-w-[900px] leading-relaxed">
          {data?.content[0].title}
        </h1>
  
        <motion.p
          className="text-base max-w-4xl font-geist text-[#66717B] mb-4 md:leading-relaxed mt-5 leading-loose"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {data?.content[0].description}
        </motion.p>
      </motion.div>
  
      {/* Animated Grid of Service Cards */}
      <motion.div className="mt-5">
        <motion.div 
          className="grid md:grid-cols-2 gap-4 w-full"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {ourApproach.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <ServiceCard 
                description={item.description}
                name={item.name}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default Approach;