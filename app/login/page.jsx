"use client"
import { FaLock, FaEyeSlash, FaFacebookF, FaGoogle, FaCheckCircle } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { useContext } from 'react';
import { authContext } from '../lib/AuthProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



const RegistrationPage = () => {

     const value = useContext(authContext)
    const { handleLogin } = value;
    const router = useRouter();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userValue = [email, password];

        if(password.length < 6){
            alert('পাসওয়ার্ডটি ৬ অক্ষরের হওয়া উচিত।');
            return;
        }

        // Firebase Login 
        handleLogin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if(user){
                    // alert('login success')
                    router.push('/');
                }
                // alert(user)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                 alert(errorMessage)
            })
    }

    return (
        <div className="min-h-screen bg-[#003c3c] flex items-center justify-center p-4 font-sans md:hidden">
            <div className="w-full max-w-md bg-[#002b2b] p-6 rounded-lg shadow-2xl border border-[#004d4d]">

                {/* Header Section */}
                <div className="mb-6">
                    <h1 className="text-[#ffb800] text-3xl font-bold mb-2 text-center">লগইন</h1>
                    <p className="text-gray-300 text-sm text-center">
                        এখনো কোন অ্যাকাউন্ট নেই?
                        <Link href="/register" className="text-[#00ffcc] ml-1 cursor-pointer hover:underline">নিবন্ধন করুন</Link>
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

                    {/* Checkbox Section */}
                    <div className="mt-6 flex items-start gap-3">
                        <FaCheckCircle className="text-[#ffb800] text-xl shrink-0 mt-0.5" />
                        <p className="text-white text-xs leading-relaxed">
                            আমি ১৮ বছর পূর্ণ এবং গ্রহণ করতে সম্মত <span className="text-[#00ffcc] cursor-pointer">ব্যবহারের শর্ত</span>
                        </p>
                    </div>

                    {/* Primary Submit Button */}
                    <input type="submit" value="লগইন করুন" className='w-full cursor-pointer mt-6 bg-gradient-to-b from-[#ffe000] via-[#ffb800] to-[#d49a00] text-[#7a4b00] font-bold text-xl py-1 rounded-xl shadow-[0_4px_0_rgb(161,117,0)] hover:brightness-110 active:translate-y-[2px] active:shadow-none transition-all' />
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