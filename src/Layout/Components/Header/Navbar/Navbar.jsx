import { Link, NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import config from "../../../../Config";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

import logo from "../../../../asset/icon/Logo_Ananas_Header.svg";
import imageDiscoverYou from "../../../../asset/icon/DiscoverYOU.svg";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { useState } from "react";

const cx = classNames.bind(styles);
function Navbar() {
    const [showDropMenu, setShowDropMenu] = useState(false);

    // const handeOnMouseOver = (e) => {
    //     const timeoutId = setTimeout(() => {
    //         setShowDropMenu(!showDropMenu);
    //     }, 700);
    //     return () => {
    //         clearTimeout(timeoutId);
    //     };
    // };

    // const handleOnMouseLeave = (e) => {
    //     setShowDropMenu(!showDropMenu);
    // };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("navbar")}>
                <div className={cx("brand")}>
                    <img src={logo} className={cx("logo")} alt="logo" />
                </div>

                <div className={cx("navbar-nav")}>
                    <ul className={cx("nav")}>
                        <li className={cx("dropdown")}>
                            <NavLink
                                to={config.routes.product}
                                className={cx("dropdown-link")}
                                // onMouseOverCapture={handeOnMouseOver}
                                // onMouseLeave={handleOnMouseLeave}
                            >
                                <span>SẢN PHẨM</span>
                                <KeyboardArrowDownIcon
                                    className={cx("dropdown-icon")}
                                />
                                <DropDownMenu
                                    menu1={true}
                                    show={showDropMenu}
                                    className={cx("dropdown-menu")}
                                ></DropDownMenu>
                            </NavLink>
                        </li>

                        <li className={cx("dropdown")}>
                            <NavLink
                                to={config.routes.product}
                                className={cx("dropdown-link")}
                            >
                                <span>NAM</span>
                                <KeyboardArrowDownIcon
                                    className={cx("dropdown-icon")}
                                />
                                <DropDownMenu
                                    show={showDropMenu}
                                    className={cx("dropdown-menu")}
                                ></DropDownMenu>
                            </NavLink>
                        </li>

                        <li className={cx("dropdown")}>
                            <NavLink
                                to={config.routes.product}
                                className={cx("dropdown-link")}
                            >
                                <span>NỮ</span>
                                <KeyboardArrowDownIcon
                                    className={cx("dropdown-icon")}
                                />
                                <DropDownMenu
                                    show={showDropMenu}
                                    className={cx("dropdown-menu")}
                                ></DropDownMenu>
                            </NavLink>
                        </li>

                        <li className={cx("dropdown")}>
                            <NavLink
                                to={config.routes.product}
                                className={cx("dropdown-link")}
                            >
                                <span>SALE OFF</span>
                            </NavLink>
                        </li>

                        <li className={cx("dropdown")}>
                            <NavLink
                                to={config.routes.product}
                                className={cx("dropdown-link")}
                            >
                                <img
                                    className={cx("dropdown-image")}
                                    src={imageDiscoverYou}
                                    alt=""
                                />
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={cx("navbar-search")}>
                    <div className={cx("form-control")}>
                        <div className={cx("icon")}>
                            <SearchIcon className={cx("icon-search")} />
                        </div>
                        <input
                            className={cx("search-input")}
                            type="text"
                            placeholder="Tìm kiếm "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
