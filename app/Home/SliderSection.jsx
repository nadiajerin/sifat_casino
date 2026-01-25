"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const SliderSection = () => {
    const images = [
        "https://images.6223027.com/mcs-images/announcement/we999bdtf5/1754221740787_App%20Download%2018k.png",
        "https://images.6223027.com/mcs-images/announcement/we999bdtf5/1754898885656_member-day-web.png",
        "https://images.6223027.com/mcs-images/announcement/we999bdtf5/1754221886636_New%20member%20challenge.png",
        "https://images.6223027.com/mcs-images/announcement/we999bdtf5/1754643443216_domain_notice.png"
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-3 max-sm:py-1 overflow-hidden">
            <div className=" relative">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    centeredSlides={true}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 1, spaceBetween: 15 },
                        1024: { slidesPerView: 1, spaceBetween: 20 }
                    }}
                    className="mySwiper !pb-3" // প্যাডিং কমিয়ে স্লাইডারের উচ্চতা কমানো হয়েছে
                >
                    {images.map((url, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative">
                                <img 
                                    src={url} 
                                    alt={`Slide ${index}`}
                                    className="w-full h-auto object-cover rounded-xl shadow-lg" 
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Styling */}
                <style>{`
                    /* Pagination এর পজিশন ইমেজের কাছে নিয়ে আসার জন্য */
                    .mySwiper .swiper-pagination {
                        bottom: 0px !important; 
                        display: flex;
                        justify-content: center;
                        gap: 4px;
                    }

                    .mySwiper .swiper-pagination-bullet {
                        width: 25px !important;
                        height: 4px !important;
                        border-radius: 2px !important;
                        background: #fff !important;
                        opacity: 0.3 !important;
                        margin: 0 !important;
                        transition: all 0.3s ease;
                    }

                    .mySwiper .swiper-pagination-bullet-active {
                        background: #00ffcc !important;
                        width: 35px !important;
                        opacity: 1 !important;
                        box-shadow: 0 0 8px rgba(0, 255, 204, 0.6);
                    }

                    /* স্লাইড ট্রানজিশন এবং সাইড স্লাইড ইফেক্ট */
                    .swiper-slide {
                        opacity: 0.5;
                        transform: scale(0.92);
                        transition: all 0.4s ease-in-out;
                    }
                    .swiper-slide-active {
                        opacity: 1;
                        transform: scale(1);
                    }
                `}</style>
            </div>
        </div>
    );
};