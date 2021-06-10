import React from 'react';
import './Login.css';
import { auth , provider} from './Firebase';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider';
import logo from './images/imglogo.png';


function Login() {
    const [state, dispach]=useStateValue();
    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispach({
                type:actionTypes.SET_USER,
                user:result.user
            });
       

            // console.log(result)
        })
        .catch((error)=>alert(error.message));
    
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img src={logo} />
            {/* <img src="https://lh3.googleusercontent.com/proxy/LPaqlnoCJmRDvwUmBCXXSTdUhHWa0SYDupRBYXtO_Bhu8YPH-jOpFZZP6PYPn2kKVBzuik-6lyWLlTXsL8l6gX6NTbqI8a0xmNaYG9TP1nWETusjzTFMRHzLYhY6rWDt-Sw2J2XRSutmYznuHPFZ"
            alt="logo"/> */}
            {/* <img className="logo1" src="https://w7.pngwing.com/pngs/387/926/png-transparent-facebook-logo-computer-icons-poster-background-blue-angle-text.png"
            ail=""/> */}
            <h1 className="text">facebook</h1>
            </div>
            <button className="btn5" type="submit" onClick={signIn}>Sign In</button>
        </div>
    );
}

export default Login;
