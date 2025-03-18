import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import InstaSvg from "../../../public/insta.svg";
import LinkedInSvg from "../../../public/linkedIn.svg";
import MailSvg from "../../../public/mail.svg";
import Image from "next/image";
import LogoImage from "../../../public/images/logov2.png";
import Link from "next/link";
import { LocationIcon, MailIcon, PhoneIcon } from "./icons/contact";

export default function Footer() {
  return (
    <footer className="bg-[#F7EFE5] text-gray-800 px-3 md:px-6 py-10">
      <div className="max-w-7xl mx-auto flex justify-around flex-col md:flex-row gap-12">
        <div>
        <Image src={LogoImage} alt="Logo" width={100} height={100} />
          <p className="mt-2 text-md leading-relaxed py-4 text-gray-600 max-w-[500px]">
            A marketing agency that gets your brand the attention it deserves.  
            We drive more traffic, leads & sales to your website.
          </p>
          <div className="flex items-center space-x-3 mt-4 my-3">
          <Link href="jason@4thestateagency.com">
        <Image src={MailSvg} alt="Email" width={24} height={24} />
        </Link>
        <Link href="https://www.bing.com/ck/a?!&&p=b881ef0128d1ef8726d1ce7a0881480d4d6b17a7d9e2c20f750a6572599a9896JmltdHM9MTc0MjA4MzIwMA&ptn=3&ver=2&hsh=4&fclid=20eb0161-86f2-62e2-1dd5-14cd874b63c2&psq=4th+estate+agency+linkedin&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvNHRoLWVzdGF0ZS1hZ2VuY3k&ntb=1">
        <Image src={LinkedInSvg} alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/4thestateagency?igsh=MXg5bWp1OWRmMHNkMQ==">
        <Image src={InstaSvg} alt="Instagram" width={24} height={24} />
        </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <h3 className="font-medium text-[#192031]">Quick Links</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li><a href="" className="hover:text-gray-900">Home</a></li>
            <li><a href="/about" className="hover:text-gray-900">About</a></li>
            <li><a href="/services" className="hover:text-gray-900">Services</a></li>
            <li><a href="/blogs" className="hover:text-gray-900">Blog</a></li>
            <li><a href="/contact" className="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h3 className=" font-medium text-[#192031]">Legal</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li><a href="/" className="hover:text-gray-900">Privacy Policies</a></li>
            <li><a href="/" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="md:hidden flex gap-12">
        <div>
          <h3 className="font-medium text-[#192031]">Quick Links</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li><a href="" className="hover:text-gray-900">Home</a></li>
            <li><a href="/about" className="hover:text-gray-900">About</a></li>
            <li><a href="/services" className="hover:text-gray-900">Services</a></li>
            <li><a href="/blogs" className="hover:text-gray-900">Blog</a></li>
            <li><a href="/contact" className="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className=" font-medium text-[#192031]">Legal</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li><a href="/" className="hover:text-gray-900">Privacy Policies</a></li>
            <li><a href="/" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>
        </div>
        <div>
          <h3 className="font-medium text-[#192031]">Contact</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <PhoneIcon />
              <span>213-216-4416</span>
            </li>
            <li className="flex items-center space-x-2">
              <MailIcon/>
              <span>info@4thestateagency.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <LocationIcon />
              <span>218 S Tower Dr #207, Beverly Hills, CA 90211</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
