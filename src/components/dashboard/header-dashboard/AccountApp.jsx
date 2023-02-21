import React from 'react';
import {MdLockOutline,MdLogout} from 'react-icons/md';
import {VscAccount} from 'react-icons/vsc';
import {IoIosArrowDown} from 'react-icons/io';

const AccountApp = () => {

    return (
        <div className="account-app">
            <div className="account-box">
                <img src="http://localhost:3000/user/1.jpg" alt="my img"/>
                mahdi kazemi
                <IoIosArrowDown/>
            </div>
            <div className="account-result-box hide">
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