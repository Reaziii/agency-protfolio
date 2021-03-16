import React, { useState } from 'react';
import './MyDomains.css'
import {Link} from 'react-router-dom'
import SearchBox from '../../ClientsServices/SearchBox/SearchBox'
import ServicesAndProducts from './ServicesAndProducts/ServicesAndProducts';
const MyDomains = () => {
    const [searchfield,setSearchfield] = useState('');
    const setserachfiled = value=>{
        setSearchfield(value)
    }
    console.log(searchfield)
    return (
        <div className="mydomains">
            <div className='top-com'>
                <div className='title'><h1>My Domains</h1>
                <p style={{letterSpacing:'1px'}}>
                <Link to='/'>Portal Home</Link> /
                <Link to='/dashboard'> Client Area</Link> / My Domains
                </p>
                </div>
                <SearchBox setfield={setserachfiled}/>

            </div>

            <ServicesAndProducts/>
        </div>
    );
};

export default MyDomains;