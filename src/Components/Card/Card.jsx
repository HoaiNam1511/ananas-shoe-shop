import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import config from "../../config/url";
import Button from "../Button/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const cx = classNames.bind(styles);
function Cart({ className, data, onClick }) {
    return (
        <div className={cx("wrapper", className)}>
            <div className={cx("card-custom")} onClick={onClick}>
                <div className={cx("card-image")}>
                    <img
                        className={cx("image")}
                        src={
                            config.URL_STATIC_FILE +
                            data.product_images[0]?.image
                        }
                        onMouseOver={(e) =>
                            (e.currentTarget.src =
                                config.URL_STATIC_FILE +
                                data.product_images[1]?.image)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.src =
                                config.URL_STATIC_FILE +
                                data.product_images[0]?.image)
                        }
                        alt="demo"
                    />

                    <div className={cx("btn-container")}>
                        <Button className={cx("btn-buy")}>MUA NGAY</Button>
                        <FavoriteBorderIcon className={cx("btn-favorite")} />
                    </div>
                </div>
                <div className={cx("description")}>
                    <h3 className={cx("type")}>
                        {data.categorys_title.status_title}
                    </h3>
                    <h3 className={cx("des-item", "name")}>
                        {data.product_name +
                            " - " +
                            data.categorys_title.style_title}
                    </h3>
                    <h3 className={cx("des-item", "color")}>
                        {data.categorys_title.material_title}
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
