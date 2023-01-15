import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Menu from "./Menu/Menu";
import Navbar from "./Navbar/Navbar";

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx("header")}>
            <Menu></Menu>
            <Navbar></Navbar>
        </div>
    );
}

export default Header;
