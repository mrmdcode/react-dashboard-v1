import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';
import {useNavigate} from 'react-router-dom';


const MenuItem = ({IconElement,ItemName , children, ClickHandler , ShowSubset=""  , to="#"}) => {

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
                <span>{IconElement} {ItemName}</span> {children ? <IoIosArrowForward className="arrow-right"/> :null}
            </div>
            {/*<ul className={ShowSubset ? "item-subset-box show":"item-subset-box"}>*/}
            <ul className={ShowSubset === ItemName ? "item-subset-box show":"item-subset-box"}>
                {children}
            </ul>
        </li>
    )
}
export default MenuItem;