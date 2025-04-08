"use client";

import Link from "next/link";

interface IProps {
  address: string;
  phoneNo: string;
  email: string;
}

const Footer = ({ address, phoneNo, email }: IProps) => {
  return (
    <footer className="bg-pink-700 text-white py-10">
      <div className="container max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl flex justify-center font-semibold mb-4">
            Contact Us
          </h3>
          <p className="text-base flex justify-center  leading-relaxed">
            Address:{address}
          </p>
          <p className="text-base flex justify-center  leading-relaxed">
            Phone: {phoneNo}
          </p>
          <p className="text-base flex justify-center  leading-relaxed">
            Email: {email}
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold flex justify-center    mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center  gap-6 text-base">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex justify-center ">
            Quick Links
          </h3>
          <ul className="space-y-3 text-base ">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-gray-300 transition-colors duration-200 flex justify-center "
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-gray-300 transition-colors duration-200 flex justify-center "
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="hover:text-gray-300 transition-colors duration-200 flex justify-center "
              >
                Customer Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-pink-400 pt-4 flex justify-center ">
        © 2024 TalkTown. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
