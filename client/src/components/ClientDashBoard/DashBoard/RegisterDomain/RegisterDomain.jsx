import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './RegisterDomain.css'
const RegisterDomain = ({setdomain}) => {
    const [domain,setdomainn] = useState('');
    const history = useHistory();
    const goodbye = ()=>{
        if(domain.length===0) return 0;
        setdomain(domain);
        history.push('/domainregister')

    }
    return (
        <div className="registerdomain">
            <div className='title'>
                Register a New Domain
            </div>
            <div className='form'>
                <input onChange={(e)=>setdomainn(e.target.value)} />
                <div className='buttona'> 
                <button onClick={goodbye} style={{background:'#7c9bf9',width:'100%'}}>search</button>
                </div>
            </div>
            
        </div>
    );
};

const set = dispatch =>({
    setdomain : (value) => dispatch({
        type : 'DASHBOARD_DOMAIN_REGISTER',
        payload : value,
    })
})
export default connect(null,set)(RegisterDomain);