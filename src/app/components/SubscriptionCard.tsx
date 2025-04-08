// components/CaseCard.tsx
"use client";

import { LucideIcon } from "lucide-react";
import React from "react";

interface CaseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText?: string;
}

const CaseCard: React.FC<CaseCardProps> = ({
  title,
  description,
  icon: Icon,
  buttonText = "Go to case",
}) => {
  return (
    <div className="relative w-80 h-48 p-6 rounded-[40px] bg-gradient-to-br from-[#ec4899] via-[#DFAACB] to-[#ec4899] shadow-md overflow-hidden">
      <Icon className="absolute w-72 h-72 text-white/10 -left-10 -top-16" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        <div className="mt-4">
          <button className="bg-white text-black rounded-full shadow px-5 py-1 hover:bg-gray-100">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
