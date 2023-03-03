import React from 'react';
import {BarAnalyzeBox, CircleAnalyzeBox} from "../../components/dashboard/AnalyzeBox";
import SuggestionUserBox from "../../components/dashboard/SuggestionUserBox";
const MainPage = () => {

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
            <SuggestionUserBox FullName="Mahdi kazemi zade" Email="dr.mahdikazemizade84@gmail.com" Skill="Backend Developer" UserStatus="busy"/>
            <SuggestionUserBox FullName="Mahdi kazemi zade" Email="dr.mahdikazemizade84@gmail.com" Skill="Backend Developer" UserStatus="busy"/>
            <SuggestionUserBox FullName="Mahdi kazemi zade" Email="dr.mahdikazemizade84@gmail.com" Skill="Backend Developer" UserStatus="busy"/>
            <SuggestionUserBox FullName="Mahdi kazemi zade" Email="dr.mahdikazemizade84@gmail.com" Skill="Backend Developer" UserStatus="busy"/>
        </div>
    </div>
)
}
export default MainPage;