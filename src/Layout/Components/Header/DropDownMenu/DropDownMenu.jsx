import classNames from "classnames/bind";
import styles from "./DropDownMenu.module.scss";
import { Link } from "react-router-dom";
import { memo } from "react";

const cx = classNames.bind(styles);
function DropDownMenu({ className, menu1, menu2, data = [] }) {
    const dropDownList = data;

    return (
        <div className={cx("wrapper", className)}>
            {menu1 ? (
                <div className={cx("menu-1")}>
                    {dropDownList[0].children.data.map((menu) => (
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
                            {dropDownList[1].children.data[0].children.data[0].children.data.map(
                                (item) => (
                                    <Link
                                        key={item.id}
                                        className={cx("title")}
                                        to=""
                                    >
                                        {item.category_title}
                                    </Link>
                                )
                            )}
                        </div>
                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>Bộ sản phẩm</h5>
                            {dropDownList[1].children.data[0].children.data[1].children.data.map(
                                (item) => (
                                    <Link
                                        key={item.id}
                                        className={cx("title")}
                                        to=""
                                    >
                                        {item.category_title}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                    <div className={cx("menu-2_block")}>
                        <h3 className={cx("menu-2_header")}>GIÀY</h3>
                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>
                                Dòng sản phẩm
                            </h5>
                            {dropDownList[1].children.data[1].children.data[0].children.data.map(
                                (item) => (
                                    <Link
                                        key={item.id}
                                        className={cx("title")}
                                        to=""
                                    >
                                        {item.category_title}
                                    </Link>
                                )
                            )}
                        </div>

                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>Style</h5>
                            {dropDownList[1].children.data[1].children.data[1].children.data.map(
                                (item) => (
                                    <Link
                                        key={item.id}
                                        className={cx("title")}
                                        to=""
                                    >
                                        {item.category_title}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>

                    <div className={cx("menu-2_block")}>
                        <h3 className={cx("menu-2_header")}>
                            THỜI TRANG & PHỤ KIỆN
                        </h3>
                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>Nửa trên</h5>
                            {dropDownList[1].children.data[2].children.data[0].children.data.map(
                                (item) => (
                                    <Link
                                        key={item.id}
                                        className={cx("title")}
                                        to=""
                                    >
                                        {item.title}
                                    </Link>
                                )
                            )}
                        </div>

                        <div className={cx("list")}>
                            <h5 className={cx("title_header")}>Phụ kiện</h5>
                            {dropDownList[1].children.data[2].children.data[1].children.data.map(
                                (item) => (
                                    <Link
                                        key={item.id}
                                        className={cx("title")}
                                        to=""
                                    >
                                        {item.title}
                                    </Link>
                                )
                            )}
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

export default memo(DropDownMenu);
