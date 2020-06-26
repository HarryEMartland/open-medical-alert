import React from 'react';

function ContactView({name, address, postcode}) {
    return <div>
        {name && <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" value={name} disabled/>
        </div>}
        {address && <div className="form-group">
            <label>Address</label>
            <textarea className="form-control" value={address} disabled/>
        </div>}
        {postcode && <div className="form-group">
            <label>Postcode</label>
            <input type="text" className="form-control" value={postcode} disabled/>
        </div>}
    </div>
}

export default ContactView