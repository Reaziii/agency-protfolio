import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const PayPalButton = ({onSuccess, onCancel, price, clientId, onError }) => {
    const client = {
        sandbox: clientId,
        production: 'YOUR-PRODUCTION-APP-ID',
    }
    return (
        <PaypalExpressBtn client={client} currency={'USD'} total={price} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
    )
}

export default PayPalButton
