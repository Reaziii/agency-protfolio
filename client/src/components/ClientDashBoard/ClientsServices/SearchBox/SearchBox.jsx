import React, { useState } from 'react';
import './SearchBox.css'
const SearchBox = ({setfield}) => {


    function changeback(){
        document.querySelector('.searchboxa1').style.border = '1px solid #262626';
        
    }
    function changeback2(){
        document.querySelector('.searchboxa1').style.border = '1px solid #98989857';
        
    }
    const setfieldd = (event) =>{
        setfield(event.target.value)
    }
    return (
        <div className='searchboxa1'>
        <i className="fas fa-search"></i><input onChange={setfieldd} onBlur={changeback2} onFocus={changeback} placeholder='Enter search term...' type='search'/>
            
        </div>
    );
};

export default SearchBox;