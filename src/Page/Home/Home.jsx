import { useEffect, useState } from "react";
import * as productService from "../../service/productService";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import config from "../../config";
import * as productReducer from "../../redux/slice/productSlice";

import Card from "../../Components/Card/Card";
import classNames from "classnames/bind";
import SlickSlide from "../../Components/SlickSlide/SlickSlide";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    const getNewProducts = async () => {
        const productRes = await productService.getProduct({ limit: 8 });
        setProducts(productRes.data);
    };

    useEffect(() => {
        getNewProducts();
    }, []);

    const onCardClick = (id) => {
        dispatch(productReducer.addProductId(id));
        navigate(config.routes.productDetail);
    };

    return (
        <>
            <SlickSlide></SlickSlide>
            <div id="wrapper" className={cx("container-fluid gx-0", "wrapper")}>
                <section>
                    <div className={cx("section-title")}>
                        <h2>
                            <span>SẢN PHẨM MỚI</span>
                        </h2>
                    </div>
                    <div className={cx("row", "product-grids")}>
                        {products.map((product, index) => (
                            <Card
                                key={product.id}
                                data={product}
                                onClick={() => onCardClick(product.id)}
                                className={cx(
                                    "col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-4",
                                    "card-item"
                                )}
                            ></Card>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
