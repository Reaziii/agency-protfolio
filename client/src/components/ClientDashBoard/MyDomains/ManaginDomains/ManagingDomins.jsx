import React, { useState } from 'react';
import {useParams,Link} from 'react-router-dom'
import SearchBox from '../../ClientsServices/SearchBox/SearchBox'
import './ManagingDomains.css'
const ManagingDomins = () => {
    const params = useParams().domainname;
    const domaindetails = {
        name : 'loremispum.com',
        Registration_data : '10/10/2010',
        Next_due_data : '10/10/2010',
        First_payment_ammount : '10.10$ USD',
        Recurring_ammount : '10.10$ USD Every 1 Year/s',
        Payment_method : 'Paypal',
        SSL_status : 'valid SSL Detected',
        SSL_start_Date : '10/10/2010',
        SSL_Issuer_name : 'R3',
        SSL_expiry_date : '10/19/2019',
        status : 1,
        
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
                                    <p className="_dd_active_">active</p>
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
                                <p>{domaindetails.First_payment_ammount}</p>
                            </div>
                            <div className="dd_sec_pxx">
                                <p>Recurring Ammount : </p>
                                <p>{domaindetails.Recurring_ammount}</p>
                            </div>
                            <div className="dd_sec_pxx">
                                <p>Payment Method : </p>
                                <p>{domaindetails.Payment_method}</p>
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