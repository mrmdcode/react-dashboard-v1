import React from 'react';
import {useStateContext} from "../context/ContextProvider";

const Test1 = () => {
    const {user} = useStateContext();
    return (
        <div>
            {user}
        </div>
    )
}
export default Test1;