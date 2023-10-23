"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function LoginComponent() {
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
            event.target.websiteUrl.value = "";
            event.target.commentText.value = "";
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
                    </div>
                    <div className="-mt-2 pb-2">
                        <Link
                            href={"/forgot-password"}
                            className=" font-mulish text-base font-medium leading-[1.25em] text-dark_3"
                        >
                            Forgot your password?
                        </Link>
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            disabled={loading}
                            className="text-base md:text-lg lg:text-xl leading-[1.2em] font-semibold tracking-[0.03em] text-white bg-primary rounded-[50px] py-[10px] sm:py-3 md:py-3 lg:py-[18px] px-6 md:px-8 lg:px-11 inline-flex  hover:bg-dark_2 transition-colors duration-200 w-full justify-center font-noto_serif disabled:bg-dark_5 disabled:text-dark_4"
                        >
                            Login
                        </button>
                    </div>
                    <div className=" text-dark_3 font-mulish text-lg leading-[1.88em] mt-3 text-center">
                        Don’t have an account?{" "}
                        <Link
                            href={"/signup"}
                            className=" text-primary font-bold hover:border-b-2 hover:border-dark_5"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}
