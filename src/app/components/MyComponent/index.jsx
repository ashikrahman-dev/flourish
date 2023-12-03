"use client";

import { useEffect, useRef } from "react";

export default function MyComponent({ onClose }) {
    const useClickOutside = (ref, callback) => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };
        useEffect(() => {
            document.addEventListener("click", handleClick);
            return () => {
                document.removeEventListener("click", handleClick);
            };
        });
    };

    const ClickBox = ({ onClickOutside }) => {
        const clickRef = useRef();
        useClickOutside(clickRef, onClickOutside);
        return (
            <div
                className="click-box"
                ref={clickRef}
                style={{
                    border: "2px dashed orangered",
                    height: 200,
                    width: 400,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <p>Click out of this element</p>
            </div>
        );
    };

    const ref = useRef(null);
    useClickOutside(ref, onClose);

    return (
        <div ref={ref}>
            <ClickBox onClickOutside={() => alert("click outside")} />
        </div>
    );
}
