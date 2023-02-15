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
    },
    reducers: {
        addProductFilter(state, action) {
            const addCategoryId = (title) => {
                if (state.productFilter[title].includes(action.payload.id)) {
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
    },
});
//Export action
export const { addProductFilter, addPriceRange } = globalSlice.actions;

export default globalSlice;
