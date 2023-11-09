import React from "react";
import Button from "../../Button";
import Link from "next/link";

export default function ReferralProgram() {
    return (
        <>
            <div className="flex flex-col justify-between h-full min-h-[770px] gap-[30px]">
                <div className=" flex flex-col gap-[30px]">
                    <div className="">
                        <h4 className=" text-dark_1 text-[26px] leading-[1.38em] font-bold">
                            Invite friends to join Flourish
                        </h4>
                        <p className=" text-dark_2 font-mulish text-base font-normal leading-[1.62em] mt-[10px]">
                            {`Do you know other guides who'd benefit from reaching more people?`}{" "}
                            <strong className=" font-bold">{`Refer them to Flourish and we'll give you both $30 in booking fee credits.`}</strong>
                        </p>
                    </div>
                    <div className="">
                        <h5 className="text-xl leading-[1.5em] text-dark_1 font-semibold mb-5">
                            Just send them this referral code
                        </h5>
                        <div className="flex">
                            <input
                                autoComplete="off"
                                required
                                minLength={4}
                                maxLength={150}
                                type="text"
                                name="code"
                                value={"de-florio-referral1234"}
                                placeholder="Email"
                                className="py-5 px-6 rounded-s-xl  h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 border-r-0 font-mulish"
                            />
                            <button className=" rounded-r-xl bg-primary text-white flex min-w-[260px] items-center justify-center h-[60px] hover:bg-[#37211A] transition-all duration-100">
                                <span>
                                    <svg
                                        width="19"
                                        height="18"
                                        viewBox="0 0 19 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.5 5.25V11.25C6.5 12.0784 7.17157 12.75 8 12.75H12.5M6.5 5.25V3.75C6.5 2.92157 7.17157 2.25 8 2.25H11.4393C11.6383 2.25 11.829 2.32902 11.9697 2.46967L15.2803 5.78033C15.421 5.92098 15.5 6.11175 15.5 6.31066V11.25C15.5 12.0784 14.8284 12.75 14 12.75H12.5M6.5 5.25H5.5C4.39543 5.25 3.5 6.14543 3.5 7.25V14.25C3.5 15.0784 4.17157 15.75 5 15.75H10.5C11.6046 15.75 12.5 14.8546 12.5 13.75V12.75"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                Copy code
                            </button>
                        </div>
                    </div>
                    <div className=" mt-[10px]">
                        <h5 className="text-xl leading-[1.5em] text-dark_1 font-semibold mb-5">
                            Enter email address and send invitation
                        </h5>
                        <div className="flex ">
                            <input
                                autoComplete="off"
                                required
                                minLength={4}
                                maxLength={150}
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                                className="py-5 px-6 rounded-s-xl  h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 border-r-0 font-mulish"
                            />
                            <button className=" rounded-r-xl bg-primary text-white flex min-w-[260px] items-center justify-center h-[60px] hover:bg-[#37211A] transition-all duration-100">
                                Send invitation
                            </button>
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
