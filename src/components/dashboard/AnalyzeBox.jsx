import React from 'react';
import {BiDotsVerticalRounded} from "react-icons/bi";
import {Progress} from "antd";
import "./../../assets/css/dashboard/analyze-box.css"


const CircleAnalyzeBox = ({name , value , mark=null,children }) => {

    return (
        <div className="analyze-box chart-circle">
            <div className="header-box">
                <div className="title">{name}</div>
                <div className="operation">
                    <BiDotsVerticalRounded/>
                </div>
            </div>
            <div className="content-box">
                <div className="circle-chart">
                    {mark && <Progress type="circle" percent={value} format={(percent)=>`${percent} ${mark}`}/>}
                    {!mark && <Progress type="circle" percent={value}/>}
                </div>
                <div className="chart-detail">
                    {children}
                </div>
            </div>
        </div>
    )
}

const BarAnalyzeBox = ({name , value , showInfo = false ,children}) => {

    return (
        <div className="analyze-box chart-bar">
            <div className="header-box">
                <div className="title">{name}</div>
                <div className="operation">
                    <BiDotsVerticalRounded/>
                </div>
            </div>
            <div className="content-box">
                <div className="bar-chart">
                    <Progress percent={value} showInfo={showInfo}/>
                </div>
                <div className="chart-detail">
                    {children}
                </div>
            </div>
        </div>
    )
}
export {CircleAnalyzeBox,BarAnalyzeBox};