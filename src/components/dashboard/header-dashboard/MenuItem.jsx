import React,{useEffect} from 'react';
// import {useNavigate} from 'react-router-dom';


const MenuItem = ({ItemName , children, ClickHandler , ShowSubset=false , to}) => {

    return (
        <li className="item menu-item">
            <div className="item-box" onClick={ClickHandler}>
                {ItemName}
            </div>
            <ul className={ShowSubset ? "item-subset-box show":"item-subset-box"}>
                {children}
            </ul>
        </li>
    )
}
export default MenuItem;