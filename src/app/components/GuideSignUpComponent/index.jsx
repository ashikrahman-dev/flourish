"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function GuideSignUpComponent() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            fName: String(event.target.firstName.value),
            lName: String(event.target.lastName.value),
            email: String(event.target.email.value),
            checkbox: String(event.target.checkbox.value),
            url: String(event.target.websiteUrl.value),
            comment: String(event.target.commentText.value),
        };

        const response = await fetch("/api/contact.js", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("Message sent successfully.");
            setLoading(false);

            //Reset the form...
            event.target.firstName.value = "";
            event.target.lastName.value = "";
            event.target.email.value = "";
            event.target.checkbox.value = "";
            event.target.password.value = "";
        }
        if (!response.ok) {
            console.log("Error sending message.");
            setLoading(false);
        }

        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="font-mulish flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6">
                        <input
                            autoComplete="off"
                            required
                            minLength={2}
                            maxLength={150}
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                        />
                        <input
                            autoComplete="off"
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                        />
                    </div>
                    <div className="">
                        <input
                            autoComplete="off"
                            required
                            minLength={4}
                            maxLength={150}
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                        />
                    </div>
                    <div className="">
                        <input
                            autoComplete="off"
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                        />

                        <label className="text-sm leading-[1.7em] text-dark_3 mt-[10px] flex gap-1 flex-wrap">
                            <input
                                autoComplete="off"
                                type="checkbox"
                                name="checkbox"
                                className="w-5 h-5 text-[#596B36] appearance-none border border-[#596B36] checked:bg-[#596B36] checked:border-0 rounded-md bg-white me-2"
                            />
                            By signing up, I agree to the{" "}
                            <Link
                                href="/"
                                className="text-info underline underline-offset-2"
                            >
                                Privacy Policy
                            </Link>
                            and the{" "}
                            <Link
                                href="/"
                                className="text-info underline underline-offset-2"
                            >
                                Terms of Service
                            </Link>
                            .
                        </label>
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            disabled={loading}
                            className="text-base md:text-lg lg:text-xl leading-[1.2em] font-semibold tracking-[0.03em] text-white bg-primary rounded-[50px] py-[10px] sm:py-3 md:py-3 lg:py-[18px] px-6 md:px-8 lg:px-11 inline-flex  hover:bg-dark_2 transition-colors duration-200 w-full justify-center font-noto_serif disabled:bg-dark_5 disabled:text-dark_4"
                        >
                            Sign up
                        </button>
                    </div>

                    <div className=" text-dark_3 font-mulish text-lg leading-[1.88em] mt-3 text-center">
                        Already have an account?
                        <Link
                            href="/login"
                            className=" text-primary font-bold hover:border-b-2 hover:border-dark_5 ms-1"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}
