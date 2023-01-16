import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

import shopImg from "../../../asset/images/footer/Store.svg";
const cx = classNames.bind(styles);
function Footer() {
    let id = 0;
    const footerList = [
        {
            id: id++,
            header: "SẢN PHẨM",
            list: [
                {
                    id: id++,
                    title: "Giày Nam",
                    to: "",
                },
                {
                    id: id++,
                    title: "Giày Nữ",
                    to: "",
                },
                {
                    id: id++,
                    title: "Thời trang & Phụ kiện",
                    to: "",
                },
                {
                    id: id++,
                    title: "Sale-off",
                    to: "",
                },
            ],
        },
        {
            id: id++,
            header: "VỀ CÔNG TY",
            list: [
                {
                    id: id++,
                    title: "Dứa tuyển dụng",
                    to: "",
                },
                {
                    id: id++,
                    title: "Liên hệ nhượng quyền",
                    to: "",
                },
                {
                    id: id++,
                    title: "Về Ananas",
                    to: "",
                },
            ],
        },
        {
            id: id++,
            header: "HỖ TRỢ",
            list: [
                {
                    id: id++,
                    title: "FAQs",
                    to: "",
                },
                {
                    id: id++,
                    title: "Bảo mật thông tin",
                    to: "",
                },
                {
                    id: id++,
                    title: "Chính sách chung",
                    to: "",
                },
                {
                    id: id++,
                    title: "Tra cứu đơn hàng",
                    to: "",
                },
            ],
        },
        {
            id: id++,
            header: "LIÊN HỆ",
            list: [
                {
                    id: id++,
                    title: "Email góp ý",
                    to: "",
                },
                {
                    id: id++,
                    title: "Hotline",
                    to: "",
                },
                {
                    id: id++,
                    title: "0963 429 749",
                    to: "",
                },
            ],
        },
    ];
    return (
        <div className={cx("footer")}>
            <div className={cx("search-shop")}>
                <img src={shopImg} alt="" />
            </div>
            <div className={cx("footer-info")}>
                <div className={cx("footer-container-1")}>
                    {footerList.map((item) => (
                        <div className={cx("footer-block")}>
                            <h3 className={cx("footer-list_header")}>
                                {item.header}
                            </h3>
                            <div className={cx("list")}>
                                {item.list.map((itemChildren) => (
                                    <Link
                                        className={cx("link")}
                                        to={itemChildren.to}
                                    >
                                        {itemChildren.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
