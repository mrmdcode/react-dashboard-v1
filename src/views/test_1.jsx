import React from 'react';
import {useStateContext} from "../context/ContextProvider";

const Test1 = () => {
    const {user} = useStateContext();
    return (
        <div>
            <h3>say hello</h3>
            {user}
        </div>
    )
}
export default Test1;