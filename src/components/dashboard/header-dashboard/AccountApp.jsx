import React from 'react';
import {MdLockOutline,MdLogout} from 'react-icons/md';
import {VscAccount} from 'react-icons/vsc';
import {IoIosArrowDown} from 'react-icons/io';
import {useNavigate} from "react-router-dom";
import {useStateContext} from "../../../context/ContextProvider";

const AccountApp = () => {
    const {Logout} =useStateContext()
    const Navigate = useNavigate();
    const {setDashboardHeaderAccountAppShow ,dashboardHeaderAccountAppShow,appUrl} = useStateContext();
    const HandlerLogOut =()=>{
        Logout();
        Navigate('/login');
    }
    return (
        <div className="account-app">
            <div className="account-box" onClick={()=>setDashboardHeaderAccountAppShow(!dashboardHeaderAccountAppShow)}>
                <img src={appUrl+"/user/1.jpg"} alt="my img"/>
                mahdi kazemi
                <IoIosArrowDown/>
            </div>
            <div className={dashboardHeaderAccountAppShow ? "account-result-box":"account-result-box hide"}>
                <div className="account-header">
                    welcome !
                </div>
                <ul className="account-items">
                    <li className="item"><VscAccount/>My account</li>
                    <li className="item"><MdLockOutline/>Look Screen</li>
                    <li className="britem"></li>
                    <li className="item" onClick={HandlerLogOut}><MdLogout/>Logout</li>
                </ul>
            </div>
        </div>
    )
}
export default AccountApp;