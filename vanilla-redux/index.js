const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// actions
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

// initial states
const initialCakeState = {
    numOfCakes: 10,
};

const initialIceCreamState = {
    numOfIceCream: 10,
};

// action creators
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    };
}

function restockCake(quantity = 1) {
    return {
        type: CAKE_RESTOCK,
        payload: quantity,
    };
}

function orderIceCream(quantity = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: quantity,
    };
}

function restockIceCream(quantity = 1) {
    return {
        type: ICECREAM_RESTOCK,
        payload: quantity,
    };
}

// reducers
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };
        case CAKE_RESTOCK:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            };
        default:
            return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - action.payload,
            };
        case ICECREAM_RESTOCK:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload,
            };
        default:
            return state;
    }
};

// reducer combiner
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

// this executes after changes in state, you can also log the state after update here
const unsubscribe = store.subscribe(() => {});

// bind all the actioncreator methods with dispatch function
const actions = bindActionCreators(
    { orderCake, restockCake, orderIceCream, restockIceCream },
    store.dispatch
);

actions.orderCake();
actions.orderIceCream(1);
actions.restockCake(10);
actions.restockIceCream(5);

unsubscribe();
