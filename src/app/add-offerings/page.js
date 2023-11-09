import React from "react";

import ProvideYourOfferings from "../components/OfferingsForm/ProvideYourOfferings";
import ReferralProgram from "../components/OfferingsForm/ReferralProgram";
import Tagline from "../components/OfferingsForm/Tagline";

const offerStepButton = [
    {
        id: 1,
        btnText: "Add offerings",
    },
    {
        id: 2,
        btnText: "Provide your offerings",
    },
    {
        id: 3,
        btnText: "Referral program",
    },
    {
        id: 4,
        btnText: "Tagline",
    },
    {
        id: 5,
        btnText: "Verified",
    },
    {
        id: 6,
        btnText: "Images",
    },
    {
        id: 7,
        btnText: "Keywords",
    },
    {
        id: 8,
        btnText: "Links",
    },
    {
        id: 9,
        btnText: "Booking system",
    },
    {
        id: 10,
        btnText: "Verify your identity",
    },
];

export default function AddOfferings() {
    return (
        <>
            <section className="py-[60px] lg:py-20 bg-dark_7">
                <div className="container">
                    <div className="text-center">
                        <h3 className="text-xl sm:text-[22px] md:text-[26px] lg:text-[30px] leading-[1.33em] font-semibold text-dark_1 mb-[10px]">
                            What do you offer?
                        </h3>
                        <p className=" font-mulish text-dark_3 text-lg leading-[1.88em]">
                            Your offering(s) will be shown in search results and
                            on your profile.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[30px] mt-12">
                        <div className="w-full md:w-1/3">
                            <div className="flex flex-col gap-4">
                                {offerStepButton.map((data) => (
                                    <button
                                        key={data.id}
                                        className="text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150"
                                    >
                                        {data.btnText}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="bg-white rounded-xl p-4 py-10 md:p-[30px] flex flex-col gap-[30px] min-h-[830px]">
                                {/* Offer form wrapper */}
                                {/* <AddOfferingsComponents /> */}
                                {/* <ProvideYourOfferings /> */}
                                {/* <ReferralProgram /> */}
                                <Tagline />
                                {/* Offer form wrapper */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
