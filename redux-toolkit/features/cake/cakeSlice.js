const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    numOfCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        cakeOrdered: (state) => {
            --state.numOfCakes;
        },
        cakeRestocked: (state, action) => {
            state.numOfCakes += action.payload;
        },
    },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
