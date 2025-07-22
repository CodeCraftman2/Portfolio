import React, { useState, useEffect } from "react";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
import { useInView } from 'react-intersection-observer';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const [scrollProgress, setScrollProgress] = useState({});

    const toggleTab = (index) => {
        setToggleState(index);
    };

    // Create refs for each qualification data item with more granular thresholds
    const { ref: ref1, inView: inView1 } = useInView({ 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
        triggerOnce: false 
    });
    const { ref: ref2, inView: inView2 } = useInView({ 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
        triggerOnce: false 
    });
    const { ref: ref3, inView: inView3 } = useInView({ 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
        triggerOnce: false 
    });
    const { ref: ref4, inView: inView4 } = useInView({ 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
        triggerOnce: false 
    });
    const { ref: ref5, inView: inView5 } = useInView({ 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
        triggerOnce: false 
    });
    const { ref: ref6, inView: inView6 } = useInView({ 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
        triggerOnce: false 
    });
    const { ref: ref7, inView: inView7 } = useInView({ 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
        triggerOnce: false 
    });

    // Track scroll progress for each timeline item
    useEffect(() => {
        const handleScroll = () => {
            const timelineItems = [ref1, ref2, ref3, ref4, ref5, ref6, ref7];
            const newProgress = {};

            timelineItems.forEach((ref, index) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const itemHeight = rect.height;
                    
                    // Calculate how much of the item is visible
                    const visibleTop = Math.max(0, windowHeight - rect.top);
                    const visibleBottom = Math.max(0, windowHeight - rect.bottom);
                    const visibleHeight = Math.min(visibleTop, itemHeight) - Math.max(0, visibleBottom);
                    
                    // Calculate progress (0 to 1) for dot movement
                    const progress = Math.max(0, Math.min(1, visibleHeight / itemHeight));
                    newProgress[index + 1] = progress;
                    
                    // Apply scroll-based transform to dots and lines
                    const dot = ref.current.querySelector('.qualification__rounder');
                    const line = ref.current.querySelector('.qualification__line');
                    
                    if (dot && progress > 0) {
                        const translateY = progress * 100; // Move from 0% to 100% of line height
                        dot.style.transform = `translateX(-50%) scale(1) translateY(${translateY}%)`;
                    }
                    
                    if (line && progress > 0) {
                        const lineHeight = progress * 100; // Line fills from 0% to 100%
                        line.style.height = `${lineHeight}%`;
                    }
                }
            });

            setScrollProgress(newProgress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [ref1, ref2, ref3, ref4, ref5, ref6, ref7]);

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1
                            ? "qualification__button button--flex qualification__active"
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <HiOutlineAcademicCap className="qualification__icon" />
                        Education
                    </div>
                    <div
                        className={toggleState === 2
                            ? "qualification__button button--flex qualification__active"
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <HiOutlineBriefcase className="qualification__icon" />
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={toggleState === 1
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                        }
                    >
                        <div ref={ref1} className={`qualification__data ${inView1 ? 'animate-in' : ''}`}>
                            <div className={`left-content ${inView1 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">KD Ambani Reliance Foundation School</h3>
                                <span className="qualification__subtitle">Education</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2019
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${inView1 ? 'active' : ''} ${scrollProgress[1] > 0 ? 'scrolling' : ''}`}></span>
                                <span className={`qualification__line ${inView1 ? 'active' : ''} ${scrollProgress[1] > 0 ? 'scrolling' : ''}`}></span>
                            </div>
                        </div>
                        <div ref={ref2} className={`qualification__data ${inView2 ? 'animate-in' : ''}`}>
                            <div></div>
                            <div>
                                <span className={`qualification__rounder ${inView2 ? 'active' : ''} ${scrollProgress[2] > 0 ? 'scrolling' : ''}`}></span>
                                <span className={`qualification__line ${inView2 ? 'active' : ''} ${scrollProgress[2] > 0 ? 'scrolling' : ''}`}></span>
                            </div>
                            <div className={`right-content ${inView2 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">Swami Keshwanand School, Sikar</h3>
                                <span className="qualification__subtitle">Higher Secondary Education</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2020-2022
                                </div>
                            </div>
                        </div>
                        <div ref={ref3} className={`qualification__data ${inView3 ? 'animate-in' : ''}`}>
                            <div className={`left-content ${inView3 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">Siksha 'O' Anusandhan University, SOA</h3>
                                <span className="qualification__subtitle">B.Tech (CSE)</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2022-2026
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${inView3 ? 'active' : ''} ${scrollProgress[3] > 0 ? 'scrolling' : ''}`}></span>
                                <span className={`qualification__line ${inView3 ? 'active' : ''} ${scrollProgress[3] > 0 ? 'scrolling' : ''}`}></span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleState === 2
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                        }
                    >
                        <div ref={ref4} className={`qualification__data ${inView4 ? 'animate-in' : ''}`}>
                            <div className={`left-content ${inView4 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">Front-end Design</h3>
                                <span className="qualification__subtitle">RENDERVERSE.in</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2022-2023
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${inView4 ? 'active' : ''} ${scrollProgress[4] > 0 ? 'scrolling' : ''}`}></span>
                                <span className={`qualification__line ${inView4 ? 'active' : ''} ${scrollProgress[4] > 0 ? 'scrolling' : ''}`}></span>
                            </div>
                        </div>
                        <div ref={ref5} className={`qualification__data ${inView5 ? 'animate-in' : ''}`}>
                            <div></div>
                            <div>
                                <span className={`qualification__rounder ${inView5 ? 'active' : ''} ${scrollProgress[5] > 0 ? 'scrolling' : ''}`}></span>
                                <span className={`qualification__line ${inView5 ? 'active' : ''} ${scrollProgress[5] > 0 ? 'scrolling' : ''}`}></span>
                            </div>
                            <div className={`right-content ${inView5 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">Back-end Intern</h3>
                                <span className="qualification__subtitle">Mobogage Private Limited</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    05/2024 – 07/2024
                                </div>
                            </div>
                        </div>
                        <div ref={ref6} className={`qualification__data ${inView6 ? 'animate-in' : ''}`}>
                            <div className={`left-content ${inView6 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">Internship</h3>
                                <span className="qualification__subtitle">Springboard Infosys</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    08/2024 – 12/2024
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${inView6 ? 'active' : ''} ${scrollProgress[6] > 0 ? 'scrolling' : ''}`}></span>
                                <span className={`qualification__line ${inView6 ? 'active' : ''} ${scrollProgress[6] > 0 ? 'scrolling' : ''}`}></span>
                            </div>
                        </div>
                        <div ref={ref7} className={`qualification__data ${inView7 ? 'animate-in' : ''}`}>
                            <div></div>
                            <div>
                                <span className={`qualification__rounder ${inView7 ? 'active' : ''} ${scrollProgress[7] > 0 ? 'scrolling' : ''}`}></span>
                                <span className={`qualification__line ${inView7 ? 'active' : ''} ${scrollProgress[7] > 0 ? 'scrolling' : ''}`}></span>
                            </div>
                            <div className={`right-content ${inView7 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">Android Development with .NET & C#</h3>
                                <span className="qualification__subtitle">Freelance - Remote</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2025-Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;