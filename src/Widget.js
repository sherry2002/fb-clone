import React from 'react';
import './Widget.css';
import {Avatar} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import FacebookIcon from '@material-ui/icons/Facebook';

function Widget({profilepic , image, username, content, message}) {
    return (
        <div>
      <div className="widget">
            <div className="widget_top">
                <Avatar className="widget_avatar" src={profilepic}
                />
              
           
            <div className="widget_temp">
            <h3>{username}</h3>
          <p>{content}</p>
             </div>
             <div className="wid_icon">
            <FacebookIcon></FacebookIcon>
            </div>
            </div> 
            

            <div className="widget_bottom">
                <p>{message}</p>

            </div>
            

            <div className="widget_img">
             <iframe src={image} alt=""
              width="300px"
              height="150px"  
              style={{border:"none",alignItems:"center",overflow:"hidden" ,controls:"false"}}          
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"> </iframe>
            </div>
            <div className="widget_options">
            <div className="widget_option">
            <ThumbUpIcon/>
                <p>like</p>
            </div>
            <div className="widget_option">
            <ChatBubbleIcon/>
                <p>Comment</p>
            </div>
            <div className="widget_option">
            < NearMeIcon/>
                <p>Share</p>
            </div>
           

            </div>    
            
        </div>
            
        </div>
    );
}

export default Widget;
