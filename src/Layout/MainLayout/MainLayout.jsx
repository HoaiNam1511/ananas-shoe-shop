import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
function MainLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
}

export default MainLayout;
