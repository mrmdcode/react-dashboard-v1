import React from 'react';
import LastLoginUserItem from "./LastLoginUserItem";
import {BiDotsVerticalRounded} from "react-icons/bi";

const LastLogin = () => {
    const lastuserlogin =[
        {
            ImageUrl :"/user/1.jpg",
            Name : "Mahdi Kazemi zade",
            Bio :"hello world is begin programming",
            TimeLogin : "10:50",
        },
        {
            ImageUrl :"/user/1.jpg",
            Name : "Mahdi Kazemi zade",
            Bio :"hello world is begin programming",
            TimeLogin : "10:50",
        },
        {
            ImageUrl :"/user/1.jpg",
            Name : "Mahdi Kazemi zade",
            Bio :"hello world is begin programming",
            TimeLogin : "10:50",
        },
        {
            ImageUrl :"/user/1.jpg",
            Name : "Mahdi Kazemi zade",
            Bio :"hello world is begin programming",
            TimeLogin : "10:50",
        },
    ];
    return (
        <div className="last-login">
            <div className="header">
                <div className="title">
                    last Login
                </div>
                <div className="operation">
                    <BiDotsVerticalRounded/>
                </div>
            </div>
            <div className="body">
                {lastuserlogin.map((lastuserlogin,index)=><LastLoginUserItem key={index} data={lastuserlogin}/>)}
            </div>
        </div>
    )
}
export default LastLogin;
