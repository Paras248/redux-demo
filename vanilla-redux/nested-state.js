const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
    name: "Paras Patil",
    address: {
        street: "Kalamba Road",
        city: "Kolhapur",
        state: "Maharashtra",
    },
};

const STREET_UPDATED = "STREET_UPDATED";

function updateStreet(street) {
    return {
        type: STREET_UPDATED,
        payload: street,
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            });

        default:
            return state;
    }
};

const store = redux.createStore(reducer);

const unsubscribe = store.subscribe(() => {
    console.log("After updating: ", store.getState());
});

const actions = redux.bindActionCreators({ updateStreet }, store.dispatch);

actions.updateStreet("Near ITI");
actions.updateStreet("Sambhaji Nagar");

unsubscribe();
