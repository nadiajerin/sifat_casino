"use client"
import { FaLock, FaEyeSlash, FaFacebookF, FaGoogle, FaCheckCircle } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { useContext } from 'react';
import { authContext } from '../lib/AuthProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



const RegistrationPage = () => {

    const value = useContext(authContext)
    const { handleRegister } = value;
    const router = useRouter();

   async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const password2 = form.password2.value;

    if (password !== password2) {
        alert('Confirm Password don`t match');
        return;
    }

    if (password.length < 6) {
        alert('পাসওয়ার্ডটি ৬ অক্ষরের হওয়া উচিত।');
        return;
    }

    try {
        // ১. Firebase Register
        const userCredential = await handleRegister(email, password);
        const user = userCredential.user;

        if (user) {
            // ২. API-তে ডাটা পাঠানো
            const response = await fetch(`https://api.httpsgamexaglobal.net/api/players`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA2LCJhZ2VudF9jb2RlIjoiQUcxNzU2MDQ3OTA0NTcxQ1ZQOCIsInJvbGUiOiJhZmZpbGlhdGUiLCJpYXQiOjE3NjkzMzQ4NTh9.dYaIOBYrkblkT6WXqXjFyeITrqiSKT9hmSs_UsArOp4`,
                    "Content-Type": "application/json"
                },
                // বডি অবশ্যই JSON.stringify করতে হবে
                body: JSON.stringify({
                    "username": email.split('@')[0], // ইউজারনেম ইউনিক হতে হয়, তাই ইমেইলের প্রথম অংশ নিলাম
                    "email": email,
                    "password": password,
                    "full_name": "New Player", // আপনি চাইলে ইনপুট ফিল্ড থেকে নাম নিতে পারেন
                    "phone": "+8801700000000"   // ডাইনামিক ফোন নাম্বার ফিল্ড যোগ করা ভালো
                })
            });

            const data = await response.json();
            
            if (response.ok) {
                alert('Registration and Database Sync Successful!');
                router.push('/');
            } else {
                console.error('Server Error:', data);
                alert(`API Error: ${data.message || 'Something went wrong'}`);
            }
        }
    } catch (error) {
        console.error('Registration Error:', error);
        alert('Error during register: ' + error.message);
    }
}

    return (
        <div className="min-h-screen  bg-[#003c3c] flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-md bg-[#002b2b] p-6 rounded-lg shadow-2xl border border-[#004d4d]">

                {/* Header Section */}
                <div className="mb-6">
                    <h1 className="text-[#ffb800] text-3xl font-bold mb-2 text-center">নিবন্ধন করুন</h1>
                    <p className="text-gray-300 text-sm text-center">
                        ইতিমধ্যে একটি অ্যাকাউন্ট আছে? ?
                        <Link href="/login" className="text-[#00ffcc] ml-1 cursor-pointer hover:underline">লগইন</Link>
                    </p>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Phone Input */}
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <BiLogoGmail className="text-[#00ffcc] text-lg" />
                        </div>
                        <input
                            type="text"
                            name='email'
                            placeholder="জিমেল"
                            className="block w-full bg-[#001a1a] border border-[#004d4d] rounded-xl py-2 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffcc] transition-all"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaLock className="text-[#00ffcc] text-lg" />
                        </div>
                        <input
                            type="password"
                            name='password'
                            placeholder="পাসওয়ার্ড"
                            className="block w-full bg-[#001a1a] border border-[#004d4d] rounded-xl py-2 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffcc] transition-all"
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                            <FaEyeSlash className="text-[#00ffcc] text-lg" />
                        </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaLock className="text-[#00ffcc] text-lg" />
                        </div>
                        <input
                            type="password"
                            name='password2'
                            placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                            className="block w-full bg-[#001a1a] border border-[#004d4d] rounded-xl py-2 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffcc] transition-all"
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                            <FaEyeSlash className="text-[#00ffcc] text-lg" />
                        </div>
                    </div>

                    {/* Checkbox Section */}
                    <div className="mt-6 flex items-start gap-3">
                        <FaCheckCircle className="text-[#ffb800] text-xl shrink-0 mt-0.5" />
                        <p className="text-white text-xs leading-relaxed">
                            আমি ১৮ বছর পূর্ণ এবং গ্রহণ করতে সম্মত <span className="text-[#00ffcc] cursor-pointer">ব্যবহারের শর্ত</span>
                        </p>
                    </div>

                    {/* Primary Submit Button */}
                    <input type="submit" value=" নিবন্ধন করুন" className='w-full cursor-pointer mt-6 bg-gradient-to-b from-[#ffe000] via-[#ffb800] to-[#d49a00] text-[#7a4b00] font-bold text-xl py-1 rounded-xl shadow-[0_4px_0_rgb(161,117,0)] hover:brightness-110 active:translate-y-[2px] active:shadow-none transition-all' />
                </form>



                {/* Divider */}
                <div className="mt-8 flex items-center gap-4">
                    <div className="h-[1px] flex-1 bg-gray-600"></div>
                    <span className="text-gray-400 text-sm font-medium">অথবা চালিয়ে যান</span>
                    <div className="h-[1px] flex-1 bg-gray-600"></div>
                </div>

                {/* Social Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 bg-[#3b5998] text-white py-2 rounded-lg font-bold hover:bg-[#344e86] transition-colors">
                        <FaFacebookF /> Facebook
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[#ff0000] text-white py-2 rounded-lg font-bold hover:bg-[#cc0000] transition-colors">
                        <FaGoogle /> Google
                    </button>
                </div>

            </div>
        </div>
    );
};

export default RegistrationPage;