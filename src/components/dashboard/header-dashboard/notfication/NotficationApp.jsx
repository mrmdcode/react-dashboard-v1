import React  from 'react';
import Message from "./Message";
import {BiBell} from "react-icons/bi";
import {BsArrowRight} from "react-icons/bs";
import {useStateContext} from "../../../../context/ContextProvider";

const NotficationApp = () => {
    const {setDashboardHeaderNotficationAppShow , dashboardHeaderNotficationAppShow} = useStateContext();
    const notfications =[
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
        {
            ImageUrl :"/user/1.jpg",
            ImageAlt : "username",
            Name : "mahdi kazemi",
            Message : "this is test message and spams text for mot text",
            LM : false , // last message
        },
    ];
    return (

        <div className="notfication-app">
            <div className="notfication-box" onClick={()=>setDashboardHeaderNotficationAppShow(!dashboardHeaderNotficationAppShow)} >
                <BiBell className="notfication-icon"/>
            </div>
            <div className={dashboardHeaderNotficationAppShow ? "notfication-result-box":"notfication-result-box hide"}>
                <div className="notfication-header">
                    Notfication
                    <span className="fe">
                                    clear all
                                </span>
                </div>
                <ul className="message-box">
                    {notfications.map((message,index)=><Message key={index} data={message}/>)}
                </ul>
                <div className="notfication-footer">
                    View more Notfication <BsArrowRight/>
                </div>
            </div>
        </div>
    )
}
export default NotficationApp;