import React from 'react';
import {useStateContext} from "../../context/ContextProvider";
import Background from "./../../assets/img/Login-Page-Background.jpg"
import {SlSocialFacebook, SlSocialGithub, SlSocialGoogle, SlSocialInstagram, SlSocialLinkedin} from "react-icons/sl";

const Login = () => {
    const {setTitle} =useStateContext();
    setTitle("Login Page")
    return (
        <div className="login-page" style={{backgroundImage:`url(${Background})`}}>
            <div className="login-container">
                <ul className="header">
                    <li><SlSocialFacebook/></li>
                    <li><SlSocialGithub/></li>
                    <li><SlSocialGoogle/></li>
                    <li><SlSocialInstagram/></li>
                    <li><SlSocialLinkedin/></li>
                </ul>
                <div className="content">
                    <input type="text" name="Username" id="UserName" placeholder="username"/>
                    <input type="password" name="password" id="password" placeholder="password"/>
                    <span>
                        <span>
                            <label for="RemmberMe">remmber me</label>
                            <input type="checkbox" name="RemmberMe" id="RemmberMe"/>
                        </span>
                        <span>
                            <label htmlFor="ExitAfterClose">exit after close</label>
                            <input type="checkbox" name="ExitAfterClose" id="ExitAfterClose"/>
                        </span>
                    </span>
                    <button>
                        Login
                    </button>
                </div>
                <div className="footer"></div>
            </div>
        </div>
    )
}
export default Login;