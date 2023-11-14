import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const initialState = {
    numOfIceCream: 10,
};

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream--;
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIceCream--;
        });
    },
});

export default iceCreamSlice.reducer;
export const iceCreamActions = iceCreamSlice.actions;
