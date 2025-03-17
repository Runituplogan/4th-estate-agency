"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react"; // Icons for open/close menu

import LogoImage from "../../../public/images/logo.png";
import InstaSvg from "../../../public/insta.svg";
import LinkedInSvg from "../../../public/linkedIn.svg";
import MailSvg from "../../../public/mail.svg";
import { motion } from "framer-motion";

interface HeroLayoutProps {
  backgroundImage: string;
  children: ReactNode;
  height?:'full' | 'half'
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const servicesNav = [
    {
      title:"Branding",
      route:"/services/branding",
    },
    {
      title:"Paid Media",
      route:"/services/paid-media",
    },
    {
      title:"Press",
      route:"/services/press",
    },
    {
      title:"SEO",
      route:"/services/seo",
    },
    {
      title:"Socials",
      route:"/services/social-media",
    },
    {
      title:"Web Development",
      route:"/services/website",
    },
  ]
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center md:justify-around justify-between p-6 bg-transparent z-20">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src={LogoImage} alt="Logo" width={150} height={100} />
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/about" className="text-white hover:underline">
          About
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          //onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link href="/services" className="text-white hover:underline flex items-center">
            Services <ChevronDown size={16} className="ml-1" />
          </Link>
          {dropdownOpen && (
            <div className="absolute left-0 right-0 mt-2 text-left  w-44 bg-white text-black shadow-lg rounded-sm">
              {servicesNav.map((item,index)=>(
              <Link
                key={index}
                href={item.route}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                {item.title}
              </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/blogs" className="text-white hover:underline">
          Blog
        </Link>
        <Link href="/contact" className="text-white hover:underline">
          Contact Us
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="https://www.instagram.com/4thestateagency?igsh=MXg5bWp1OWRmMHNkMQ==">
        <Image src={InstaSvg} alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.bing.com/ck/a?!&&p=b881ef0128d1ef8726d1ce7a0881480d4d6b17a7d9e2c20f750a6572599a9896JmltdHM9MTc0MjA4MzIwMA&ptn=3&ver=2&hsh=4&fclid=20eb0161-86f2-62e2-1dd5-14cd874b63c2&psq=4th+estate+agency+linkedin&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvNHRoLWVzdGF0ZS1hZ2VuY3k&ntb=1">
        <Image src={LinkedInSvg} alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="info@4thestateagency.com">
        <Image src={MailSvg} alt="Email" width={24} height={24} />
        </Link>
      </div>
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 flex flex-col items-center space-y-4">
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
          <div className="w-full flex flex-col items-center">
            <button
              className="text-white hover:underline flex items-center"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            {mobileDropdownOpen && (
              <div className="mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
                <Link
                  href="/services/web-development"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Web Development
                </Link>
              </div>
            )}
          </div>

          <Link href="/blogs" className="text-white hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="text-white hover:underline">
            Contact Us
          </Link>

          <div className="flex space-x-4 mt-4">
            <Image src={InstaSvg} alt="Instagram" width={24} height={24} />
            <Image src={LinkedInSvg} alt="LinkedIn" width={24} height={24} />
            <Image src={MailSvg} alt="Email" width={24} height={24} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default function HeroLayout({ backgroundImage, children,height = "half" }: HeroLayoutProps) {
  return (
    <div
      className={`relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center  ${
        height === "full" ? "h-screen" : "h-[50vh]"
      }`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Navbar />
      <motion.div
        className="relative z-10 max-w-5xl px-6"
        initial={{ opacity: 0, y: 20 }}  // Starts invisible & slightly below
        animate={{ opacity: 1, y: 0 }}  // Moves up and becomes visible
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      >
        {children}
      </motion.div>
    </div>
  );
}
