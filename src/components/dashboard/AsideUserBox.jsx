import React from 'react';
import {FiSettings} from 'react-icons/fi';
import {MdLockOutline,MdLogout} from 'react-icons/md';

const AsideUserBox = () => {
    return (
        <div className="user-box">
            <div className="user-img">
                <img src="http://localhost:3000/user/1.jpg" alt="my pic"/>
            </div>
            <h2 className="user-fullname">mahdi kazemi zade</h2>
            <div className="user-position">Backend Developer</div>
            <ul className="user-operation">
                <li>
                    <FiSettings/>
                </li>
                <li>
                    <MdLockOutline/>
                </li>
                <li>
                    <MdLogout/>
                </li>
            </ul>
        </div>
    )
}
export default AsideUserBox;