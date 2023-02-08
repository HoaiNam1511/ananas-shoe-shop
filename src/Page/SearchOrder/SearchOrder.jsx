import classNames from "classnames/bind";
import styles from "./SearchOrder.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectProductId } from "../../redux/selector";

const cx = classNames.bind(styles);
function SearchOrder() {
    const id = useSelector(selectProductId);
    console.log(id);
    return <div>SearchOrder</div>;
}

export default SearchOrder;
