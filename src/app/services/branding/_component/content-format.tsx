import Image from "next/image";

export default function ContentFormat() {
  return (
    <div className="flex flex-col-reverse space-x-7  md:flex-row justify-between items-center gap-6 md:text-base text-sm">
      <div className="animate-fade-right w-full md:w-1/2">
        <Image
          src="/images/braining_image.png"
          alt="Brand Image"
          width={500}
          height={500}
          className="w-full max-h-[530px]"
        />
      </div>
      <div className="animate-fade-left w-full md:w-1/2">
        <h1 className="font-baskerville text-2xl w-full text-[43px] md:text-4xl md:max-w-[400px] md:leading-relaxed leading-[1.0]">
          Content Formats & Channels To Reach Consumers
        </h1>
        <p className="md:max-w-[500px] text-[#66717B] font-geist leading-loose mt-3 md:mb-0 mb-3">
          At 4th Estate, we create content and develop data-driven strategies to
          reach your target audience in the vibrant los angeles content
          marketing. Here's how we leverage various formats and channels to
          amplify your brand message:
        </p>
        <ul className="text-[#66717B] list-disc font-geist leading-loose pl-7">
          <li>
            <span>Written Content</span>
          </li>
          <li>
            <span>Visual Content</span>
          </li>
          <li>
            <span>Engaging Videos</span>
          </li>
          <li>
            <span>Social Media Management</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
