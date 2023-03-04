import React from 'react';
import LastActivityUserItem from "./LastActivityUserItem";
import {BiDotsVerticalRounded} from "react-icons/bi";

const LastActivity = () => {
    const lastuserlogin = [
        {
            ProjectName : "Oil_Back",
            ProjectStart : "2022/03/15",
            TimeWorking : "15 minutes",
            ProjectStatus : "in process",
            LastConmmit : "Create Dashboard Page",
            UserRole : "Programmer",
            CreatedAt : "2022/10/28 \n 15:33"
        },
        {
            ProjectName : "FakeApi",
            ProjectStart : "2022/08/15",
            TimeWorking : "25 minutes",
            ProjectStatus : "in process",
            LastConmmit : "Create Controller User",
            UserRole : "Programmer",
            CreatedAt : "2023/01/05 \n 14:53"
        },
        {
            ProjectName : "Virgool",
            ProjectStart : "2023/01/01",
            TimeWorking : "2 hours",
            ProjectStatus : "finished",
            LastConmmit : "create post ",
            UserRole : "Witer",
            CreatedAt : "2023/01/05 \n 22:30"
        },
        {
            ProjectName : "Virgool",
            ProjectStart : "2023/01/01",
            TimeWorking : "2 hours",
            ProjectStatus : "finished",
            LastConmmit : "create post ",
            UserRole : "Witer",
            CreatedAt : "2023/01/05 \n 22:30"
        },
        {
            ProjectName : "Virgool",
            ProjectStart : "2023/01/01",
            TimeWorking : "2 hours",
            ProjectStatus : "finished",
            LastConmmit : "create post ",
            UserRole : "Witer",
            CreatedAt : "2023/01/05 \n 22:30"
        },
    ]
    return (
        <div className="last-activity">
            <div className="header">
                <div className="title">Last Activity</div>
                <div className="operation">
                    <BiDotsVerticalRounded/>
                </div>
            </div>
            <div className="body">
                <table>
                    <thead>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Start Project</th>
                    <th>Time Working</th>
                    <th>Project Status</th>
                    <th>Last Commit</th>
                    <th>User Role</th>
                    <th>CreatedAt</th>
                    </thead>
                    <tbody>
                    {lastuserlogin.map((lastuserlogin,index)=><LastActivityUserItem key={index} index={index} data={lastuserlogin}/>)}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default LastActivity;