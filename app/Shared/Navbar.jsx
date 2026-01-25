"use client"

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { SheetMenu } from "../Components/SheetMenu";
import { authContext } from "../lib/AuthProvider";
import { MdAddCard } from "react-icons/md";
import { SiCashapp } from "react-icons/si";

const Navbar = () => {


  // Find user
  const value = useContext(authContext)
  const { user } = value;

  const [balanceData, setBalanceData] = useState(null); // ডাটা রাখার জন্য
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        // ১. এখানে নিশ্চিত করুন ইউজারনেমটি সঠিক কিনা (যেমন: @ ছাড়া ট্রাই করুন)
        const username = "129";

        const response = await fetch(`https://api.httpsgamexaglobal.net/api/players`, {
          "headers": {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA2LCJhZ2VudF9jb2RlIjoiQUcxNzU2MDQ3OTA0NTcxQ1ZQOCIsInJvbGUiOiJhZmZpbGlhdGUiLCJpYXQiOjE3NjkzMzYxODJ9.YzgI1oSR-lNs40O2-9_r9AFiYfVpEUuAFGZ2qCeSSZI"
          },
          "query": {
            "page": 1,
            "limit": 1000,
            "search": "optional",
            "status": "active"
          }
        });

        const result = await response.json();

        if (response.ok) {
          setBalanceData(result); // সফল হলে ডাটা সেট হবে
          console.log("Balance Data:", result);
        } else {
          console.error("API Error:", result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);


  // Get Api User Data
  // ২. API থেকে আসা ডাটা যদি 'balanceData' ভেরিয়েবল এ থাকে
  // balanceData.players হলো আপনার সেই ১০টি ইউজারের অ্যারে
  const specificUserData = balanceData?.players?.find(player => player.email === user?.email);

  // ৩. আপনি যদি এটি কোনো ভেরিয়েবল এ রাখতে চান (ডাটা না থাকলে এটি undefined বা null হবে)
  const currentUserInfo = specificUserData ? specificUserData : null;
  console.log("Spacific User Data" , currentUserInfo )


  // console.log(balanceData)
  // if (loading) return <p className="p-10 text-center">Loading...</p>;

  return (
    <nav className="bg-[#00352f] px-4 py-3 flex items-center justify-between ">
      {/* Left Section: Menu Toggle & Logo */}
      <div className="flex items-center gap-4">
        {/* Left Side Menu */}
        <SheetMenu />

        {/* Logo Section */}
        <div className="flex items-baseline">
          <Link href="/">
            <img src="https://images.2131321.com/wsd-images-prod/we999bdtf5/fe_setting/web_logo/wps_ck44_new_color-Photoroom_20250730060927.png" className="w-52 max-sm:w-20" />
          </Link>
        </div>
      </div>

      {user ?
        <div className="">
          <div className="max-w-md mx-auto flex items-center justify-between gap-2">

            {/* Left Avatar */}
            <div className="relative">
              <img
                src="https://images.5949390294.com//TCG_PROD_IMAGES/B2C/01_PROFILE/PROFILE/0.png"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-yellow-400"
              />
            </div>

            {/* Balance Box */}
            <div className="flex items-center gap-2 bg-[#021b1a] border border-[#00ffd5] rounded-xl px-3 max-sm:px-2 max-sm:py-1 py-2 flex-1 max-w-[120px]">
              <div className="w-5 h-5 flex items-center justify-center bg-[#00ffd5] rounded-full text-black text-md  font-bold">
                ৳
              </div>
              <span className="text-[#00ffd5] text-sm font-semibold">
                {currentUserInfo?.balance}
              </span>
            </div>

            {/* Deposit Button */}
            <button className="flex max-sm:hidden items-center justify-between gap-2 bg-gradient-to-b from-[#ffd84d] to-[#f0b400] text-[#e43216] font-bold text-sm px-3 py-2 rounded-xl shadow-md">
              < MdAddCard className="text-lg" />
              <Link href="/deposit" className="hidden sm:inline">ডিপোজিট</Link>
            </button>

            {/* Withdraw Button */}
            <button className="flex max-sm:hidden items-center justify-between gap-2 bg-gradient-to-b from-[#ffd84d] to-[#f0b400] text-[#e43216] font-bold text-sm px-3 py-2 rounded-xl shadow-md">
              < SiCashapp className="text-lg" />
              <span className="hidden sm:inline">উত্তোলন</span>
            </button>

          </div>
        </div>
        :
        <div className="flex items-center gap-2 ">
          <Link href="/login" className="bg-[#0a6c77] text-[#ffb44d] font-bold px-5 py-2 max-sm:px-2 max-sm:py-1 rounded-md text-md max-sm:text-sm border border-[#00818A] hover:bg-[#005a61] transition-colors">
            লগইন
          </Link>
          <Link href="/register" className="bg-gradient-to-b from-[#FFEA3D] to-[#F7B500] text-black px-4 py-2 max-sm:px-2 max-sm:py-1 rounded-md text-md max-sm:text-sm font-bold border border-[#FFD700] shadow-inner hover:brightness-105 transition-all">
            নিবন্ধন করুন
          </Link>
        </div>
      }




    </nav>
  );
};

export default Navbar;