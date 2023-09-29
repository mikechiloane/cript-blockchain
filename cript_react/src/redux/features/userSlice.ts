import {createSlice } from "@reduxjs/toolkit";

function initialState() {
    return {
        email: null,
        nickname: null,
        isLogged: false
    }
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.email = action.payload.email;
            state.nickname = action.payload.nickname;
            state.isLogged = true;
        }
    }
});

export const {login} = userSlice.actions;
export default userSlice.reducer;