import React from 'react';
import {useStateContext} from "../../context/ContextProvider";
import MenuItem from "./header-dashboard/MenuItem";
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
            <MenuItem ItemName="dashboard"/>
            <li className="menu-title">
                Users
            </li>
            <MenuItem ItemName="List Users"/>
            {/*<MenuItem ItemName="New Users" ClickHandler={ClickHandler} ShowSubset={dashboardAsideSubset} StatusSabset={dashboardAsideSubsetS} >*/}
            <MenuItem ItemName="New Users" ClickHandler={ClickHandler} ShowSubset={dashboardAsideSubset}  >
                <MenuItem ItemName="role one"/>
                <MenuItem ItemName="role two"/>
                <MenuItem ItemName="role three"/>

            </MenuItem>
            <li className="menu-title">
                pay
            </li>
            <MenuItem ItemName="deposit"/>
            <MenuItem ItemName="whihraw"  ClickHandler={ClickHandler} ShowSubset={dashboardAsideSubset}>
                <MenuItem ItemName="to my account"/>

            </MenuItem>

            <li className="menu-title">
                pages
            </li>
            <MenuItem ItemName="test - 1" to="/test_1"/>




        </ul>
    )
}
export default AsideMenuBox;