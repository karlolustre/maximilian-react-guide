import React from 'react';
import './Char.css';


const char = (props) => {
    
    return(
        <div className='char'>
            {props.character}
        </div>
    )
}



export default char;