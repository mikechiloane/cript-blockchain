import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import walletSlice from "./features/walletSlice.ts";
import appSlice from "./features/appSlice.ts";
const store = configureStore({
    reducer: {
        user: userReducer,
        app: appSlice,
        wallet: walletSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;