import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import config from "../../config/";
import Button from "../Button/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addProductId,
    addWishList,
    addBreadCrumb,
} from "../../redux/slice/productSlice";

import { selectWishList } from "../../redux/selector";
import { sizeList, quantityList } from "../../data/productDetail";

const cx = classNames.bind(styles);
function Cart({ className, data }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wishList = useSelector(selectWishList);
    const [selectGrid, setSelectGrid] = useState({
        size: sizeList[0],
        quantity: quantityList[0],
    });
    const handleCardClick = (id) => {
        dispatch(addProductId(id));
        dispatch(
            addBreadCrumb([
                "Trang chủ",
                data.categorys_title.line_title,
                data.product_name,
            ])
        );
        navigate(config.routes.productDetail);
    };

    const handleAddWishList = (product) => {
        const obj = Object.preventExtensions(product);
        const newObj = {
            ...obj,
            size: selectGrid.size,
            quantity: selectGrid.quantity,
        };
        dispatch(addWishList(newObj));
    };

    return (
        <div className={cx("wrapper", className)}>
            <div className={cx("card-custom")}>
                <div className={cx("card-image")}>
                    <img
                        className={cx("image")}
                        src={
                            config.url.URL_STATIC_FILE +
                            data.product_images[0]?.image
                        }
                        onClick={() => handleCardClick(data?.id)}
                        onMouseOver={(e) =>
                            (e.currentTarget.src =
                                config.url.URL_STATIC_FILE +
                                data.product_images[1]?.image)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.src =
                                config.url.URL_STATIC_FILE +
                                data.product_images[0]?.image)
                        }
                        alt="demo"
                    />

                    <div className={cx("btn-container")}>
                        <Button className={cx("btn-buy")}>MUA NGAY</Button>
                        {wishList.find((item) => item.id === data.id) ? (
                            <FavoriteIcon
                                className={cx("btn-favorite", "active")}
                                onClick={() => handleAddWishList(data)}
                            />
                        ) : (
                            <FavoriteBorderIcon
                                className={cx("btn-favorite")}
                                onClick={() => handleAddWishList(data)}
                            />
                        )}
                    </div>
                </div>
                <div
                    className={cx("description")}
                    onClick={() => handleCardClick(data?.id)}
                >
                    <h3 className={cx("type")}>
                        {data.categorys_title.status_title}
                    </h3>
                    <h3 className={cx("des-item", "name")}>
                        {data.product_name.toLowerCase() +
                            " - " +
                            data.categorys_title.style_title.toLowerCase()}
                    </h3>
                    <h3 className={cx("des-item", "color")}>
                        {data.categorys_title.material_title.toLowerCase()}
                    </h3>
                    <h3 className={cx("des-item", "price")}>
                        {data.product_price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Cart;
