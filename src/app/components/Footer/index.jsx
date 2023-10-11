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
                        <ul className="text-sm lg:text-base font-semibold flex list-disc gap-7 lg:gap-14 flex-wrap">
                            <li>
                                <Link href={"/"}>About</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Contact us</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Terms</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Privacy</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Cookies</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Footer menu */}
                </div>
            </footer>
        </>
    );
}
