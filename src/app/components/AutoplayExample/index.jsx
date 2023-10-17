"use client";

import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import { generateSlides } from "../utils";

import slide_1_bg from "/public/img/slide-1-bg.jpg";
import slide_2_bg from "/public/img/slide-2-bg.jpg";
import slide_3_bg from "/public/img/slide-3-bg.jpg";
import Image from "next/image";

export default function AutoplayExample() {
    const options = {
        type: "loop",
        gap: "1rem",
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: "55rem",
    };

    return (
        <div className="mt-8">
            <Splide
                options={options}
                aria-labelledby="autoplay-example-heading"
                hasTrack={false}
            >
                <div style={{ position: "relative" }}>
                    <SplideTrack>
                        <SplideSlide>
                            <Image src={slide_1_bg} alt="Image" />
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={slide_2_bg} alt="Image" />
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={slide_3_bg} alt="Image" />
                        </SplideSlide>
                    </SplideTrack>
                </div>

                <div className="splide__progress">
                    <div className="splide__progress__bar" />
                </div>

                <button className="splide__toggle">
                    <span className="splide__toggle__play">Play</span>
                    <span className="splide__toggle__pause">Pause</span>
                </button>
            </Splide>
        </div>
    );
}
