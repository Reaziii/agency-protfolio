import React, { useState } from 'react';
import './UserLogin.css'
const UserLogin = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const handlesubmit = (e) =>{
        e.preventDefault();

    }
    return (
        <div className="userlogin">
            <div className="ad_boxx">
                <div className="title3">
                    Title
                </div>
                <form>
                    <level  className="username-login-level">username </level>
                    <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)}/>
                    <level className="password-login-level">password </level>
                    <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <input className="login-submit-button" onClick={handlesubmit} type="submit" value="login"></input>
                
                </form>
                <a style={{marginTop:'20px'}} href="/forgotpassword">Forgot password</a>
                <br/>
                <a href="/">back to home page</a>
            </div>

        </div>
    );
};

export default UserLogin;