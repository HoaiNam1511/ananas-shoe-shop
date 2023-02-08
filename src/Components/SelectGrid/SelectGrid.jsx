import styles from "./SelectGrid.module.scss";
import classNames from "classnames/bind";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
const cx = classNames.bind(styles);

function SelectGrid({ className, data }) {
    const listData = data || [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [dropdown, setDropDown] = useState({
        show: false,
        itemValue: listData[0],
    });

    const { show, itemValue } = dropdown;

    const handleClick = (item) => {
        setDropDown({ show: !show, itemValue: item });
    };

    const handleShowDropdown = () => {
        setDropDown({ ...dropdown, show: !show });
    };
    return (
        <div className={cx("wrapper")}>
            <button
                onClick={handleShowDropdown}
                className={cx("btn-drop", className)}
            >
                <span className={cx("title")}>{itemValue}</span>
                <KeyboardArrowDownIcon className={cx("icon")} />
            </button>
            {show && (
                <div className={cx("dropdown")}>
                    <div className={cx("grid-container")}>
                        {listData.map((item, index) => (
                            <div
                                key={index}
                                class={cx("grid-item", {
                                    active: item === itemValue,
                                })}
                                onClick={() => handleClick(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
export default SelectGrid;
