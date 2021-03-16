import React from 'react';
import './InfoSections.css'
const InfoSection = () => {
    const details = {
        name : 'Reaz Ahammed',
        distric : 'bangladesh',
        state : 'Dhaka, Dhaka, 4400',
        country : 'Bangladesh'

    }
    return (
        <div className='info-sec'>
            <h2>
                Your Info
            </h2>
            <p>
                {details.name}
               
            </p>
            <br/>
            <p>
                {details.distric}
            </p>
            <p>
                {details.state}
            </p>
            <p>
                {details.country}
            </p>
        </div>
    );
};

export default InfoSection;