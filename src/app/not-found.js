import Image from "next/image";
import Link from "next/link";
import notFoundImage from "/public/img/not-found-image.svg";

export default function NotFound() {
    return (
        <>
            <div className="login-signup-min-screen py-[60px] px-5 bg-dark_6">
                <div className="container">
                    <div className="flex gap-10 md:gap-10 lg:gap-4 xl:gap-20 items-center justify-center">
                        <div className="w-full md:w-2/3 flex justify-center flex-col align-middle items-center">
                            <Image
                                src={notFoundImage}
                                alt="404 Not found"
                                sizes="100vw"
                                quality={100}
                                style={{
                                    width: "100%",
                                    maxWidth: "726px",
                                    height: "auto",
                                }}
                            />

                            <h2 className="text-[24px] md:text-[30px] lg:xl:text-[36px] xl:text-[40px] text-dark_1 leading-[1.25em] font-bold mb-5 mt-10">
                                {`Oops! It looks like you're lost.`}
                            </h2>
                            <p className="font-mulish text-dark_3 text-base leading-[1.87em] font-normal max-w-[600px] text-center mb-5">
                                We’re sorry, but the page you are looking for
                                could not be found. It may have been temporarily
                                unavailable.
                            </p>
                            <Link
                                href="/"
                                className="text-base md:text-lg lg:text-xl leading-[1.2em] font-semibold tracking-[0.03em] text-white bg-primary rounded-[50px] py-[6px] sm:py-2 lg:py-[14px] px-6 md:px-8 lg:px-11 inline-flex border-2 border-primary hover:bg-[transparent] hover:border-primary hover:text-primary transition-colors duration-200 justify-center font-noto_serif disabled:bg-dark_5 disabled:text-dark_4"
                            >
                                Go Back Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
