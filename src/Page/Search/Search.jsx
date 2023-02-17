import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import * as productService from "../../service/productService";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import { useSelector } from "react-redux";
import { selectSearchKey } from "../../redux/selector";

const cx = classNames.bind(styles);
function Search() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const search = useSelector(selectSearchKey);
    const getNewProducts = async () => {
        const productRes = await productService.getProductFind({
            search,
        });
        setProducts(productRes.data);
    };

    useEffect(() => {
        getNewProducts();
    }, [search]);

    return (
        <div className={cx("container-fluid", "wrapper")}>
            <h1>{`TÌM THẤY ${products.length} KẾT QUẢ CHO '${search}'`}</h1>
            <div className={cx("black-line")}></div>
            <div className={cx("product-container")}>
                {products.map((product) => (
                    <Card
                        data={product}
                        className={cx(
                            "col-6 col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                            "card-item"
                        )}
                    ></Card>
                ))}
            </div>

            <Button
                className={cx("btn-back")}
                onClick={() => navigate(config.routes.product)}
            >
                Xem thêm sản phẩm
            </Button>
        </div>
    );
}

export default Search;
