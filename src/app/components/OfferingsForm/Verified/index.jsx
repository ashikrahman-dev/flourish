import React from "react";
import Button from "../../Button";
import Link from "next/link";

export default function Verified() {
    return (
        <>
            <div className="flex flex-col justify-between h-full min-h-[770px] gap-[30px]">
                <div className="flex flex-col gap-[30px]">
                    <div className="">
                        <h5 className="text-xl leading-[1.5em] text-dark_1 font-semibold mb-2">
                            Verified credentials
                        </h5>
                        <p className=" text-dark_3 font-mulish text-base font-normal leading-[1.62em]">
                            {`If you have formal credentials, you can list them here, along with a link to your official profile or a directory in which you're listed for verification.`}
                        </p>
                        <p className=" text-dark_3 font-mulish text-base font-normal leading-[1.62em] mb-5">
                            Any informal credentials should be listed in the
                            About section.
                        </p>
                        <input
                            autoComplete="off"
                            required
                            minLength={4}
                            maxLength={150}
                            type="text"
                            name="credential"
                            placeholder="Credential..."
                            className="py-5 px-6 rounded-xl  h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 font-mulish mb-5"
                        />
                        <input
                            autoComplete="off"
                            required
                            minLength={4}
                            maxLength={150}
                            type="url"
                            name="link"
                            placeholder="Link"
                            className="py-5 px-6 rounded-xl  h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 font-mulish mb-[30px]"
                        />
                        <Button buttonName="Add offering" buttonLink="/" />
                    </div>

                    {/* Credentials */}
                    <div>
                        <h5 className=" text-xl leading-[1.5em] text-dark_1 font-semibold mb-5">
                            Credentials
                        </h5>
                        <ul className="flex flex-col gap-3">
                            <li className=" py-5 px-6 rounded-xl bg-dark_7 flex justify-between items-center font-mulish text-dark_3">
                                <div>
                                    Your offering(s) will be shown in search
                                    results and on your profile.
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
                                    Your offering(s) will be shown in search
                                    results and on your profile.
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
                    {/* Credentials */}
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
