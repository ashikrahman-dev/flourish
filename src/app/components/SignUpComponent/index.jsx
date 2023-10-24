"use client";

import React, { useState } from "react";
//for Name field validation
const validateText = (text) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(text);
};
//for Email field validation
const validateEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};

//Textarea validation
const validateTextarea = (textarea) => {
    const isWithinCharacterLimit = textarea.length <= 499;
    return isWithinCharacterLimit;
};

export default function SignUpComponent() {
    //State for Name field(Text)
    const [text, setText] = useState("");
    const [isTextValid, setIsTextValid] = useState(true);

    //State for email field
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);

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

    //Email validation
    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsEmailValid(validateEmail(emailValue));
    };

    //Textarea validation

    const handleTextareaChange = (e) => {
        setTextarea(e.target.value);
        setIsTextareaValid(validateTextarea(e.target.value));
    };

    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            fName: String(event.target.firstName.value),
            lName: String(event.target.lastName.value),
            email: String(event.target.email.value),
            checkbox: String(event.target.checkbox.value),
            url: String(event.target.websiteUrl.value),
            comment: String(event.target.commentText.value),
        };

        const response = await fetch("/api/contact.js", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("Message sent successfully.");
            setLoading(false);

            //Reset the form...
            // event.target.firstName.value = "";
            // event.target.lastName.value = "";
            // event.target.email.value = "";
            // event.target.checkbox.value = "";
            // event.target.websiteUrl.value = "";
            // event.target.commentText.value = "";
        }
        if (!response.ok) {
            console.log("Error sending message.");
            setLoading(false);
        }

        // console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="font-mulish flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6">
                        <input
                            autoComplete="off"
                            required
                            minLength={2}
                            maxLength={150}
                            type="text"
                            value={text}
                            onChange={handleTextChange}
                            name="firstName"
                            placeholder="Guide's first name"
                            className={`py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 ${
                                isTextValid
                                    ? "border-dark_6"
                                    : "border-status_danger"
                            }`}
                        />
                        <input
                            autoComplete="off"
                            type="text"
                            name="lastName"
                            placeholder="Guide's last name"
                            className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                        />
                    </div>
                    <div className="">
                        <input
                            autoComplete="off"
                            required
                            minLength={4}
                            maxLength={150}
                            value={email}
                            onChange={handleEmailChange}
                            type="email"
                            name="email"
                            placeholder="Guide's email"
                            className={`py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4 ${
                                isEmailValid
                                    ? "border-dark_6"
                                    : "border-status_danger"
                            }`}
                        />
                        <label className=" text-sm leading-[1.7em] text-dark_3 mt-[10px] flex gap-[10px]">
                            <input
                                autoComplete="off"
                                type="checkbox"
                                name="checkbox"
                                className="w-5 h-5 text-[#596B36] appearance-none border border-[#596B36] checked:bg-[#596B36] checked:border-0 rounded-md bg-white"
                            />
                            {`I don't know their email`}
                        </label>
                    </div>
                    <div className="">
                        <input
                            autoComplete="off"
                            type="url"
                            name="websiteUrl"
                            className="py-5 px-6 rounded-xl h-[60px] w-full text-base font-medium leading-5 border-2 border-dark_6 text-dark_2 outline-none focus:border-dark_4 transition-all duration-150 placeholder:text-dark_4"
                            placeholder="Guide's website"
                        />
                    </div>
                    <div className="">
                        <p className=" text-xs text-dark_2 leading-[1.33em] uppercase font-bold mb-[10px]">
                            In a few words, what does this guide offer?
                        </p>
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
                            disabled={
                                !(
                                    (isTextValid == isEmailValid) ==
                                    isTextareaValid
                                ) == true
                            }
                            className="text-base md:text-lg lg:text-xl leading-[1.2em] font-semibold tracking-[0.03em] text-white bg-primary rounded-[50px] py-[10px] sm:py-3 md:py-3 lg:py-[18px] px-6 md:px-8 lg:px-11 inline-flex  hover:bg-dark_2 transition-colors duration-200 w-full justify-center font-noto_serif disabled:bg-dark_5 disabled:text-dark_4"
                        >
                            Add profile
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
