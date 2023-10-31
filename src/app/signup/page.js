import React from "react";
import SignUpComponent from "../components/SignUpComponent";

export default function SignUp() {
    return (
        <>
            <div className="login-signup-min-screen py-[60px] lg:py-20 px-5 bg-dark_7">
                <div className="container">
                    <div className="flex flex-col-reverse lg:flex-row gap-10 md:gap-10 lg:gap-4 xl:gap-20 items-center">
                        <div className="w-full lg:pe-10">
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
                        <div className="w-full form-wrapper">
                            <div className="p-4 py-10 md:p-10 rounded-xl shadow-[5px_10px_30px_0px_rgba(0,0,0,0.07)] bg-white">
                                <h4 className="text-dark_1 font-extrabold text-[26px] leading-9 text-center mb-7">
                                    Sign up
                                </h4>
                                <div>
                                    <SignUpComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
