import React from 'react';
import {ImSpinner3} from 'react-icons/im';
import {useNavigate} from 'react-router-dom';
const NotFound = () => {
    const navigateTo = useNavigate();
    setTimeout(()=>navigateTo("dashboard") , 3000)

    return(
        <div className="not-found-page">
            <p>404 - Not Found This Page</p>
                <div className="spiner">
                    <ImSpinner3 />
                </div>

        </div>
    );
}
export default NotFound;