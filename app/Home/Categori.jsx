"use client"
import { FaFire } from "react-icons/fa"
import { IoFileTrayFull } from "react-icons/io5";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdCasino } from "react-icons/md";
import { RiPokerClubsFill } from "react-icons/ri";
import { FaFish } from "react-icons/fa";
import { MdOutlineSportsEsports } from "react-icons/md";
import { GiTwinShell } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";
import Link from "next/link";
import { MdAddCard } from "react-icons/md";
import { SiCashapp } from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export const Categori = () => {

    // ডেটা অ্যারে (আপনি যদি বাইরে থেকে না আনেন তবে এখানে ডিফাইন করা হলো)
    const data = [
        {
            id: "01",
            text: "Hot Games",
            icon: <FaFire className="text-3xl max-sm:text-xl mx-auto md:mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "02",
            text: "Favorites",
            icon: <IoFileTrayFull className="text-3xl max-sm:text-xl mx-auto md:mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "03",
            text: "Slots",
            icon: < FaCircleDollarToSlot className="text-3xl max-sm:text-xl mx-auto md:mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "04",
            text: "Casino",
            icon: <MdCasino className="text-3xl max-sm:text-xl mx-auto md:mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "05",
            text: "Poker",
            icon: <RiPokerClubsFill className="text-3xl max-sm:text-xl mx-auto md:mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "06",
            text: "Fish",
            icon: <FaFish className="text-3xl max-sm:text-xl mx-auto md:mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "07",
            text: "Sports",
            icon: <MdOutlineSportsEsports className="text-3xl max-sm:text-xl mx-auto md:mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "08",
            text: "Lottery",
            icon: < GiTwinShell className="text-3xl max-sm:text-xl mx-auto md:mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "09",
            text: "E-Sports",
            icon: < IoMdFootball className="text-3xl max-sm:text-xl mx-auto md:mb-2 text-[#d27062]" />,
            link: "/"
        },

    ]

    return (
        <div className="max-w-5xl mx-auto px-4 py-3 max-sm:py-2">

            {/* Mobile View Deposit and Withdraw */}
            <div className="md:hidden flex items-center justify-between gap-4 mb-3">
                {/* Deposit */}
                <Link href="/deposit" className="flex items-center justify-center gap-2 text-amber-600 font-semibold w-full bg-gray-900 py-1 px-6 text-lg rounded-md shadow-md shadow-black">
                    < MdAddCard />
                    Deposit
                </Link>
                {/* Withdraw */}
                <Link href="/" className="flex items-center justify-center gap-2 text-amber-600 font-semibold w-full bg-gray-900 py-1 px-6 text-lg rounded-md shadow-md shadow-black">
                    < SiCashapp />
                    Withdraw
                </Link>
            </div>

            {/* <Swiper
                // প্যাজিনেশন পুরোপুরি রিমুভ করা হয়েছে

                loop={false}
                // রেসপন্সিভ সেটআপ
                breakpoints={{
                    320: { slidesPerView: 3, spaceBetween: 10 }, // মোবাইলে ৩টি দেখাবে
                    640: { slidesPerView: 5, spaceBetween: 15 }, // ট্যাবে ৫টি
                    1024: { slidesPerView: 7, spaceBetween: 20 }, // ডেক্সটপে ৭টি
                }}
                className="categorySwiper"
            >
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <SwiperSlide key={index} className="category-slide">
                            <Link  href={item.link} className="block max-sm:flex max-sm:items-center max-sm:justify-center max-sm:gap-1 bg-[#003840] shadow-md border-t border-gray-500 rounded-xl 
                            px-2 py-3 max-sm:py-1 max-sm:px-2 transition-transform hover:bg-[#00525a]">
                                <div className="text-[#00ffcc] mb-1">
                                    {item.icon}
                                </div>
                                <p className="text-white text-[12px] md:text-sm text-center font-medium uppercase">
                                    {item.text}
                                </p>
                            </Link>
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-white text-center">No data found</p>
                )}
            </Swiper> */}

            {/* CSS দিয়ে সব স্লাইডকে সমানভাবে দৃশ্যমান রাখা হয়েছে */}
            <style>{`
                .categorySwiper .swiper-slide {
                    opacity: 1 !important; /* সব স্লাইড ১০০% ভিউ হবে */
                    transform: scale(1) !important; /* কোনো স্লাইড ছোট হবে না */
                }
                .category-slide {
                    height: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
}