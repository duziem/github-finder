import React from 'react'

function Alert({alert, clearAlert}) {
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
