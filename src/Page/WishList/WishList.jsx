import config from "../../config";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import classNames from "classnames/bind";
import styles from "./WishList.module.scss";
import CardStore from "../../components/CardStore/CardStore";
import { selectWishList } from "../../redux/selector";
import { useEffect } from "react";
import { addBreadCrumb } from "../../redux/slice/productSlice";
import EmptyProduct from "../../components/EmptyProduct/EmptyProduct";

const cx = classNames.bind(styles);
function WishList() {
    const dispatch = useDispatch();
    const wishList = useSelector(selectWishList);

    useEffect(() => {
        dispatch(addBreadCrumb([wishList.length]));
    }, [wishList]);

    return (
        <div className={cx("container-fluid gx-0", "wrapper")}>
            {wishList.length > 0 ? (
                <>
                    <Breadcrumb className={cx("wishlist-breadcrumb")}>
                        sản phẩm
                    </Breadcrumb>
                    <div>
                        {wishList.map((item, index) => (
                            <div key={item?.id}>
                                <CardStore
                                    className={cx("wishlist-card")}
                                    data={item}
                                ></CardStore>
                                <div
                                    className={cx(
                                        index === wishList.length - 1
                                            ? "black-line"
                                            : "line"
                                    )}
                                />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <EmptyProduct
                    headerTitle="Danh mục yêu thích"
                    title="Bạn không thích sản phẩm nào !"
                />
            )}
        </div>
    );
}

export default WishList;
