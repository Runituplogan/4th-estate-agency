import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import InstaSvg from "../../../public/insta.svg";
import LinkedInSvg from "../../../public/linkedIn.svg";
import MailSvg from "../../../public/mail.svg";
import Image from "next/image";
import LogoImage from "../../../public/images/logov2.png";
import Link from "next/link";
import Linkedin from "../icons/linkedin";
import Insta from "../icons/insta";
import MailIcon from "../icons/mail";
import LocationIcon from "../icons/location";
import PhoneIcon from "../icons/phone";

export default function Footer() {
  return (
    <footer className="bg-[#F7EFE5] text-gray-800 py-[5rem] px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <Image src={LogoImage} alt="Logo" width={100} height={100} />
          <p className="mt-2 text-sm text-gray-600">
            A marketing agency that gets your brand the attention it deserves.
            We drive more traffic, leads & sales to your website.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 mt-4">
            <Link
              className="bg-white rounded-full p-2"
              href="https://www.bing.com/ck/a?!&&p=b30f4f2092daf5bb4f9405c6ad12213174f92a29d46da000249b03af5097af3cJmltdHM9MTc0MjA4MzIwMA&ptn=3&ver=2&hsh=4&fclid=20eb0161-86f2-62e2-1dd5-14cd874b63c2&psq=4th+estate+agency+instagram&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90aGVmb3VydGhlc3RhdGVtZWRpYS8&ntb=1"
            >
              <MailIcon />
            </Link>
            <Link
              className="bg-white rounded-full p-2"
              href="https://www.bing.com/ck/a?!&&p=b881ef0128d1ef8726d1ce7a0881480d4d6b17a7d9e2c20f750a6572599a9896JmltdHM9MTc0MjA4MzIwMA&ptn=3&ver=2&hsh=4&fclid=20eb0161-86f2-62e2-1dd5-14cd874b63c2&psq=4th+estate+agency+linkedin&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvNHRoLWVzdGF0ZS1hZ2VuY3k&ntb=1"
            >
              <Linkedin />
            </Link>
            <Link
              className="bg-white rounded-full p-2"
              href="info@4thestateagency.com"
            >
              <Insta />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-[#192031]">Quick Links</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li>
              <a href="" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className=" font-medium text-[#192031]">Legal</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-gray-900">
                Privacy Policies
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-[#192031]">Contact</h3>
          <ul className="mt-2 space-y-5 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <PhoneIcon />
              <PhoneIcon />
              <span>213-216-4416</span>
            </li>
            <li className="flex items-center space-x-2">
              <MailIcon variation="large"/>
              <span>info@4thestateagency.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="-mt-4">
                <LocationIcon />
              </span>
              <span>218 S Tower Dr #207, Beverly Hills, CA 90211</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
