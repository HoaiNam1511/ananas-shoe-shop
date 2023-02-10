import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
        breadcrumb: [],
    },
    reducers: {
        addBreadCrumb(state, action) {
            state.breadcrumb = action.payload;
        },
    },
});
//Export action
export const { addBreadCrumb } = globalSlice.actions;

export default globalSlice;
