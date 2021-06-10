import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import { TodayTwoTone } from '@material-ui/icons';


function Post({profilepic , image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar className="post_avatar" src={profilepic}
                />
              
           
            <div className="post_temp">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
             </div>
             
            </div> 

            <div className="post_bottom">
                <p>{message}</p>

            </div>

            <div className="post_img">
             <img src={image} alt=""/>
            </div>
            <div className="post_options">
            <div className="post_option">
            <ThumbUpIcon/>
                <p>like</p>
            </div>
            <div className="post_option">
            <ChatBubbleIcon/>
                <p>Comment</p>
            </div>
            <div className="post_option">
            < NearMeIcon/>
                <p>Share</p>
            </div>
            <div className="post_option">
            < AccountCircleIcon/>
            <ExpandMoreIcon/>
            </div>

            </div>    
            
        </div>
    );
}

export default Post;
