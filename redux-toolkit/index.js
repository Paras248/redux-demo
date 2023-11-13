const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions = require("./features/iceCream/iceCreamSlice").iceCreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.cakeOrdered());
// store.dispatch(cakeActions.cakeRestocked(10));

// store.dispatch(iceCreamActions.iceCreamOrdered(2));
// store.dispatch(iceCreamActions.iceCreamRestocked(5));

// unsubscribe();
