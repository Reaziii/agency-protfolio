import React from 'react';
import './RegisterDomain.css'
const RegisterDomain = () => {
    return (
        <div className="registerdomain">
            <div className='title'>
                Register a New Domain
            </div>
            <div className='form'>
                <input />
                <div className='buttona'> 
                <button style={{background:'#6cc540'}}>Transfer</button>
                <button style={{background:'#7c9bf9'}}>Register</button>
                </div>
            </div>
            
        </div>
    );
};

export default RegisterDomain;