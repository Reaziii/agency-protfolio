import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClientServices from '../ClientsServices/Services/ClientServices';
import DashBoardNav from '../DashBoardNav/DashBoardNav';
import DashBoardBody from '../DashBoard/DashBoardBody/DashBoardBody'
import ManagingDomins from '../MyDomains/ManaginDomains/ManagingDomins';
import MyDomains from '../MyDomains/Mydomains/MyDomains';
import ManagingHosting from '../ManagingHosting/ManagingHosting';
const DashboardComponent = () => {
    return (
        <div className='DashboardComponent'>
            <DashBoardNav/>
            <Switch>
                <Route exact path='/dashboard' component={DashBoardBody}/>
                <Route exact path='/dashboard/services' component={ClientServices}/>
                <Route exact path='/dashboard/productdetails/:productid' component={ManagingHosting}/>
                <Route exact path='/dashboard/mydomains' component={MyDomains}/>
                <Route exact path='/dashboard/mydomains/:domainname' component={ManagingDomins}/>
            
            
            </Switch>
        </div>
    );
};

export default DashboardComponent;