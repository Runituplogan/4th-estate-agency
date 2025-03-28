import Image from "next/image";

interface WhyUsProps{
  data:BrandingSection4;
}
const WhyUs:React.FC<WhyUsProps>=({data})=> {
  const descriptionSplit = data?.content.description.split(';')
  return (
    <div className="text-[#66717B] flex gap-4 flex-col md:flex-row justify-between items-center md:text-base text-sm animate-fade-right">
      <div className="mb-2 w-full md:w-1/2">
      <h1 className="font-baskerville text-2xl w-full md:text-6xl md:max-w-[700px] md:leading-relaxed text-black text-[44px] leading-[1.0]">
         {data?.content?.title}
        </h1>
        <p className="md:max-w-[500px] text-[#66717B]  font-geist leading-loose mt-3 p-2">
          {descriptionSplit[0]}
        </p>
        <ul className="list-disc font-geist leading-loose pl-10">
          <li>
            <span>{descriptionSplit[1]}</span>
          </li>
          <li>
            <span>{descriptionSplit[2]}</span>
          </li>
          <li>
            <span>{descriptionSplit[3]}</span>
          </li>
          <li>
            <span>{descriptionSplit[4]}</span>
          </li>
        </ul>
        <p className="md:max-w-[500px] text-[#66717B] leading-relaxed">
        {descriptionSplit[5]}
        </p>
      </div>
      <Image
        src="/images/content-image.png"
        alt="content image"
        width={500}
        height={500}
        className="animate-fade-left hidden md:block"
      />
    </div>
  );
}

export default WhyUs;