import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: "",
    success: "",
    message: "",
    data: {},
    isLogin: false,
    isRegister: false,
    isLogout: false,
    buyAmount: 0,
    transferAmount: 0,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setBuyAmount(state, action) {
            state.buyAmount = action.payload;

        }
    }
}
)

export const {setLoading,setBuyAmount} = authSlice.actions;

export default authSlice.reducer;