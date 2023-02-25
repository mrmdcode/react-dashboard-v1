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
            <MenuItem IconElement={<RiDashboardLine/>} ItemName={ "dashboard"}/>
            <li className="menu-title">
                Users
            </li>
            <MenuItem IconElement={<FaUserFriends/>} ItemName="List Users"/>
            <MenuItem IconElement={<RiUserAddFill/>} ItemName="New Users" ClickHandler={ClickHandler} ShowSubset={dashboardAsideSubset}  >
                <MenuItem ItemName="role one"/>
                <MenuItem ItemName="role two"/>
                <MenuItem ItemName="role three"/>

            </MenuItem>
            <li className="menu-title">
                pay
            </li>
            <MenuItem IconElement={<SlWallet/>} ItemName="deposit"/>
            <MenuItem IconElement={<BsWallet2/>} ItemName="whihraw"  ClickHandler={ClickHandler} ShowSubset={dashboardAsideSubset}>
                <MenuItem ItemName="to my account"/>

            </MenuItem>

            <li className="menu-title">
                pages
            </li>
            <MenuItem ItemName="test - 1" to="/t1"/>




        </ul>
    )
}
export default AsideMenuBox;