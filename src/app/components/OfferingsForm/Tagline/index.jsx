import Link from "next/link";
import React from "react";

export default function Tagline() {
    return (
        <>
            <div className="flex flex-col justify-between h-full min-h-[770px] gap-[30px]">
                <div className=" flex flex-col gap-[30px]">
                    <div>
                        <h5 className="text-xl leading-[1.5em] text-dark_1 font-semibold mb-5">
                            Tagline
                        </h5>
                        <p className=" text-dark_3 font-mulish text-base font-normal leading-[1.62em] mt-[10px]">
                            Your tagline will be shown in search results and on
                            your profile. Use it to highlight what makes you and
                            your offerings special.
                        </p>
                        <p className=" text-dark_3 font-mulish text-base font-normal leading-[1.62em] italic">
                            (max 60 characters)
                        </p>
                        <div className="flex mt-5">
                            <input
                                autoComplete="off"
                                required
                                minLength={4}
                                maxLength={150}
                                type="text"
                                name="tagline"
                                placeholder="Tagline.."
                                className="py-5 px-6 rounded-xl  h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 font-mulish"
                            />
                        </div>
                    </div>
                    <div className=" border-b border-dark_1 opacity-10"></div>
                    <div>
                        <h5 className="text-xl leading-[1.5em] text-dark_1 font-semibold mb-5">
                            About
                        </h5>
                        <p className=" text-dark_3 font-mulish text-base font-normal leading-[1.62em] mt-[10px]">
                            The About section will be shown on your profile. It
                            can be as short or as long as you need, and include
                            whatever you think is most important for people to
                            know about you and your offerings.
                        </p>
                        <div className="flex mt-5">
                            <textarea
                                name="commentText"
                                placeholder="Description..."
                                minLength={10}
                                maxLength={500}
                                // value={textarea}
                                // onChange={handleTextareaChange}
                                className={`py-5 px-6 rounded-xl h-[160px] font-mulish w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 resize-none`}
                            />
                        </div>
                    </div>
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
            </div>
        </>
    );
}
