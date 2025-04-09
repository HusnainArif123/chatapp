"use client";

import { useState } from "react";
import { toast } from "react-toastify";

type FriendModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: { name: string; phoneNo: number }) => void;
};

export default function FriendModal({
  isOpen,
  onClose,
  onAdd,
}: FriendModalProps) {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleSubmit = () => {
    if (!name || !phoneNo) {
      return toast.error("All fields are required");
    }

    onAdd({ name, phoneNo: Number(phoneNo) });
    setName("");
    setPhoneNo("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-40 ">
      <div className="bg-white shadow-lg overflow-hidden border rounded-4xl shadow-lg p-6 w-full max-w-md mx-4 animate-fade-in">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Friend</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>

        <div className="flex justify-end mt-6 space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-500"
          >
            Add Friend
          </button>
        </div>
      </div>
    </div>
  );
}
