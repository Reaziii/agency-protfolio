import React, { useEffect, useState } from 'react';
import './ServicesAndProducts.css'
import {dropdown,removeactivefromlist} from './functions.js'
import SingleProduct from './Single/SingleProduct';
import useComponentVisible from '../../customhook/useCom';
const ServicesAndProducts = () => {
    const [selectedlist,setSelectedlist] = useState("All Entries");
    const { ref, isComponentVisible,setIsComponentVisible } = useComponentVisible(true);

    const [productlist,setProductList] = useState([]);
    const selectitem = (e,id) =>{
        setIsComponentVisible(true)

        setSelectedlist(e.target.innerHTML);
        removeactivefromlist();
        e.target.classList.add('menulistactive')
        document.querySelector('.drop-down-menues').classList.remove('close-menues');
    }
    useEffect(()=>{
        setProductList([
            {
                name : 'Lorem Ipsum is simply dummy text ',
                link : 'loremispum-dummy.com',
                linkname : 'loremispum-dummy.com',
                pricing : '0.00$',
                free_account : true,
                status : 1,
                product_id : 1,
    
            },
            {
                name : 'Lorem Ipsum is simply dummy text ',
                link : 'loremispum-dummy.com',
                linkname : 'loremispum-dummy.com',
                pricing : "10.00$",
                free_account : false,
                status : 0,
                product_id : 2,
    
            }
        ])
    },[])
    const total_page = [1,2];
    if(!isComponentVisible){
        document.querySelector('.drop-down-menues').classList.remove('close-menues');
    }
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
                                <li onClick={selectitem.bind(1)} className="drop-down-menue-list">Uncle</li>
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
                                <div className="up-down-sec">
                                    <i  class="fas fa-caret-up up activeupdown"></i>
                                    <i class="fas fa-caret-down down"></i>
                                </div>
                        
                        </td>
                        <td className="pricing width">
                            Pricing
                            <div className="up-down-sec">
                                    <i class="fas fa-caret-up up"></i>
                                    <i class="fas fa-caret-down down"></i>
                            </div>
                        </td>
                        <td style={{width:'20%'}} className="next-due-date width">
                            Next Due Date
                            <div className="up-down-sec">
                                    <i class="fas fa-caret-up up"></i>
                                    <i class="fas fa-caret-down down"></i>
                            </div>
                        </td>
                        <td style={{width:'10%'}} className="status width">
                            
                            Status
                            <div className="up-down-sec">
                                    <i class="fas fa-caret-up up"></i>
                                    <i class="fas fa-caret-down down"></i>
                            </div>
                        </td>
                        <td className="about width">
                            
                        </td>
                    </tr>
                    

                    {
                        productlist.map((data,i)=>{
                            return <SingleProduct key={i} id={i} data={data}/>
                        })
                    }

                    <tr className="bottom-site">
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