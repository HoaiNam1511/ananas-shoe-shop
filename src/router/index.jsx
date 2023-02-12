import config from "../config";
import Cart from "../page/Cart/Cart";
import Home from "../page/Home/Home";
import Product from "../page/Product/Product";
import ProductDetail from "../page/ProductDetail/ProductDetail";
import SearchOrder from "../page/SearchOrder/SearchOrder";
import Store from "../page/Store/Store";
import WishList from "../page/WishList/WishList";
import MainLayout from "../layout/MainLayout/MainLayout";
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
