import styles from "./PanelGroup.module.scss";
import classNames from "classnames/bind";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const cx = classNames.bind(styles);

function PanelGroup({
    children,
    onClick,
    show,
    header = "THIS IS HEADER",
    className,
}) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("panel-header", className)} onClick={onClick}>
                <h2 className={cx("header-item", "header-title")}>{header}</h2>
                <KeyboardArrowDownIcon
                    className={cx("header-item", "icon-arrow")}
                ></KeyboardArrowDownIcon>
            </div>
            <div className={cx("line")}></div>
            <div className={cx("panel-content", { show: show })}>
                {children}
            </div>
            <div className={cx({ line: show })}></div>
        </div>
    );
}

export default PanelGroup;
