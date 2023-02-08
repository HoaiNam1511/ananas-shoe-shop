import styles from "./CardStore.module.scss";
import classNames from "classnames/bind";
import config from "../../config/";
import { sizeList, qualityList } from "../../data/productDetail";
import SelectGrid from "../SelectGrid/SelectGrid";
import Button from "../Button/Button";
import iconCartButton from "../../asset/images/global/cart_ana.png";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const cx = classNames.bind(styles);
function CardStore({ data }) {
    return (
        <div className={cx("wrapper", "row gx-0")}>
            <div
                className={cx(
                    "col-12 col-xxl-8 col-xl-8 col-lg-8 col-md-8",
                    "left-content"
                )}
            >
                <div className={cx("image-container")}>
                    <img
                        className={cx("image")}
                        src={
                            config.url.URL_STATIC_FILE +
                            data.product_images[0].image
                        }
                        alt=""
                    />
                </div>
                <div className={cx("info")}>
                    <div className={cx("name")}>{data.product_name}</div>
                    <div className={cx("price")}>
                        <strong>Giá: </strong>
                        {data.product_price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </div>
                    <div className={cx("row gx-0")}>
                        <div className={cx("col-6")}>
                            <h3>Size</h3>
                            <SelectGrid
                                className={cx("select")}
                                data={sizeList}
                            ></SelectGrid>
                        </div>
                        <div className={cx("col-6")}>
                            <h3>Số lượng</h3>
                            <SelectGrid
                                className={cx("select")}
                                data={qualityList}
                            ></SelectGrid>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={cx(
                    "col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                    "right-content"
                )}
            >
                <div className={cx("item-1")}>
                    <div className={cx("price-item-1")}>
                        {data.product_price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </div>
                    <div className={cx("status")}>Còn hàng</div>
                </div>
                <div className={cx("item-2")}>
                    <Button className={cx("button", "button-cart")}>
                        <img src={iconCartButton} alt="" />
                    </Button>
                    <Button className={cx("button", "button-delete")}>
                        <DeleteOutlineIcon className={cx("icon")} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default CardStore;
