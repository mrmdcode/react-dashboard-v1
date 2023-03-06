import React,{useEffect} from 'react';
import {useNavigate,Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider";

const UnAuthableLayout = () => {
    const Navigate = useNavigate() ;
    const { token} =useStateContext();
    useEffect(()=>{
        if (token){
            Navigate('/dashboard');
        }
    },[]);
    return (
        <div>
            <Outlet/>
        </div>
    )
}
export default UnAuthableLayout;