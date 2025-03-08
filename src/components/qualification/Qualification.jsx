import React, { useState } from "react";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
import { useInView } from 'react-intersection-observer';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    // Create refs for each qualification data item
    const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.3, triggerOnce: false });
    const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.3, triggerOnce: false });
    const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.3, triggerOnce: false });
    const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.3, triggerOnce: false });
    const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.3, triggerOnce: false });
    const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.3, triggerOnce: false });
    const { ref: ref7, inView: inView7 } = useInView({ threshold: 0.3, triggerOnce: false });

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
                        <div ref={ref1} className="qualification__data">
                            <div className={`left-content ${inView1 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">KD Ambani Reliance Foundation School</h3>
                                <span className="qualification__subtitle">Education</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2019
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${inView1 ? 'active' : ''}`}></span>
                                <span className={`qualification__line ${inView1 ? 'active' : ''}`}></span>
                            </div>
                        </div>
                        <div ref={ref2} className="qualification__data">
                            <div></div>
                            <div>
                                <span className={`qualification__rounder ${inView2 ? 'active' : ''}`}></span>
                                <span className={`qualification__line ${inView2 ? 'active' : ''}`}></span>
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
                        <div ref={ref3} className="qualification__data">
                            <div className={`left-content ${inView3 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">Siksha 'O' Anusandhan University, SOA</h3>
                                <span className="qualification__subtitle">B.Tech (CSE)</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2022-2026
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${inView3 ? 'active' : ''}`}></span>
                                <span className={`qualification__line ${inView3 ? 'active' : ''}`}></span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleState === 2
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                        }
                    >
                        <div ref={ref4} className="qualification__data">
                            <div className={`left-content ${inView4 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">Front-end Design</h3>
                                <span className="qualification__subtitle">RENDERVERSE.in</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2022-2023
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${inView4 ? 'active' : ''}`}></span>
                                <span className={`qualification__line ${inView4 ? 'active' : ''}`}></span>
                            </div>
                        </div>
                        <div ref={ref5} className="qualification__data">
                            <div></div>
                            <div>
                                <span className={`qualification__rounder ${inView5 ? 'active' : ''}`}></span>
                                <span className={`qualification__line ${inView5 ? 'active' : ''}`}></span>
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
                        <div ref={ref6} className="qualification__data">
                            <div className={`left-content ${inView6 ? 'animate-in' : ''}`}>
                                <h3 className="qualification__title">Internship</h3>
                                <span className="qualification__subtitle">Springboard Infosys</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    08/2024 – 12/2024
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${inView6 ? 'active' : ''}`}></span>
                                <span className={`qualification__line ${inView6 ? 'active' : ''}`}></span>
                            </div>
                        </div>
                        <div ref={ref7} className="qualification__data">
                            <div></div>
                            <div>
                                <span className={`qualification__rounder ${inView7 ? 'active' : ''}`}></span>
                                <span className={`qualification__line ${inView7 ? 'active' : ''}`}></span>
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