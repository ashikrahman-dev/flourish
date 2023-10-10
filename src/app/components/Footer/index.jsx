import Link from "next/link";
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-dark_1 py-6 text-dark_4 px-5">
                <div className="container mx-auto flex justify-between">
                    {/* Copyright text */}
                    <div className="">
                        © Flourish. {currentYear}, All Rights Reserved.
                    </div>
                    {/* Copyright text */}

                    {/* Footer menu */}
                    <div className="">
                        <ul className=" text-base font-semibold flex list-disc gap-14">
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
