import styles from "./Card.module.scss";
import classNames from "classnames/bind";

import imageDemo from "../../asset/images/demo/Pro_A6T012_2-500x500.jpg";
import imageDemo1 from "../../asset/images/demo/Pro_A6T012_1-500x500.jpg";

import Button from "../Button/Button";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const cx = classNames.bind(styles);
function Cart({ className }) {
    return (
        <div className={cx("wrapper", className)}>
            <div className={cx("card-custom")}>
                <div className={cx("card-image")}>
                    <img
                        className={cx("image")}
                        onMouseOver={(e) => (e.currentTarget.src = imageDemo1)}
                        onMouseOut={(e) => (e.currentTarget.src = imageDemo)}
                        src={imageDemo}
                        alt="demo"
                    />
                    <div className={cx("btn-container")}>
                        <Button className={cx("btn-buy")}>MUA NGAY</Button>
                        <FavoriteBorderIcon className={cx("btn-favorite")} />
                    </div>
                </div>
                <div className={cx("description")}>
                    <h3 className={cx("type")}>New Arrival</h3>
                    <h3 className={cx("des-item", "name")}>Track 6 I.S.E.E</h3>
                    <h3 className={cx("des-item", "color")}>
                        Pure White/Icy Blue
                    </h3>
                    <h3 className={cx("des-item", "price")}>1.490.000 VND</h3>
                </div>
            </div>
        </div>
    );
}

export default Cart;
