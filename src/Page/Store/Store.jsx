import classNames from "classnames/bind";
import styles from "./Store.module.scss";

const cx = classNames.bind(styles);
function Store() {
    return <div className={cx("wrapper")}></div>;
}

export default Store;
