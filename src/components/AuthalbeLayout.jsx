import React from 'react';
import BrandLogo from './../assets/img/large.png';
// import {Outlet} from 'react-router-dom';
import NotficationApp from "./dashboard/header-dashboard/notfication/NotficationApp";
import SearchApp from "./dashboard/header-dashboard/SearchApp";
import AccountApp from "./dashboard/header-dashboard/AccountApp";
import SettingApp from "./dashboard/header-dashboard/SettingApp";

const AuthalbeLayout = () => {

    return (
        <div className="dashboard-container">
            <div className="navbar-dashboard">
                <div className="brand-logo">
                    <img src={BrandLogo} alt="mrmdcode-dashboard"/>
                </div>
                <div className="title-page">
                    dashboard
                </div>
                <SettingApp/>
                <AccountApp/>
                <NotficationApp/>
                <SearchApp/>

            </div>
        </div>
    )
}
export default AuthalbeLayout;