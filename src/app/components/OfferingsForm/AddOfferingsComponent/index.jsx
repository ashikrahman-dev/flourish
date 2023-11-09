"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AuthorProfileImage from "/public/img/offerpage-user-profile-img.png";
import Button from "../../Button";

//Textarea validation function
const validateTextarea = (textarea) => {
    const isWithinCharacterLimit = textarea.length <= 499;
    return isWithinCharacterLimit;
};

export default function AddOfferingsComponents() {
    // Textarea box validation
    const [textarea, setTextarea] = useState("");
    const [isTextareaValid, setIsTextareaValid] = useState(true);

    const handleTextareaChange = (e) => {
        setTextarea(e.target.value);
        setIsTextareaValid(validateTextarea(e.target.value));
    };

    return (
        <>
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
                <Button
                    buttonName={"Upload profile picture"}
                    buttonLink={"/login"}
                />
                {/* Upload image button */}
            </div>
            <div>
                <h5 className=" text-xl leading-[1.5em] text-dark_1 font-semibold">
                    Add up to 5 offerings.
                </h5>
                <h6 className="text-base leading-[1.62em] text-dark_1 font-semibold mt-[5px]">
                    (Please add each offering separately)
                </h6>
                <p className=" text-base leading-[1.87em] text-dark_3 font-mulish italic mt-[5px] mb-5">
                    Examples: strength training, somatic therapy, tango lessons,
                    career transition coaching, yoga retreats...
                </p>
                <textarea
                    name="commentText"
                    placeholder="Type hare"
                    minLength={10}
                    maxLength={500}
                    value={textarea}
                    onChange={handleTextareaChange}
                    className={`py-5 px-6 rounded-xl h-[120px] font-mulish w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 resize-none mb-6 ${
                        isTextareaValid
                            ? "border-dark_6"
                            : "border-status_danger"
                    }`}
                />
                {/* Add offering button */}
                <Button buttonName={"Add offering"} buttonLink={"/"} />
                {/* Add offering button */}
            </div>
            <div>
                <h5 className=" text-xl leading-[1.5em] text-dark_1 font-semibold mb-5">
                    Add up to 5 offerings.
                </h5>
                <ul className="flex flex-col gap-3">
                    <li className=" py-5 px-6 rounded-xl bg-dark_7 flex justify-between items-center font-mulish text-dark_3">
                        <div>
                            <strong className=" text-dark_1 font-bold me-1">
                                Offer 1:
                            </strong>
                            Your offering(s) will be shown in search results and
                            on your profile.
                        </div>
                        <button>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.834 5.83333L15.1112 15.9521C15.0489 16.8243 14.3232 17.5 13.4488 17.5H6.55252C5.67812 17.5 4.95238 16.8243 4.89009 15.9521L4.16732 5.83333M8.33398 9.16667V14.1667M11.6673 9.16667V14.1667M12.5007 5.83333V3.33333C12.5007 2.8731 12.1276 2.5 11.6673 2.5H8.33398C7.87375 2.5 7.50065 2.8731 7.50065 3.33333V5.83333M3.33398 5.83333H16.6673"
                                    stroke="#716460"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </li>
                    <li className=" py-5 px-6 rounded-xl bg-dark_7 flex justify-between items-center font-mulish text-dark_3">
                        <div>
                            <strong className=" text-dark_1 font-bold me-1">
                                Offer 1:
                            </strong>
                            Your offering(s) will be shown in search results and
                            on your profile.
                        </div>
                        <button>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.834 5.83333L15.1112 15.9521C15.0489 16.8243 14.3232 17.5 13.4488 17.5H6.55252C5.67812 17.5 4.95238 16.8243 4.89009 15.9521L4.16732 5.83333M8.33398 9.16667V14.1667M11.6673 9.16667V14.1667M12.5007 5.83333V3.33333C12.5007 2.8731 12.1276 2.5 11.6673 2.5H8.33398C7.87375 2.5 7.50065 2.8731 7.50065 3.33333V5.83333M3.33398 5.83333H16.6673"
                                    stroke="#716460"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            {/* Double button */}
            <div className="flex justify-between gap-5 mt-3">
                <Link
                    className="text-primary border-2 border-primary rounded-[50px] py-4 px-11 hover:bg-primary hover:text-white transition-all duration-150 font-semibold inline-flex gap-[6px] align-middle items-center group"
                    href="/"
                >
                    <span>
                        <svg
                            className=" "
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.5 15.8334L6.66667 10.0001L12.5 4.16675"
                                className=" stroke-primary group-hover:stroke-white group-hover:transition-all group-hover:duration-150"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    Back
                </Link>
                <Link
                    className="text-primary border-2 border-primary rounded-[50px] py-4 px-11 hover:bg-primary hover:text-white transition-all duration-150 font-semibold inline-flex gap-[6px] align-middle items-center group"
                    href="/"
                >
                    Continue
                    <span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.5 4.16659L13.3333 9.99992L7.5 15.8333"
                                className=" stroke-primary group-hover:stroke-white group-hover:transition-all group-hover:duration-150"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </Link>
            </div>
            {/* Double button */}
        </>
    );
}
