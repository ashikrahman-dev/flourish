import React from "react";
import "./style.css";
import slide_1_bg from "/public/img/slide-1-bg.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Slider() {
    return (
        <div>
            <div className="min-h-[840px] h-full w-full">
                <div className="relative w-full">
                    <div className=" absolute -z-10 w-full">
                        <div className="slide-bg-gradient absolute left-0 right-0 top-0 bottom-0 w-full h-full z-10"></div>
                        <Image
                            alt="Slide 1"
                            src={slide_1_bg}
                            placeholder="blur"
                            quality={100}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "600px",
                                maxHeight: "840px",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div className="container">
                        <div className="slide-wrap h-full flex justify-center max-w-screen-2xl w-full min-h-[840px]">
                            <div className="text-white flex items-center w-full flex-col-reverse justify-center xl:flex-row gap-10">
                                <div className=" w-full">
                                    <div className=" max-w-[520px]">
                                        <h1 className=" text-[52px] leading-[1.19em] text-white font-semibold">
                                            We help you help more people, no
                                            matter your method.
                                        </h1>
                                        <p className="font-mulish text-base font-normal leading-[1.87em] mt-5">
                                            If you help people improve their
                                            lives - whether thats emotionally,
                                            socially, physically, or spiritually
                                            - Flourish is for you.
                                        </p>
                                        <Link
                                            href={"/"}
                                            className=" text-xl leading-[1.2em] font-semibold tracking-[0.03em] text-white bg-primary rounded-[50px] py-[18px] px-11 inline-flex mt-12 hover:bg-dark_2 transition-colors duration-200"
                                        >
                                            Sign up for free
                                        </Link>
                                    </div>
                                </div>
                                <div className=" w-full flex justify-start xl:justify-end ">
                                    <div className="bg-clip-path bg-no-repeat max-w-[382px] h-full py-3 w-full">
                                        <div className="ps-14 ">
                                            <h4 className=" text-[26px] text-dark_1 font-bold leading-[1.38em]">
                                                Sarah West
                                            </h4>
                                            <p className="font-mulish text-dark_2 text-sm leading-[1.71em] font-normal">
                                                Somatic Therapist & Nature-Based
                                                Soul Guide
                                            </p>
                                            <p className="font-mulish text-primary text-sm leading-[1.71em] font-normal flex gap-1 items-center">
                                                <span>
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clip-path="url(#clip0_2702_12665)">
                                                            <path
                                                                d="M7.9718 16.005L7.50709 15.6067C6.86643 15.0702 1.27246 10.2391 1.27246 6.7052C1.27246 3.00527 4.27187 0.00585938 7.9718 0.00585938C11.6717 0.00585938 14.6711 3.00527 14.6711 6.7052C14.6711 10.2391 9.07718 15.0703 8.43918 15.6093L7.9718 16.005ZM7.9718 1.45445C5.07327 1.45773 2.72437 3.80664 2.72109 6.70517C2.72109 8.92523 6.16271 12.4717 7.9718 14.095C9.78093 12.4711 13.2225 8.92255 13.2225 6.70517C13.2192 3.80664 10.8704 1.45777 7.9718 1.45445Z"
                                                                fill="#884A39"
                                                            />
                                                            <path
                                                                d="M7.97197 9.36093C6.50534 9.36093 5.31641 8.17199 5.31641 6.70537C5.31641 5.23874 6.50534 4.0498 7.97197 4.0498C9.43859 4.0498 10.6275 5.23874 10.6275 6.70537C10.6275 8.17199 9.43862 9.36093 7.97197 9.36093ZM7.97197 5.37756C7.23866 5.37756 6.64419 5.97202 6.64419 6.70534C6.64419 7.43865 7.23866 8.03312 7.97197 8.03312C8.70528 8.03312 9.29975 7.43865 9.29975 6.70534C9.29975 5.97202 8.70531 5.37756 7.97197 5.37756Z"
                                                                fill="#884A39"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_2702_12665">
                                                                <rect
                                                                    width="16"
                                                                    height="16"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                Moab, Utah
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
