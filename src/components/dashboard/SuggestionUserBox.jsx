import React from 'react';
import {useStateContext} from "./../../context/ContextProvider"

const SuggestionUserBox = () => {
    const {appUrl} = useStateContext();
    const SkillColor = ["c-1","c-2","c-3","c-4"];
    const MinNumber = 0;
    const MaxNumber = 3;
    const RandomNumber = MinNumber + (Math.random() * (MaxNumber - MinNumber));
    return (
        <div className="user-box">
            <img src={appUrl+"/user/1.jpg"} alt="user 1" className="user-img"/>
            <div className="user-detail">
                <p className="user-name">Mahdi Kazemi</p>
                <p className="user-email">dr.mahdikazemizade@gmail.com</p>
                <p className={"user-skill " + SkillColor[Math.round(RandomNumber)]}>Backend Developer</p>
            </div>
            <span className="user-busy"></span>
        </div>
    )
}
export default SuggestionUserBox;