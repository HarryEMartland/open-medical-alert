import React from 'react';
import PhoneNumbersView from "./PhoneNumbersView";

function ContactView({name, address, postcode, phoneNumbers}) {
    return <div>
        {name && <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" value={name} readOnly={true}/>
        </div>}
        {address && <div className="form-group">
            <label>Address</label>
            <textarea className="form-control" value={address} readOnly={true}/>
        </div>}
        {postcode && <div className="form-group">
            <label>Postcode</label>
            <input type="text" className="form-control" value={postcode} readOnly={true}/>
        </div>}
        {phoneNumbers && <PhoneNumbersView phoneNumbers={phoneNumbers}/> }
    </div>
}

export default ContactView