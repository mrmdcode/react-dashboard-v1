import React from 'react';
import BrandLogo from './../assets/img/large.png';
import {Outlet} from 'react-router-dom';
import NotficationApp from "./dashboard/header-dashboard/notfication/NotficationApp";
import SearchApp from "./dashboard/header-dashboard/SearchApp";
import AccountApp from "./dashboard/header-dashboard/AccountApp";
import SettingApp from "./dashboard/header-dashboard/SettingApp";
import AsideUserBox from "./dashboard/AsideUserBox";
import AsideMenuBox from "./dashboard/AsideMenuBox";





const AuthalbeLayout = () => {

    return (
        <div className="dashboard-container">
            {/*start dashboard navbar-header*/}
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
            {/*end dashboard navbar-header*/}


            {/*start dashboard aside*/}
            <div className="dashboard-aside">
                <AsideUserBox/>
                {/*AsideMenu*/}
                <AsideMenuBox/>


            </div>
            {/*end dashboard aside*/}

            {/*start dashboard content*/}
            <div className="dashboard-content">
                <Outlet/>
            </div>
            {/*end dashboard content*/}
        </div>
    )
}
export default AuthalbeLayout;