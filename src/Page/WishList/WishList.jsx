import { useDispatch } from "react-redux";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { addBreadCrumb } from "../../redux/slice/productSlice";
import classNames from "classnames/bind";
import config from "../../config";
import styles from "./WishList.module.scss";
import CardStore from "../../Components/CardStore/CardStore";
import { selectWishListProduct } from "../../redux/selector";
import { useSelect } from "@mui/base";

const cx = classNames.bind(styles);
function WishList() {
    // const wishList = useSelect(selectWishListProduct);

    // const dispatch = useDispatch();
    // dispatch(addBreadCrumb(wishList.length));

    return (
        <div className={cx("container-fluid gx-0", "wrapper")}>
            {/* <Breadcrumb className={cx("wishlist-breadcrumb")}>
                sản phẩm
            </Breadcrumb>
            <div>
                {wishList.map((item, index) => (
                    <>
                        <CardStore data={item}></CardStore>
                        <div
                            className={cx(
                                index === wishList.length - 1
                                    ? "black-line"
                                    : "line"
                            )}
                        />
                    </>
                ))}
            </div> */}
        </div>
    );
}

export default WishList;
