import { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import config from "../../../../Config";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

import logo from "../../../../asset/icon/Logo_Ananas_Header.svg";
import imageDiscoverYou from "../../../../asset/icon/DiscoverYOU.svg";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const cx = classNames.bind(styles);
function Navbar() {
    const [showDropMenu, setShowDropMenu] = useState(false);
    let id = 0;

    const navList = [
        {
            id: id++,
            title: "SẢN PHẨM",
        },
        {
            id: id++,
            title: "NAM",
        },

        {
            id: id++,
            title: "NỮ",
        },
        {
            id: id++,
            title: "SALE OFF",
        },
        {
            id: id++,
            title: "",
        },
    ];

    return (
        <div className={cx("wrapper")}>
            <div className={cx("navbar")}>
                <div className={cx("brand")}>
                    <img src={logo} className={cx("logo")} alt="logo" />
                </div>

                <div className={cx("navbar-nav")}>
                    <ul className={cx("nav")}>
                        {navList.map((item, index) => {
                            return (
                                <li className={cx("dropdown")}>
                                    <NavLink
                                        to={config.routes.product}
                                        className={cx("dropdown-link")}
                                    >
                                        <span>{item.title}</span>
                                        {/* Only show arrow with index < 3 */}
                                        {index < 3 && (
                                            <>
                                                <KeyboardArrowDownIcon
                                                    className={cx(
                                                        "dropdown-icon"
                                                    )}
                                                />
                                                <div
                                                    className={cx("arrow")}
                                                ></div>
                                            </>
                                        )}
                                        {/* Last position of navList */}
                                        {index === navList.length - 1 && (
                                            <img
                                                className={cx("dropdown-image")}
                                                src={imageDiscoverYou}
                                                alt=""
                                            />
                                        )}
                                    </NavLink>
                                    {index === 0 && (
                                        <DropDownMenu
                                            menu1
                                            show={showDropMenu}
                                            className={cx("dropdown-menu")}
                                        />
                                    )}
                                    {index > 0 && index < 3 && (
                                        <DropDownMenu
                                            show={showDropMenu}
                                            className={cx("dropdown-menu")}
                                        />
                                    )}
                                </li>
                            );
                        })}
                        {/* <li className={cx("dropdown")}>
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
                                <div className={cx("arrow")}></div>
                            </NavLink>

                            <DropDownMenu
                                menu1
                                show={showDropMenu}
                                className={cx("dropdown-menu")}
                            />
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
                                <div className={cx("arrow")}></div>
                            </NavLink>
                            <DropDownMenu
                                show={showDropMenu}
                                className={cx("dropdown-menu")}
                            ></DropDownMenu>
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
                                <div className={cx("arrow")}></div>
                            </NavLink>
                            <DropDownMenu
                                show={showDropMenu}
                                className={cx("dropdown-menu")}
                            ></DropDownMenu>
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
                        </li> */}
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
