const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    numOfIceCream: 10,
};

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        iceCreamOrdered: (state, action) => {
            state.numOfIceCream -= action.payload;
        },
        iceCreamRestocked: (state, action) => {
            state.numOfIceCream += action.payload;
        },
    },
    // extraReducers: {
    //     ["cake/cakeOrdered"]: (state) => {
    //         state.numOfIceCream--;
    //     },
    // },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.cakeOrdered, (state) => {
            state.numOfIceCream--;
        });
    },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
