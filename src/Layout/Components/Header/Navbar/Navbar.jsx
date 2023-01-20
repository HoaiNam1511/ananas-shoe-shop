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
import MenuIcon from "@mui/icons-material/Menu";
import { OtherHouses } from "@mui/icons-material";

const cx = classNames.bind(styles);
function Navbar() {
    let id = 0;
    const [showDropMenu, setShowDropMenu] = useState(false);

    const navList = [
        {
            id: id++,
            title: "SẢN PHẨM",
            children: {
                header: "SẢN PHẨM",
                data: [
                    {
                        id: id++,
                        title: "CHO NAM",
                    },
                    {
                        id: id++,
                        title: "CHO NỮ",
                    },
                    {
                        id: id++,
                        title: "OUTLET SALE",
                    },
                    {
                        id: id++,
                        title: "THỜI TRANG VÀ PHỤ KIỆN",
                    },
                ],
            },
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
            title: "DiscoverYOU",
        },
    ];
    const [history, setHistory] = useState([{ data: navList }]);
    const current = history[history.length - 1];
    const handleShowMenu = () => {
        setShowDropMenu((pre) => !pre);
    };

    return (
        <div className={cx("container-fluid px-0", "wrapper")}>
            <div className={cx("row g-0", "navbar")}>
                <div
                    className={cx(
                        "col-2 col-xl-1 col-lg-2 col-md-2 col-sm-2",
                        "brand"
                    )}
                >
                    <img src={logo} className={cx("logo")} alt="logo" />
                </div>

                <div
                    className={cx("col-xl-8 col-lg-10", "navbar-nav", {
                        show: showDropMenu,
                    })}
                >
                    <ul className={cx("nav-list")}>
                        {current.data.map((item, index) => {
                            return (
                                <li className={cx("dropdown")}>
                                    <NavLink
                                        to={config.routes.product}
                                        className={cx("dropdown-link")}
                                    >
                                        {index < current.data.length - 1 && (
                                            <span
                                                className={cx("dropdown-title")}
                                                onClick={(preHistory) =>
                                                    setHistory((preHistory) => [
                                                        ...preHistory,
                                                        item.children,
                                                    ])
                                                }
                                            >
                                                {item.title}
                                            </span>
                                        )}
                                        {index === current.length - 1 && (
                                            <>
                                                <span
                                                    className={cx(
                                                        "d-block d-xxl-none d-xl-none d-lg-none",
                                                        "dropdown-title",
                                                        "title-hide"
                                                    )}
                                                >
                                                    {item.title}
                                                </span>
                                                <img
                                                    className={cx(
                                                        "d-none d-xxl-block d-xl-block d-lg-block",
                                                        "dropdown-image"
                                                    )}
                                                    src={imageDiscoverYou}
                                                    alt=""
                                                />
                                            </>
                                        )}
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
                                    </NavLink>
                                    {index === 0 && (
                                        <DropDownMenu
                                            menu1
                                            className={cx("dropdown-menu")}
                                        />
                                    )}
                                    {index > 0 && index < 3 && (
                                        <DropDownMenu
                                            className={cx("dropdown-menu")}
                                        />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div
                    className={cx(
                        "col-8 col-xl-3 col-lg-12 col-md-8 col-sm-8",
                        "navbar-search"
                    )}
                >
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

                <button
                    onClick={handleShowMenu}
                    className={cx("col-2 col-md-2 col-sm-2", "btn-menu")}
                >
                    <MenuIcon className={cx("menu-icon")} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
