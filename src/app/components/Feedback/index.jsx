"use client";
import React from "react";
import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";

import "./style.css";

import reviewUserImage from "/public/img/review-user-img.png";
import reviewUserImage2 from "/public/img/review-user-img-2.png";

const reviewsData = [
    {
        id: 1,
        userName: "Kiley A.",
        userAvatar: reviewUserImage,
        time: "Jun 13, 2023 (Edited Jun 28, 2023)",
        status: "Recommend",
        reviewContent:
            "I'm so fortunate to have found Daode. I have been taking online classes now for five months and practicing on my own daily. The instructors are so great at making sure I understand the exercises and answering all my questions. Even though the classes are through Skype, the instructors are still very perceptive of my movements and how to help me improve. I have been able to learn so much already about relaxation and energy movement that applies to everyday life outside of the practice too. And I always feel encouraged and supported, thank you!",
    },
    {
        id: 2,
        userName: "Luis De Florio",
        userAvatar: reviewUserImage2,
        time: "Jun 13, 2023 (Edited Jun 28, 2023)",
        status: "Recommend",
        reviewContent:
            "I'm so fortunate to have found Daode. I have been taking online classes now for five months and practicing on my own daily. The instructors are so great at making sure I understand the exercises and answering all my questions. Even though the classes are through Skype, the instructors are still very perceptive of my movements and how to help me improve. I have been able to learn so much already about relaxation and energy movement that applies to everyday life outside of the practice too. And I always feel encouraged and supported, thank you!",
    },
    {
        id: 3,
        userName: "Sarah West",
        userAvatar: reviewUserImage,
        time: "Jun 13, 2023 (Edited Jun 28, 2023)",
        status: "Recommend",
        reviewContent:
            "I'm so fortunate to have found Daode. I have been taking online classes now for five months and practicing on my own daily. The instructors are so great at making sure I understand the exercises and answering all my questions. Even though the classes are through Skype, the instructors are still very perceptive of my movements and how to help me improve. I have been able to learn so much already about relaxation and energy movement that applies to everyday life outside of the practice too. And I always feel encouraged and supported, thank you!",
    },
    {
        id: 4,
        userName: "Luis De Florio",
        userAvatar: reviewUserImage2,
        time: "Jun 13, 2023 (Edited Jun 28, 2023)",
        status: "Recommend",
        reviewContent:
            "I'm so fortunate to have found Daode. I have been taking online classes now for five months and practicing on my own daily. The instructors are so great at making sure I understand the exercises and answering all my questions. Even though the classes are through Skype, the instructors are still very perceptive of my movements and how to help me improve. I have been able to learn so much already about relaxation and energy movement that applies to everyday life outside of the practice too. And I always feel encouraged and supported, thank you!",
    },
    {
        id: 5,
        userName: "Sarah West",
        userAvatar: reviewUserImage,
        time: "Jun 13, 2023 (Edited Jun 28, 2023)",
        status: "Recommend",
        reviewContent:
            "I'm so fortunate to have found Daode. I have been taking online classes now for five months and practicing on my own daily. The instructors are so great at making sure I understand the exercises and answering all my questions. Even though the classes are through Skype, the instructors are still very perceptive of my movements and how to help me improve. I have been able to learn so much already about relaxation and energy movement that applies to everyday life outside of the practice too. And I always feel encouraged and supported, thank you!",
    },
];

export default function Feedback() {
    return (
        <>
            <section className="bg-primary_shade_4 py-[60px] lg:py-20 xl:py-[100px] 2xl:py-[120px]">
                <div className="container px-5">
                    <div className="flex w-full items-center mx-auto flex-col-reverse lg:flex-row justify-between text-center lg:text-left text-dark_6 gap-10 xl:gap-2">
                        <div className="w-full basis-1/3">
                            <h3 className="text-[24px] md:text-[30px] lg:xl:text-[36px] xl:text-[40px] text-dark_1 leading-[1.25em] font-bold mb-5">
                                {`It's simple: independent reviews help people
                                trust you more.`}
                            </h3>
                            <p className=" text-dark_2 font-mulish text-base md:text-lg lg:xl:text-xl leading-[1.5em] font-normal">
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatu
                            </p>
                        </div>
                        <div className="w-full review-slider-wrap basis-2/3 flex justify-end">
                            {/* Client feedback slider */}

                            <Splide
                                hasTrack={false}
                                className=""
                                options={{
                                    rewind: true,
                                    type: "loop",
                                    snap: true,
                                    perMove: 1,
                                    autoplay: true,
                                    pagination: false,
                                    direction: "ttb",
                                    height: "38em",
                                    arrows: false,
                                    perPage: 2,
                                    focus: "center",
                                    gap: "10px",
                                    drag: "free",
                                    autoStart: true,
                                    autoScroll: {
                                        speed: 1,
                                    },
                                    breakpoints: {
                                        800: {
                                            perPage: 1,
                                            height: "20em",
                                        },
                                        600: {
                                            perPage: 1,
                                            height: "24em",
                                        },
                                        500: {
                                            perPage: 1,
                                            height: "28em",
                                        },
                                        450: {
                                            perPage: 1,
                                            height: "31em",
                                        },
                                        410: {
                                            perPage: 1,
                                            height: "30em",
                                        },
                                        395: {
                                            perPage: 1,
                                            height: "32em",
                                        },
                                        350: {
                                            perPage: 1,
                                            height: "36em",
                                        },
                                        340: {
                                            perPage: 1,
                                            height: "38em",
                                        },
                                    },
                                }}
                                aria-label="React Splide Example"
                            >
                                <SplideTrack>
                                    {reviewsData.map((data, index) => (
                                        <SplideSlide key={index}>
                                            <div className="w-full max-w-[630px]">
                                                <div className="bg-white p-5 sm:p-[30px] rounded-[14px] border border-[#E7DBD7] border-b-4 text-dark_3 font-mulish">
                                                    <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                                                        <div className="flex gap-2 sm:gap-4">
                                                            <div className=" shrink-0">
                                                                <Image
                                                                    src={
                                                                        data.userAvatar
                                                                    }
                                                                    alt="User image"
                                                                    placeholder="blur"
                                                                    quality={90}
                                                                    sizes="100vw"
                                                                    style={{
                                                                        width: "49px",
                                                                        height: "49px",
                                                                    }}
                                                                    className=" rounded-full"
                                                                />
                                                            </div>
                                                            <div className="">
                                                                <h6 className="text-dark_1 text-base font-noto_serif font-semibold text-start leading-[1.62em]">
                                                                    {
                                                                        data.userName
                                                                    }
                                                                </h6>
                                                                <div className="flex text-dark_3 text-[11px] sm:text-xs leading-[1.66em] font-normal gap-1 align-middle items-center">
                                                                    <span>
                                                                        <svg
                                                                            width="16"
                                                                            height="17"
                                                                            viewBox="0 0 16 17"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M8 6.29232V8.95898L10 10.959M14 8.95898C14 12.2727 11.3137 14.959 8 14.959C4.68629 14.959 2 12.2727 2 8.95898C2 5.64528 4.68629 2.95898 8 2.95898C11.3137 2.95898 14 5.64528 14 8.95898Z"
                                                                                stroke="#716460"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    {data.time}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" text-sm leading-[1.71em] text-[#596B36]">
                                                            {data.status}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-dark_3 text-sm leading-[1.71em] text-start sm:text-center">
                                                            {data.reviewContent}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    ))}
                                </SplideTrack>
                            </Splide>
                            {/* Client feedback slider */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
