import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useStateContext} from "../context/ContextProvider";

const Test2 = () => {
        const navigateTo = useNavigate()
    const {setcurrentUser , user } = useStateContext();
    console.log(user)
    return (
        <div>
            <input type="text" onChange={(e)=>{setcurrentUser(e.target.value)}} value={user}/>
            <button onClick={()=> navigateTo("/t1")}>go to t1</button>
        </div>
    )
}
export default Test2;