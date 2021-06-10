import React,{useState}   from 'react';
import { Avatar} from '@material-ui/core';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import React,{useState}  from 'react';
import {useStateValue} from './StateProvider';
import firebase from 'firebase';
import db from './Firebase'

function MessageSender() {
    const [{user},dispach]=useStateValue();
     const [input , setInput ]= useState("");
     const [imageurl , setImage ]= useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();


        db.collection("posts").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilepic:user.photoURL,
            username:user.displayName,
            image:imageurl,

        });
      
        setInput('');
        setImage('');
    }; 

    return (
        <div className="messagesender">
        
            <div className="message_top">
                <Avatar src ={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                     style={{width:"75%"}} className="message_input" placeholder={`"What's on your mind",${user.displayName}`} 
                    type="text" />
                    <input 
                    value={imageurl}
                    onChange={(e)=> setImage(e.target.value)}
                     style={{width:"25%"}} placeholder="Image URL ( )" 
                    type="text" />
                    <button onClick ={handleSubmit} type="submit">
                        Hidden submit
                        </button>
                </form>
             </div>  

             <div className="message_bottom">
                 <div className="messagesender_option">
                 <VideocamIcon className="Icon" style={{color:"red"}}/>
                 <h2>Live/video</h2>
                 </div>
                 <div className="messagesender_option">
                 <PhotoLibraryIcon className="Icon" style={{color:"green"}}/>
                  <h2>Photo/Video</h2>   
                  </div> 
                  <div className="messagesender_option">
                 <InsertEmoticonIcon className="Icon" style={{color:"orange"}}/>
                 <h2>Feeling/Activity</h2> 
                 </div>
                 
                  
             </div>  
            
        </div>
    );
}

export default MessageSender;
