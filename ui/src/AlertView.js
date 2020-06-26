import React from 'react';


function AlertView({message, link}) {
    return <div className='alert alert-danger'>
        {message}
        {link && <a href={link} target='_blank' className="close" >
            <span aria-hidden="true">ⓘ</span>
        </a>}
    </div>
}

export default AlertView