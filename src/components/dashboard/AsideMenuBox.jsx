import React from 'react';
import {useStateContext} from "../../context/ContextProvider";
import MenuItem from "./header-dashboard/MenuItem";
import {RiDashboardLine,RiUserAddFill } from 'react-icons/ri';
import {SlWallet} from 'react-icons/sl';
import {BsWallet2} from 'react-icons/bs';
import {FaUserFriends} from 'react-icons/fa';
const AsideMenuBox = () => {

    const {setDashboardAsideSubset,dashboardAsideSubset ,setDashboardAsideSubsetS ,dashboardAsideSubsetS} = useStateContext();

    const ClickHandler = (ItemName) => {

        setDashboardAsideSubsetS();
        if (!dashboardAsideSubsetS){
            setDashboardAsideSubset(ItemName);
        }
        else{
            setDashboardAsideSubset("")
        }
    };
    return (
        <ul className="menu-box">
            <li className="menu-title">
                Navigation
            </li>
            <MenuItem IconElement={<RiDashboardLine/>} ItemName={ "dashboard"} to="/dashboard/"/>
            <li className="menu-title">
                Users
            </li>
            <MenuItem IconElement={<FaUserFriends/>} ItemName="List Users" to="/dashboard/users/list-users"/>
            <MenuItem IconElement={<RiUserAddFill/>} ItemName="New Users" ClickHandler={ClickHandler} ShowSubset={dashboardAsideSubset}  >
                <MenuItem ItemName="Admin" to="/dashboard/create-user/admin"/>
                <MenuItem ItemName="Shop Manager" to="/dashboard/create-user/shop-manager"/>
                <MenuItem ItemName="Writer" to="/dashboard/create-user/writer"/>
                <MenuItem ItemName="SEO Dev" to="/dashboard/create-user/SEO-Dev"/>
                <MenuItem ItemName="normal" to="/dashboard/create-user/normal"/>

            </MenuItem>
            <li className="menu-title">
                pay
            </li>
            <MenuItem IconElement={<SlWallet/>} ItemName="deposit"/>
            <MenuItem IconElement={<BsWallet2/>} ItemName="whihraw"  ClickHandler={ClickHandler} ShowSubset={dashboardAsideSubset}>
                <MenuItem ItemName="Main Account" to="/dashboard/deposit/main-account"/>
                <MenuItem ItemName="Create New Deposit Account" to="/dashboard/deposit/create-account"/>

            </MenuItem>

            <li className="menu-title">
                pages
            </li>
            <MenuItem ItemName="test - 1" to="/t1"/>
            <MenuItem ItemName="test - 2" to="/t2"/>
            <MenuItem ItemName="not found" to="/*"/>




        </ul>
    )
}
export default AsideMenuBox;