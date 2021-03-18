import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import './UserLogin.css'
import bg from './bg.jpg'
import axios from 'axios'
import Spinner from '../../Spinner/Spinner'
import {connect} from 'react-redux'
import {user_login} from '../../../Redux/user/user.Actions'
const backurl = process.env.REACT_APP_BACKEND_URL
const UserLogin = ({setuser}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [isloadin,setIsloading] = useState(1);
    const history = useHistory();
    const handlesubmit = (e) =>{
        e.preventDefault();
        const url = backurl+'/auth/local';
        const userdata = {
            identifier: username,
            password: password,
        }
        axios.post(url,userdata).then(res=>{
            localStorage.setItem('auth_token',res.data.jwt);
            setuser(res.data.user)
            history.push('/dashboard');

        }).catch(err=>{
            console.log({message : err});
        })
    }
    if(localStorage.getItem('auth_token')){
        history.push('/dashboard')
    }
    useEffect( async ()=>{
        
        
        setIsloading(0);
    },[]);
    if(isloadin){
        return(<Spinner/>)
    }
    return (
        <div className="userlogin">
            <div className="background_image">
                <img src={bg} alt="background"/>
            </div>
            <div className="background_color">
            </div>
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


const set = (dispatch) =>({
    setuser : details => dispatch(user_login(details)),
})
export default connect(null,set)(UserLogin);