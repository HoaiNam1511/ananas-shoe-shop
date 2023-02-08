import { useSelector } from "react-redux";
import styles from "./Breadcrumb.module.scss";
import classNames from "classnames/bind";
import { selectBreadCrumb } from "../../redux/selector";

const cx = classNames.bind(styles);
function Breadcrumb() {
    const breadcrumb = useSelector(selectBreadCrumb);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("breadcrumb")}>
                <ul>
                    {breadcrumb.length > 1 ? (
                        breadcrumb.map((item, index) => (
                            <li key={index}>{item.toLowerCase()}</li>
                        ))
                    ) : (
                        <li>{breadcrumb}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumb;
