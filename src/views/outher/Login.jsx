import React,{useState} from 'react';
import {useStateContext} from "../../context/ContextProvider";
import Background from "./../../assets/img/Login-Page-Background.jpg"
import {SlSocialFacebook, SlSocialGithub, SlSocialGoogle, SlSocialInstagram, SlSocialLinkedin} from "react-icons/sl";

const Login = () => {
    const {setTitle} =useStateContext();
    const [loginData, setLoginData] = useState({
        username:"",
        password:"",
        RemmberMe:false,
        ExitAfterClose:false,
    });
    const HandlerInputLoginData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginData({...loginData,[name]:value});
    }
    const HandlercheckboxLoginData = (e) => {
        const name = e.target.name;
        const checked = e.target.checked;
        setLoginData({...loginData,[name]:checked});

    }
    const HandlerSendData = () => {
        console.log(loginData)
        setLoginData({
            username:"",
            password:"",
            RemmberMe:false,
            ExitAfterClose:false,
        });
        
    }
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
                    <input type="text" name="username" id="username" placeholder="username" onChange={HandlerInputLoginData} value={loginData.username}/>
                    <input type="password" name="password" id="password" placeholder="password" onChange={HandlerInputLoginData} value={loginData.password}/>
                    <span>
                        <span>
                            <label htmlFor="RemmberMe">remmber me</label>
                            <input type="checkbox" name="RemmberMe" id="RemmberMe" onChange={HandlercheckboxLoginData} checked={loginData.RemmberMe}/>
                        </span>
                        <span>
                            <label htmlFor="ExitAfterClose">exit after close</label>
                            <input type="checkbox" name="ExitAfterClose" id="ExitAfterClose" onChange={HandlercheckboxLoginData} checked={loginData.ExitAfterClose}/>
                        </span>
                    </span>
                    <button onClick={HandlerSendData}>
                        Login
                    </button>
                </div>
                <div className="footer"></div>
            </div>
        </div>
    )
}
export default Login;