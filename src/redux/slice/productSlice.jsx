import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productId: 0,
    productDetail: {},
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
    },
});
//Export action
export const { addProductId, addProductDetail } = productSlice.actions;

export default productSlice;
