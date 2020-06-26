import React from 'react';
import ContactView from "./ContactView";

function ContactsView({emergencyContacts}) {
    return <div>
        <h3>Emergency Contacts</h3>
        <div className='row pt-2'>
        {emergencyContacts.map(c => <div className='col-6 pb-3'>
            <div className='col card pt-3 pb-2'>
                <ContactView {...c}/>
            </div>
        </div>)}
        </div>
    </div>
}

export default ContactsView