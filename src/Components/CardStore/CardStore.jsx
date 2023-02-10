import styles from "./CardStore.module.scss";
import classNames from "classnames/bind";
import config from "../../config/";
import { sizeList, qualityList } from "../../data/productDetail";
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
} from "../../redux/slice/productSlice";

import { addBreadCrumb } from "../../redux/slice/globalSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useDispatch, useSelector } from "react-redux";
import { selectWishList } from "../../redux/selector";

const cx = classNames.bind(styles);
function CardStore({ data, limit, cart, className }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishList = useSelector(selectWishList);
    const typeAdd = "add";
    const typeAddWishList = "add";

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

    const handleAddProduct = (product, typeProduct) => {
        if (typeProduct === typeAdd) {
            dispatch(addCart(product));
            navigate(config.routes.cart);
        } else {
            dispatch(addWishList(product));
        }
    };

    const handleDeleteProduct = (product) => {
        if (cart) {
            dispatch(deleteCart(product));
        } else {
            dispatch(addWishList(product));
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
                            onClick={() => handleAddProduct(data, typeAdd)}
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
                                    currentValue={data.size}
                                    className={cx("select")}
                                    data={sizeList}
                                ></SelectGrid>
                            </div>
                            <div className={cx("col-6", "card-store-select")}>
                                <h3>Số lượng</h3>
                                <SelectGrid
                                    currentValue={data.quantity}
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
                            {data?.product_price.toLocaleString("it-IT", {
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
                                    data,
                                    cart ? addCart : typeAddWishList
                                )
                            }
                        >
                            {cart ? (
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
