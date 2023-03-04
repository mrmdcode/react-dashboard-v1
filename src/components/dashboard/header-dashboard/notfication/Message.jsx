import React from 'react';
import {useStateContext} from "../../../../context/ContextProvider";

const Message = ({data}) => {
    const {appUrl} = useStateContext();
    const {ImageUrl , ImageAlt , Name , Message , LM} = data ;
    return (
        <div className={LM? "message last-msg" : "message"}>
            <div className="contact-img">
                <img src={appUrl+ImageUrl} alt={ImageAlt}/>
            </div>
            <div className="information-container">
                <h4>{Name}</h4>
                <p>{Message}</p>
            </div>
        </div>
    )
}
export default Message;