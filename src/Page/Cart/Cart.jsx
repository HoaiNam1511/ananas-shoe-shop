import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/selector";
import CardStore from "../../Components/CardStore/CardStore";
import Slick from "../../Components/Slick/Slick";
import Button from "../../Components/Button/Button";
import { cartSlide } from "../../data/cart";

const cx = classNames.bind(styles);
function Cart() {
    const dispatch = useDispatch();
    const refItem = useRef();
    const cart = useSelector(selectCart);

    return (
        <div className={cx("container-fluid gx-0", "wrapper")}>
            <div className={cx("row gx-0", "content")}>
                <div
                    className={cx(
                        "col-12 col-xxl-8 col-xl-8 col-lg-8",
                        "left-content"
                    )}
                >
                    <div className={cx("cart-title")}>Bạn có cần thêm ?</div>
                    <Slick itemShow={1} className={cx("cart-slick")}>
                        {cartSlide.map((item) => (
                            <div
                                ref={refItem}
                                key={item.id}
                                className={cx(
                                    "col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                                    "slick-item"
                                )}
                            >
                                <CardStore data={item} limit cart></CardStore>
                            </div>
                        ))}
                    </Slick>
                    <div className={cx("cart-title-1")}>
                        <span>Giỏ hàng</span>
                    </div>
                    {cart.map((item, index) => (
                        <div key={index}>
                            <CardStore data={item} cart></CardStore>
                            <div
                                className={cx(
                                    index === cart.length - 1
                                        ? "black-line"
                                        : "line"
                                )}
                            />
                        </div>
                    ))}
                    <div className={cx("left-bottom-btn")}>
                        <div className={cx("bottom-item")}>
                            <Button className={cx("bottom-btn")}>
                                Xoá hết
                            </Button>
                        </div>
                        <div className={cx("bottom-item")}>
                            <Button className={cx("bottom-btn")}>
                                Quay lại
                            </Button>
                        </div>
                    </div>
                </div>
                <div
                    className={cx(
                        "col-12 col-xxl-4 col-xl-4 col-lg-4",
                        "right-content"
                    )}
                >
                    <div className={cx("list-group")}>
                        <div className={cx("cart-title", "right-title")}>
                            Đơn hàng
                        </div>
                        <div className={cx("group-item", "code-item")}>
                            <h3>Nhập mã khuyến mãi</h3>
                            <div className={cx("group-flex", "form-group")}>
                                <input
                                    className={cx("form-control", "code-input")}
                                    type="text"
                                />
                                <Button className={cx("btn-apply")}>
                                    Áp dụng
                                </Button>
                            </div>
                        </div>
                        <div className={cx("group-item", "line")}></div>
                        <div className={cx("group-item", "price-item")}>
                            <div className={cx("group-flex")}>
                                <h3>Đơn hàng</h3>
                                <h3>1000VND</h3>
                            </div>
                            <div className={cx("group-flex")}>
                                <h3>Giảm</h3>
                                <h3 className={cx("title-discount")}>0 VND</h3>
                            </div>
                        </div>
                        <div className={cx("group-item", "line")}></div>
                        <div className={cx("group-item", "total-item")}>
                            <div className={cx("group-flex", "total-price")}>
                                <h3>Tạm tính</h3>
                                <h3>1000 VND</h3>
                            </div>
                            <Button className={cx("btn-order")}>
                                Tiếp tục thanh toán
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
