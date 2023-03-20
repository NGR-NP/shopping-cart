import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import CartSlice from "../cart/CartSlice";
const persistConfig = {
    key: "shopping-cart-root",
    version: 1,
    storage,
};
const cartPersisted = persistReducer(persistConfig, CartSlice)
export const store = configureStore({
    reducer: {
        cart: cartPersisted
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: true,
})
export let persisor = persistStore(store);