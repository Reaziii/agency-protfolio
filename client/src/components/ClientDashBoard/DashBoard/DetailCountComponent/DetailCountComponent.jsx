import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import './DetailCountComponent.css'
const DetailCountComponent = () => {
    const list = [
        {
            name : 'My Cloud',
            link : '/',
            count : 1,
        },
        {
            name : 'Domains',
            link : '/',
            count : 0,
        },
        {
            name : 'Domains',
            link : '/',
            count : 0,
        },
        {
            name : 'Domains',
            link : '/',
            count : 0,
        },
    ];
    const options = {
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: false,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1200: {
            items: 4,
          },
        },
      };
    return (
        <div className='detailcountcomponent'>
                <div className='count-sec'>
                    <OwlCarousel className="partner-slider owl-carousel owl-theme" {...options} >
                
        
                        {
                            list.map(({name,link,count},i)=>(
                                <div key={i} className='counter'>
                                    <div className='count-name'> 
                                        <div className='count'>{count}</div>
                                        <div className='name'>{name}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </OwlCarousel>
                </div>
        </div>
    );
};

export default DetailCountComponent;