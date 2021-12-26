import React from 'react';
import './SidebarOptions.css';
import { useNavigate  } from 'react-router-dom';
import db from '../../firebase/firebase';

function SidebarOptions({ Icon, title, id, addChannelOption }) {
    
    const history = useNavigate ();

    const selectChannel = () => {
        if (id) {
            history(`/room/${id}`);
        } else {
            history(title);
        }
    };

    const addChannel = () => {
        console.log("Add Channel");
        const channelName = prompt('Please enter the channel name');
        if (channelName) {
            db.collection('rooms').add({
                name:channelName,
            })
        }
    };

    return (
        <div className='sidebarOptions' onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOptions__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                    <h3 className='sidebarOptions__channel'>
                        <span className='sidebarOptions__hash'># {title}</span>
                    </h3>
            )
                
            }
        </div>
    )
}

export default SidebarOptions
