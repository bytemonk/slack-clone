import React from 'react';
import './Message.css';

function Message({ message, timestamp, user, userImage }) {
    return (
        <div className='message'>
            <img src={userImage} alt="https://appvital.com/images/profile/file-uploader-api-profile-avatar-2.jpg" />
            <div className="message__info">
                <h4>{user} <span className='message__timestamp'>{ new Date(timestamp?.toDate()).toUTCString() }</span></h4>
                <p>{message}</p>

            </div>
        </div>
    )
}

export default Message
