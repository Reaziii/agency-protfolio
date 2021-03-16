import React from 'react';
import './BillingInformation.css'
const BillingInformation = ({details}) => {
    return (
        <div className="billinginfo">
            <table className="t_xx">
                <tr>
                    <td>
                    Registration Date

                    </td>
                    <td>
                        {details.Registration_date}
                    
                    </td>
                
                </tr>
                <tr>
                    <td>
                    Recurring Amount 

                    </td>
                    <td>
                        {details.Recurring_ammount}
                    
                    </td>
                
                </tr>
                <tr>
                    <td>
                        Next Due Date 

                    </td>
                    <td>
                        {details.Next_due_data}
                    
                    </td>
                
                </tr>
                <tr>
                    <td>
                        Billing Cycle

                    </td>
                    <td>
                        {details.Billing_cycle}
                    
                    </td>
                
                </tr>
                <tr>
                    <td>
                     Payment Method

                    </td>
                    <td>
                        {details.Payment_method}
                    
                    </td>
                
                </tr>
            
            
            </table>
        </div>
    );
};

export default BillingInformation;