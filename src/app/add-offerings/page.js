import Image from "next/image";
import React from "react";

import AuthorProfileImage from "/public/img/offerpage-user-profile-img.png";
import Link from "next/link";

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
                                <button className=" text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150">
                                    Add offerings
                                </button>
                                <button className=" text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150">
                                    Provide your offerings
                                </button>
                                <button className=" text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150">
                                    Referral program
                                </button>
                                <button className=" text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150">
                                    Tagline
                                </button>
                                <button className=" text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150">
                                    Verified
                                </button>
                                <button className=" text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150">
                                    Images
                                </button>
                                <button className=" text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150">
                                    Keywords
                                </button>
                                <button className=" text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150">
                                    Links
                                </button>
                                <button className=" text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150">
                                    Booking system
                                </button>
                                <button className=" text-base text-dark_3 font-semibold leading-[1.62em] bg-white rounded-[9px] py-3 px-4 w-full text-start hover:bg-primary hover:text-white transition-all duration-150">
                                    Verify your identity
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="bg-white rounded-xl p-4 py-10 md:p-[30px] flex flex-col gap-[30px]">
                                {/* Offer form wrapper */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-[30px]">
                                        <Image
                                            src={AuthorProfileImage}
                                            alt="Author Image"
                                            placeholder="blur"
                                            quality={100}
                                            style={{
                                                width: "100px",
                                                maxWidth: "100px",
                                                height: "auto",
                                            }}
                                        />
                                        <div>
                                            <h3 className="text-xl sm:text-[22px] md:text-[26px] lg:text-[30px] leading-[1.33em] font-semibold text-dark_1">
                                                Luis De Florio
                                            </h3>
                                            <Link
                                                href="mailto:luis.florio@gmail.com"
                                                className="text-base lg:text-lg text-dark_3 leading-[1.88em] font-mulish font-normal hover:underline hover:text-dark_1 mt-1 underline-offset-2"
                                            >
                                                luis.florio@gmail.com
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Upload image button */}
                                    <Link
                                        className="text-primary border-2 border-primary rounded-[50px] py-2 px-6 hover:bg-primary hover:text-white transition-all duration-150 inline-block font-semibold"
                                        href="/"
                                    >
                                        Upload profile picture
                                    </Link>
                                    {/* Upload image button */}
                                </div>
                                <div>
                                    <h5 className=" text-xl leading-[1.5em] text-dark_1 font-semibold">
                                        Add up to 5 offerings.
                                    </h5>
                                    <h6 className="text-base leading-[1.62em] text-dark_1 font-semibold mt-[5px]">
                                        (Please add each offering separately)
                                    </h6>
                                    <p className=" text-base leading-[1.87em] text-dark_3 font-mulish italic mt-[5px]">
                                        Examples: strength training, somatic
                                        therapy, tango lessons, career
                                        transition coaching, yoga retreats...
                                    </p>
                                </div>
                                {/* Offer form wrapper */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
