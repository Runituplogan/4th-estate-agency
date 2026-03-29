"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, House } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center px-5 text-gray-700 max-w-md text-center">
        <div className="mb-6">
          <Image
            src="/icons/page-not-found.svg"
            alt="404"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="mb-4">
          <div className="text-5xl font-dark font-bold mb-2">404</div>
          <p className="text-2xl font-light leading-normal mb-2">
            Sorry we couldn&apos;t find this page.
          </p>
          <p className="mb-6">
            Something went wrong. It looks like your request could not be found.
            Maybe the link is broken or the page has been removed.
          </p>
        </div>

        <div className="flex flex-row gap-2">
          <Button
            onClick={() => router.back()}
            className="bg-[#1B3C59] hover:bg-[#1B3C59] hover:text-white text-white w-33 h-12 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft color="#ffffff" />
            Go Back
          </Button>
          <Button
            onClick={() => router.push("/order-content")}
            className="bg-[#e8f2f8] text-[#1B3C59] w-33 h-12 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-[#e8f2f8] cursor-pointer"
          >
            <House color="#1B3C59" />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
