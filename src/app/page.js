import Image from "next/image";
import ProfileViewImage from "/public/img/how-it-work-section-img.png";
import ConnectPeople from "/public/img/connect-new-people-img.png";
import CallToActionBg from "/public/img/cta-section-bg.jpg";
import Feedback from "./components/Feedback";
import Link from "next/link";
import Accordion from "./components/Accordion";

import { BannerSlider } from "./components/BannerSlider";
import CounterUp from "./components/CounterUp";

export default function Home() {
    return (
        <>
            <BannerSlider />

            {/* <AutoplayExample /> */}

            {/* How it works */}
            <section className="bg-primary_shade_4 py-[60px] lg:py-20 xl:py-[100px] 2xl:py-[120px]">
                <div className="container px-5">
                    <h2 className="text-[36px] md:text-[40px] lg:text-[44px] xl:text-[52px] leading-[1.19em] font-bold text-dark_1 text-center">
                        How it works
                    </h2>
                    <div className="flex w-full mt-[40px] lg:mt-[60px] xl:mt-[80px] 2xl:mt-[100px] items-center max-w-[1180px] mx-auto gap-8 md:gap-12 lg:gap-16 xl:gap-36 flex-col lg:flex-row text-center lg:text-left">
                        <div className="w-full flex justify-center">
                            <Image
                                src={ProfileViewImage}
                                alt="Profile view image"
                                sizes="100vw"
                                placeholder="blur"
                                quality={100}
                                style={{
                                    width: "100%",
                                    maxWidth: "520px",
                                    height: "auto",
                                }}
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-dark_1 leading-[1.25em] font-bold mb-3 md:mb-5">
                                Share your practice
                            </h3>
                            <p className=" font-mulish text-dark_2 text-base md:text-lg lg:text-xl leading-[1.5em] font-normal">
                                Create a profile, with the flexibility to
                                present your practice as it is.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* How it works */}

            {/* CounterUp section */}
            <CounterUp />
            {/* CounterUp section */}

            {/* Feedback */}
            <Feedback />
            {/* Feedback */}

            {/* Connect new people */}
            <section className="bg-primary_shade_4 pb-[60px] lg:pb-20 xl:pb-[100px] 2xl:pb-[120px] pt-8 lg:pt-10 xl:pt-14 2xl:pt-20">
                <div className="container px-5">
                    <div className="flex flex-col lg:flex-row w-full items-center mx-auto text-center lg:text-left text-dark_6 gap-10 xl:gap-12">
                        <div className=" w-full">
                            <Image
                                alt="Feedback Image"
                                src={ConnectPeople}
                                sizes="100vw"
                                placeholder="blur"
                                quality={100}
                                style={{
                                    width: "100%",
                                    maxWidth: "630px",
                                    height: "auto",
                                }}
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="text-[24px] md:text-[30px] lg:xl:text-[36px] xl:text-[40px] text-dark_1 leading-[1.25em] font-bold mb-5">
                                Connect with new people ready for you
                            </h3>
                            <p className="text-dark_2 font-mulish text-base md:text-lg lg:xl:text-xl leading-[1.5em] font-normal mb-7">
                                Our unique search system connects you with
                                people searching for what you can help with -
                                not just people who already know the name of
                                your method.
                            </p>
                            <p className=" text-dark_2 font-mulish text-base md:text-lg lg:xl:text-xl leading-[1.5em] font-normal">
                                Your reviews and verified credentials help them
                                choose you with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Connect new people */}

            {/* Call to action */}
            <section className="relative min-h-[280px] md:min-h-[400px] lg:min-h-[490px] h-full w-full">
                <div className="">
                    <Image
                        alt="Call to action bg image"
                        src={CallToActionBg}
                        placeholder="blur"
                        quality={90}
                        sizes="100vw"
                        fill
                        style={{
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>

                <div className="container px-5">
                    <div className="slide-wrap z-50 absolute h-full flex justify-center max-w-full xl:max-w-screen-2xl">
                        <div className="text-white flex items-center w-full flex-col-reverse justify-center xl:flex-row gap-10">
                            <div className=" w-full">
                                <div className=" max-w-[300px] sm:max-w-[450px] md:max-w-[630px]">
                                    <h2 className="text-[24px] md:text-[30px] lg:xl:text-[36px] xl:text-[40px] leading-[1.25em] text-white font-semibold">
                                        We make reaching new people easy, so you
                                        can focus on helping them.
                                    </h2>
                                    <Link
                                        href={"/"}
                                        className="text-base md:text-lg lg:text-xl leading-[1.2em] font-semibold tracking-[0.03em] text-white bg-primary rounded-[50px] py-[10px] sm:py-3 md:py-3 lg:py-[18px] px-6 md:px-8 lg:px-11 inline-flex mt-6 lg:mt-12 hover:bg-dark_2 transition-colors duration-200"
                                    >
                                        Sign up for free
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to action */}

            {/* Accordion */}
            <section className="py-[60px] lg:py-20 xl:py-[100px] 2xl:py-[120px] bg-primary">
                <div className="container px-5">
                    <h3 className="text-[24px] md:text-[30px] lg:xl:text-[36px] xl:text-[40px] leading-[1.25em] text-white font-bold text-center mb-14">
                        Frequently asked questions
                    </h3>

                    <Accordion />
                </div>
            </section>
            {/* Accordion */}
        </>
    );
}
