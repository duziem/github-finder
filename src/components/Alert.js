import React, { useContext } from 'react';
import AlertContext from '../context/alert/AlertContext';

function Alert() {
    const alertContext= useContext(AlertContext);
    const { alert, clearAlert }= alertContext;

    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i>&nbsp;{alert.msg}
                <i className="fas fa-window-close" style={{float:'right',color:'red'}} onClick={clearAlert}></i>
            </div>
        )
        
    )
}

export default Alert
