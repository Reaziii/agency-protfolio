import React, { useEffect, useState } from 'react';
import './ServicesAndProducts.css'
import {dropdown,removeactivefromlist} from './functions.js'
import SingleProduct from './Single/SingleProduct';
import useComponentVisible from '../../customhook/useCom';
import { defaultheaders } from '../../../../utils/axios.common.header';
import axios from 'axios';
const ServicesAndProducts = ({searchfield}) => {
    const [selectedlist,setSelectedlist] = useState("All Entries");
    const { ref, isComponentVisible,setIsComponentVisible } = useComponentVisible(true);
    const [show,setshow] = useState(0);
    const [productlist,setProductList] = useState([]);
    const selectitem = (e,id) =>{
        setIsComponentVisible(true)

        setSelectedlist(e.target.innerHTML);
        setshow(!show);
        removeactivefromlist();
        e.target.classList.add('menulistactive')
        document.querySelector('.drop-down-menues').classList.remove('close-menues');
    }

    useEffect(()=>{
        defaultheaders();
        axios.get(process.env.REACT_APP_BACKEND_URL+'/orders').then(res=>{
            const data = res.data;

            var temp = [];
            console.log(data);
            data.map(value=>{
                if(value.DomainName && value.DomainName.length){
                    temp.push({
                            name : "Domain - Registration",
                            linkname : value.DomainName,
                            link : '/dashboard/mydomains/'+value.id,
                            pricing : value.DomainFirstPaymentAmmount,
                            status : value.Delivered?value.DomainIsActive:2,
                            free_account : false,
                            product_id : value.id,
                            nextduedata : value.DomainNextDueDate,
                            type : 1,
                    })
                }
                if(value.HostingName && value.HostingName.length){
                    temp.push({
                        name : value.HostingName+' - Hosting',
                        linkname : value.DomainName && value.DomainName.length?value.DomainName:value.UserOwnDomain,
                        link : '/dashboard/productdetails/'+value.id,
                        pricing : value.HostingRecurringAmmount,

                        status : value.Delivered?value.HostingIsActive:2,

                        product_id : value.id,
                        nextduedata : value.HostingNextDueDate,
                        type : 2,

                    })
                } 
                if(value.SSL_Issuer_Name && value.SSL_Issuer_Name.length){
                    temp.push({
                        name : value.SSL_Issuer_Name,
                        linkname : value.DomainName,
                        link : null,
                        pricing : value.SSL_Price,
                        status : value.Delivered?value.SSL_IsActive:2,
                        product_id : value.id,
                        nextduedata : ' - ',
                        type : 3,


                    })
                }
                if(value.Dedicated_IP){
                    temp.push({
                        name : 'Dedicated IP',
                        nextduedata : ' - ',
                        link : null,
                        pricing : value.Dedicated_IP_Price,
                        status : value.Delivered?value.Dedicated_IP_IsActive:2,
                    })
                }




            })
            setProductList(temp)
        })




    },[]);
    const total_page = [1,2];
    if(!isComponentVisible){
        document.querySelector('.drop-down-menues').classList.remove('close-menues');
    }
    var j = 0;
    return (
        <div className="servicesandproducts">
            <div className="services-view">
                <div className="d_flex">
                <level>View</level> 
                    <div  ref={ref} onClick={()=>setIsComponentVisible(true)} class="dropdowns">
                        <button onClick={dropdown} class="dropdown-toggles">
                            {selectedlist} <i class="fas fa-caret-down"></i>
                        </button>
                        
                        <div className="drop-down-menues">
                            <ul>
                                <li onClick={selectitem.bind(0)} className="drop-down-menue-list menulistactive">All Entries</li>
                                <li onClick={selectitem.bind(1)} className="drop-down-menue-list">Active</li>
                            </ul>               
                        </div>
                        
                    </div>
                </div>
            </div>
        
            

            <div className="product00services">
                <table className="table">
                    <tr className="tr1">
                        <td className="product-sevices">
                            Product/Services 
                                <div style={{display:'none'}} className="up-down-sec">
                                    <i  class="fas fa-caret-up up activeupdown"></i>
                                    <i class="fas fa-caret-down down"></i>
                                </div>
                        
                        </td>
                        <td className="pricing width">
                            Pricing
                            <div style={{display:'none'}} className="up-down-sec">
                                    <i class="fas fa-caret-up up"></i>
                                    <i class="fas fa-caret-down down"></i>
                            </div>
                        </td>
                        <td style={{width:'20%'}} className="next-due-date width">
                            Next Due Date
                            <div style={{display:'none'}} className="up-down-sec">
                                    <i class="fas fa-caret-up up"></i>
                                    <i class="fas fa-caret-down down"></i>
                            </div>
                        </td>
                        <td style={{width:'10%'}} className="status width">
                            
                            Status
                            <div style={{display:'none'}} className="up-down-sec">
                                    <i class="fas fa-caret-up up"></i>
                                    <i class="fas fa-caret-down down"></i>
                            </div>
                        </td>
                        <td className="about width">
                            
                        </td>
                    </tr>
                    

                    { 
                        productlist.map((data,i)=>{
                            if(show){
                                if(data.status===true && data.name &&  data.name.toLowerCase().includes(searchfield.toLowerCase())){
                                    return <SingleProduct key={i} id={j++} data={data}/>
    
                                }else return <div></div>
                            }
                            else if(!show && data.name.toLowerCase().includes(searchfield.toLowerCase())){
                                return <SingleProduct key={i} id={j++} data={data}/>

                            }else return <div></div>
                        })
                    }

                    <tr style={{display:'none'}} className="bottom-site">
                        <div className="show-with-navigation">
                            <div>
                                show 
                            
                            </div>

                            <div class="show-pagination">
                                <select>
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>ALL</option>

                                
                                </select>
                            
                            
                            </div>
                        
                        
                        
                        </div>
                        <div className="number-navigation">
                            <button className="prev-next-button">
                                prev
                            </button>
                            

                            {
                                total_page.map((data,i)=>(
                                    <button className="number-button">
                                        {data}
                                    </button>

                                ))
                            }
                            <button className="prev-next-button">
                                next
                            
                            </button>
                        
                        </div>

                    
                    
                    
                    
                    </tr>
                
                
                </table>
            
            
            
            
            
            
            
            
            
            
            </div>






                               


        </div>
    );
};

export default ServicesAndProducts;