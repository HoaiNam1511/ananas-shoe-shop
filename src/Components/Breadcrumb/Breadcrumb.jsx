import styles from "./Breadcrumb.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Breadcrumb() {
    const breadcrumbData = [
        {
            title: "Trang chu",
        },
        {
            title: "San pham",
        },
        {
            title: "Thong tin",
        },
    ];
    return (
        <div className={cx("wrapper")}>
            <div className={cx("breadcrumb")}>
                <ul>
                    {breadcrumbData.map((breadcrumb, index) => (
                        <li key={index}>{breadcrumb.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumb;
