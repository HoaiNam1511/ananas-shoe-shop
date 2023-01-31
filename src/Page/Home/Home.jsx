import Card from "../../Components/Card/Card";
import classNames from "classnames/bind";
import SlickSlide from "../../Components/SlickSlide/SlickSlide";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
function Home() {
    return (
        <>
            <SlickSlide></SlickSlide>
            <div id="wrapper" className={cx("container-fluid gx-0", "wrapper")}>
                <section>
                    <div className={cx("section-title")}>
                        <h2>
                            <span>SẢN PHẨM BÁN CHẠY</span>
                        </h2>
                    </div>
                    <div className={cx("row", "product-grids")}>
                        <Card
                            className={cx(
                                "col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-4",
                                "card-item"
                            )}
                        ></Card>
                        <Card
                            className={cx(
                                "col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-4",
                                "card-item"
                            )}
                        ></Card>
                        <Card
                            className={cx(
                                "col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-4",
                                "card-item"
                            )}
                        ></Card>
                        <Card
                            className={cx(
                                "col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-4",
                                "card-item"
                            )}
                        ></Card>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
