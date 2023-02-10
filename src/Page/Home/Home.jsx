import { useEffect, useState } from "react";
import * as productService from "../../service/productService";
import Card from "../../Components/Card/Card";
import classNames from "classnames/bind";
import SlickSlide from "../../Components/SlickSlide/SlickSlide";
import styles from "./Home.module.scss";

import { selectWishList } from "../../redux/selector";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);
function Home() {
    const [products, setProducts] = useState([]);
    const wishList = useSelector(selectWishList);
    const getNewProducts = async () => {
        const productRes = await productService.getProduct({ limit: 8 });
        setProducts(productRes.data);
    };

    useEffect(() => {
        getNewProducts();
    }, []);

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
                                //onClick={() => onCardClick(product.id)}
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
