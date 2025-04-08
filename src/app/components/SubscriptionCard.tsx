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
    <div className="relative w-80 h-50 p-6 rounded-[40px] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-lg overflow-hidden">
      <div className="relative z-10 flex flex-col justify-between h-40">
        <div>
          <h2 className="text-lg font-semibold text-white mb-1 truncate">
            {title}
          </h2>
          <p className="text-sm text-gray-300 line-clamp-4">{description}</p>
        </div>

        <div className="mt-4">
          <button className="bg-white text-black rounded-full shadow px-5 py-1 hover:bg-gray-500">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
