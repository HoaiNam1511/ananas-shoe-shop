import config from "../../config";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import classNames from "classnames/bind";
import styles from "./WishList.module.scss";
import CardStore from "../../Components/CardStore/CardStore";
import { selectWishList } from "../../redux/selector";
import { useEffect } from "react";
import { addBreadCrumb } from "../../redux/slice/productSlice";

const cx = classNames.bind(styles);
function WishList() {
    const dispatch = useDispatch();
    const wishList = useSelector(selectWishList);

    useEffect(() => {
        dispatch(addBreadCrumb([wishList.length]));
    }, [wishList]);

    return (
        <div className={cx("container-fluid gx-0", "wrapper")}>
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
        </div>
    );
}

export default WishList;
