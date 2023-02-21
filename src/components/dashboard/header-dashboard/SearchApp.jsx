import React from 'react';
import {BiSearch} from 'react-icons/bi';

const SearchApp = () => {

    return (
        <div className="search-app">
            <div className="search-box">
                <input className="search-input" placeholder="search" type="text" name="" id=""/>
                <BiSearch className="search-icon" onClick={console.log("hi")}/>
            </div>
            <div className="search-result-box hide">
            </div>
        </div>
    )
}
export default SearchApp;