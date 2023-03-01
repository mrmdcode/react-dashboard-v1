import React from 'react';
import {useStateContext} from "./../../context/ContextProvider"

const SuggestionUserBox = () => {
    const {appUrl} = useStateContext();
    return (
        <div className="user-box">
            <img src={appUrl+"/user/1.jpg"} alt="user 1" className="user-img"/>
            <div className="user-detail">
                <p className="user-name">Mahdi Kazemi</p>
                <p className="user-email">dr.mahdikazemizade@gmail.com</p>
                <p className="user-skill c-1">Backend Developer</p>
            </div>
            <span className="user-busy"></span>
        </div>
    )
}
export default SuggestionUserBox;