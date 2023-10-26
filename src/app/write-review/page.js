import React from "react";
import reviewerProfileImg from "/public/img/luis-de-florio-profile-img.png";
import Image from "next/image";
import Link from "next/link";

export default function WriteReview() {
    return (
        <>
            <div className="py-[60px] lg:py-20 px-5 bg-dark_7">
                <div className="container">
                    <div className="flex gap-[30px]">
                        <div className=" w-1/3">
                            <div className="bg-white rounded-xl p-10 flex flex-col items-center gap-5">
                                <Image
                                    src={reviewerProfileImg}
                                    alt="Luis De Florio profile image"
                                    sizes="100vw"
                                    placeholder="blur"
                                    quality={90}
                                    style={{
                                        width: "100%",
                                        maxWidth: "220px",
                                        height: "auto",
                                    }}
                                    className=" rounded-full"
                                />
                                <h4 className="text-lg sm:text-xl xl:text-[26px] text-dark_1 font-bold leading-[1.38em] mt-2">
                                    Luis De Florio
                                </h4>

                                <Link
                                    className="text-primary border-2 border-primary rounded-[50px] py-2 px-6 hover:bg-primary hover:text-white transition-all duration-150"
                                    href="/"
                                >
                                    Change
                                </Link>
                            </div>
                        </div>
                        <div className="w-2/3">
                            <div className="bg-white rounded-xl p-[30px] flex flex-col gap-[30px]">
                                Lorem ipsum How it works: after you fill out the
                                info below, a basic profile will be created for
                                your guide, and be able to write your review.
                                The guide will be invited to join Flourish and
                                expand their profile. Lorem ipsum How it works:
                                after you fill out the info below, a basic
                                profile will be created for your guide, and you
                                will be able to write your review. The guide
                                will be invited to join Flourish and expand
                                their profile.
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    );
}
