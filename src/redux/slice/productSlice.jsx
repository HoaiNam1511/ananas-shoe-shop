import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productId: 0,
    productDetail: {},
    breadcrumb: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
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
    },
});
//Export action
export const { addProductId, addProductDetail, addBreadCrumb } =
    productSlice.actions;

export default productSlice;
