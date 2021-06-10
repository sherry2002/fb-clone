// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'
import  Widgets  from './Widgets';
import Widget from './Widget';
import Login from './Login'
import { useStateValue } from './StateProvider';


function App() {
  const  [{user} , dispach] =useStateValue();
  return (<>
   
    <div className="App">
    {!user? (<Login/>):(
    <>
    {/* Header */}
    <Header/>
      
    <div className="app_body">
      <Sidebar/>
      <Feed/>
      <Widgets />
    
     {/* App body */}

     {/* Side bar */}

     {/* Widgets */}


    </div>
     </>

    )
    }
   
     


    </div></>
  );
}

export default App;
