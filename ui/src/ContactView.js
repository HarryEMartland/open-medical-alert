import React from 'react';
import PhoneNumbersView from "./PhoneNumbersView";

function ContactView({name, address, postcode, phoneNumbers}) {
    return <div>
        {name && <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" value={name} readonly/>
        </div>}
        {address && <div className="form-group">
            <label>Address</label>
            <textarea className="form-control" value={address} readonly/>
        </div>}
        {postcode && <div className="form-group">
            <label>Postcode</label>
            <input type="text" className="form-control" value={postcode} readonly/>
        </div>}
        {phoneNumbers && <PhoneNumbersView phoneNumbers={phoneNumbers}/> }
    </div>
}

export default ContactView