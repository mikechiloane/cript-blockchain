import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    balance: {
        balance: 0,
        sent: 0,
        received: 0,
        address: "",
    },
    address: "",
    exchangeRate: 1,

}

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setBalance(state, action) {
            state.balance = action.payload;
        },
        setAddress(state, action) {
            state.address = action.payload;
        },
        setExchangeRate(state, action) {
            state.exchangeRate = action.payload;
        }
    }
})

export const {setBalance,setExchangeRate,setAddress} = walletSlice.actions;

export default walletSlice.reducer;