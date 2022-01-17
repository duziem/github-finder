import spinner from '../assets/spinner.gif';
import React from 'react';

function Spinner() {
    return (
        <>
          <img src= {spinner} alt="" style={{width: '200px', margin: 'auto', display: 'block'}} />  
        </>
    )
}

export default Spinner


