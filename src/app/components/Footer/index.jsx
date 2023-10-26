import Link from "next/link";
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-dark_1 py-6 text-dark_4 px-5">
                <div className="container justify-between flex flex-col-reverse md:flex-row items-center gap-4">
                    {/* Copyright text */}
                    <div className="text-sm lg:text-base">
                        © Flourish. {currentYear}, All Rights Reserved.
                    </div>
                    {/* Copyright text */}

                    {/* Footer menu */}
                    <div className="">
                        <ul className="text-sm lg:text-base font-semibold flex list-disc gap-6 lg:gap-14 flex-wrap justify-center">
                            <li>
                                <Link
                                    href={"/"}
                                    className="hover:text-dark_5 transition-all duration-100"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="hover:text-dark_5 transition-all duration-100"
                                >
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="hover:text-dark_5 transition-all duration-100"
                                >
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="hover:text-dark_5 transition-all duration-100"
                                >
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="hover:text-dark_5 transition-all duration-100"
                                >
                                    Cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Footer menu */}
                </div>
            </footer>
        </>
    );
}
