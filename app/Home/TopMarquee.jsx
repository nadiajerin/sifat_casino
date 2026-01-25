import Marquee from "react-fast-marquee";
import { GrAnnounce } from "react-icons/gr";

export const TopMarquee = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-3">
            <div className="mt-4 max-sm:mt-1 bg-[#002a34] flex items-center justify-between 
            gap-2 py-2 max-sm:py-1 max-sm:px-2 px-4 rounded-full text-[#ffab49] border-2 border-[#095658]
            shadow-md shadow-gray-900 max-sm:text-sm">
               <GrAnnounce className="text-yellow-500 text-xl"/>
                <Marquee >
                    নতুন বছরের স্বপ্নের পরিকল্পনা আনুষ্ঠানিকভাবে চালু হয়েছে! 🎉
                </Marquee>
            </div>
        </div>
    )
}
