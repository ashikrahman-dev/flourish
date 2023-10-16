import Image from "next/image";
import React from "react";
import "./style.css";

import CounterUpSec from "/public/img/counterup-section-img.svg";

const counterUpData = [
    {
        id: 1,
        prograce: "88",
        content:
            "People trust online reviews on third-party platforms as much as personal recommendations1",
    },
    {
        id: 2,
        prograce: "+380",
        content:
            "Having 5+ reviews improves sales by 380% for high-end products3",
    },
    {
        id: 3,
        prograce: "85",
        content:
            "Having some negative reviews increases conversions by 85% and increasing trust and engagement",
    },
];

export default function CounterUp() {
    return (
        <>
            <section className="py-[60px] lg:py-20 xl:py-[100px] 2xl:py-[120px] bg-primary">
                <div className="container px-5">
                    <div className="flex w-full items-center mx-auto flex-col-reverse lg:flex-row text-center lg:text-left text-dark_6 gap-10 xl:gap-32">
                        <div className=" w-full">
                            <ul className="font-mulish counter-item-wrap">
                                {counterUpData.map((data, index) => (
                                    <li
                                        key={index}
                                        className="flex flex-col md:flex-row border-b border-primary_shade_2 pb-[30px] border-opacity-[0.15] items-center gap-2 lg:gap-10 xl:gap-20"
                                    >
                                        <div className=" text-white text-[56px] md:text-[72px] xl:text-[96px] font-bold min-w-[180px] xl:min-w-[322px] w-full text-center">
                                            {data.prograce}%
                                        </div>
                                        <div className="w-full text-center md:text-left">
                                            {data.content}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className=" w-full flex justify-center">
                            <Image
                                alt="Section Image"
                                src={CounterUpSec}
                                sizes="100vw"
                                quality={100}
                                style={{
                                    width: "100%",
                                    maxWidth: "503px",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
