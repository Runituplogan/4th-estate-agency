import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import InstaSvg from "../../../public/insta.svg";
import LinkedInSvg from "../../../public/linkedIn.svg";
import MailSvg from "../../../public/mail.svg";
import Image from "next/image";
import LogoImage from "../../../public/images/logov2.png";

export default function Footer() {
  return (
    <footer className="bg-[#F7EFE5] text-gray-800 py-10 px-6 md:px-12 lg:px-20">
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
          <Image src={InstaSvg} alt="Instagram" width={24} height={24} />
            <Image src={LinkedInSvg} alt="LinkedIn" width={24} height={24} />
            <Image src={MailSvg} alt="Email" width={24} height={24} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Services</a></li>
            <li><a href="#" className="hover:text-gray-900">Blog</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-900">Legal</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Privacy Policies</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-900">Contact</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-700" />
              <span>213-216-4416</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-700" />
              <span>info@4thestateagency.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-700" />
              <span>218 S Tower Dr #207, Beverly Hills, CA 90211</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
