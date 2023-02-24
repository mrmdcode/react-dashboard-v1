import React from 'react';
import {MdLockOutline,MdLogout} from 'react-icons/md';
import {VscAccount} from 'react-icons/vsc';
import {IoIosArrowDown} from 'react-icons/io';
import {useStateContext} from "../../../context/ContextProvider";

const AccountApp = () => {
    const {setDashboardHeaderAccountAppShow ,dashboardHeaderAccountAppShow} = useStateContext();
    return (
        <div className="account-app">
            <div className="account-box" onClick={()=>setDashboardHeaderAccountAppShow(!dashboardHeaderAccountAppShow)}>
                <img src="http://localhost:3000/user/1.jpg" alt="my img"/>
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
                    <li className="item"><MdLogout/>Logout</li>
                </ul>
            </div>
        </div>
    )
}
export default AccountApp;