import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productSlice from "./slice/productSlice";

const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({
    productReducer: productSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    //Default middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;

// const store = configureStore({
//     reducer: {
//         productReducer: productSlice,
//     },
// });

// export default store;
