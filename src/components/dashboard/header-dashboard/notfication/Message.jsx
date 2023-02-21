import React from 'react';

const Message = ({imgsrc , imgalt , name , message , lm}) => {

    return (
        <div className={lm? "message last-msg" : "message"}>
            <div className="contact-img">
                <img src={imgsrc} alt={imgalt}/>
            </div>
            <div className="information-container">
                <h4>{name}</h4>
                <p>{message}</p>
            </div>
        </div>
    )
}
export default Message;