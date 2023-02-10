import { createSlice, current } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productId: 0,
        productDetail: {},
        cart: [],
        wishList: [],
    },
    reducers: {
        addProductId(state, action) {
            state.productId = action.payload;
        },

        addProductDetail(state, action) {
            state.productDetail = action.payload;
        },

        addWishList(state, action) {
            if (state.wishList.find((item) => item.id === action.payload.id)) {
                const cvtArr = state.wishList;
                const newArr = cvtArr.filter(
                    (item) => item.id !== action.payload.id
                );
                state.wishList = newArr;
            } else {
                state.wishList.push(action.payload);
            }
        },

        // true === true && true === true
        addCart(state, action) {
            if (
                state.cart.find(
                    (item) =>
                        item.id === action.payload.id &&
                        item.size === action.payload.size
                )
            ) {
                const cvtArr = state.cart;
                const newArr = cvtArr.map((product) => {
                    if (
                        product.id === action.payload.id &&
                        product.size === action.payload.size
                    ) {
                        return {
                            ...product,
                            quantity:
                                product.quantity + action.payload.quantity,
                            size: action.payload.size,
                        };
                    } else {
                        return product;
                    }
                });
                state.cart = newArr;
            } else {
                // const obj = Object.preventExtensions(action.payload);
                // const newObj = { ...obj, quantity: 1 };
                state.cart.push(action.payload);
            }
        },

        deleteCart(state, action) {
            const cvtArr = state.cart;
            const newArr = cvtArr.filter((item) => {
                if (item.id === action.payload.id) {
                    if (item.size === action.payload.size) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            });
            state.cart = newArr;
        },
    },
});
//Export action
export const {
    addProductId,
    addProductDetail,
    addWishList,
    addCart,
    deleteCart,
} = productSlice.actions;

export default productSlice;
