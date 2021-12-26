import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import SidebarOptions from '../sidebarOptions/SidebarOptions';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "../../firebase/firebase";
import { useStateValue } from '../../dataProvider/StateProvider';
function Sidebar() {

    const [{ user }] = useStateValue();
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ));
    }, []);

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack User</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
            <SidebarOptions Icon={AlternateEmailIcon} title="Mentions & reactions" />
            <SidebarOptions Icon={DraftsIcon} title="Saved items" />
            <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOptions Icon={AppsIcon} title="Apps" />
            <SidebarOptions Icon={FileCopyIcon} title="File browser" />
            <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOptions Icon={AddIcon} addChannelOption={true} title="Add channel" />

            
            {channels.map(channel => (
                <SidebarOptions title={channel.name} id={channel.id}/>
    
            ))}

        </div>
    )
}

export default Sidebar
