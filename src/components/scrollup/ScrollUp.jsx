import React, { useEffect } from 'react';
import './scrollup.css';
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (window.scrollY >= 560) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button className="scrollup" onClick={scrollToTop}>
            <HiOutlineArrowSmUp className="scrollup__icon" />
        </button>
    );
};

export default ScrollUp;
