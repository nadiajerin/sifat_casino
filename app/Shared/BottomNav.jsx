
import { HiHome } from 'react-icons/hi'; // Home icon
import { MdOutlineCardGiftcard, MdOutlineDiamond } from 'react-icons/md'; // Promotion & Member
import { FaAward } from 'react-icons/fa'; // Reward
import { IoShareSocialOutline } from 'react-icons/io5'; // Invite
import Link from 'next/link';

const BottomNav = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 px-2 z-50 md:hidden">
      {/* Container with rounded pill shape and border glow */}
      <div className="relative bg-[#003c3c] border border-cyan-500/50 rounded-full h-14 flex items-center justify-around shadow-[0_0_15px_rgba(6,182,212,0.3)]">
        
        {/* Navigation Item: Home */}
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <HiHome className="text-cyan-400 text-2xl" />
          <span className="text-cyan-400 text-[10px] font-bold mt-1">Home</span>
        </div>

        {/* Navigation Item: Promotion */}
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <MdOutlineCardGiftcard className="text-cyan-400 text-2xl" />
          <span className="text-cyan-400 text-[10px] font-bold mt-1">Promotion</span>
        </div>

        {/* Floating Center Button: Invite */}
        <div className="relative -top-4 flex flex-col items-center">
          {/* Circle background with glow */}
          <div className="bg-gradient-to-b from-cyan-300 to-cyan-500 p-2 rounded-full shadow-[0_0_20px_rgba(103,232,249,0.6)] border-4 border-[#003c3c]">
            <IoShareSocialOutline className="text-[#003c3c] text-2xl font-bold" />
          </div>
          <span className="text-cyan-400 text-[10px] font-bold mt-1">Invite</span>
        </div>

        {/* Navigation Item: Reward with Notification Badge */}
        <Link href="/reward" className="relative flex flex-col items-center justify-center cursor-pointer">
          <FaAward className="text-cyan-400 text-2xl" />
          {/* Badge */}
          <div className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-red-400">
            1
          </div>
          <span className="text-cyan-400 text-[10px] font-bold mt-1">Reward</span>
        </Link>

        {/* Navigation Item: Member */}
        <Link href="/member" className="flex flex-col items-center justify-center cursor-pointer">
          <MdOutlineDiamond className="text-cyan-400 text-2xl" />
          <span className="text-cyan-400 text-[10px] font-bold mt-1">Member</span>
        </Link>

      </div>
    </div>
  );
};

export default BottomNav;