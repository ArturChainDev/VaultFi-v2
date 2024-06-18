import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tokenAmount: 0,
    bonusAmount: 0,
};

export const tokenAmountSlice = createSlice({
    name: "setToken",
    initialState,
    reducers: {
        updateToken: (state, action) => ({
            ...state,
            tokenAmount: action.payload,
        }),
        updateBonusToken: (state, action) => ({
            ...state,
            bonusAmount: action.payload,
        })
    },
});

export const { updateToken, updateBonusToken } = tokenAmountSlice.actions;
export default tokenAmountSlice.reducer;
