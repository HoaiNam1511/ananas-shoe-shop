import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
        productFilter: {
            statusId: [],
            styleId: [],
            lineId: [],
            collectionId: [],
            materialId: [],
            priceRange: [],
        },
        totalBill: {},
        searchKey: "",
    },
    reducers: {
        addProductFilter(state, action) {
            if (!action.payload.breadcrumb) {
                const addCategoryId = (title) => {
                    if (
                        state.productFilter[title].includes(action.payload.id)
                    ) {
                        state.productFilter[title] = [
                            ...state.productFilter[title].filter(
                                (item) => action.payload.id !== item
                            ),
                        ];
                    } else {
                        state.productFilter[title] = [
                            ...state.productFilter[title],
                            action.payload.id,
                        ];
                    }
                };

                switch (action.payload.fk_category_group_id) {
                    case 1:
                        addCategoryId("statusId");
                        break;
                    case 2:
                        addCategoryId("styleId");
                        break;
                    case 3:
                        addCategoryId("lineId");
                        break;
                    case 4:
                        addCategoryId("collectionId");
                        break;
                    case 5:
                        addCategoryId("materialId");
                        break;

                    default:
                        break;
                }
            } else {
                state.productFilter.statusId = [];
                state.productFilter.styleId = [];
                state.productFilter.collectionId = [];
                state.productFilter.materialId = [];
                state.productFilter.priceRange = [];
                state.productFilter.lineId = [action.payload.id];
            }
        },

        addPriceRange(state, action) {
            if (
                state.productFilter.priceRange.find(
                    (item) => item.range === action.payload.range
                )
            ) {
                state.productFilter.priceRange =
                    state.productFilter.priceRange.filter(
                        (item) => item.range !== action.payload.range
                    );
            } else {
                state.productFilter.priceRange = [
                    ...state.productFilter.priceRange,
                    action.payload,
                ];
            }
        },

        addTotalBill(state, action) {
            const objPayload = JSON.stringify(action.payload);
            sessionStorage.setItem("totalBill", objPayload);
            state.totalBill = action.payload;
        },

        addSearch(state, action) {
            state.searchKey = action.payload;
        },
    },
});
//Export action
export const { addProductFilter, addPriceRange, addTotalBill, addSearch } =
    globalSlice.actions;

export default globalSlice;
