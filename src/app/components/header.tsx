"use client";

import React, { useState } from "react";
import { FiMenu, FiSearch, FiUserX } from "react-icons/fi";
import {
  XMarkIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { PiPhoneFill } from "react-icons/pi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import SubscriptionCard from "./SubscriptionCard";
import { PenTool } from "lucide-react";

interface IProps {
  phoneNo: string;
}

const HeaderItem = ({ phoneNo }: IProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await axios.get("/api/logout");
      toast.success("Logout Successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-0"
        } fixed top-0 left-0 h-screen bg-white border-r border-pink-300 transition-all duration-300 overflow-y-auto z-40`}
      >
        <div className="flex items-center justify-between p-4 border-b border-pink-300">
          <div className="gap-2 text-gray-700 flex flex-row items-center">
            <UserGroupIcon className="h-10 w-10 text-pink-500 " />
            <h2 className="text-xl font-bold text-pink-600">Chat With</h2>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className="h-5 w-5 text-pink-600" />
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search friends..."
            className="w-full p-2 border border-pink-300 rounded-md focus:outline-none"
          />
        </div>
        <ul className="mt-4 px-5 space-y-3">
          {["Asad", "Malik", "Jutt", "Ayesha"].map((name, i) => (
            <li key={i}>
              <Link
                href={`/${name.toLowerCase()}`}
                className="rounded  text-pink-500 "
              >
                <div className="flex p-2 gap-2 items-center hover:bg-pink-300 cursor-pointer">
                  <UserIcon className="h-5 w-5 text-pink-600" />
                  {name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <button className="w-60 mt-4 ml-2 bg-pink-600 text-white font-semibold py-2 rounded-lg hover:bg-pink-700 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
          Add New Friend
        </button>
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <div className="bg-pink-500 text-white">
          <div className="px-6 py-3 flex justify-between items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl"
            >
              <FiMenu />
            </button>

            <div className="flex items-center gap-2">
              <ChatBubbleBottomCenterTextIcon height={30} />
              <h1 className="text-2xl font-bold">Welcome to TalkTown</h1>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <BiSolidPurchaseTag className="text-xl" />
                <span className="font-semibold">Buy Subscription</span>
              </div>

              <div className="flex items-center gap-1">
                <PiPhoneFill className="text-lg" />
                <span className="text-sm">{phoneNo}</span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 text-black px-2 py-1 rounded-md"
                />
                <FiSearch className="text-lg" />
              </div>

              <FiUserX
                size={22}
                onClick={handleLogout}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Welcome Section (Reduce height of this section) */}
        <div className="flex flex-col items-center justify-center text-center py-12">
          <UserGroupIcon className="h-20 w-40 text-pink-600 " />
          <h1 className="text-3xl font-bold text-pink-600 mb-2">
            Welcome to TalkTown
          </h1>
          <p className="text-gray-600 text-lg">
            Choose a friend or add a new one to start chatting.
          </p>
        </div>

        {/* Subscription Cards */}
        <div className="flex flex-row items-start gap-5 justify-center text-center mt-10">
          <SubscriptionCard
            title="Yearly Subscription"
            description="Get full access to all premium features, updates, and priority support for an entire year. Save more compared to monthly billing."
            icon={PenTool}
            buttonText={"PKR 8,000"}
          />
          <SubscriptionCard
            title="Monthly Subscription"
            description="Enjoy flexible access to all premium features with a low monthly payment. Cancel anytime with no commitment."
            icon={PenTool}
            buttonText={"PKR 2,000"}
          />
          <SubscriptionCard
            title="Free Trial"
            description="Enjoy a 7-day free trial with full access to all features—no hidden fees or obligations. Start today and explore everything we offer!"
            icon={PenTool}
            buttonText={"PKR 0"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderItem;
