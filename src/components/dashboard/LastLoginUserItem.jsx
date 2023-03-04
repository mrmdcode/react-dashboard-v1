import React from 'react';
import {useStateContext} from './../../context/ContextProvider'
import {BiDotsVerticalRounded} from "react-icons/bi";

const LastLoginUserItem = ({data}) => {
    const {ImageUrl , Name , Bio , TimeLogin} = data;
    const {appUrl} =useStateContext();
    return (
        <div className="last-login-user-item">
            <div className="left">
                <div className="img-user">
                    <img src={appUrl+ImageUrl} alt=""/>
                </div>
            </div>
            <div className="content">
                <div className="user-name">{Name}</div>
                <div className="bio">{Bio}</div>
            </div>
            <div className="right">
                <div className="time-login">{TimeLogin}</div>
                <div className="operation">
                    <BiDotsVerticalRounded/>
                </div>
            </div>
        </div>
    )
}
export default LastLoginUserItem;