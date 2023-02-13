import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/selector";
import CardStore from "../../components/CardStore/CardStore";
import Slick from "../../components/Slick/Slick";
import Button from "../../components/Button/Button";
import { cartSlide } from "../../data/cart";
import { codeDiscount } from "../../data/cart";
import EmptyProduct from "../../components/EmptyProduct/EmptyProduct";
import { deleteAllCart } from "../../redux/slice/productSlice";
import { useNavigate } from "react-router-dom";
import config from "../../config";

const cx = classNames.bind(styles);
function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const refItem = useRef();
    const cartList = useSelector(selectCart);
    const [code, setCode] = useState("");
    const [totalProduct, setTotalProduct] = useState({
        sumPrice: 0,
        totalDiscount: 0,
        totalPrice: 0,
    });
    const { sumPrice, totalPrice, totalDiscount } = totalProduct;

    const handleCheckCodeDiscount = () => {
        codeDiscount.map((codeDiscount, index) => {
            if (code === codeDiscount) {
                const discount = (sumPrice / 100) * ((index + 1) * 10);
                const total = sumPrice - discount;
                setTotalProduct((pre) => ({
                    ...pre,
                    totalDiscount: discount,
                    totalPrice: total,
                }));
            }
        });
    };

    useEffect(() => {
        const price = cartList.reduce(
            (totalPay, curProduct) =>
                totalPay + curProduct.product_price * curProduct.quantity,
            0
        );

        setTotalProduct((pre) => ({
            ...pre,
            sumPrice: price,
            totalPrice: price,
        }));
    }, [cartList]);

    return (
        <div className={cx("container-fluid gx-0", "wrapper")}>
            {cartList.length > 0 ? (
                <div className={cx("row gx-0", "content")}>
                    <div
                        className={cx(
                            "col-12 col-xxl-8 col-xl-8 col-lg-8",
                            "left-content"
                        )}
                    >
                        <div className={cx("cart-title")}>
                            Bạn có cần thêm ?
                        </div>
                        <Slick itemShow={1} className={cx("cart-slick")}>
                            {cartSlide.map((item) => (
                                <div
                                    ref={refItem}
                                    key={item?.id}
                                    className={cx(
                                        "col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                                        "slick-item"
                                    )}
                                >
                                    <CardStore
                                        data={item}
                                        limit
                                        typeCart
                                    ></CardStore>
                                </div>
                            ))}
                        </Slick>
                        <div className={cx("cart-title-1")}>
                            <span>Giỏ hàng</span>
                        </div>
                        {cartList.map((item, index) => (
                            <div key={index}>
                                <CardStore data={item} typeCart></CardStore>
                                <div
                                    className={cx(
                                        index === cartList.length - 1
                                            ? "black-line"
                                            : "line"
                                    )}
                                />
                            </div>
                        ))}
                        <div className={cx("left-bottom-btn")}>
                            <div className={cx("bottom-item")}>
                                <Button
                                    className={cx("bottom-btn")}
                                    onClick={() => dispatch(deleteAllCart())}
                                >
                                    Xoá hết
                                </Button>
                            </div>
                            <div className={cx("bottom-item")}>
                                <Button
                                    className={cx("bottom-btn")}
                                    onClick={() =>
                                        navigate(config.routes.product)
                                    }
                                >
                                    Quay lại mua hàng
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
                                        onChange={(e) =>
                                            setCode(e.target.value)
                                        }
                                        className={cx(
                                            "form-control",
                                            "code-input"
                                        )}
                                        type="text"
                                        value={code}
                                    />
                                    <Button
                                        className={cx("btn-apply")}
                                        onClick={handleCheckCodeDiscount}
                                    >
                                        Áp dụng
                                    </Button>
                                </div>
                            </div>
                            <div className={cx("group-item", "line")}></div>
                            <div className={cx("group-item", "price-item")}>
                                <div className={cx("group-flex")}>
                                    <h3>Đơn hàng</h3>
                                    <h3>
                                        {sumPrice.toLocaleString("it-IT", {
                                            style: "currency",
                                            currency: "VND",
                                        })}
                                    </h3>
                                </div>
                                <div className={cx("group-flex")}>
                                    <h3>Giảm</h3>
                                    <h3 className={cx("title-discount")}>
                                        {totalDiscount.toLocaleString("it-IT", {
                                            style: "currency",
                                            currency: "VND",
                                        })}
                                    </h3>
                                </div>
                            </div>
                            <div className={cx("group-item", "line")}></div>
                            <div className={cx("group-item", "total-item")}>
                                <div
                                    className={cx("group-flex", "total-price")}
                                >
                                    <h3>Tạm tính</h3>
                                    <h3>
                                        {totalPrice.toLocaleString("it-IT", {
                                            style: "currency",
                                            currency: "VND",
                                        })}
                                    </h3>
                                </div>
                                <Button className={cx("btn-order")}>
                                    Tiếp tục thanh toán
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <EmptyProduct
                    headerTitle="Giỏ hàng của bạn"
                    title="Bạn đang không có sản phẩm nào trong giỏ hàng !"
                />
            )}
        </div>
    );
}

export default Cart;
