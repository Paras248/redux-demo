import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <h2>List Of Users - </h2>
            <ul>
                {user.loading && <h4>Loading...</h4>}
                {!user.loading && user.error ? <p>{user.error}</p> : null}
                {!user.loading && user.users.length > 0
                    ? user.users.map((user) => {
                          return <li key={user.id}>{user}</li>;
                      })
                    : null}
            </ul>
        </div>
    );
};

export default UserView;
