import classNames from "classnames/bind";
import styles from "./DropDownMenu.module.scss";
import { Link } from "react-router-dom";

import * as categoryService from "../../../../service/categoryService";

import menuNamImg from "../../../../asset/images/menu/Menu_Nam.jpg";
import menuNuImg from "../../../../asset/images/menu/Menu_Nu.jpg";
import menuPhuKienImg from "../../../../asset/images/menu/Menu_Phu-kien.jpg";
import menuSaleImg from "../../../../asset/images/menu/Menu_Sale-off.jpg";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
function DropDownMenu({ className, menu1, menu2 }) {
    let id = 0;
    const [categorys, setCategorys] = useState([]);
    const menu1List = [
        {
            id: id++,
            image: menuNamImg,
            title: "CHO NAM",
        },
        {
            id: id++,
            image: menuNuImg,
            title: "CHO NỮ",
        },
        {
            id: id++,
            image: menuPhuKienImg,
            title: "OUTLET SALE",
        },
        {
            id: id++,
            image: menuSaleImg,
            title: "THỜI TRANG PHỤ KIỆN",
        },
    ];

    const getCategory = async () => {
        try {
            const res = await categoryService.getCategory();
            setCategorys(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <div className={cx("wrapper", className)}>
            {menu1 ? (
                <div className={cx("menu-1")}>
                    {menu1List.map((menu) => (
                        <Link className={cx("menu-1_item")} key={menu.id}>
                            <img
                                className={cx("menu-1_img")}
                                src={menu.image}
                                alt="MenuNam"
                            />
                            <span className={cx("menu-1_title")}>
                                {menu.title}
                            </span>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className={cx("menu-2")}>
                    <div className={cx("menu-2_block")}>
                        <h3 className={cx("menu-2_header")}>NỔI BẬT</h3>
                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>Trạng thái</h5>
                            {categorys
                                .filter(
                                    (category) =>
                                        category.fk_category_group_id == 1
                                )
                                .map((item, index) => {
                                    if (index < 6) {
                                        return (
                                            <>
                                                <Link
                                                    className={cx("title")}
                                                    to=""
                                                >
                                                    {item.category_title}
                                                </Link>
                                            </>
                                        );
                                    }
                                })}
                        </div>
                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>Bộ sản phẩm</h5>
                            {categorys
                                .filter(
                                    (category) =>
                                        category.fk_category_group_id == 4
                                )
                                .map((item, index) => {
                                    if (index < 6) {
                                        return (
                                            <>
                                                <Link
                                                    className={cx("title")}
                                                    to=""
                                                >
                                                    {item.category_title}
                                                </Link>
                                            </>
                                        );
                                    }
                                })}
                        </div>
                    </div>
                    <div className={cx("menu-2_block")}>
                        <h3 className={cx("menu-2_header")}>GIÀY</h3>
                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>
                                Dòng sản phẩm
                            </h5>
                            {categorys
                                .filter(
                                    (category) =>
                                        category.fk_category_group_id == 3
                                )
                                .map((item, index) => {
                                    if (index < 6) {
                                        return (
                                            <>
                                                <Link
                                                    className={cx("title")}
                                                    to=""
                                                >
                                                    {item.category_title}
                                                </Link>
                                            </>
                                        );
                                    }
                                })}
                        </div>

                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>Style</h5>
                            {categorys
                                .filter(
                                    (category) =>
                                        category.fk_category_group_id == 2
                                )
                                .map((item, index) => {
                                    if (index < 6) {
                                        return (
                                            <>
                                                <Link
                                                    className={cx("title")}
                                                    to=""
                                                >
                                                    {item.category_title}
                                                </Link>
                                            </>
                                        );
                                    }
                                })}
                        </div>
                    </div>

                    <div className={cx("menu-2_block")}>
                        <h3 className={cx("menu-2_header")}>
                            THỜI TRANG & PHỤ KIỆN
                        </h3>
                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>Nửa trên</h5>
                            <Link className={cx("title")} to="">
                                Basic Tee
                            </Link>
                            <Link className={cx("title")} to="">
                                Graphic tee
                            </Link>
                            <Link className={cx("title")} to="">
                                Sweatshirt
                            </Link>
                        </div>

                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>Phụ kiện</h5>
                            <Link className={cx("title")} to="">
                                Nón
                            </Link>
                            <Link className={cx("title")} to="">
                                Dây giày
                            </Link>
                            <Link className={cx("title")} to="">
                                Vớ
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <div className={cx("menu_description")}>
                <span className={cx("description")}>
                    MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span>DỨA</span> !
                </span>
            </div>
        </div>
    );
}

export default DropDownMenu;
