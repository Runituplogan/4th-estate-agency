import { motion } from "framer-motion";
import Image from "next/image";

interface ContentFormatProps{
  data:BrandingSection2;
}
const ContentFormat:React.FC<ContentFormatProps>=({data})=> {

  const contentFormatDescription = data.content.description.split(";");

  return (
    <motion.div 
      className="flex flex-col-reverse space-x-7 md:flex-row justify-between items-center gap-6 md:text-base text-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // Re-triggers animation when in view
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
      }}
    >
      {/* Image Animation - Slide in from Right */}
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Image
          src={`${data?.content.image}`}
          alt="Brand Image"
          width={500}
          height={500}
          className="w-full max-h-[530px]"
        />
      </motion.div>
  
      {/* Text Animation - Slide in from Left */}
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="font-baskerville text-2xl w-full text-[43px] md:text-4xl md:max-w-[400px] md:leading-relaxed leading-[1.0]">
          {data?.content.title}
        </h1>
  
        {/* Description - Fade in with delay */}
        <motion.p 
          className="md:max-w-[500px] text-[#66717B] font-geist leading-loose mt-3 md:mb-0 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {contentFormatDescription[0]}
        </motion.p>
  
        {/* List Items - Staggered Slide-in */}
        <motion.ul 
          className="text-[#66717B] list-disc font-geist leading-loose pl-7"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {contentFormatDescription.slice(1).map((item, index) => (
            <motion.li 
              key={index}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
export default ContentFormat