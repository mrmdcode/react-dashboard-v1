import React from 'react';
import Message from "./Message";
import {BiBell} from "react-icons/bi";
import {BsArrowRight} from "react-icons/bs";

const NotficationApp = () => {

    return (

        <div className="notfication-app">
            <div className="notfication-box">
                <BiBell className="notfication-icon"/>
            </div>
            <div className="notfication-result-box hide">
                <div className="notfication-header">
                    Notfication
                    <span className="fe">
                                    clear all
                                </span>
                </div>
                <ul className="message-box">
                    <Message imgsrc="http://localhost:3000/user/1.jpg" imgalt="username" name="mahdi kazemi" message="this is test message and spams text for mot text" lm={true}/>
                    <Message imgsrc="http://localhost:3000/user/1.jpg" imgalt="username" name="mahdi kazemi" message="this is test message and spams text for mot text" lm={false}/>
                    <Message imgsrc="http://localhost:3000/user/1.jpg" imgalt="username" name="mahdi kazemi" message="this is test message and spams text for mot text" lm={false}/>
                    <Message imgsrc="http://localhost:3000/user/1.jpg" imgalt="username" name="mahdi kazemi" message="this is test message and spams text for mot text" lm={false}/>
                    <Message imgsrc="http://localhost:3000/user/1.jpg" imgalt="username" name="mahdi kazemi" message="this is test message and spams text for mot text" lm={false}/>
                    <Message imgsrc="http://localhost:3000/user/1.jpg" imgalt="username" name="mahdi kazemi" message="this is test message and spams text for mot text" lm={false}/>
                </ul>
                <div className="notfication-footer">
                    View more Notfication <BsArrowRight/>
                </div>
            </div>
        </div>
    )
}
export default NotficationApp;