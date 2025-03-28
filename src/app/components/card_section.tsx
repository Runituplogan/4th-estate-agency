import Image from "next/image";
import Wrapper from "./wrapper";
import Button from "./button";

interface SectionCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  showBtn?: false;
  marginStyle?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title = "Take Your Business to the Next Level - Contact 4th Estate!",
  description = "With 4th Estate by your side, you can rest assured that your SEO efforts are in expert hands. Our holistic approach to SEO ensures that every aspect of your online presence is optimized for success, driving more traffic, leads, and conversions to your business.",
  imageUrl = "/images/location.png",
  showBtn = true,
  marginStyle = "mb-[3.375rem] ",
}) => {
  return (
    <Wrapper>
      <Wrapper
        className={`${marginStyle} bg-[#0C2F4D] rounded text-white flex flex-col  gap-[1.5rem] lg:gap-[5.25rem]  lg:px-[2.875rem] md:flex-row items-center py-[1.5rem] lg:py-[4rem] justify-between animate-fade-up`}
      >
        <figcaption className="animate-fade-right flex flex-col gap-[1.8rem] items-start w-full md:w-1/2">
          <h3 className=" xl:text-[3rem] font-baskerville tracking-[-0.3%] capitalize text-[2.62rem] leading-[2.62rem] pr-[1rem] lg:pr-0 md:text-4xl md:leading-[4rem] ">
            {title}
          </h3>
          <p className=" text-[0.875rem] leading-[1.5rem]  md:text-[1rem] lg:leading-[1.875rem] tracking-[-0.3%] align-middle font-geist text-[#E2E8F0] ">
            {description}
          </p>
          {showBtn && (
            <Button className="text-[#385065] mr-auto bg-white self-center  items-center justify-center w-full md:w-auto">
              Book a Strategy Call
            </Button>
          )}
        </figcaption>
        <div className="relative w-full h-[20.24rem] lg:h-[27.125rem] md:w-1/2">
          <Image
            src={`${imageUrl}`}
            alt="content image"
            fill
            className="animate-fade-left object-cover object-center "
          />
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default SectionCard;
