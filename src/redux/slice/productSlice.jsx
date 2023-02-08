import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productId: 0,
        productDetail: {},
        breadcrumb: [],
        wishList: [],
        objects: [],
    },
    reducers: {
        addProductId(state, action) {
            state.productId = action.payload;
        },

        addProductDetail(state, action) {
            state.productDetail = action.payload;
        },

        addBreadCrumb(state, action) {
            state.breadcrumb = action.payload;
        },

        addWishList(state, action) {
            console.log(typeof state.objects);
            state.objects.push(1);
            // state.wishList.push(1);
            // return {
            //     ...state,
            //     wishList: [...state.wishList, action.payload],
            // };
        },
    },
});
//Export action
export const { addProductId, addProductDetail, addBreadCrumb, addWishList } =
    productSlice.actions;

export default productSlice;
