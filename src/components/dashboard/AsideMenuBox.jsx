import React from 'react';
import {useStateContext} from "../../context/ContextProvider";
import MenuItem from "./header-dashboard/MenuItem";
const AsideMenuBox = () => {
const {setDashboardAsideUsersSubset,dashboardAsideUsersSubset} = useStateContext();

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
            <MenuItem ItemName="New Users" ClickHandler={() => setDashboardAsideUsersSubset(!dashboardAsideUsersSubset)} ShowSubset={dashboardAsideUsersSubset}>
                <MenuItem ItemName="role one"/>
                <MenuItem ItemName="role two"/>
                <MenuItem ItemName="role three"/>

            </MenuItem>




        </ul>
    )
}
export default AsideMenuBox;