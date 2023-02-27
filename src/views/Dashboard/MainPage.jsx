import React from 'react';

import {BarAnalyzeBox, CircleAnalyzeBox} from "../../components/dashboard/AnalyzeBox";
const MainPage = () => {

return(
    <div className="main-container">
        <div className="header-page">
            <div className="analyze-container">
                <CircleAnalyzeBox name="Maximum Register Daily" value="60" mark="User">500</CircleAnalyzeBox>
                <BarAnalyzeBox name="New Mails" value={20}>1500</BarAnalyzeBox>
                <CircleAnalyzeBox name="Today Login User" value="6" mark="User">50</CircleAnalyzeBox>
                <BarAnalyzeBox name="Response Requests" value={100}>190</BarAnalyzeBox>

            </div>
        </div>
    </div>
)
}
export default MainPage;