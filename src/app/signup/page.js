import Link from "next/link";
import React from "react";

export default function SignUp() {
    return (
        <>
            <div className="py-[60px] lg:py-20 xl:py-[100px] 2xl:py-[120px] px-5">
                <div className="container ">
                    <div className="flex gap-20 items-center">
                        <div className="w-full pe-10">
                            <h3 className="text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-dark_1 leading-[1.25em] font-bold mb-3 md:mb-5">
                                Add a profile
                            </h3>
                            <p className=" font-mulish text-dark_3 text-base md:text-lg lg:text-xl leading-[1.5em] font-normal mb-4">
                                We rely on people like you to expand our
                                listings, so thank you!
                            </p>
                            <p className=" font-mulish text-dark_3 text-base md:text-lg lg:text-xl leading-[1.5em] font-normal">
                                {`How it works: after you fill out the info below,
                                a basic profile will be created for your guide,
                                and you'll be able to write your review. The
                                guide will be invited to join Flourish and
                                expand their profile.`}
                            </p>
                        </div>
                        <div className="w-full form-wrapper ">
                            <div className="p-10 rounded-xl shadow-[5px_10px_30px_0px_rgba(0,0,0,0.07)]">
                                <h4 className="text-dark_1 font-extrabold text-[26px] leading-9 text-center mb-7">
                                    Sign up
                                </h4>
                                <form>
                                    <div className="font-mulish flex flex-col gap-6">
                                        <div className="flex gap-6">
                                            <input
                                                className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                                                type="text"
                                                placeholder="Guide's first name"
                                            />
                                            <input
                                                className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                                                type="text"
                                                placeholder="Guide's last name"
                                            />
                                        </div>
                                        <div className="">
                                            <input
                                                className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                                                type="email"
                                                placeholder="Guide's email"
                                            />
                                            <label className=" text-sm leading-[1.7em] text-dark_3 mt-[10px] flex gap-[10px]">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 text-[#596B36] appearance-none border border-[#596B36] checked:bg-[#596B36] checked:border-0 rounded-md bg-white"
                                                />
                                                {`I don't know their email`}
                                            </label>
                                        </div>
                                        <div className="">
                                            <input
                                                className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                                                type="url"
                                                placeholder="Guide's website"
                                            />
                                        </div>
                                        <div className="">
                                            <p className=" text-xs text-dark_2 leading-[1.33em] uppercase font-bold mb-[10px]">
                                                In a few words, what does this
                                                guide offer?
                                            </p>
                                            <textarea
                                                className="py-5 px-6 rounded-xl h-[120px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 resize-none"
                                                placeholder="Type hare"
                                            />
                                        </div>
                                        <div className="">
                                            <Link
                                                href={"/"}
                                                className="text-base md:text-lg lg:text-xl leading-[1.2em] font-semibold tracking-[0.03em] text-white bg-primary rounded-[50px] py-[10px] sm:py-3 md:py-3 lg:py-[18px] px-6 md:px-8 lg:px-11 inline-flex  hover:bg-dark_2 transition-colors duration-200 w-full justify-center font-noto_serif"
                                            >
                                                Add profile
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
