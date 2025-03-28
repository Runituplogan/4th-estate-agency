import Image from "next/image";

interface ContentFormatProps{
  data:BrandingSection2;
}
const ContentFormat:React.FC<ContentFormatProps>=({data})=> {
  const contentFormatDescription = data.content.description.split(';')
  return (
    <div className="flex flex-col-reverse space-x-7  md:flex-row justify-between items-center gap-6 md:text-base text-sm">
      <div className="animate-fade-right w-full md:w-1/2">
        <Image
          src={`${data?.content.image}`}
          alt="Brand Image"
          width={500}
          height={500}
          className="w-full max-h-[530px]"
        />
      </div>
      <div className="animate-fade-left w-full md:w-1/2">
        <h1 className="font-baskerville text-2xl w-full text-[43px] md:text-4xl md:max-w-[400px] md:leading-relaxed leading-[1.0]">
        {data?.content.title}
        </h1>
        <p className="md:max-w-[500px] text-[#66717B] font-geist leading-loose mt-3 md:mb-0 mb-3">
        {contentFormatDescription[0]}
        </p>
        <ul className="text-[#66717B] list-disc font-geist leading-loose pl-7">
          <li>
            <span>{contentFormatDescription[1]}</span>
          </li>
          <li>
            <span>{contentFormatDescription[2]}</span>
          </li>
          <li>
            <span>{contentFormatDescription[3]}</span>
          </li>
          <li>
            <span>{contentFormatDescription[4]}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ContentFormat