import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import shopImg from "../../../asset/images/footer/Store.svg";
import brandImg from "../../../asset/images/footer/Logo_Ananas_Footer.svg";
import licenseImg from "../../../asset/images/footer/icon_bocongthuong.png";

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
    const socials = [
        {
            id: id++,
            icon: FacebookIcon,
            link: "",
        },
        {
            id: id++,
            icon: InstagramIcon,
            link: "",
        },
        {
            id: id++,
            icon: YouTubeIcon,
            link: "",
        },
    ];
    return (
        <div className={cx("footer")}>
            <div className={cx("search-shop")}>
                <img src={shopImg} alt="" />
                <button className={cx("btn-search-shop")}>TÌM CỬA HÀNG</button>
            </div>
            <div className={cx("footer-info")}>
                <div className={cx("footer-container")}>
                    {footerList.map((item) => (
                        <div className={cx("footer-block")}>
                            <h3 className={cx("footer-list_header")}>
                                {item.header}
                            </h3>
                            <div className={cx("list")}>
                                {item.list.map((itemChildren) => (
                                    <div>
                                        <Link
                                            className={cx("link")}
                                            to={itemChildren.to}
                                        >
                                            {itemChildren.title}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx("footer-container")}>
                    <div className={cx("footer-block")}>
                        <h3 className={cx("footer-list_header")}>
                            ANANAS SOCIAL
                        </h3>

                        <div className={cx("list")}>
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <div className={cx("social")}>
                                        <a
                                            className={cx("link")}
                                            href={social.link}
                                        >
                                            <Icon
                                                className={cx("social-icon")}
                                            ></Icon>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cx("footer-block")}>
                        <h3 className={cx("footer-list_header")}>
                            ĐĂNG KÍ NHẬN MAIL
                        </h3>
                        <div className={cx("list")}>
                            <div className={cx("social", "form-group")}>
                                <input type="text" />
                                <button>
                                    <ArrowForwardIcon
                                        className={cx("form-icon")}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={cx("footer-block")}>
                        <img src={brandImg} alt="" />
                    </div>
                </div>
                <div className={cx("footer-container")}>
                    <div className={cx("footer-block")}>
                        <img src={licenseImg} alt="license" />
                    </div>
                    <div>
                        <span className={cx("license")}>
                            Copyright © 2022 Ananas. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
