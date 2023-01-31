import { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./SlickSlide.module.scss";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import slide1 from "../../asset/images/slide/SlideImg1.jpg";
import slide2 from "../../asset/images/slide/SlideImg2.jpg";

const cx = classNames.bind(styles);
function SlickSlide({ data }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef();
    const nextValue = "next";
    const previousValue = "pre";

    const slides = [
        {
            image: slide1,
        },
        {
            image: slide2,
        },
    ];

    const handleSelectCurrentSlide = (index) => {
        setCurrentSlide(index);
    };

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentSlide((preSlide) =>
                    preSlide === slides.length - 1 ? 0 : preSlide + 1
                ),
            30000
        );

        return () => {
            resetTimeout();
        };
    }, [currentSlide]);

    const handleSlideChange = (value) => {
        if (value === previousValue) {
            //If current position is first will change to last position
            currentSlide === 0
                ? setCurrentSlide(slides.length - 1)
                : setCurrentSlide((preSlide) => preSlide - 1);
        } else if (value === nextValue) {
            //If current position is last will change to first position
            currentSlide === slides.length - 1
                ? setCurrentSlide(0)
                : setCurrentSlide((preSlide) => preSlide + 1);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("slide-container")}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={cx("slide")}
                        style={{
                            transform:
                                currentSlide === slides.length
                                    ? `translate3d(${100}%, 0, 0)`
                                    : `translate3d(${
                                          -currentSlide * 100
                                      }%, 0, 0)`,
                        }}
                    >
                        <img
                            className={cx("slide-image")}
                            src={slide.image}
                            alt=""
                        ></img>
                    </div>
                ))}

                <button
                    onClick={() => handleSlideChange(previousValue)}
                    className={cx("slide-btn", "btn-pre")}
                >
                    <KeyboardArrowLeftIcon className={cx("arrow-icon")} />
                </button>
                <button
                    onClick={() => handleSlideChange(nextValue)}
                    className={cx("slide-btn", "btn-next")}
                >
                    <KeyboardArrowRightIcon className={cx("arrow-icon")} />
                </button>
                <div className={cx("slick-dots")}>
                    {slides.map((slide, index) => (
                        <button
                            className={cx("slide-button", {
                                active: currentSlide === index,
                            })}
                            onClick={() => handleSelectCurrentSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SlickSlide;
