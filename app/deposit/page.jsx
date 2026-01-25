"use client"

import { useContext } from "react";
import { authContext } from "../lib/AuthProvider";
import { BkashDeposit } from "../Components/BkashDeposit";
import { NagadDeposit } from "../Components/NagadDeposit";
import { useRouter } from "next/navigation";

export default function Deposit() {

    // Find user
    const value = useContext(authContext)
    const { user } = value;
    const router = useRouter();

    if(!user){
       return router.push('/register');
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-3 bg-white md:hidden">
            <div className="max-w-6xl mx-auto bg-white border rounded shadow-sm p-2 mb-">

                {/* Header */}
                <div className="mb-2">
                    <h2 className="text-md font-semibold text-[#003a8f]">
                        ACCOUNT <br />
                        {user?.email}
                    </h2>
                    <p className="text-sm text-[#000000]">
                        Select payment method to top up your account:
                    </p>
                </div>

                {/* Info Box */}
                <div className="bg-[#e6e6e6]  text-sm mb-6">
                    <p className="font-semibold">Make money with ck444!</p>
                    <p>
                        যে কোনো প্রকার গেমিং সাইট নির্মাণের জন্য যোগাযোগ করুন:
                    </p>
                    <p>
                        <span className="text-blue-700">
                            ০১৭৭৮২২৯৬৯২
                        </span>
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row gap-4">

                    {/* Right Content */}
                    <div className="md:w-3/4 bg-[#dfe7ef] p-2 mx-auto">
                        <h3 className="text-sm font-semibold mb-4">RECOMMENDED</h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                            {/* Card */}
                            <div className="bg-white  py-2 text-center">
                                <NagadDeposit img="https://1xbetbd.com/paysystems/xpay/images/money/paykassma_nagad.png"
                                    text="Fast Nagad"
                                />
                            </div>

                            <div className="bg-white  py-2 text-center">
                                <BkashDeposit img="https://1xbetbd.com/paysystems/xpay/images/money/paykassma_bkash.png"
                                    text="Fast Bkash"
                                />
                            </div>

                            <div className="bg-white  py-2 text-center">
                                <NagadDeposit img="https://1xbetbd.com/paysystems/xpay/images/money/rapid_na.png"
                                    text="Nagad Rapid"
                                />
                            </div>

                            <div className="bg-white  py-2 text-center">
                                <BkashDeposit img="https://1xbetbd.com/paysystems/xpay/images/money/rapid_bk.png"
                                    text="BKash Rapid"
                                />
                            </div>

                            <div className="bg-white  py-2 text-center">
                                <BkashDeposit img="https://1xbetbd.com/paysystems/xpay/images/money/bkash_free.png"
                                    text="Digital Wallet Free"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Custom Arrow */}
            <style jsx>{`
        .clip-path-arrow {
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }
      `}</style>
        </div>
    );
}
