import React from 'react';
import './Widgets.css';
import background from './images/4.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import WarningIcon from '@material-ui/icons/Warning';
import Widget from './Widget';
import {Avatar} from '@material-ui/core';

function Widgets() {
    return (
        <div className="widgets">
          
            {/* <iframe
            src="https://www.facebook.com/plugins/
            page.php?href=https%3A%2F%2www.facebook.com%
            2FCleverProgrammerr%2F&tabs=timeline&width340
            &height=1500&small_header=false%
            adapt_container_width=true&hide_cover
            =false&show_facepile=true&appId"
            width="340px"
            height="100px"  
            style={{border:"none",overflow:"hidden"}}          
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            >
            </iframe> */}
            
           
            <div className="wid1">
                
            <div className="wid2"
            ><div className="wid_av">
               <Avatar className="widget_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ld1k_h1IzsFVZjhmHdUOvC9KiUA6458rIQ&usqp=CAU"
                />
              <h2> Roborto progremmmer</h2></div>
                <p>
                  Do you want to master React JS and learn how to make an income with your new skills?
                </p>
                <div className="btn">
                  <div className="btn1">
                  
                <button  ><FacebookIcon></FacebookIcon> <div className="btn2"> Like </div></button>
                </div>
                <div className="btn1">
                
                <button><WarningIcon></WarningIcon> <div className="btn2">  Learn More</div></button>
                </div>
               </div>
            </div>

            </div>
            <Widget
       profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ld1k_h1IzsFVZjhmHdUOvC9KiUA6458rIQ&usqp=CAU"
       message="how's the day?"
       content="hoe the dat"
       username="sunil"
       image="https://www.youtube.com/embed/6MyAOqrPACY"
       />
       
       <Widget
       profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ld1k_h1IzsFVZjhmHdUOvC9KiUA6458rIQ&usqp=CAU"
       message="how's the day?"
       content="hoe the dat"
       username="sunil"
       image="https://www.youtube.com/embed/VfGv-u6I2gE"
       />
         <Widget
       profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ld1k_h1IzsFVZjhmHdUOvC9KiUA6458rIQ&usqp=CAU"
       message="how's the day?"
       content="hoe the dat"
       username="sunil"
       image="https://www.youtube.com/embed/tt2k8PGm-TI"
       />
       
       <Widget
       profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ld1k_h1IzsFVZjhmHdUOvC9KiUA6458rIQ&usqp=CAU"
       message="how's the day?"
       content="hoe the dat"
       username="sunil"
       image="https://www.youtube.com/embed/8367ETnagHo"
       />
       
       <Widget
       profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ld1k_h1IzsFVZjhmHdUOvC9KiUA6458rIQ&usqp=CAU"
       message="how's the day?"
       content="hoe the dat"
       username="sunil"
       image="https://www.youtube.com/embed/BWBi8-WrhEc"
       />
       
       <Widget
       profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ld1k_h1IzsFVZjhmHdUOvC9KiUA6458rIQ&usqp=CAU"
       message="how's the day?"
       content="hoe the dat"
       username="sunil"
       image="https://www.youtube.com/embed/Grr0FlC8SQA"
       />
       
  
          {/* <div className="wid1">
          <p>pik mukel </p>
            <iframe
            src="https://www.youtube.com/embed/BWBi8-WrhEc"
            width="340px"
            height="170px"  
            style={{border:"none",alignItems:"center",overflow:"hidden"}}          
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            >
            </iframe>
            </div> */}
           
            
           

            
        </div>
    );
}

export default Widgets;
