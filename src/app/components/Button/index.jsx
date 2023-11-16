import Link from "next/link";
import React from "react";

export default function Button({ buttonName, buttonLink }) {
    return (
        <>
            <Link
                className="text-primary border-2 border-primary rounded-[50px] py-2 px-6 hover:bg-primary hover:text-white transition-all duration-150 inline-block font-semibold"
                href={buttonLink ? buttonLink : "/"}
            >
                {buttonName}
            </Link>
        </>
    );
}
