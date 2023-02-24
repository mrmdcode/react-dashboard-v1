import React from 'react';
import {BiSearch} from 'react-icons/bi';
import {useStateContext} from "../../../context/ContextProvider";

const SearchApp = () => {
    const {setDashboardHeaderSearchAppShow, dashboardHeaderSearchAppShow} = useStateContext();
    return (
        <div className="search-app">
            <div className="search-box" onFocus={()=>setDashboardHeaderSearchAppShow(true)} onBlur={()=>setDashboardHeaderSearchAppShow(false)}>
                <input className="search-input" placeholder="search" type="text" name="" id=""/>
                <BiSearch className="search-icon"/>
            </div>
            <div className={dashboardHeaderSearchAppShow ? "search-result-box" : "search-result-box hide"}>
            </div>
        </div>
    )
}
export default SearchApp;