"use client";

import React from "react";
import RecommendSelectOption from "../../RecommendSelectOption";
import Link from "next/link";

export default function ProvideYourOfferings() {
    return (
        <>
            <div className=" flex flex-col justify-between h-full min-h-[770px]">
                <div>
                    <h5 className="text-xl leading-[1.5em] text-dark_1 font-semibold mb-5">
                        Add up to 5 offerings.
                    </h5>

                    <RecommendSelectOption />
                </div>

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
            </div>
        </>
    );
}
