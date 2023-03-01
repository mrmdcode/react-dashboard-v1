import React from 'react';
import {BarAnalyzeBox, CircleAnalyzeBox} from "../../components/dashboard/AnalyzeBox";
import {useStateContext} from "./../../context/ContextProvider"
const MainPage = () => {
    const {appUrl} = useStateContext();

return(
    <div className="main-container">
        <div className="analyze-container">
            <CircleAnalyzeBox name="Maximum Register Daily" value="60" mark="User">500</CircleAnalyzeBox>
            <BarAnalyzeBox name="New Mails" value={20}>1500</BarAnalyzeBox>
            <CircleAnalyzeBox name="Today Login User" value="6" mark="User">50</CircleAnalyzeBox>
            <BarAnalyzeBox name="Response Requests" value={100}>190</BarAnalyzeBox>
        </div>
        <div className="chart-container">
            <div className="chart-box"></div>
            <div className="chart-box"></div>
            <div className="chart-box"></div>
        </div>
        <div className="user-suggestion-box">
            <div className="user-box">
                <img src={appUrl+"/user/1.jpg"} alt="user 1" className="user-img"/>
                <div className="user-detail">
                    <p className="user-name">Mahdi Kazemi</p>
                    <p className="user-email">dr.mahdikazemizade@gmail.com</p>
                    <p className="user-skill c-1">Backend Developer</p>
                </div>
                <span className="user-busy"></span>
            </div>
            <div className="user-box"></div>
            <div className="user-box"></div>
            <div className="user-box"></div>
        </div>
    </div>
)
}
export default MainPage;