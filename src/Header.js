import React from 'react'
import web from './images/logo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
 import {Avatar, IconButton} from "@material-ui/core";
//import {Avatar} from "@material-ui/core";
 import AddIcon from '@material-ui/icons/Add';
import  NotificationsActiveIcon  from '@material-ui/icons/NotificationsActive';
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "./StateProvider";

function Header() {
    const [{user},dispach]=useStateValue();
    return (
        <div className="header">
            <div className="header_left">
                <img src={web} alt=""/>
                <div className="header_input">
                <SearchIcon/>
                <input type="text" placeholder="search"/>
                </div>
             </div>
             <div className="header_center">
                 <div className="header_option header-option-active">
                     <HomeIcon fontSize="large"/>     
                 </div>
                 <div className="header_option">
                     <FlagIcon fontSize="large"/>     
                 </div> 
                 <div className="header_option">
                < SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header_option">
                < StorefrontIcon fontSize="large"/>
                </div>
                <div className="header_option">
                < SupervisorAccountIcon fontSize="large"/>
                </div>

             </div>
             <div className="header_right">
                <div className="header_info">
                    <Avatar  src={user.photoURL}/>
                  <h4>{user.displayName}</h4>
                </div>
                <IconButton  >
                    <AddIcon className="Icon_button"/>
                </IconButton>
                <IconButton>
                    <ForumIcon className="Icon_button"/>
                </IconButton>
                <IconButton  >
                    <NotificationsActiveIcon className="Icon_button"/>
                </IconButton>
                <IconButton >
                    <ExpandMoreIcon className="Icon_button"/>
                </IconButton>
             </div>
             
        </div>
    );
}

export default Header;
