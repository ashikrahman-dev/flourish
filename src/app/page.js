import Image from "next/image";
import Slider from "./components/Slider";
import ProfileViewImage from "/public/img/how-it-work-section-img.png";

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
            <h2>Flourish main component</h2>
        </main>
    );
}
