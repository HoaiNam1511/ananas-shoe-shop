import { useEffect, useState, useRef } from "react";
import { selectProductDetail } from "../../redux/selector";
import { useSelector } from "react-redux";
import styles from "./Slick.module.scss";
import classNames from "classnames/bind";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const cx = classNames.bind(styles);

function Slick({ className, children }) {
    const previous = "pre";
    const next = "next";

    const productDetail = useSelector(selectProductDetail);
    const [itemSlickChange, setItemSlickChange] = useState({
        currentPosition: 0,
        currentIndex: 1,
    });

    const [itemSlick, setItemSlick] = useState({
        itemSlickWidth: 162,
        itemSlickShow: 1,
        maxSlick: 0,
        totalInt: 0,
        totalFloat: 0,
    });

    const { currentPosition, currentIndex } = itemSlickChange;
    const { itemSlickWidth, itemSlickShow, maxSlick, totalInt, totalFloat } =
        itemSlick;

    const detectResize = () => {
        const currentImageSize = children[0]?.ref.current.offsetWidth;

        let itemSlickShowValue = 0;
        if (window.innerWidth >= 576 && window.innerWidth < 768) {
            itemSlickShowValue = 3;
        } else if (window.innerWidth < 576) {
            itemSlickShowValue = 2;
        } else {
            itemSlickShowValue = 4;
        }
        setItemSlick({
            itemSlickShow: itemSlickShowValue,
            itemSlickWidth: currentImageSize,
            maxSlick:
                (children?.length - itemSlickShowValue) * currentImageSize,
            totalInt: Math.floor(children?.length / itemSlickShowValue),
            totalFloat: children?.length % itemSlickShowValue,
        });
    };

    const onArrowBtnClick = (navigationValue) => {
        if (navigationValue === previous && currentPosition > 0) {
            if (currentPosition >= itemSlickWidth * itemSlickShow) {
                setItemSlickChange((pre) => ({
                    ...pre,
                    currentPosition:
                        pre.currentPosition - itemSlickWidth * itemSlickShow,
                    currentIndex: pre.currentIndex - 1,
                }));
            } else {
                setItemSlickChange((pre) => ({
                    ...pre,
                    currentPosition:
                        pre.currentPosition + totalFloat * -itemSlickWidth,
                }));
            }
        } else if (navigationValue === next && currentPosition < maxSlick) {
            if (currentIndex === totalInt) {
                setItemSlickChange((pre) => ({
                    ...pre,
                    currentPosition:
                        pre.currentPosition + totalFloat * itemSlickWidth,
                }));
            } else {
                setItemSlickChange((pre) => ({
                    ...pre,
                    currentPosition:
                        pre.currentPosition + itemSlickWidth * itemSlickShow,
                    currentIndex: pre.currentIndex + 1,
                }));
            }
        }
    };

    //Update the total
    useEffect(() => {
        setItemSlickChange({ currentPosition: 0, currentIndex: 1 });
        detectResize();
    }, [productDetail, children]);

    useEffect(() => {
        window.addEventListener("resize", detectResize);
        return () => {
            window.removeEventListener("resize", detectResize);
        };
    }, []);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("row gx-0", "slick-slide", className)}>
                <button
                    onClick={() => onArrowBtnClick(previous)}
                    className={cx("btn-arrow", "btn-left")}
                >
                    <KeyboardArrowLeftIcon
                        className={cx("icon")}
                    ></KeyboardArrowLeftIcon>
                </button>
                <div
                    className={cx("slick-list")}
                    style={{
                        transform: `translate3d(${-currentPosition}px, 0, 0)`,
                    }}
                >
                    {children}
                </div>
                <button
                    onClick={() => onArrowBtnClick(next)}
                    className={cx("btn-arrow", "btn-right")}
                >
                    <KeyboardArrowRightIcon
                        className={cx("icon")}
                    ></KeyboardArrowRightIcon>
                </button>
            </div>
        </div>
    );
}

export default Slick;
