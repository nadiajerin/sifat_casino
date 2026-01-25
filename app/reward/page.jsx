"use client"

import {
  FiChevronLeft,
  FiEdit,
  FiGift,
  FiUserPlus,
} from "react-icons/fi";
import { BsCheckCircle } from "react-icons/bs";
import { FaCoins, FaCrown, FaPercentage } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../lib/AuthProvider";
import { useRouter } from "next/navigation";

export default function RewardCenter() {

  const value = useContext(authContext)
  const { user } = value;
  const router = useRouter();

  if (!user) {
    return router.push('/login');
  }


  return (
    <div className=" max-w-5xl mx-auto px-4 py-3 bg-[#074d44] text-white font-sans z-50">

      {/* Header */}
      <div className="flex items-center px-4 py-4 bg-amber-500">
        <h1 className="flex-1 text-center text-lg font-semibold">
          Reward Center
        </h1>
      </div>

      {/* User Card */}
      <div className="px-4 bg-gray-300">
        <div className="relative  text-gray-800 rounded-2xl p-4 ">

          {/* Sign In Button */}
          <button className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <BsCheckCircle />
            Sign In
          </button>

          <div className="flex items-center gap-3">
            <img
              src="https://images.5949390294.com//TCG_PROD_IMAGES/B2C/01_PROFILE/PROFILE/0.png"
              alt="avatar"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div className="flex-1">
              <div className="flex items-center gap-1 font-semibold">
                unknown
                <FiEdit className="text-gray-500 text-sm" />
              </div>

              <div className="text-sm text-gray-500">
                Nickname: <br />
                {user?.email}
              </div>

              <div className="mt-1 text-lg font-bold">
                ৳ 0.00
              </div>
            </div>
          </div>

          {/* VIP */}
          <div className="mt-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <FaCrown className="text-gray-800" />
              VIP1
              <span className="ml-auto text-xs text-gray-500">0 / 1</span>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full mt-1">
              <div className="w-full h-1 bg-gray-800 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Buttons */}
      <div className=" mt-6 grid grid-cols-2 gap-4">

        {/* Bonus */}
        <div className="relative bg-gradient-to-br from-green-400 to-green-500 rounded-lg p-6 text-center">
          <FiGift className="mx-auto text-4xl mb-2" />
          <p className="font-medium">Bonus</p>
        </div>

        {/* Sign In */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-center">
          <BsCheckCircle className="mx-auto text-4xl mb-2" />
          <p className="font-medium">Sign In</p>
        </div>

        {/* Rescue Fund */}
        <div className="bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg p-6 text-center">
          <FaCoins className="mx-auto text-4xl mb-2" />
          <p className="font-medium">Rescue fund</p>
        </div>

        {/* Invite Friends */}
        <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-lg p-6 text-center">
          <FiUserPlus className="mx-auto text-4xl mb-2" />
          <p className="font-medium">Invite Friends</p>
        </div>

        {/* Promo Code */}
        <div className="bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg p-6 text-center col-span-1">
          <FaPercentage className="mx-auto text-4xl mb-2" />
          <p className="font-medium">Promo Code</p>
        </div>

      </div>

      {/* Bottom Safe Space */}
      <div className="h-8" />
    </div>
  );
}
