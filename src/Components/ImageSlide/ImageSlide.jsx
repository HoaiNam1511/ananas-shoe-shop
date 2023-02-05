import { useEffect, useState, useRef } from "react";
import styles from "./ImageSlide.module.scss";
import classNames from "classnames/bind";
import config from "../../config";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { selectProductDetail } from "../../redux/selector";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);
function ImageSlide({ className }) {
    const previous = "pre";
    const next = "next";

    const refImageSize = useRef();

    const productDetail = useSelector(selectProductDetail);
    const [imageCurrent, setImageCurrent] = useState();
    // const [currentPosition, setCurrentPosition] = useState(0);
    // const [currentIndex, setCurrentIndex] = useState(1);
    const [imageSlideChange, setImageSlideChange] = useState({
        currentPosition: 0,
        currentIndex: 1,
    });
    const [imageSlide, setImageSlide] = useState({
        imageWidth: 162,
        imageSlideShow: 4,
        maxSlide: 0,
        totalInt: 0,
        totalFloat: 0,
    });

    const { currentPosition, currentIndex } = imageSlideChange;
    const { imageWidth, imageSlideShow, maxSlide, totalInt, totalFloat } =
        imageSlide;

    const detectResize = () => {
        const currentImageSize = refImageSize.current?.offsetWidth;
        let imageSlideShowValue = 0;
        if (window.innerWidth >= 576 && window.innerWidth < 768) {
            imageSlideShowValue = 3;
        } else if (window.innerWidth < 576) {
            imageSlideShowValue = 2;
        } else {
            imageSlideShowValue = 4;
        }

        setImageSlide({
            ...imageSlide,
            imageSlideShow: imageSlideShowValue,
            imageWidth: currentImageSize,
            maxSlide:
                (productDetail.product_images.length - imageSlideShowValue) *
                currentImageSize,
            totalInt: productDetail.product_images.length / imageSlideShowValue,
            totalFloat:
                productDetail.product_images.length % imageSlideShowValue,
        });
    };
    //Update the total
    useEffect(() => {
        detectResize();
    }, [productDetail]);

    useEffect(() => {
        window.addEventListener("resize", detectResize);
        return () => {
            window.removeEventListener("resize", detectResize);
        };
    }, []);

    //Current image slide
    useEffect(() => {
        if (productDetail.product_images?.length > 0) {
            setImageCurrent(productDetail?.product_images[0].image);
        }
    }, [productDetail]);
    //Image current change
    const onImageClick = (image) => {
        setImageCurrent(image);
    };

    const onArrowBtnClick = (navigationValue) => {
        if (navigationValue === previous && currentPosition > 0) {
            if (currentPosition >= imageWidth * imageSlideShow) {
                setImageSlideChange((pre) => ({
                    ...pre,
                    currentPosition:
                        pre.currentPosition - imageWidth * imageSlideShow,
                    currentIndex: pre.currentIndex - 1,
                }));
            } else {
                setImageSlideChange((pre) => ({
                    ...pre,
                    currentPosition:
                        pre.currentPosition + totalFloat * -imageWidth,
                }));
            }
        } else if (navigationValue === next && currentPosition < maxSlide) {
            if (currentIndex === Math.floor(totalInt)) {
                setImageSlideChange((pre) => ({
                    ...pre,
                    currentPosition:
                        pre.currentPosition + totalFloat * imageWidth,
                }));
            } else {
                setImageSlideChange((pre) => ({
                    ...pre,
                    currentPosition:
                        pre.currentPosition + imageWidth * imageSlideShow,
                    currentIndex: pre.currentIndex + 1,
                }));
            }
        }
    };

    return (
        <div className={cx("wrapper", className)}>
            <div className={cx("main-image")}>
                <img
                    className={cx("image")}
                    src={config.url.URL_STATIC_FILE + imageCurrent}
                    alt="current"
                />
            </div>
            <div className={cx("row gx-0", "slick-slide")}>
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
                    {productDetail.product_images?.map((item, index) => (
                        <div
                            ref={refImageSize}
                            className={cx(
                                "col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4",
                                "image-item"
                            )}
                        >
                            <img
                                onClick={() => onImageClick(item.image)}
                                className={cx("image-slide")}
                                src={config.url.URL_STATIC_FILE + item.image}
                                alt="current"
                            />
                        </div>
                    ))}
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
export default ImageSlide;
