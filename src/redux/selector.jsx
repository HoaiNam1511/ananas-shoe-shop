export const selectProductId = (state) => state.productReducer.productId;
export const selectProductDetail = (state) =>
    state.productReducer.productDetail;
export const selectBreadCrumb = (state) => state.productReducer.breadcrumb;
export const selectWishList = (state) => state.productReducer.wishList;
export const selectCart = (state) => state.productReducer.cart;
//Global
export const selectProductFilter = (state) => state.globalReducer.productFilter;
