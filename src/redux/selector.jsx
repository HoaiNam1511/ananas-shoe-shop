export const selectProductId = (state) => state.productReducer.productId;
export const selectProductDetail = (state) =>
    state.productReducer.productDetail;
export const selectBreadCrumb = (state) => state.productReducer.breadcrumb;
export const selectWishList = (state) => state.productReducer.wishList;
export const selectCart = (state) => state.productReducer.cart;
//Global
export const selectTotalBill = (state) => state.globalReducer.totalBill;
export const selectProductFilter = (state) => state.globalReducer.productFilter;
export const selectSearchKey = (state) => state.globalReducer.searchKey;

export const selectProductFilterAll = (state) => [
    ...state.globalReducer.productFilter.statusId,
    ...state.globalReducer.productFilter.styleId,
    ...state.globalReducer.productFilter.lineId,
    ...state.globalReducer.productFilter.collectionId,
    ...state.globalReducer.productFilter.materialId,
    ...state.globalReducer.productFilter.headerId,
    ...state.globalReducer.productFilter.priceRange,
    ...state.globalReducer.productFilter.gender,
];

export const selectPriceRange = (state) =>
    state.globalReducer.productFilter.priceRange;

export const selectDropdownShow = (state) => state.globalReducer.dropdownShow;
export const selectGender = (state) => state.globalReducer.productFilter.gender;
