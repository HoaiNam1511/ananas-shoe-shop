import { createSlice, current } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productId: 0,
        productDetail: {},
        cart: [],
        wishList: [],
        breadcrumb: [],
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

        updateWishList(state, action) {
            const cvtArr = state.wishList;
            let newArr;
            newArr = cvtArr.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: action.payload.quantity,
                        size: action.payload.size,
                    };
                } else {
                    return item;
                }
            });
            state.wishList = newArr;
        },

        deleteWishList(state, action) {
            const cvtArr = state.wishList;
            let newArr;
            newArr = cvtArr.filter((item) => item.id !== action.payload.id);
            state.wishList = newArr;
        },

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
                    if (product.id === action.payload.id) {
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
                state.cart.push(action.payload);
            }
        },

        updateCart(state, action) {
            const cvtArr = state.cart;
            const newArr = cvtArr.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        quantity: action.payload.quantity,
                        size: action.payload.size,
                    };
                } else {
                    return product;
                }
            });
            state.cart = newArr;
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
    addBreadCrumb,
    addWishList,
    addCart,
    deleteCart,
    updateCart,
    deleteWishList,
    updateWishList,
} = productSlice.actions;

export default productSlice;
