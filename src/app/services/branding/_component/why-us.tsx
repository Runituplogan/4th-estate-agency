import { motion } from "framer-motion";
import Image from "next/image";

interface WhyUsProps{
  data:BrandingSection4;
}
const WhyUs:React.FC<WhyUsProps>=({data})=> {
  const descriptionSplit = data?.content.description.split(';')
  return (
    <motion.div
    className="text-[#66717B] flex gap-4 flex-col md:flex-row justify-between items-center md:text-base text-sm"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }} // Retriggers animation when in view
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    }}
  >
    {/* Text Section with Slide-in Animation */}
    <motion.div
      className="mb-2 w-full md:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1 className="font-baskerville text-2xl w-full md:text-6xl md:max-w-[700px] md:leading-relaxed text-black text-[44px] leading-[1.0]">
        {data?.content?.title}
      </h1>
      <p className="md:max-w-[500px] text-[#66717B] font-geist leading-loose mt-3 p-2">
        {descriptionSplit[0]}
      </p>
      <ul className="list-disc font-geist leading-loose pl-10">
        {descriptionSplit.slice(1, 5).map((item, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
      <p className="md:max-w-[500px] text-[#66717B] leading-relaxed">
        {descriptionSplit[5]}
      </p>
    </motion.div>

    {/* Image with Smooth Slide-in Animation */}
    <motion.img
      src="/images/content-image.png"
      alt="content image"
      width={500}
      height={500}
      className="hidden md:block"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    />
  </motion.div>

  );
}

export default WhyUs;