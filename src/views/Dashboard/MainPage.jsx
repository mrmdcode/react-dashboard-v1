import React from 'react';
import {BiDotsVerticalRounded} from 'react-icons/bi';

const MainPage = () => {

return(
    <div className="main-container">
        <div className="header-page">
            <div className="analyze-container">
                <div className="analyze-box">
                    <div className="header-box">
                        <div className="title">New User</div>
                        <div className="operation">
                            <BiDotsVerticalRounded/>
                        </div>
                    </div>
                    <div className="content-box">
                        <div className="circle-chart">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="chart-detail">
                            2550
                        </div>
                    </div>
                </div>
                <div className="analyze-box">analizesssss</div>
                <div className="analyze-box">analizesssss</div>
                <div className="analyze-box">analizesssss</div>
            </div>
        </div>
    </div>
)
}
export default MainPage;