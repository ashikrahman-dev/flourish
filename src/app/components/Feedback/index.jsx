import Image from "next/image";
import React from "react";
import FeedbackImage from "/public/img/reviews-img.svg";

export default function Feedback() {
    return (
        <>
            <section className="bg-primary_shade_4 py-[60px] lg:py-20 xl:py-[100px] 2xl:py-[120px]">
                <div className="container px-5">
                    <div className="flex w-full items-center mx-auto flex-col-reverse lg:flex-row text-center lg:text-left text-dark_6 gap-10 xl:gap-28">
                        <div className="w-full">
                            <h3 className="text-[40px] text-dark_1 leading-[1.25em] font-bold mb-5">
                                {`It's simple: independent reviews help people
                                trust you more.`}
                            </h3>
                            <p className=" text-dark_2 font-mulish text-xl leading-[1.5em] font-normal">
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatu
                            </p>
                        </div>
                        <div className=" w-full">
                            <Image
                                alt="Feedback Image"
                                src={FeedbackImage}
                                sizes="100vw"
                                quality={100}
                                style={{
                                    width: "100%",
                                    maxWidth: "630px",
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
