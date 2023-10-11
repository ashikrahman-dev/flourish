import Image from "next/image";
import Slider from "./components/Slider";
import ProfileViewImage from "/public/img/how-it-work-section-img.png";
import CounterUpSec from "/public/img/counterup-section-img.svg";

export default function Home() {
    return (
        <main className="">
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
                                    <div className=" text-white text-[60px] xl:text-[96px] font-bold max-w-[322px] w-full text-center">
                                        88%
                                    </div>
                                    <div className="w-full text-left">
                                        People trust online reviews on
                                        third-party platforms as much as
                                        personal recommendations1
                                    </div>
                                </li>
                                <li className=" flex border-b border-primary_shade_2 pb-[30px] border-opacity-[0.15] items-center gap-10 xl:gap-20">
                                    <div className=" text-white text-[60px] xl:text-[96px] font-bold max-w-[322px] w-full text-center">
                                        +380%
                                    </div>
                                    <div className="w-full text-left">
                                        Having 5+ reviews improves sales by 380%
                                        for high-end products3
                                    </div>
                                </li>
                                <li className=" flex border-b border-primary_shade_2 pb-[30px] border-opacity-[0.15] items-center gap-10 xl:gap-20">
                                    <div className=" text-white text-[60px] xl:text-[96px] font-bold max-w-[322px] w-full text-center">
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
        </main>
    );
}
