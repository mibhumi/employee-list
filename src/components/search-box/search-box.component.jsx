import React from 'react';
import {Card} from './../card/card.component';

export const SearchBox = ({ placeholder, handleChange }) => {

    return (
        <div>
            <input 
            type="search" 
            placeholder= {placeholder} 
            onChange= {handleChange}/>
        </div>
    )
}
