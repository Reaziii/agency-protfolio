import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import ActiveProducts from '../ActiveProducts/ActiveProducts';
import DetailCountComponent from '../DetailCountComponent/DetailCountComponent';
import InfoSection from '../InfoSection/InfoSection';
import RegisterDomain from '../RegisterDomain/RegisterDomain';
import ShortcutSection from '../ShortctsSection/ShortcutSection';
import './DashBoardBody.css'
const DashBoardBody = () => {
    
    return (
        <div className='dash-body res'>
            <div className='title'>
                <h1>My Dashboard</h1>
                <p><a href='/'>Portal Home</a> / Client Area</p>

                            
            </div>
            <div className='row'>
                <div className='col-3 info-body'>
                    
                    <div className='left-side'>
                        <InfoSection/>
                        <div className='srt1'><ShortcutSection/></div>
                    </div>
                </div>
                <div className='col-9'>
                    <DetailCountComponent/>
                    <div className='row actreg'>
                        <div className='col-6 extra'>
                            <ActiveProducts/>
                        </div>
                        <div className='col-6'>
                            <RegisterDomain/>
                        </div>
                    
                    </div>
                </div>  
            
            </div>
            <div className='srt2'><ShortcutSection/></div>

            
        </div>
    );
};

export default DashBoardBody;