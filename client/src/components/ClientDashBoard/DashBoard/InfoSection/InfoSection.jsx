import React from 'react';
import { connect } from 'react-redux';
import './InfoSections.css'
const InfoSection = ({user}) => {
    console.log(user)
    const details = {
        name : user.FullName,
        adress : user.Adress,
        city : user.City,
        state : user.State,
        ZipCode : user.ZipCode,
        country :  user.Country,

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
                {details.adress}
            </p>
            <p>
                {details.city}{', '}{details.state}{', '}{details.ZipCode}
            </p>
            <p>
                {details.country}
            </p>

        </div>
    );
};
const get = state =>({
    user : state.user.user,
})
export default connect(get)(InfoSection);