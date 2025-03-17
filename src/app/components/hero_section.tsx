"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react"; // Icons for open/close menu

import LogoImage from "../../../public/images/logo.png";
import InstaSvg from "../../../public/insta.svg";
import LinkedInSvg from "../../../public/linkedIn.svg";
import MailSvg from "../../../public/mail.svg";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";

interface HeroLayoutProps {
  backgroundImage: string;
  children: ReactNode;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesNav = [
    { title: "Branding", route: "/services/branding" },
    { title: "SEO", route: "/services/seo" },
    { title: "Paid Media", route: "/services/paid-media" },
    { title: "Press", route: "/services/press" },
    { title: "Socials", route: "/services/social-media" },
    { title: "Web Development", route: "/services/website" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const halfwayPoint = heroSection.offsetHeight / 2;
        setScrolled(window.scrollY > halfwayPoint);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Wrapper>
        <div className="mx-auto flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/">
            <Image
              src={LogoImage}
              alt="Logo"
              width={400}
              height={400}
              className={`transition-all w-[170px] duration-300 -ml-[25px] ${
                scrolled ? "filter grayscale brightness-0" : "filter-none"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/about"
              className={`transition-all duration-300 ${
                scrolled ? "text-black" : "text-white"
              } hover:underline`}
            >
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center transition-all duration-300 ${
                  scrolled ? "text-black" : "text-white"
                } hover:underline`}
              >
                Services <ChevronDown size={16} className="ml-1" />
              </Link>
              {dropdownOpen && (
                <div className="absolute left-0 mt-1 w-[16rem] text-start p-[1rem] bg-white text-black shadow-lg rounded-sm">
                  {servicesNav.map((item, index) => (
                    <Link
                      key={index}
                      href={item.route}
                      className="block px-4 py-2 rounded-md hover:bg-gray-200"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/blogs"
              className={`transition-all duration-300 ${
                scrolled ? "text-black" : "text-white"
              } hover:underline`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`transition-all duration-300 ${
                scrolled ? "text-black" : "text-white"
              } hover:underline`}
            >
              Contact Us
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex space-x-4">
            <Link href="https://www.instagram.com/4thestateagency">
              <Image src={InstaSvg} alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/company/4th-estate-agency">
              <Image src={LinkedInSvg} alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="mailto:info@4thestateagency.com">
              <Image src={MailSvg} alt="Email" width={24} height={24} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
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
                    {servicesNav.map((item, index) => (
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
              <div className="flex space-x-4 mt-4">
                <Image src={InstaSvg} alt="Instagram" width={24} height={24} />
                <Image
                  src={LinkedInSvg}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
                <Image src={MailSvg} alt="Email" width={24} height={24} />
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </nav>
  );
};

export default function HeroLayout({
  backgroundImage,
  children,
}: HeroLayoutProps) {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Navbar />
      <motion.div
        className="relative z-10 max-w-5xl"
        initial={{ opacity: 0, y: 20 }} // Starts invisible & slightly below
        animate={{ opacity: 1, y: 0 }} // Moves up and becomes visible
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      >
        {children}
      </motion.div>
    </div>
  );
}
