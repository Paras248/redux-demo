const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const initialState = {
    loading: false,
    users: [],
    error: "",
};

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    };
};

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    };
};

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: "",
            };

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };

        default:
            return state;
    }
};

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                dispatch(fetchUsersFailure(error.message));
            });
    };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

const actions = redux.bindActionCreators({ fetchUsers }, store.dispatch);

actions.fetchUsers();
