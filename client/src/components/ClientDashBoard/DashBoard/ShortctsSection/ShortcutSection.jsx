import React from 'react';
import './Shortcutsections.css'
const ShortcutSection = () => {
    const shotcuts = [
        {
            name : 'Register new domain',
            icon : '',
            link : '/',
        },{
            name : ' Log out',
            icon : <i class="fas fa-sign-out-alt"></i>,
            link : '/'
        }

    ]
    return (
        <div className='scut-sec'>
            <div className='shortcuttitle'>
                Shortcuts
                

            </div>
            <div className='shortcuts'>
                {
                    shotcuts.map(({name,icon,link},i)=>(
                        <a key={i} href={link} className=''>
                            <div className='shortcutss'>
                            
                                    {icon}
                                    {name}
                            </div>
                        </a>


                    ))
                }
            </div>
        </div>
    );
};

export default ShortcutSection;