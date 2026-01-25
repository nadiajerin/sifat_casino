"use client"

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/grid";
import { AlertDialogshow } from "../Components/AlertDialog";


export const LiveGames = () => {
    // ডামি গেম ডেটা
    const games = [
        { id: 1, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__LIVE-EG4_1739330520893.webp", provider: "" },
        { id: 2, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__LIVE-PT_1744014160968.webp", provider: "" },
        { id: 3, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__LIVE-Sex_1739330522164.webp", provider: "" },
        { id: 4, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__LIVE-VIA_1739330522430.webp", provider: "" },
        { id: 5, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__LIVE-EZ_1739330521143.webp", provider: "" },
        { id: 6, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__LIVE-MG_1739330521524.webp", provider: "" },
        { id: 7, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__LIVE-SA_1739330522000.webp", provider: "" },
        { id: 8, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__LIVE-PP_1739330521831.webp", provider: "" },
        { id: 9, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__LIVE-WJ_1739330522585.webp", provider: "" },
        { id: 10, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__SPORTS-U9W_1739330541003.webp", provider: "" },
        { id: 11, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__SPORTS-LUC_1739330539918.webp", provider: "" },
        { id: 12, name: "", img: "https://images.6223027.com/prod-images/game_icon/we999bdtf5/bigImage/gcs__SPORTS-FB_1739330539444.webp", provider: "" },

    ];

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const playGames = () => {
        setIsAlertOpen(true); // এটি কল করলেই এলার্টটি ওপেন হবে
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-3">
            <div className="">
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-[#00ffcc] text-xl md:text-2xl font-bold uppercase">Live</h2>
                    <div className="flex items-center gap-2">
                        <button className="bg-[#004d4d] text-[#00ffcc] px-4 py-1 rounded-md text-sm border border-[#006666] hover:bg-[#006666] transition-all">
                            See All
                        </button>
                    </div>
                </div>

                <Swiper
                    slidesPerView={3.2}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    spaceBetween={12}
                    // Loop এবং CenteredSlides বন্ধ রাখা হয়েছে যাতে random এবং uniform দেখায়
                    loop={false}
                    centeredSlides={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3, grid: { rows: 2 } },
                        768: { slidesPerView: 4, grid: { rows: 2 } },
                        1024: { slidesPerView: 5.3, grid: { rows: 2 } },
                    }}
                    modules={[Grid, Autoplay]}
                    className="gameSwiper"
                >
                    {games.map((game) => (

                        <SwiperSlide key={game.id} className="!h-auto">
                            <div onClick={playGames} className="relative cursor-pointer group rounded-xl overflow-hidden bg-[#001f1f] border border-white/5 transition-all duration-300">
                                {/* Game Image */}
                                <img
                                    src={game.img}
                                    alt={game.name}
                                    className="w-full aspect-[3/4] object-cover"
                                />

                                {/* Provider Tag */}
                                {game.provider && (
                                    <div className="absolute top-0 left-0 bg-[#f39c12] text-black text-[15px] font-bold px-1.5 py-0.5 rounded-br-md z-10 shadow-sm">
                                        {game.provider}
                                    </div>
                                )}

                                {/* Heart Icon */}
                                <div className="absolute top-2 right-2 p-1.5 rounded-full  cursor-pointer hover:bg-black/60 transition-all">
                                    <FaHeart className="text-white text-[15px]" />
                                </div>

                                {/* Image Title Overlay (Optional based on image) */}
                                {/* <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white text-[10px] md:text-xs font-bold uppercase truncate">{game.name}</p>
                                </div> */}
                            </div>
                    
                        </SwiperSlide>
                    ))}
                    <AlertDialogshow isOpen={isAlertOpen} setIsOpen={setIsAlertOpen} />
                </Swiper>

            </div>

            {/* CSS Fixes for Opacity and Grid Spacing */}
            <style>{`
                /* সব স্লাইডকে সমানভাবে দৃশ্যমান রাখার জন্য */
                .gameSwiper .swiper-slide {
                    opacity: 1 !important;
                    transform: scale(1) !important;
                    height: auto !important;
                    display: flex;
                    flex-direction: column;
                }

                /* গ্রিড এর সারির মাঝখানের গ্যাপ ফিক্স */
                .gameSwiper .swiper-grid-column > .swiper-slide {
                    margin-top: 12px !important;
                    margin-bottom: 0px !important;
                }

                /* স্লাইডার কন্টেইনার ওভারফ্লো ফিক্স */
                .swiper-grid-column {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </div>
    );
};