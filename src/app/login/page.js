import React from "react";
import LoginComponent from "../components/LoginComponent";
import "./style.css";

export default function Login() {
    return (
        <>
            <div className="login-signup-min-screen py-[60px] lg:py-20 xl:py-[100px] 2xl:py-[120px] px-5 bg-dark_7">
                <div className="container">
                    <div className="flex flex-col-reverse lg:flex-row gap-10 md:gap-10 lg:gap-4 xl:gap-20 items-center">
                        <div className="w-full lg:pe-10">
                            <h3 className="text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-dark_1 leading-[1.25em] font-bold mb-3 md:mb-5">
                                Login
                            </h3>
                            <p className=" font-mulish text-dark_3 text-base md:text-lg lg:text-xl leading-[1.5em] font-normal mb-4">
                                {`Welcome to Flourish! We're glad you're joining
                                us.`}
                            </p>
                            <p className=" font-mulish text-dark_3 text-base md:text-lg lg:text-xl leading-[1.5em] font-normal">
                                {`You'll be able to edit your profile anytime, so don't worry if you're not yet sure exactly how you want to present yourself on Flourish.`}
                            </p>
                        </div>
                        <div className="w-full form-wrapper">
                            <div className="p-4 py-10 md:p-10 rounded-xl shadow-[5px_10px_30px_0px_rgba(0,0,0,0.07)] bg-white">
                                <h4 className="text-dark_1 font-extrabold text-[26px] leading-9 text-center mb-7">
                                    Login
                                </h4>
                                <div>
                                    <LoginComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
