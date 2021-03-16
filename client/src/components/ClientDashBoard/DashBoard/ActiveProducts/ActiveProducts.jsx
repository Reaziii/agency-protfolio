import React from 'react';
import './ActiveProducts.css'
const ActiveProducts = () => {
    const active_product_list = [
        {
            name : 'Lorem Ipsum Lorem Ipsum',
            linkname : 'lorem-ipsum.com',
            link : '/',
            active : true,
        },
        {
            name : 'Lorem Ipsum Lorem Ipsum',
            linkname : 'lorem-ipsum.com',
            link : '/',
            active : true,
        },


    ]
    return (
        <div className='active-products'>
            <div className='title'>
                Your Active Products/Services
            </div>
            <div className='active-product-list'>
                {
                    active_product_list.map(({name,link,linkname,active},i)=>(
                        <a href={link}><div className='individual-item'>
                            <div className='item-name'>{name}</div>
                            <div className='item-linkname'>{linkname}</div>
                            <div className='active-dot'></div>
                        </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default ActiveProducts;