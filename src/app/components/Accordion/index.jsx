"use client";

import React, { useState } from "react";
import "./style.css";

const accordionData = [
    {
        id: 1,
        question: "What about negative reviews?",
        answer: "Having some negative reviews is actually really helpful for building trust! Research has shown that a product with negative reviews is more trustworthy, receives more engagement, and converts 85% more often than one without. <br><br> In the rare cases that a negative review is unreasonably nasty, misleading, or written by someone who did not work with you, you can submit a complaint, and the review may be removed on a case-by-case basis. If several guides submit legitimate complaints about the same user, all their reviews will be removed and the user banned. You can also respond to reviews, and users can upvote and downvote reviews, bringing the best reviews to the top.",
    },
    {
        id: 2,
        question: "Do you offer custom invoicing?",
        answer: "Yes, we offer custom invoicing for Enterprise customers. Contact our sales team to learn more.",
    },
    {
        id: 3,
        question: "What are the limits for each plan?",
        answer: "Our limits are listed here. Additionally, check out our Fair Use Policy.",
    },
    {
        id: 4,
        question: "I went over my limits. What can I do?",
        answer: "We are glad you are growing and scaling with Vercel! Please contact us to discuss your resource requirements and we can customize a plan for your team.",
    },
    {
        id: 5,
        question: "Can I buy additional bandwidth?",
        answer: "Yes! On top of your included 1,000 GB of Bandwidth on Pro, you can pay as you go for additional Bandwidth at $40 per 100 GB, uncapped. If you have a free Hobby account, you are limited to 100 GB of Bandwidth and cannot purchase additional usage.",
    },
    {
        id: 6,
        question: "I want to transfer a domain name to Vercel. Is there a fee?",
        answer: "Potentially. Transfer fees are dependent on the TLD and the domain renewal fee. The domain-transfer workflow will alert you of fees before initiating transfer.",
    },
];

export default function Accordion() {
    const [isActive, setIsActive] = useState(0);

    function toggleAccordion(index) {
        if (index === isActive) {
            setIsActive(-1);
            return;
        }
        setIsActive(index);
    }

    return (
        <>
            {accordionData.map((item, index) => (
                <div
                    key={item.id}
                    onClick={() => toggleAccordion(index)}
                    className="accordion-wrap  mb-[30px]"
                >
                    <div className="accordion-title flex justify-between border-b border-primary_shade_2 border-opacity-[0.15] pb-[30px] cursor-pointer">
                        <h5
                            className={`text-xl font-semibold text-white leading-[1.5em] ${
                                isActive === index ? "active" : ""
                            }`}
                        >
                            {item.question}
                        </h5>
                        <div
                            className={`${
                                isActive === index ? "rotate-180" : "rotate-0"
                            } transition-all duration-300`}
                        >
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M23.75 11.25L15 20L6.25 11.25"
                                    stroke="#DDB5AB"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div
                        className={`accordion-content text-lg text-dark_6 leading-[1.88em] max-w-[75vw] font-mulish pt-6  ${
                            isActive === index ? "active" : "inactive"
                        }`}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                    </div>
                </div>
            ))}
        </>
    );
}
