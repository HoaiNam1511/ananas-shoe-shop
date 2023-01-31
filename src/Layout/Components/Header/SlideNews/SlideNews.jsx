import { useRef, useState } from "react";
import classNames from "classnames/bind";
import style from "./SlideNews.module.scss";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useEffect } from "react";

const cx = classNames.bind(style);
function SlideNew() {
    let id = 0;
    let preValue = "previous";
    let nextValue = "next";
    const [currentPosition, setCurrentPosition] = useState(0);
    const timeoutRef = useRef();
    const slickList = [
        { id: id++, title: "HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH" },
        { id: id++, title: "BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE" },
        { id: id++, title: "FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !" },
        { id: id++, title: "BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN" },
    ];

    const handleChangeSlick = (value = nextValue) => {
        if (value === preValue) {
            //If current position is first will change to last position
            currentPosition === 0
                ? setCurrentPosition(slickList.length - 1)
                : setCurrentPosition((prePosition) => prePosition - 1);
        } else if (value === nextValue) {
            //If current position is last will change to first position
            currentPosition === slickList.length - 1
                ? setCurrentPosition(0)
                : setCurrentPosition((prePosition) => prePosition + 1);
        }
    };

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentPosition((prevPosition) =>
                    prevPosition === slickList.length - 1 ? 0 : prevPosition + 1
                ),
            2000
        );

        return () => {
            resetTimeout();
        };
    }, [currentPosition]);

    return (
        <div className={cx("wrapper")}>
            <button
                className={cx("slick-arrow")}
                onClick={() => handleChangeSlick(preValue)}
            >
                <KeyboardArrowLeftIcon className={cx("slick-icon")} />
            </button>
            <div className={cx("slick")}>
                <div
                    className={cx("slick-list")}
                    style={{
                        transform:
                            currentPosition === slickList.length
                                ? `translate3d(${100}%, 0, 0)`
                                : `translate3d(${
                                      -currentPosition * 100
                                  }%, 0, 0)`,
                    }}
                >
                    {slickList.map((item) => (
                        <span key={item.id} className={cx("slick-item")}>
                            {item.title}
                        </span>
                    ))}
                </div>
            </div>
            <button
                className={cx("slick-arrow")}
                onClick={() => handleChangeSlick(nextValue)}
            >
                <KeyboardArrowRightIcon className={cx("slick-icon")} />
            </button>
        </div>
    );
}

export default SlideNew;
