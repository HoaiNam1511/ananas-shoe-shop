import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import config from "../../../../config";

const cx = classNames.bind(styles);

function Menu({ className }) {
    let id = 0;
    const listMenu = [
        {
            id: id++,
            title: "Tra cứu đơn hàng",
            icon: LocalShippingIcon,
            to: config.routes.searchOrder,
        },
        {
            id: id++,
            title: " Tìm cửa hàng",
            icon: LocationOnIcon,
            to: config.routes.stores,
        },
        {
            id: id++,
            title: "Yêu thích",
            icon: FavoriteIcon,
            to: config.routes.wishlist,
        },
        {
            id: id++,
            title: "Giỏ hàng",
            icon: LocalMallIcon,
            to: config.routes.cart,
        },
    ];
    return (
        <div className={cx("wrapper", className)}>
            <ul className={cx("menu")}>
                {listMenu.map((menu) => {
                    const Icon = menu.icon;
                    return (
                        <li className={cx("menu-item")} key={menu.id}>
                            <Icon className={cx("icon")} />
                            <Link className={cx("link")} to={menu.to}>
                                {menu.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Menu;
