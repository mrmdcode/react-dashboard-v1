import React from 'react';
import {useStateContext} from "./../../context/ContextProvider"

const SuggestionUserBox = ({FullName , Email ,Skill ,UserStatus}) => {
    const {appUrl} = useStateContext();
    const SkillColor = ["c-1","c-2","c-3","c-4"];
    const MinNumber = 0;
    const MaxNumber = 3;
    const RandomNumber = MinNumber + (Math.random() * (MaxNumber - MinNumber));
    return (
        <div className="user-box">
            <img src={appUrl+"/user/1.jpg"} alt="user 1" className="user-img"/>
            <div className="user-detail">
                <p className="user-name">{FullName}</p>
                <p className="user-email">{Email}</p>
                <p className={"user-skill " + SkillColor[Math.round(RandomNumber)]}>{Skill}</p>
            </div>
            <span className={"user-busy "+UserStatus}></span>
        </div>
    )
}
export default SuggestionUserBox;