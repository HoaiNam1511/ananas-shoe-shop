import styles from "./CardStore.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import config from "../../config/";
import SelectGrid from "../SelectGrid/SelectGrid";
import Button from "../Button/Button";
import iconCartButton from "../../asset/images/global/cart_ana.png";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import {
    addWishList,
    addProductId,
    addCart,
    deleteCart,
    addBreadCrumb,
    deleteWishList,
    updateCart,
    updateWishList,
} from "../../redux/slice/productSlice";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useDispatch, useSelector } from "react-redux";
import { selectWishList } from "../../redux/selector";

import { quantityList, sizeList } from "../../data/productDetail";

const cx = classNames.bind(styles);
function CardStore({ data, limit, typeCart, className }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishList = useSelector(selectWishList);
    const [selectGrid, setSelectGrid] = useState({
        size: data?.size || sizeList[0],
        quantity: data?.quantity || quantityList[0],
    });
    const typeAddCart = "add";
    const typeAddWishList = "wishlist";

    const handleCardClick = (id) => {
        dispatch(
            addBreadCrumb([
                "Trang chủ",
                data.categorys_title.line_title,
                data.product_name,
            ])
        );
        dispatch(addProductId(id));
        navigate(config.routes.productDetail);
    };

    const handleAddSizeQuantity = ({ name, value }) => {
        const obj = Object.preventExtensions(data);
        let newObj;
        if (name === "") {
            newObj = {
                ...obj,
                size: selectGrid.size,
                quantity: selectGrid.quantity,
            };
        } else {
            newObj = {
                ...obj,
                [name]: value,
            };
        }
        return newObj;
    };

    const handleAddProduct = (typeProduct) => {
        const name = "";
        const value = "";
        if (typeProduct === typeAddCart) {
            const newObj = handleAddSizeQuantity({ name, value });
            dispatch(addCart(newObj));
            navigate(config.routes.cart);
        } else {
            const newObj = handleAddSizeQuantity({ name, value });
            dispatch(addWishList(newObj));
        }
    };

    const handleSelectGridChange = (name, value) => {
        setSelectGrid({ ...selectGrid, [name]: value });
        if (typeCart) {
            const newObj = handleAddSizeQuantity({ name, value });
            dispatch(updateCart(newObj));
        } else {
            const newObj = handleAddSizeQuantity({ name, value });
            dispatch(updateWishList(newObj));
        }
    };

    const handleDeleteProduct = (product) => {
        if (typeCart) {
            dispatch(deleteCart(product));
        } else {
            dispatch(deleteWishList(product));
        }
    };

    return (
        <div className={cx("wrapper", "row gx-0", className)}>
            <div
                className={cx(
                    "col-12 col-xxl-8 col-xl-8 col-lg-8 col-md-8",
                    "left-content"
                )}
            >
                <div className={cx("image-container")}>
                    <img
                        onClick={() => handleCardClick(data.id)}
                        className={cx("image", { "image-limit": limit })}
                        src={
                            config.url.URL_STATIC_FILE +
                            data?.product_images[0].image
                        }
                        alt=""
                    />
                </div>
                <div className={cx("info")}>
                    <div
                        className={cx("name", { "name-limit": limit })}
                        onClick={() => handleCardClick(data?.id)}
                    >
                        {data?.product_name}
                    </div>
                    <div className={cx("price", { "price-limit": limit })}>
                        <strong>Giá: </strong>
                        {data?.product_price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </div>
                    {limit && (
                        <Button
                            onClick={() => handleAddProduct(typeAddCart)}
                            className={cx("button")}
                        >
                            Thêm
                        </Button>
                    )}
                    {!limit && (
                        <div className={cx("row gx-0")}>
                            <div className={cx("col-6", "card-store-select")}>
                                <h3>Size</h3>
                                <SelectGrid
                                    name="size"
                                    dropClick={handleSelectGridChange}
                                    currentValue={data?.size}
                                    className={cx("select")}
                                    data={sizeList}
                                ></SelectGrid>
                            </div>
                            <div className={cx("col-6", "card-store-select")}>
                                <h3>Số lượng</h3>
                                <SelectGrid
                                    name="quantity"
                                    dropClick={handleSelectGridChange}
                                    currentValue={data?.quantity}
                                    className={cx("select")}
                                ></SelectGrid>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {!limit && (
                <div
                    className={cx(
                        "col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                        "right-content"
                    )}
                >
                    <div className={cx("item-1")}>
                        <div className={cx("price-item-1")}>
                            {(
                                data?.quantity * data?.product_price
                            ).toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </div>
                        <div className={cx("status")}>Còn hàng</div>
                    </div>

                    <div className={cx("item-2")}>
                        <Button
                            className={cx("button", "button-cart")}
                            onClick={() =>
                                handleAddProduct(
                                    typeCart ? typeAddWishList : typeAddCart
                                )
                            }
                        >
                            {typeCart ? (
                                wishList.find((item) => item.id === data.id) ? (
                                    <FavoriteIcon
                                        className={cx("btn-favorite", "active")}
                                    ></FavoriteIcon>
                                ) : (
                                    <FavoriteBorderIcon
                                        className={cx("btn-favorite")}
                                    ></FavoriteBorderIcon>
                                )
                            ) : (
                                <img src={iconCartButton} alt="" />
                            )}
                        </Button>
                        <Button
                            className={cx("button", "button-delete")}
                            onClick={() => handleDeleteProduct(data)}
                        >
                            <DeleteOutlineIcon className={cx("icon")} />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default CardStore;
