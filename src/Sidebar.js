import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import image from './images/2.jpg';
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [{user},dispach]=useStateValue();    
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
           
            <SidebarRow Icon={LocalHospitalIcon}
             title="COVID-19 Information Center"/>
              <SidebarRow Icon={EmojiFlagsIcon}
             title="Pages"/>
              <SidebarRow Icon={PeopleIcon}
             title="Friends"/>
              <SidebarRow Icon={ChatIcon}
             title="Messenger"/>
              <SidebarRow Icon={StorefrontIcon}
             title="Marketplace"/>
              <SidebarRow Icon={VideoLibraryIcon}
             title="Video"/>
             <SidebarRow Icon={ExpandMoreIcon}
             title="MoreItems"/>

        </div>
    )
}

export default Sidebar
