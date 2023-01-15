import config from "../Config";
import Cart from "../Page/Cart/Cart";
import Home from "../Page/Home/Home";
import Product from "../Page/Product/Product";
import ProductDetail from "../Page/ProductDetail/ProductDetail";
import SearchOrder from "../Page/SearchOrder/SearchOrder";
import Store from "../Page/Store/Store";
import WishList from "../Page/WishList/WishList";
import MainLayout from "../Layout/MainLayout/MainLayout";
export const publicRouter = [
    {
        path: config.routes.home,
        component: Home,
        layout: MainLayout,
    },
    {
        path: config.routes.product,
        component: Product,
        layout: MainLayout,
    },
    {
        path: config.routes.productDetail,
        component: ProductDetail,
        layout: MainLayout,
    },
    {
        path: config.routes.searchOrder,
        component: SearchOrder,
        layout: MainLayout,
    },
    {
        path: config.routes.stores,
        component: Store,
        layout: MainLayout,
    },
    {
        path: config.routes.wishlist,
        component: WishList,
        layout: MainLayout,
    },
    {
        path: config.routes.cart,
        component: Cart,
        layout: MainLayout,
    },
];
