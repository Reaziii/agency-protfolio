import React, { useState } from 'react';
import {Link,NavLink, Route} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import './ManagingHosting.css'
import { Switch } from '@material-ui/core';
import ProductInformation from './ProductInformation/ProductInformation';
import ProductAddons from './ProductAddons/ProductAddons'
const ManagingHosting = () => {
    const [iscalinfo,setIscalinfo] = useState(1);
    const product_details = {
        name : 'Lorem Ispum',
        active : 1,
        hosting_type : 'reseller hosting',
        primary_ip : '122.1.3.12',
        billing_overview : {
            Registration_date : '02/02/2020',
            Recurring_ammount : '100$ USD',
            Next_due_data : '-',
            Billing_cycle : 'Free account',
            Payment_method : 'Credit Card (paypal)'
        },
        Hosting_information : {
            Domain : 'loremispum.com',
            SSL_status : 'loding...',
            SSL_expiry_date : 'loding...',
            SSL_Issuer_name : 'loading...',
            Username : 'loremispum@gmail.com',
            Server_name : 'lorem.loremispum.com',
            IP_adress : '127.0.0.1',
            Name_servers : [
                'ns1.loremispum.com()',
                'ns2.loremispum.com()',
            ],
            SSL_start_date : 'loding...'
        },
        Disk_Usage : {
            total : '100000M',
            used : '100M',
        },
        Bandwith_Usages : {
            total : '1020304050M',
            used : '102030M',
        }
    }
    return (
        <div className='clinetservices'>
            <div className='top-com'>
                <div className='title'><h1>Manaiging {product_details.name}</h1>
                <p style={{letterSpacing:'1px'}}>
                <Link to='/'>Portal Home</Link> /
                <Link to='/dashboard'> Client Area</Link> / <Link to="">My Products & ClientServices</Link> / {product_details.name}
            
                </p>
                </div>
            </div>
            <div className="domain-info">
                <div className="first-sec">
                    <p className="title1">
                        overview
                    </p>   
                    <div className="tx_x_t">
                    <div onClick={()=>setIscalinfo(1)} className={iscalinfo?"dxx-active":""}><p className="info dxx active "><i class="fas fa-angle-double-right"></i> Information</p></div>
                    <div onClick={()=>setIscalinfo(0)} className={!iscalinfo?"dxx-active":""}><p className="addon dxx active"><i class="fas fa-angle-double-right"></i> Addons</p></div>
                    
                    </div>
                </div>
                <div className="details-sec">
                    {
                        iscalinfo?<ProductInformation product_details={product_details}/>:<ProductAddons/>
                    }
                
                </div>
            
            </div>
        </div>
    );
};

export default ManagingHosting;