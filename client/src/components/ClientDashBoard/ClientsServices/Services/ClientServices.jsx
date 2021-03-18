import React, { useState } from 'react';
import './ClientServices.css'
import {Link} from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox';
import ServicesAndProducts from '../ServicesAndProducts/ServicesAndProducts';
const ClientServices = () => {
    const [searchfield,setSearchfield] = useState('');
    const setsearchfield = (value)=>{
        setSearchfield(value)
    }

    return (
        <div className='clinetservices'>
            <div className='top-com'>
                <div className='title'><h1>My Products & Services</h1>
                <p style={{letterSpacing:'1px'}}>
                <Link to='/'>Portal Home</Link> /
                <Link to='/dashboard'> Client Area</Link> / My Products & ClientServices
                
                

                </p>
                </div>
                <SearchBox setfield={setsearchfield}/>
            </div>
            <ServicesAndProducts searchfield={searchfield}/>
        </div>
    );
};

export default ClientServices;