import React, { useState } from 'react';
import './ProductInfomation.css'
import BillingInformation from './BillingInformation/BillingInformation'
import HostingInformation from './HostingInformation/HostingInformation'
const ProductInformation = ({product_details}) => {
    const [selecteditem,setSelecteditem] = useState(1);
    return (
        <div className="productinformation">
            <div className="p_ffss">
                <div className="p_ff">
                    <div className="p_box">
                        <div className="active-status">
                        {
                            product_details.active?<p className="active-gh">active</p>:<h1 className="terminated-gh">terminated</h1>
                        }
                        </div>

                        <p className="name">{product_details.name}</p>
                        <p className="hostingtype">{product_details.hosting_type}</p>
                        <div style={{padding:'20px'}}>
                            <table className="table">
                                <tr className="tr">
                                    <td className="ft-sec td">
                                        Domaing Name 
                                    </td> 
                                    <td className="st-sec td">
                                        {product_details.Hosting_information.Domain}
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td className="ft-sec td">
                                        Primary IP
                                    </td> 
                                    <td className="st-sec td">
                                        {product_details.primary_ip}
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td className="ft-sec td">
                                        Server Name 
                                    </td> 
                                    <td className="st-sec td">
                                        {product_details.Hosting_information.Server_name}
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td className="ft-sec td">
                                        Private Nameservers
                                    </td> 
                                    <td className="st-sec td">
                                        {
                                            product_details.Hosting_information.Name_servers.map((data,i)=>(
                                                <div key={i}>
                                                    {data}<br/>
                                                </div>
                                            ))

                                        }
                                    </td>
                                </tr>
                                
                            
                            
                            </table>

                        </div>
                    
                    </div>
                </div>

                <div className="p_ss">
                    <div className="billinghostingsec">
                        <p onClick={()=>setSelecteditem(1)} className={selecteditem?"billactive":null}>
                        
                        <i class="fas fa-wallet"></i>  Billing Information
                        </p>
                        <p onClick={()=>setSelecteditem(0)} className={!selecteditem?"billactive":null}>
                        <i class="fas fa-map-marker-alt"></i> Hosting Information
                       
                        </p>
                    </div>

                    {
                        selecteditem?
                        <BillingInformation details={product_details.billing_overview}/>
                        :
                        <HostingInformation details={product_details.Hosting_information}/>
                    }
                    




                </div>
            
            </div>
        </div>
    );
};

export default ProductInformation;