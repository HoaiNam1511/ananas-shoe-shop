import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Menu from "./Menu/Menu";
import Navbar from "./Navbar/Navbar";
import SlideNew from "./SlideNews/SlideNews";

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx("header")}>
            <Menu className={cx("header-menu")}></Menu>
            <Navbar></Navbar>
            <SlideNew></SlideNew>
        </div>
    );
}

export default Header;
