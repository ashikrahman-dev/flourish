"use client";

import React from "react";

export default function SignUpComponent() {
    async function handleSubmit(event) {
        event.preventDefault();

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
        }
        if (!response.ok) {
            console.log("Error sending message.");
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
                            placeholder="Guide's first name"
                            className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                        />
                        <input
                            autoComplete="off"
                            type="text"
                            name="lastName"
                            placeholder="Guide's last name"
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
                            placeholder="Guide's email"
                            className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                        />
                        <label className=" text-sm leading-[1.7em] text-dark_3 mt-[10px] flex gap-[10px]">
                            <input
                                autoComplete="off"
                                type="checkbox"
                                name="checkbox"
                                className="w-5 h-5 text-[#596B36] appearance-none border border-[#596B36] checked:bg-[#596B36] checked:border-0 rounded-md bg-white"
                            />
                            {`I don't know their email`}
                        </label>
                    </div>
                    <div className="">
                        <input
                            autoComplete="off"
                            type="url"
                            name="websiteUrl"
                            className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                            placeholder="Guide's website"
                        />
                    </div>
                    <div className="">
                        <p className=" text-xs text-dark_2 leading-[1.33em] uppercase font-bold mb-[10px]">
                            In a few words, what does this guide offer?
                        </p>
                        <textarea
                            name="commentText"
                            placeholder="Type hare"
                            minLength={10}
                            maxLength={500}
                            className="py-5 px-6 rounded-xl h-[120px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 resize-none"
                        />
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className="text-base md:text-lg lg:text-xl leading-[1.2em] font-semibold tracking-[0.03em] text-white bg-primary rounded-[50px] py-[10px] sm:py-3 md:py-3 lg:py-[18px] px-6 md:px-8 lg:px-11 inline-flex  hover:bg-dark_2 transition-colors duration-200 w-full justify-center font-noto_serif"
                        >
                            Add profile
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
