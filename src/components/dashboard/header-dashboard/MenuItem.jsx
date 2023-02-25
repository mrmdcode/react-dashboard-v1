import React from 'react';
import {useNavigate} from 'react-router-dom';


const MenuItem = ({ItemName , children, ClickHandler , ShowSubset=""  , to}) => {

    const navigateTo = useNavigate();
    const clickHandler =()=>{
        if(!children) {
            navigateTo(to);
        }
        else {
            ClickHandler(ItemName);
        }
    }
    return (
        <li className="item menu-item">
            <div className="item-box" onClick={clickHandler}>
                {ItemName}
            </div>
            {/*<ul className={ShowSubset ? "item-subset-box show":"item-subset-box"}>*/}
            <ul className={ShowSubset === ItemName ? "item-subset-box show":"item-subset-box"}>
                {children}
            </ul>
        </li>
    )
}
export default MenuItem;