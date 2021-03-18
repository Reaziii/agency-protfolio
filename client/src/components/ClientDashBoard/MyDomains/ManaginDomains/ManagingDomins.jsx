import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams,Link} from 'react-router-dom'
import { defaultheaders } from '../../../../utils/axios.common.header';
import SearchBox from '../../ClientsServices/SearchBox/SearchBox'
import Spinner from '../../../Spinner/Spinner'
import './ManagingDomains.css'
const ManagingDomins = () => {
    var id = useParams().domainname;
    const [loding,setisloading] = useState(true);
    const [domaindetails,setdomaindetails] = useState({});
    id = Number(id);
    useEffect(()=>{
        defaultheaders();
        var details = {};
        setdomaindetails({});
        axios.get(process.env.REACT_APP_BACKEND_URL+'/orders/'+id).then(res=>{
            console.log(res);
            details = {
                name :  res.data.DomainName && res.data.DomainName.length?res.data.DomainName:res.data.UserOwnDomain,
                Registration_data : res.data.DomainRegistration,
                Next_due_data : res.data.DomainNextDueDate,
                First_payment_ammount : res.data.DomainFirstPaymentAmmount,
                Recurring_ammount : res.data.DomainRecurringAmmount,
                SSL_status : 'valid SSL Detected',
                SSL_start_Date : res.data.SSL_StartDate,
                SSL_Issuer_name : res.data.SSL_Issuer_Name,
                SSL_expiry_date : res.data.SSL_ExpiryDate,
                status : res.data.Delivered?res.data.DomainIsActive:2,
            }
            setdomaindetails(details)
            console.log(details)

        }).catch(err=>console.log(err))

        setisloading(false)



    },[])

    if(loding){
        return (<Spinner/>)
    }
    
    return (
        <div className="manage-domains">
        <div className='top-com'>
            <div className='title'><h1>Managing {domaindetails.name}</h1>
            <p style={{letterSpacing:'1px'}}>
            <Link to='/'>Portal Home</Link> /
            <Link to='/dashboard'> Client Area</Link> / <Link to="/dashboard/mydomains">My Domains </Link> / {domaindetails.name}
            </p>
            </div>

        </div>

        <div className="dd_xs">
            <div className="dd_mg">
                <div className="dd_mt">
                    Manage
                </div>
            
            </div>

            <div className="dd_mgm">
                <div className="dd_mgm_title">
                    overview
                </div>
                <div className="_d_flex__">
                    <div className="dd_atff">
                        <div className="dd_atf_blackBox">
                            <i class="fas fa-globe"></i>
                            <p className="__dd__name__">{domaindetails.name}</p>
                            <p className="_dd_box_status__">Status : 
                                {
                                    domaindetails.status?
                                    <p className="_dd_active_">{domaindetails.status===2?'pending':'active'}</p>
                                    :
                                    <p className="_dd_terminated_">terminated</p>

                                }
                            
                            
                            </p>
                        </div>
                    
                    </div>

                    <div className="dd_atss">
                        <div className="fake_dd_atss">
                            <div className="dd_sec_pxx">
                                <p>Registration Date : </p>
                                <p>{domaindetails.Registration_data}</p>
                            </div>
                            <div className="dd_sec_pxx">
                                <p>Next Due Date : </p>
                                <p>{domaindetails.Next_due_data}</p>
                            </div>
                            <div className="dd_sec_pxx">
                                <p>First Payment Ammount : </p>
                                <p>{domaindetails.First_payment_ammount} $</p>
                            </div>
                            <div className="dd_sec_pxx">
                                <p>Recurring Ammount : </p>
                                <p>{domaindetails.Recurring_ammount} $</p>
                            </div>
                            <div className="dd_sec_pxx">
                                <p>Payment Method : </p>
                                <p>paypal</p>
                            </div>
                        </div>
                    </div>
                
                </div>
                                
                <div className="dd_bottom_ssl">
                    <div className="fake_dd_bottom_ssl">
                    <p className="dd_ssl">SSL</p>

                    <div className="trd">
                        <table className="dd_table_ssl">
                            <tr className="dd_tr">
                                <td className="dd_td">
                                    SSL Status : 
                                </td>
                                <td className="dd_td">
                                    {domaindetails.SSL_status}
                                </td>
                            </tr>
                            <tr className="dd_tr">
                                <td className="dd_td">
                                    SSL Start Date : 
                                </td>
                                <td className="dd_td">
                                    {domaindetails.SSL_start_Date}
                                </td>
                            </tr>
                            <tr className="dd_tr">
                                <td className="dd_td">
                                    SSL Issuer Name : 
                                </td>
                                <td className="dd_td">
                                    {domaindetails.SSL_Issuer_name}
                                </td>
                            </tr>
                            <tr style={{borderBottom:'none'}} className="dd_tr">
                                <td className="dd_td">
                                    SSL Expiry Date : 
                                </td>
                                <td className="dd_td">
                                    {domaindetails.SSL_expiry_date}
                                </td>
                            </tr>
                            
                        
                        
                        </table>
                    
                    </div>
                    </div>
                </div>

            </div>

            
        
        
        
        
        </div>

    </div>
    );
};

export default ManagingDomins;