"use client"
import { IoMdCopy } from 'react-icons/io';
import { MdHelpOutline } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from 'react';

// প্রপস হিসেবে isOpen এবং setIsOpen নিচ্ছি
export const NagadDeposit = ({img, text}) => {

    const [amount, setAmount] = useState('1000.00');
    const [transactionId, setTransactionId] = useState('');
    const quickAmounts = ['500', '1 000', '2 000', '5 000', '10 000'];

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <div className="bg-white  py-2  text-center">
                    <img className="w-full" src={img} />
                    <div className="bg-[#4a83b6] text-white text-sm py-1 mt-2">
                        {text}
                    </div>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-center bg-gray-100 ">
                        {/* Mobile Container - Fixed Width for Preview */}
                        <div className="w-full bg-[#f2f4f7] font-sans">

                            {/* Header/Logo Section */}
                            <div className="bg-white p-2 flex flex-col items-center  border-gray-100">
                                <div className="p-2 rounded-sm ">
                                    <img
                                        src={img}
                                        alt={text}
                                        className="h-14 w-40"
                                    />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">


                                {/* Payment Details */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-[#2c3e50] text-[12px]">Nagad wallet number</span>
                                            <span className="text-gray-700">01778229692</span>
                                        </div>
                                        <IoMdCopy className="text-[#89b44a] cursor-pointer" size={20} />
                                    </div>
                                </div>

                                {/* Amount Input */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <label className="font-bold text-[#2c3e50] text-[12px] leading-tight">
                                            Amount (Min 500.00 BDT)
                                        </label>
                                        <input
                                            type="text"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="w-1/2 border border-gray-400 rounded p-1 text-center text-[#012e53] font-medium focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Quick Select Buttons */}
                                <div className="space-y-2">
                                    <p className="text-[#2c3e50] text-[12px]">Please enter or select your deposit amount</p>
                                    <div className="grid grid-cols-5 gap-2">
                                        {quickAmounts.map((amt) => (
                                            <button
                                                key={amt}
                                                onClick={() => setAmount(amt.replace(' ', ''))}
                                                className="border border-gray-300 bg-white py-1 rounded text-sm text-[#4a86b8]"
                                            >
                                                {amt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* User Wallet Selection */}
                                <div className="flex justify-between items-center gap-4">
                                    <label className="text-[#2c3e50] text-[14px] leading-tight flex-1">
                                        আপনার Nagad ওয়ালেট নাম্বার ( আমরা শুধুমাত্র ক্যাশ গ্রহণ করে থাকি):
                                    </label>
                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            className="w-full text-[14px] border border-gray-300 rounded p-1 text-center text-[#012e53] font-medium focus:outline-none"
                                        />
                                        
                                    </div>
                                </div>

                                {/* Transaction ID Input */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 flex-1">
                                        <label className="text-[#2c3e50] text-[14px]">
                                            Transaction ID (UTR, Reference No):
                                        </label>
                                        <MdHelpOutline className="text-gray-300 bg-gray-200 rounded-full" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            maxLength={10}
                                            value={transactionId}
                                            onChange={(e) => setTransactionId(e.target.value)}
                                            className="w-full border border-gray-300 rounded p-2 focus:outline-none"
                                        />
                                        <p className="text-right text-[10px] text-gray-400 mt-1">{transactionId.length}/10</p>
                                    </div>
                                </div>

                                {/* Helper Link */}
                                {/* <a href="#" className="text-[#4a86b8] underline text-sm block mt-2">
                                    How to make a deposit
                                </a> */}

                                {/* Disclaimer Text */}
                                {/* <div className="text-[#2c3e50] text-[14px] leading-tight pt-4">
                                    Please recheck all information that is written in the deposit fields. If the relevant payment information like: [TxID, Txn ID, TrxID, UTR, Reference No.] is wrong - the transaction can be delayed.
                                </div> */}

                                {/* Confirm Button */}
                                <button className="w-full bg-[#7ca43b] text-white font-bold py-2 rounded  uppercase tracking-wider active:bg-[#6b8e32]">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}