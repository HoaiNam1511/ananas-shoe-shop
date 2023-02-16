import { useDispatch, useSelector } from "react-redux";
import styles from "./Breadcrumb.module.scss";
import classNames from "classnames/bind";
import { selectBreadCrumb } from "../../redux/selector";
import { addProductFilter } from "../../redux/slice/globalSlice";
import { useNavigate } from "react-router-dom";
import config from "../../config";

const cx = classNames.bind(styles);
function Breadcrumb({ className, children }) {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const breadcrumb = useSelector(selectBreadCrumb);

    const onBreadcrumbClick = (item) => {
        if (item?.to) {
            if (item?.fk_category_line_id) {
                dispatch(
                    addProductFilter({
                        id: item?.fk_category_line_id,
                        breadcrumb: true,
                    })
                );
                navigator(item.to);
            } else {
                navigator(item.to);
            }
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("breadcrumb")}>
                <ul className={cx(className)}>
                    {breadcrumb.length > 1 ? (
                        breadcrumb.map((item, index) => (
                            <li
                                onClick={() => onBreadcrumbClick(item)}
                                key={index}
                            >
                                {item.title?.toLowerCase()}
                            </li>
                        ))
                    ) : (
                        <li>{`${breadcrumb} ${children}`}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumb;
