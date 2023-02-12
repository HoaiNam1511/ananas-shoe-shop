import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import * as productService from "../../service/productService";

import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";

import {
    selectProductId,
    selectProductDetail,
    selectWishList,
    selectCart,
} from "../../redux/selector";
import ImageSlide from "../../components/ImageSlide/ImageSlide";

import {
    addCart,
    addProductDetail,
    addWishList,
} from "../../redux/slice/productSlice";
import SelectGrid from "../../components/SelectGrid/SelectGrid";
import PanelGroup from "../../components/PanelGroup/PanelGroup";
import imageSize from "../../asset/images/global/Size-chart-1-e1559209680920.jpg";
import {
    policy,
    service,
    colors,
    quantityList,
    sizeList,
} from "../../data/productDetail";
import Slick from "../../components/Slick/Slick";
import Card from "../../components/Card/Card";

const cx = classNames.bind(styles);
function ProductDetail() {
    const dispatch = useDispatch();
    const refItemSlick = useRef(null);
    const productId = useSelector(selectProductId);
    const wishList = useSelector(selectWishList);
    const productDetail = useSelector(selectProductDetail);
    //const [productDetail, setProductDetail] = useState({});

    const [showPanel, setShowPanel] = useState();
    const [products, setProducts] = useState([]);
    const [selectGrid, setSelectGrid] = useState({
        size: sizeList[0],
        quantity: quantityList[0],
    });

    const getNewProducts = async () => {
        const productRes = await productService.getProduct({ limit: 8 });
        setProducts(productRes.data);
    };

    const getProductDetail = async () => {
        const productRes = await productService.getProductDetail({ productId });
        //setProductDetail(productRes?.data[0]);
        dispatch(addProductDetail(productRes?.data[0]));
    };

    useEffect(() => {
        getNewProducts();
    }, []);

    useEffect(() => {
        getProductDetail();
    }, [productId]);

    const handleShowPanel = (value) => {
        if (showPanel === value) {
            setShowPanel(null);
        } else {
            setShowPanel(value);
        }
    };

    const handleAddWishList = (product) => {
        const obj = Object.preventExtensions(product);
        const newObj = {
            ...obj,
            size: selectGrid.size,
            quantity: selectGrid.quantity,
        };
        dispatch(addWishList(newObj));
    };

    const handleAddCart = (product) => {
        const obj = Object.preventExtensions(product);
        const newObj = {
            ...obj,
            size: selectGrid.size,
            quantity: selectGrid.quantity,
            update: false,
        };
        dispatch(addCart(newObj));
    };

    const handleSelectGirdChange = (name, value) => {
        setSelectGrid({ ...selectGrid, [name]: value });
    };

    function NewlineText(props) {
        const text = props.text;
        return text.split("\n").map((str, index) => <p key={index}>{str}</p>);
    }

    return (
        <div id="wrapper" className={cx("container-fluid gx-0", "wrapper")}>
            <div className={cx("row gx-0", "detail-container")}>
                <Breadcrumb className={cx("col-12")} />
                <div className={cx("col-12 col-xxl-7 col-xl-7 col-lg-7")}>
                    <ImageSlide className={cx("wrapper-slide")}></ImageSlide>
                </div>

                <div
                    className={cx(
                        "col-12 col-xxl-5 col-xl-5 col-lg-5",
                        "wrapper-detail"
                    )}
                >
                    <h2 className={cx("title-header")}>
                        {`${productDetail?.product_name} - ${productDetail?.categorys_title?.style_title} - ${productDetail?.categorys_title?.material_title}`}
                    </h2>
                    <div className={cx("code")}>
                        <span>
                            Mã sản phẩm: <strong>AV00183</strong>
                        </span>
                        <span>
                            Tình trạng:{" "}
                            <strong>
                                {productDetail?.categorys_title?.status_title}
                            </strong>
                        </span>
                    </div>
                    <h3 className={cx("price")}>
                        {productDetail?.product_price?.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </h3>
                    <div className={cx("line-dashed")}></div>
                    <div className={cx("color")}>
                        {colors.map((color, index) => (
                            <span
                                key={index}
                                style={{ backgroundColor: color }}
                                className={cx("color-item")}
                            ></span>
                        ))}
                    </div>
                    <div className={cx("line-dashed")}></div>
                    <div className={cx("row gx-0", "info")}>
                        <div
                            className={cx(
                                "col-6 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                                "size",
                                "btn-block"
                            )}
                        >
                            <h3>SIZE</h3>
                            <SelectGrid
                                name="size"
                                dropClick={handleSelectGirdChange}
                                data={sizeList}
                                currentValue={selectGrid.size}
                            ></SelectGrid>
                        </div>
                        <div
                            className={cx(
                                "col-6 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                                "quality",
                                "btn-block"
                            )}
                        >
                            <h3>SỐ LƯỢNG</h3>
                            <SelectGrid
                                name="quantity"
                                dropClick={handleSelectGirdChange}
                                data={quantityList}
                                currentValue={selectGrid.quantity}
                            ></SelectGrid>
                        </div>
                    </div>
                    <div className={cx("row gx-0", "btn-container")}>
                        <div
                            className={cx(
                                "col-9 col-xxl-9 col-xl-9 col-lg-9 col-md-9  col-sm-9",
                                "btn-item"
                            )}
                        >
                            <Button
                                className={cx("btn-add", "black")}
                                onClick={() => handleAddCart(productDetail)}
                            >
                                Thêm vào giỏ hàng
                            </Button>
                        </div>
                        <div
                            className={cx(
                                "col-3 col-xxl-3 col-xl-3 col-lg-3  col-md-3 col-sm-3",
                                "btn-item"
                            )}
                        >
                            <Button
                                className={cx("btn-add", "black")}
                                onClick={() => handleAddWishList(productDetail)}
                            >
                                {wishList.find(
                                    (item) => item.id === productDetail?.id
                                ) ? (
                                    <FavoriteIcon
                                        className={cx("btn-favorite")}
                                    />
                                ) : (
                                    <FavoriteBorderIcon
                                        className={cx("btn-favorite")}
                                    />
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className={cx("row gx-0", "btn-container")}>
                        <div
                            className={cx(
                                "col-12 col-xxl-12 col-xl-12 col-lg-12",
                                "btn-item"
                            )}
                        >
                            <Button className={cx("btn-add")}>
                                Thanh toán
                            </Button>
                        </div>
                    </div>
                    <div className={cx("row gx-0", "panel-container")}>
                        <div className={cx("panel-item")}>
                            <PanelGroup
                                header="Thông tin sản phẩm"
                                className={cx("item-panel_header", {
                                    active: showPanel === 1,
                                })}
                                show={showPanel === 1}
                                onClick={() => handleShowPanel(1)}
                                twoline
                            >
                                <div className={cx("panel-content")}>
                                    <span className={cx("title")}>
                                        <span className={cx("hight-light")}>
                                            {`Gender: ${productDetail?.product_sex}`}
                                        </span>{" "}
                                        <br />
                                        Size run: 35 – 46 <br />
                                        <span className={cx("hight-light")}>
                                            {`Material: ${productDetail?.categorys_title?.material_title}`}
                                        </span>{" "}
                                        <br />
                                        Outsole: Rubber <br />
                                        Có thêm 01 bộ dây đi kèm <br />
                                        <img src={imageSize} alt="" />
                                    </span>
                                </div>
                            </PanelGroup>
                        </div>
                    </div>

                    <div className={cx("row gx-0", "panel-container")}>
                        <div className={cx("panel-item")}>
                            <PanelGroup
                                header="Quy định đổi sản phẩm"
                                className={cx("item-panel_header", {
                                    active: showPanel === 2,
                                })}
                                show={showPanel === 2}
                                onClick={() => handleShowPanel(2)}
                                twoline
                            >
                                <div className={cx("panel-content")}>
                                    <ul>
                                        {policy.map((item, index) => (
                                            <li key={index}>
                                                <span className={cx("title")}>
                                                    <NewlineText
                                                        text={item.title}
                                                    />
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </PanelGroup>
                        </div>
                    </div>

                    <div className={cx("row gx-0", "panel-container")}>
                        <div className={cx("panel-item")}>
                            <PanelGroup
                                header="Bảo hành thế nào ?"
                                className={cx("item-panel_header", {
                                    active: showPanel === 3,
                                })}
                                show={showPanel === 3}
                                onClick={() => handleShowPanel(3)}
                                twoline
                            >
                                <div className={cx("panel-content")}>
                                    {service.map((item, index) => (
                                        <p className={cx("title")} key={index}>
                                            {item.title}
                                        </p>
                                    ))}
                                </div>
                            </PanelGroup>
                        </div>
                    </div>
                </div>

                <Slick className={cx("slick")}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            ref={refItemSlick}
                            className={cx(
                                "col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4",
                                "slick-item"
                            )}
                        >
                            <Card data={product}></Card>
                        </div>
                    ))}
                </Slick>
            </div>
        </div>
    );
}

export default ProductDetail;
