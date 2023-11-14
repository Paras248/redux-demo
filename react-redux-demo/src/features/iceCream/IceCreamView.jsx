import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iceCreamActions } from "./iceCreamSlice";

const IceCreamView = () => {
    const [value, setValue] = useState(1);
    const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of ice creams - {numOfIceCream}</h2>
            <button onClick={() => dispatch(iceCreamActions.ordered())}>Order Ice Cream</button>
            <input
                value={value}
                type='number'
                onChange={(event) => setValue(parseInt(event.target.value))}
            />
            <button onClick={() => dispatch(iceCreamActions.restocked(value))}>
                Restock Ice Cream
            </button>
        </div>
    );
};

export default IceCreamView;
