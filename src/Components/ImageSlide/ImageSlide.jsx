import { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./ImageSlide.module.scss";
import classNames from "classnames/bind";
import config from "../../config";

import { selectProductDetail } from "../../redux/selector";
import { useSelector } from "react-redux";
import Slick from "../Slick/Slick";

const cx = classNames.bind(styles);
function ImageSlide({ className }) {
    let refImageSize = useRef(null);
    const productDetail = useSelector(selectProductDetail);
    const [imageCurrent, setImageCurrent] = useState();

    useEffect(() => {
        if (productDetail.product_images?.length > 0) {
            setImageCurrent(productDetail?.product_images[0].image);
        }
    }, [productDetail]);
    //Image current change
    const onImageClick = (image) => {
        setImageCurrent(image);
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

            <Slick>
                {productDetail.product_images?.map((item) => (
                    <div
                        key={item.id}
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
            </Slick>
        </div>
    );
}
export default ImageSlide;
