"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Menu, X } from "lucide-react"; // Icons for open/close menu

import LogoImage from "../../../public/images/logo.png";
import InstaSvg from "../../../public/insta.svg";
import LinkedInSvg from "../../../public/linkedIn.svg";
import MailSvg from "../../../public/mail.svg";
import { motion } from "framer-motion";

interface HeroLayoutProps {
  backgroundImage: string;
  children: ReactNode;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 bg-transparent z-20">
      <div className="flex items-center space-x-2">
        <Link href="/">
        <Image src={LogoImage} alt="Logo" width={100} height={100} />
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/about" className="text-white hover:underline">
          About
        </Link>
        <Link href="/services" className="text-white hover:underline">
          Services
        </Link>
        <Link href="/blogs" className="text-white hover:underline">
          Blog
        </Link>
        <Link href="/contact" className="text-white hover:underline">
          Contact Us
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Image src={InstaSvg} alt="Instagram" width={24} height={24} />
        <Image src={LinkedInSvg} alt="LinkedIn" width={24} height={24} />
        <Image src={MailSvg} alt="Email" width={24} height={24} />
      </div>
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 flex flex-col items-center space-y-4">
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
          <Link href="/services" className="text-white hover:underline">
            Services
          </Link>
          <Link href="/blog" className="text-white hover:underline">
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

export default function HeroLayout({ backgroundImage, children }: HeroLayoutProps) {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
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
