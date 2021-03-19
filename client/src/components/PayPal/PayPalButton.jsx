import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const PayPalButton = ({onSuccess, onCancel, price, onError }) => {
    const [clientId,setclientid] = useState('');
    const [loading,setloading] = useState(1);
    useEffect(()=>{
        axios.get(process.env.REACT_APP_BACKEND_URL+'/pay-pal').then(res=>{
            setclientid(res.data.Client_Id);
            setloading(0);
        }).catch(err=>{
            alert('something is error');
        })
    })
    if(loading){
        return (
            <CircularProgress/>
        )
    }
    const client = {
        sandbox: clientId,
        production: 'YOUR-PRODUCTION-APP-ID',
    }
    return (
        <PaypalExpressBtn client={client} currency={'USD'} total={price} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
    )
}

export default PayPalButton
