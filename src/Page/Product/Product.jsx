import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import * as categoryService from "../../service/categoryService";
import * as productService from "../../service/productService";

import imageProduct from "../../asset/images/global/desktop_productlist.jpg";
import PanelGroup from "../../components/PanelGroup/PanelGroup";
import Button from "../../components/Button/Button";
import styles from "./Product.module.scss";
import Card from "../../components/Card/Card";

import { sidebarHeader, sidebar1, sidebar2 } from "../../data/product";
import { addPriceRange, addProductFilter } from "../../redux/slice/globalSlice";
import {
    selectProductFilter,
    selectProductFilterAll,
} from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);
function Product() {
    const dispatch = useDispatch();
    const [categorys, setCategorys] = useState([]);
    const [showPageGroup, setShowPageGroup] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [products, setProducts] = useState([]);
    const productFilterId = useSelector(selectProductFilter);
    const productFilterAll = useSelector(selectProductFilterAll);

    //Get category
    const getCategory = async () => {
        const res = await categoryService.getCategoryClient();
        setCategorys([...res.data, ...sidebar2]);
    };

    //Handle show/hide sidebar
    const onSidebarClick = (index) => {
        if (!showPageGroup.includes(index)) {
            setShowPageGroup([...showPageGroup, index]);
        } else {
            setShowPageGroup(showPageGroup.filter((item) => item !== index));
        }
    };

    //Handle sidebar chose
    const onSidebarChoseClick = (item) => {
        if (item.from && item.to) {
            dispatch(addPriceRange(item));
        } else {
            dispatch(addProductFilter(item));
        }
    };

    //Button filter mobile click
    const onBtnFilterClick = () => {
        if (showSidebar) {
            document.body.style.overflow = "auto";
            setShowSidebar(!showSidebar);
        } else {
            document.body.style.overflow = "hidden";
            setShowSidebar(!showSidebar);
        }
        setShowSidebar(!showSidebar);
    };

    //Handle get product filter
    const productFilterFunc = async () => {
        const resProductFilter = await productService.getProductFilter({
            productFilterId,
        });
        setProducts(resProductFilter.data);
    };

    useEffect(() => {
        getCategory();
    }, []);

    useEffect(() => {
        productFilterFunc();
    }, [productFilterId]);

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
                    <div className={cx("line-black-solid")} />

                    {/* Group 1 */}
                    <div>
                        <ul className={cx("sidebar-group", "group-1")}>
                            {sidebar1.map((item, index) => (
                                <li
                                    key={item.id}
                                    className={cx(
                                        "sidebar-item",
                                        "item-header",
                                        {
                                            "active-header":
                                                productFilterAll.includes(
                                                    item.id
                                                ),
                                        }
                                    )}
                                    onClick={() => onSidebarChoseClick(item.id)}
                                >
                                    {item.title}
                                    {productFilterAll.includes(item.id) && (
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
                    <div className={cx("d-block d-lg-none d-flex", "filter")}>
                        <Button
                            className={cx("filter-btn")}
                            onClick={onBtnFilterClick}
                        >
                            Chọn
                            <KeyboardArrowDownIcon
                                className={cx({ rotate180: showSidebar })}
                            />
                        </Button>
                        <Button className={cx("filter-btn")}>
                            {`${products.length} Sản Phẩm`}
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
                                key={index}
                                className={cx("sidebar")}
                                header={category.category_group_title}
                                show={
                                    showPageGroup.includes(index) ? false : true
                                }
                                onClick={() => onSidebarClick(index)}
                            >
                                <ul
                                    className={cx("sidebar-group")}
                                    key={category.id}
                                >
                                    {category.category_group_client.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className={cx("sidebar-item", {
                                                    active: productFilterAll.includes(
                                                        item.id
                                                    ),
                                                })}
                                                onClick={() =>
                                                    onSidebarChoseClick(item)
                                                }
                                            >
                                                {item.category_title}
                                                {productFilterAll.includes(
                                                    item.id
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
                    <div className={cx("image")}>
                        <img src={imageProduct} alt="" />
                    </div>

                    <div className={cx("product")}>
                        <div className={cx("row gx-0", "list-product")}>
                            {products.map((product, index) => (
                                <Card
                                    key={index}
                                    data={product}
                                    className={cx(
                                        "col-6 col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                                        "card-item"
                                    )}
                                ></Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
