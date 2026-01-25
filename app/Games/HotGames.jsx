"use client"

import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/grid";
import { AlertDialogshow } from "../Components/AlertDialog";
import { authContext } from "../lib/AuthProvider";

export const HotGames = () => {
    // ডামি গেম ডেটা

    // Find user
    const value = useContext(authContext)
    const { user } = value;

    const [balanceData, setBalanceData] = useState(null); // ডাটা রাখার জন্য
    const [games, setAllgames] = useState(null); // ডাটা রাখার জন্য
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
                    //   console.log("Balance Data:", result);
                } else {
                    console.error("API Error:", result.message);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                // setLoading(false);
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
    console.log("Game Spacific User Data", currentUserInfo)

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                // ১. এখানে নিশ্চিত করুন ইউজারনেমটি সঠিক কিনা (যেমন: @ ছাড়া ট্রাই করুন)
                const username = "129";

                const response = await fetch(`https://api.httpsgamexaglobal.net/api/games`, {
                    "headers": {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA2LCJhZ2VudF9jb2RlIjoiQUcxNzU2MDQ3OTA0NTcxQ1ZQOCIsInJvbGUiOiJhZmZpbGlhdGUiLCJpYXQiOjE3NjkzNDYwNTd9.nbj3efEYxaZBnK_PTzOlHrPiXumVQNXpPbKbKZifCG4"
                    },
                    "query": {
                        "page": "1",
                        "limit": "1000",
                        "search": "",
                        "provider": "PRAGMATIC",
                        "type": "slot|table|card|lottery|sports",
                        "status": "active|inactive|maintenance"
                    }
                });

                const result = await response.json();

                if (response.ok) {
                    setAllgames(result); // সফল হলে ডাটা সেট হবে
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


    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const playGames = async (game_uid) => {
        try {
            const response = await fetch(`https://api.httpsgamexaglobal.net/api/games/launch`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA2LCJhZ2VudF9jb2RlIjoiQUcxNzU2MDQ3OTA0NTcxQ1ZQOCIsInJvbGUiOiJhZmZpbGlhdGUiLCJpYXQiOjE3NjkzNDcyODN9.ZI-7cFxKDjRXYUFYkmVSoWzYHsZ5I6QxMNJOW5qF00k",
                    "Content-Type": "application/json"
                },
                // সমস্যা এখানে ছিল: JSON.stringify যোগ করা হয়েছে
                body: JSON.stringify({
                    "player_id": 47467,
                    "game_uid": game_uid, // ফাংশন প্যারামিটার থেকে আসা গেম ইউআইডি
                    "lobby_url": "https://casino.gamexaglobal.com",
                    "lang": "en"
                })
            });

            const data = await response.json();

            if (response.ok && data.game_launch_url) {
                // এপিআই সাধারণত একটি গেম খেলার ইউআরএল দেয়, সেটি নতুন ট্যাবে ওপেন করুন
                window.open(data.game_launch_url, '_blank');
            } else {
                console.error('Server Response Error:', data);
                alert(`API Error: ${data.message || 'Error launching game'}`);
            }

        } catch (error) {
            console.error('Network Error:', error);
            alert('Error: ' + error.message);
        }
    };


    console.log(games)

    return (
        <div className="max-w-5xl mx-auto px-4 py-3">
            <div className="">
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-[#00ffcc] text-xl md:text-2xl font-bold uppercase">Hot Games</h2>
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
                    {games?.games?.slice(0, 50).map((game) => (
                        <SwiperSlide key={game.id} className="!h-auto">
                            <div onClick={() => playGames(game.game_uid)} className="relative cursor-pointer group rounded-xl overflow-hidden bg-[#001f1f] border border-white/5 transition-all duration-300">

                                {/* Game Image */}
                                <img
                                    // আপনার API ডাটা চেক করুন, যদি image বা banner থাকে সেটি দিন
                                    // সাধারণত এটি game.banner বা game.icon_url হয়
                                    src={game.image_url || "/fallback-image.png"}
                                    alt={game.game_name}
                                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Provider Tag */}
                                {game.provider_id && (
                                    <div className="absolute top-0 left-0 bg-[#f39c12] text-black text-[12px] font-bold px-1.5 py-0.5 rounded-br-md z-10 shadow-sm">
                                        ID: {game.provider_name}
                                    </div>
                                )}

                                {/* Heart Icon */}
                                <div className="absolute top-2 right-2 p-1.5 rounded-full cursor-pointer hover:bg-black/60 transition-all">
                                    <FaHeart className="text-white text-[15px]" />
                                </div>

                                {/* Game Title Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/90 to-transparent">
                                    <p className="text-white text-[10px] md:text-xs font-bold uppercase truncate">
                                        {game.game_name}
                                    </p>
                                </div>
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