import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BookACallBtn(){
    return (
        <Link href="/contact">
        <button className=" px-6 py-3 bg-white text-[#385065] rounded-lg my-6 text-sm md:ml-2">
          <div className="flex space-x-2">
            <span>Book a Strategy Call</span>
            <ArrowUpRight size={20} />
          </div>
        </button>
      </Link>
    )
}