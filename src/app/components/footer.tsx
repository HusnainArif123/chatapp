"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Add icons for social media

interface IProps {
  address: string;
  phoneNo: string;
  email: string;
}

const Footer = ({ address, phoneNo, email }: IProps) => {
  return (
    <div className="bg-gray-900 text-white py-10 mt-20">
      <div className="container max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Contact Info */}
        <div className="space-y-4 ml-20">
          <h3 className="text-2xl font-semibold text-gray-300">Contact Us</h3>
          <p>{address}</p>
          <p>{phoneNo}</p>
          <p>{email}</p>
        </div>

        {/* Social Media */}
        <div className="space-y-4 ml-50">
          <h3 className="text-2xl font-semibold text-gray-300">Follow Us</h3>
          <div className="flex flex-col justify-center gap-5 text-lg ">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
            >
              <FaFacebook className="text-1xl" />
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
            >
              <FaInstagram className="text-1xl" />
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
            >
              <FaTwitter className="text-1xl" />
              Twitter
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 ml-50">
          <h3 className="text-2xl font-semibold text-gray-300">Quick Links</h3>
          <ul className="space-y-4 ">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Customer Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-5 pt-2 ml-50 ">
        <p>© 2025 TalkTown. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
