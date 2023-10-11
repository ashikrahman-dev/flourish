import Image from "next/image";
import Slider from "./components/Slider";
import ProfileViewImage from "/public/img/how-it-work-section-img.png";
import CounterUpSec from "/public/img/counterup-section-img.svg";
import ConnectPeople from "/public/img/connect-new-people-img.png";
import CallToActionBg from "/public/img/cta-section-bg.jpg";
import Feedback from "./components/Feedback";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Slider />

            {/* How it works */}
            <section className="bg-primary_shade_4 py-[120px]">
                <div className="container px-5">
                    <h2 className="text-[52px] leading-[1.19em] font-bold text-dark_1 text-center">
                        How it works
                    </h2>
                    <div className="flex w-full mt-[120px] items-center max-w-[1180px] mx-auto gap-12 lg:gap-36 flex-col lg:flex-row text-center lg:text-left">
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
                            <h3 className="text-dark_1 text-[40px] leading-[1.25em] font-bold mb-5">
                                Share your practice
                            </h3>
                            <p className=" font-mulish text-dark_2 text-xl leading-[1.5em] font-normal">
                                Create a profile, with the flexibility to
                                present your practice as it is.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* How it works */}

            {/* CounterUp section */}
            <section className="py-[120px] bg-primary">
                <div className="container px-5">
                    <div className="flex w-full items-center mx-auto flex-col-reverse lg:flex-row text-center lg:text-left text-dark_6 gap-10 xl:gap-32">
                        <div className=" w-full">
                            <ul className=" font-mulish">
                                <li className=" flex border-b border-primary_shade_2 pb-[30px] border-opacity-[0.15] items-center gap-10 xl:gap-20">
                                    <div className=" text-white text-[60px] xl:text-[96px] font-bold min-w-[322px] w-full text-center">
                                        88%
                                    </div>
                                    <div className="w-full text-left">
                                        People trust online reviews on
                                        third-party platforms as much as
                                        personal recommendations1
                                    </div>
                                </li>
                                <li className=" flex border-b border-primary_shade_2 pb-[30px] border-opacity-[0.15] items-center gap-10 xl:gap-20">
                                    <div className=" text-white text-[60px] xl:text-[96px] font-bold min-w-[322px] w-full text-center">
                                        +380%
                                    </div>
                                    <div className="w-full text-left">
                                        Having 5+ reviews improves sales by 380%
                                        for high-end products3
                                    </div>
                                </li>
                                <li className=" flex border-b border-primary_shade_2 pb-[30px] border-opacity-[0.15] items-center gap-10 xl:gap-20">
                                    <div className=" text-white text-[60px] xl:text-[96px] font-bold min-w-[322px] w-full text-center">
                                        +85%
                                    </div>
                                    <div className="w-full text-left">
                                        Having some negative reviews increases
                                        conversions by 85% and increasing trust
                                        and engagement
                                    </div>
                                </li>
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
            {/* CounterUp section */}

            {/* Feedback */}
            <Feedback />
            {/* Feedback */}

            {/* Connect new people */}
            <section className="bg-primary_shade_4 pb-[120px] pt-[80px]">
                <div className="container px-5">
                    <div className="flex w-full items-center mx-auto flex-col-reverse lg:flex-row text-center lg:text-left text-dark_6 gap-10 xl:gap-12">
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
                            <h3 className="text-[40px] text-dark_1 leading-[1.25em] font-bold mb-5">
                                Connect with new people ready for you
                            </h3>
                            <p className="text-dark_2 font-mulish text-xl leading-[1.5em] font-normal mb-7">
                                Our unique search system connects you with
                                people searching for what you can help with -
                                not just people who already know the name of
                                your method.
                            </p>
                            <p className=" text-dark_2 font-mulish text-xl leading-[1.5em] font-normal">
                                Your reviews and verified credentials help them
                                choose you with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Connect new people */}

            {/* Call to action */}
            <section className="relative min-h-[490px] h-full w-full px-5">
                <div className="">
                    <Image
                        alt="Call to action bg image"
                        src={CallToActionBg}
                        placeholder="blur"
                        quality={60}
                        sizes="100vw"
                        fill
                        style={{
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>

                <div className="container">
                    <div className="slide-wrap z-50 absolute h-full flex justify-center max-w-screen-2xl w-full">
                        <div className="text-white flex items-center w-full flex-col-reverse justify-center xl:flex-row gap-10">
                            <div className=" w-full">
                                <div className=" max-w-[630px]">
                                    <h1 className=" text-[40px] leading-[1.25em] text-white font-semibold">
                                        We make reaching new people easy, so you
                                        can focus on helping them.
                                    </h1>
                                    <Link
                                        href={"/"}
                                        className=" text-xl leading-[1.2em] font-semibold tracking-[0.03em] text-white bg-primary rounded-[50px] py-[18px] px-11 inline-flex mt-12 hover:bg-dark_2 transition-colors duration-200"
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
        </>
    );
}
