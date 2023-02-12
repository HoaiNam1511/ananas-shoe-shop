import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import PanelGroup from "../../components/PanelGroup/PanelGroup";
import styles from "./Product.module.scss";
import * as categoryService from "../../service/categoryService";
import imageProduct from "../../asset/images/global/desktop_productlist.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { sidebarHeader, sidebar1, sidebar3 } from "../../data/product";
import Button from "../../components/Button/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const cx = classNames.bind(styles);
function Product() {
    const [categorys, setCategorys] = useState([]);
    const [showPageGroup, setShowPageGroup] = useState([]);
    const [sidebarChose, setSidebarChose] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const getCategory = async () => {
        const res = await categoryService.getCategoryClient();
        setCategorys([...res.data, ...sidebar3]);
    };

    const onSidebarClick = (index) => {
        if (!showPageGroup.includes(index)) {
            setShowPageGroup([...showPageGroup, index]);
        } else {
            setShowPageGroup(showPageGroup.filter((item) => item !== index));
        }
    };

    const onSidebarChoseClick = (value) => {
        if (!sidebarChose.includes(value)) {
            setSidebarChose([...sidebarChose, value]);
        } else {
            setSidebarChose(sidebarChose.filter((item) => item !== value));
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <div className={cx("container-fluid gx-0", "wrapper")}>
            <div className={cx("row gx-0", "content")}>
                <div
                    className={cx(
                        "col-12 col-xxl-3 col-xl-3 col-lg-3",
                        "left-content"
                    )}
                >
                    {/* Sidebar header */}
                    <div className={cx("sidebar", "sidebar-header")}>
                        {sidebarHeader.map((item, index) => (
                            <div key={index} className={cx("header-title")}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                    <div className={cx("line-black-solid")}></div>

                    {/* Group 1 */}
                    <div>
                        <ul className={cx("sidebar-group", "group-1")}>
                            {sidebar1.map((item, index) => (
                                <li
                                    key={index}
                                    className={cx("sidebar-item", {
                                        "active-header": sidebarChose.includes(
                                            item.title
                                        ),
                                    })}
                                    onClick={() =>
                                        onSidebarChoseClick(item.title)
                                    }
                                >
                                    {item.title}
                                    {sidebarChose.includes(item.title) && (
                                        <CloseIcon
                                            className={cx(
                                                "d-none d-lg-block",
                                                "icon-sidebar"
                                            )}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className={cx("line-black-solid", "line-hidden")}
                    ></div>
                    {/* Button filter mobile */}
                    <div className={cx("filter")}>
                        <Button
                            className={cx("filter-btn")}
                            onClick={() => setShowSidebar(!showSidebar)}
                        >
                            Chọn
                            <KeyboardArrowDownIcon
                                className={cx({ rotate180: showSidebar })}
                            />
                        </Button>
                        <Button className={cx("filter-btn")}>
                            120 Sản phẩm
                        </Button>
                    </div>
                    {/* Sidebar all */}
                    <div
                        className={cx("sidebar-content", {
                            "show-sidebar": showSidebar,
                        })}
                    >
                        {categorys.map((category, index) => (
                            <PanelGroup
                                className={cx("sidebar")}
                                header={category.category_group_title}
                                show={showPageGroup.includes(index)}
                                onClick={() => onSidebarClick(index)}
                            >
                                <ul
                                    className={cx("sidebar-group")}
                                    key={category.id}
                                >
                                    {category.category_group_client.map(
                                        (item) => (
                                            <li
                                                key={item.id}
                                                className={cx("sidebar-item", {
                                                    active: sidebarChose.includes(
                                                        item.category_title
                                                    ),
                                                })}
                                                onClick={() =>
                                                    onSidebarChoseClick(
                                                        item.category_title
                                                    )
                                                }
                                            >
                                                {item.category_title}
                                                {sidebarChose.includes(
                                                    item.category_title
                                                ) && (
                                                    <CloseIcon
                                                        className={cx(
                                                            "icon-sidebar"
                                                        )}
                                                    />
                                                )}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </PanelGroup>
                        ))}
                    </div>
                </div>
                <div
                    className={cx(
                        "col-12 col-xxl-9 col-xl-9 col-lg-9",
                        "right-content"
                    )}
                >
                    <img className={cx("image")} src={imageProduct} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Product;
