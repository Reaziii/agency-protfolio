import React from 'react';
import './Shortcutsections.css'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { defaultheaders } from '../../../../utils/axios.common.header';
const ShortcutSection = ({logout}) => {
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
    const history = useHistory();
    const logoutt = (e) =>{
        e.preventDefault();
        localStorage.removeItem('auth_token');
        defaultheaders();
        logout();
        history.push('/login')

    }
    return (
        <div className='scut-sec'>
            <div className='shortcuttitle'>
                Shortcuts
                

            </div>
            <div className='shortcuts'>
                        <a  href={shotcuts[0].line} className=''>
                            <div className='shortcutss'>
                            
                                    {shotcuts[0].icon}
                                    {shotcuts[0].name}
                            </div>
                        </a>

                        <a onClick={logoutt} href={shotcuts[1].line} className=''>
                            <div className='shortcutss'>
                            
                                    {shotcuts[1].icon}
                                    {shotcuts[1].name}
                            </div>
                        </a>


            </div>
        </div>
    );
};
const set = dispatch =>{
    return {logout : () => dispatch({
        type : 'LOGOUT'
    })}
}
export default connect(null,set)(ShortcutSection);