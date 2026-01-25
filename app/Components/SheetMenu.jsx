import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MdMenuOpen } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import Link from "next/link";
import { GiThreeFriends } from "react-icons/gi";
import { RiAlignItemRightFill } from "react-icons/ri";
import { FaGift } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
import { AiFillAppstore } from "react-icons/ai";
import { RiPokerSpadesFill } from "react-icons/ri";
import { MdOutlineDiamond } from "react-icons/md";
import { IoFish } from "react-icons/io5";
import { SiTransmission } from "react-icons/si";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { TbAlphabetBangla } from "react-icons/tb";
import { IoGameController } from "react-icons/io5";
import { RiEnglishInput } from "react-icons/ri";

export const SheetMenu = () => {

    const data = [
        {
            id: "01",
            text: "গরম খেলা",
            icon: <FaFire className="text-3xl mx-auto mb-2 text-[#d27062]"/>,
            link: "/"
        },
        {
            id: "02",
            text: "আমন্ত্রণ",
            icon: <GiThreeFriends className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "03",
            text: "আইটেম",
            icon: < RiAlignItemRightFill  className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "04",
            text: "অফার",
            icon: <FaGift className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "05",
            text: "স্লট",
            icon: <FaCircleDollarToSlot className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "06",
            text: "পুরুষ্কার",
            icon: <FaAward className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "07",
            text: "লাইভ",
            icon: <CiStreamOn className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "08",
            text: "রিবোট",
            icon: <AiFillAppstore className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "09",
            text: "পোকার",
            icon: < RiPokerSpadesFill className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "10",
            text: "ভিআইপি",
            icon: <MdOutlineDiamond className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "11",
            text: "ফিশিং",
            icon: <IoFish className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "12",
            text: "মিশন",
            icon: <SiTransmission className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "13",
            text: "স্পোটর্স",
            icon: <MdOutlineSportsVolleyball className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "14",
            text: "বাংলা",
            icon: <TbAlphabetBangla className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "15",
            text: "গেম",
            icon: <IoGameController className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
        {
            id: "16",
            text: "ইংরেজি",
            icon: <RiEnglishInput className="text-3xl mx-auto mb-2 text-[#d27062]" />,
            link: "/"
        },
    ]

    return (
        <Sheet>
            <SheetTrigger>
                <MdMenuOpen
                    className="text-white hover:text-gray-300 focus:outline-none text-3xl"
                />
            </SheetTrigger>

            <SheetContent side="left" className="bg-[#044243]">
                <SheetHeader>
                    <div className="grid grid-cols-2 gap-4 items-center justify-between p-2 mt-4">
                        {data.length > 0 ? (
                            data.map((item) => (
                                <Link key={item.link} href="/" className="mx-auto w-full bg-[#003840] px-4 py-3 rounded-xl 
                                border-t-1 border-gray-400 hover:bg-[#0a6771] shadow-sm shadow-gray-800">
                                   {item.icon}
                                   <p className="text-white text-center">{item.text}</p>
                                </Link>
                            ))
                        ) : (
                            <p>No data found or loading...</p>
                        )}
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
