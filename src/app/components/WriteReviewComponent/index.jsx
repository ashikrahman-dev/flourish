"use client";

import React, { useState } from "react";

//for Name field validation
const validateText = (text) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(text);
};

//Textarea validation
const validateTextarea = (textarea) => {
    const isWithinCharacterLimit = textarea.length <= 499;
    return isWithinCharacterLimit;
};

export default function WriteReviewComponent() {
    //State for Name field(Text)
    const [text, setText] = useState("");
    const [isTextValid, setIsTextValid] = useState(true);

    //Textarea validation.
    const [textarea, setTextarea] = useState("");
    const [isTextareaValid, setIsTextareaValid] = useState(true);

    //Name field(Text) validation
    const handleTextChange = (e) => {
        const textValue = e.target.value;
        setText(textValue);
        if (textValue.length < 3) {
            setIsTextValid(false);
        } else {
            setIsTextValid(validateText(textValue));
        }
    };

    //Textarea field(Text) validation
    const handleTextareaChange = (e) => {
        setTextarea(e.target.value);
        setIsTextareaValid(validateTextarea(e.target.value));
    };

    return (
        <>
            <form>
                <div className="bg-white rounded-xl p-[30px] flex flex-col gap-[30px]">
                    <div>
                        <h2 className="text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.25em] font-bold text-dark_1 mb-5">
                            Write a review
                        </h2>
                        <p className=" text-dark_3 text-base md:text-lg lg:text-xl leading-[1.5em] font-mulish max-w-[790px]">
                            Your first-hand experiences help others choose the
                            right person to work with. Thanks for contributing!
                        </p>
                    </div>
                    <div>
                        <h5 className="text-dark_1 text-base md:text-lg lg:text-xl leading-[1.5em] font-semibold">
                            What did you do with Luis De Florio?
                        </h5>
                    </div>
                    <div>
                        <h5 className="text-dark_1 text-base md:text-lg lg:text-xl leading-[1.5em] font-semibold mb-1">
                            For how long and in what format?
                        </h5>
                        <p className=" text-dark_3 text-lg leading-[1.88em] font-mulish italic font-normal mb-5">
                            Examples: three months with 12 one-on-one sessions,
                            two-day retreat, four group classes...
                        </p>

                        <input
                            autoComplete="off"
                            required
                            minLength={2}
                            maxLength={150}
                            type="text"
                            value={text}
                            onChange={handleTextChange}
                            name="firstName"
                            placeholder="Type here.."
                            className={`py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 ${
                                isTextValid
                                    ? "border-dark_6"
                                    : "border-status_danger"
                            }`}
                        />
                    </div>
                    <div>
                        <h5 className="text-dark_1 text-base md:text-lg lg:text-xl leading-[1.5em] font-semibold mb-5">
                            Would you recommend Luis De Florio to others?
                        </h5>

                        <input
                            autoComplete="off"
                            required
                            minLength={2}
                            maxLength={150}
                            type="text"
                            value={text}
                            onChange={handleTextChange}
                            name="firstName"
                            placeholder="Choice an option"
                            className={`py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 ${
                                isTextValid
                                    ? "border-dark_6"
                                    : "border-status_danger"
                            }`}
                        />
                    </div>
                    <div>
                        <h4 className="text-dark_1 text-xl md:text-[22px] lg:text-[26px] leading-[1.5em] font-bold mb-5">
                            Your review
                        </h4>

                        <textarea
                            name="commentText"
                            placeholder="Type hare"
                            minLength={10}
                            maxLength={500}
                            value={textarea}
                            onChange={handleTextareaChange}
                            className={`py-5 px-6 rounded-xl h-[120px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 resize-none ${
                                isTextareaValid
                                    ? "border-dark_6"
                                    : "border-status_danger"
                            }`}
                        />
                    </div>
                    <div>
                        <h5 className="text-dark_1 text-base md:text-lg lg:text-xl leading-[1.5em] font-semibold mb-5">
                            Who would most benefit from Luis De Florio's
                            guidance?
                        </h5>

                        <textarea
                            name="commentText"
                            placeholder="Type hare"
                            minLength={10}
                            maxLength={500}
                            value={textarea}
                            onChange={handleTextareaChange}
                            className={`py-5 px-6 rounded-xl h-[120px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 resize-none ${
                                isTextareaValid
                                    ? "border-dark_6"
                                    : "border-status_danger"
                            }`}
                        />
                    </div>

                    <div className="">
                        <button
                            type="submit"
                            // disabled={loading}
                            disabled={!isTextValid}
                            className="text-base md:text-lg lg:text-xl leading-[1.2em] font-semibold tracking-[0.03em] text-white bg-primary rounded-[50px] py-[10px] sm:py-3 md:py-3 lg:py-[18px] px-6 md:px-8 lg:px-11  hover:bg-dark_2 transition-colors duration-200 justify-center font-noto_serif disabled:bg-dark_5 disabled:text-dark_4"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
