import { useDispatch } from "react-redux";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { addBreadCrumb } from "../../redux/slice/productSlice";
import classNames from "classnames/bind";
import config from "../../config";
import styles from "./WishList.module.scss";
import CardStore from "../../Components/CardStore/CardStore";

const cx = classNames.bind(styles);
function WishList() {
    const dispatch = useDispatch();
    dispatch(addBreadCrumb(10));
    const fakeData = [
        {
            id: 175,
            product_code: "",
            product_name: "TRACK 6 TRIPLE BLACK",
            product_price: 990000,
            product_sex: "unique",
            fk_category_status_id: 316,
            fk_category_style_id: 320,
            fk_category_line_id: 327,
            fk_category_collection_id: 328,
            fk_category_material_id: 335,
            product_images: [
                {
                    id: 1073,
                    fk_product_id: 175,
                    image: "1675347727463.jpg",
                    priority: 2,
                },
            ],
            categorys_title: {
                collection_title: "Track 6 I.S.E.E",
                line_title: "Pattas",
                material_title: "Leather | Da",
                status_title: "Limited Edition",
                style_title: "Low Top",
            },
        },
    ];

    return (
        <div className={cx("container-fluid", "wrapper")}>
            <Breadcrumb></Breadcrumb>
            <div>
                {fakeData.map((item) => (
                    <CardStore data={item}></CardStore>
                ))}
            </div>
        </div>
    );
}

export default WishList;
