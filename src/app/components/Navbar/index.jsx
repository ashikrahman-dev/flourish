import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "/public/img/logo.svg";

import "./style.css";

export default function Navbar() {
    return (
        <>
            <section className="">
                {/* Topbar - Start */}
                <div className="bg-primary py-2 lg:py-[13px] flex px-5">
                    <div className="container font-mulish flex justify-center md:justify-between">
                        <div className="topbar-contact-info text-dark_5 flex gap-3 lg:gap-9 text-xs sm:text-sm lg:text-base">
                            <Link
                                href="tel:0118005678"
                                className="flex items-center gap-[5px] lg:gap-[10px]"
                            >
                                <span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.8961 16.9792C14.2155 16.8542 12.6218 16.441 11.1148 15.7396C9.60787 15.0382 8.25718 14.0903 7.06273 12.8958C5.86829 11.7014 4.92732 10.3542 4.23982 8.85417C3.55232 7.35417 3.13912 5.76389 3.00023 4.08333C2.97246 3.79167 3.05778 3.53819 3.25619 3.32292C3.4546 3.10764 3.70261 3 4.00023 3H6.83357C7.06968 3 7.27454 3.07292 7.44815 3.21875C7.62176 3.36458 7.73635 3.54861 7.7919 3.77083L8.2919 5.97917C8.31968 6.15972 8.30926 6.33333 8.26065 6.5C8.21204 6.66667 8.13218 6.80556 8.02107 6.91667L6.00023 8.95833C6.27801 9.48611 6.59746 9.99306 6.95857 10.4792C7.31968 10.9653 7.72224 11.4235 8.16625 11.8538C8.58335 12.2707 9.02801 12.6562 9.50023 13.0104C9.97246 13.3646 10.4725 13.6806 11.0002 13.9583L13.0627 11.9583C13.1738 11.8472 13.3127 11.7674 13.4794 11.7188C13.6461 11.6701 13.8197 11.6597 14.0002 11.6875L16.2294 12.1667C16.4655 12.2361 16.653 12.3576 16.7919 12.5312C16.9308 12.7049 17.0002 12.9097 17.0002 13.1458V15.9792C17.0002 16.2768 16.8891 16.5248 16.6669 16.7232C16.4447 16.9216 16.1877 17.0069 15.8961 16.9792ZM5.31273 7.5L6.77107 6.04167L6.41357 4.5H4.5419C4.61135 5.02778 4.70857 5.53819 4.83357 6.03125C4.95857 6.52431 5.11829 7.01389 5.31273 7.5ZM12.4794 14.6667C12.9669 14.8645 13.4638 15.0216 13.97 15.138C14.4763 15.2543 14.9863 15.3472 15.5002 15.4167V13.5417L13.9377 13.2083L12.4794 14.6667Z"
                                            fill="#D6CDCB"
                                        />
                                    </svg>
                                </span>
                                +(01) - 1800 - 5678
                            </Link>
                            <Link
                                href="mailto:info@flourishworld.co"
                                className="flex items-center gap-[5px] lg:gap-[10px]"
                            >
                                <span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 16C3.0875 16 2.73438 15.853 2.44063 15.5591C2.14688 15.2652 2 14.9119 2 14.4992V5.4941C2 5.08137 2.14688 4.72917 2.44063 4.4375C2.73438 4.14583 3.0875 4 3.5 4H16.5C16.9125 4 17.2656 4.14696 17.5594 4.44087C17.8531 4.73479 18 5.08811 18 5.50083V14.5059C18 14.9186 17.8531 15.2708 17.5594 15.5625C17.2656 15.8542 16.9125 16 16.5 16H3.5ZM10 11L3.5 7.27083V14.5H16.5V7.27083L10 11ZM10 9.22917L16.5 5.5H3.5L10 9.22917ZM3.5 7.27083V5.5V14.5V7.27083Z"
                                            fill="#D6CDCB"
                                        />
                                    </svg>
                                </span>
                                info@flourishworld.co
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="topbar-menu text-dark_5 flex gap-10 text-sm lg:text-base">
                                <Link href={"/"}>About</Link>
                                <Link href={"/"}>Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar - Start */}
                {/* Navbar menu -/start */}
                <nav className="bg-dark_6 py-3 sm:py-4 lg:py-6 px-5 relative">
                    <div className="container font-mulish flex justify-between items-center">
                        <div className="logo-search-area flex align-middle items-center gap-[60px] lg:gap-8">
                            <Link href={"/"} className="logo">
                                <Image
                                    src={Logo}
                                    sizes="(max-width: 150px) 100vw, (max-width: 140px) 50vw, 33vw"
                                    alt="Logo"
                                    priority={true}
                                    className=" max-w-[150px] w-full"
                                />
                            </Link>
                            <div className="search-area hidden lg:block">
                                <input
                                    type="search"
                                    name=""
                                    id=""
                                    className="bg-dark_7 border border-dark_6 rounded-[50px] text-dark_3 font-medium py-2 pe-5 ps-[52px] outline-none focus:border-dark_3 transition-all duration-150"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="navigation-menu text-dark_3 text-base lg:text-lg font-semibold tracking-[.03em] flex gap-3 lg:gap-6 items-center">
                                <Link href={"/"}>Sign up as a guide</Link>
                                <Link
                                    className=" text-primary border-2 border-primary rounded-[50px] py-2 px-6"
                                    href={"/"}
                                >
                                    Write a review
                                </Link>
                                <Link href="/signup">Sign up</Link>
                                <Link href="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute min-w-[270px] w-full max-w-[350px] bg-white  min-h-screen h-full top-0 left-0">
                        <div className=" absolute right-0">Close</div>
                        <div className=" py-8 px-5">
                            <div className="search-area mb-8">
                                <input
                                    type="search"
                                    name=""
                                    id=""
                                    className="bg-dark_7 border border-dark_6 w-full rounded-[50px] text-dark_3 font-medium py-2 pe-5 ps-[52px] outline-none focus:border-dark_3 transition-all duration-150"
                                    placeholder="Search"
                                />
                            </div>
                            <div className="">
                                <div className="navigation-menu text-dark_3 text-base lg:text-lg font-semibold tracking-[.03em] flex flex-col gap-7">
                                    <Link href={"/"}>Sign up as a guide</Link>

                                    <Link
                                        className="text-primary border-2 border-primary rounded-[50px] py-2 px-6 w-fit"
                                        href={"/"}
                                    >
                                        Write a review
                                    </Link>

                                    <Link href="/signup">Sign up</Link>
                                    <Link href="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar menu -/end */}
            </section>
        </>
    );
}
