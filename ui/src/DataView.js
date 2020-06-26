import React from 'react';
import ContactsView from "./ContactsView";
import ContactView from "./ContactView";
import AlertView from "./AlertView";
import MedicalAlertsView from "./MedicalAlertsView";

function DataView({data}) {
    return <div className='container'>
        <div className='row'>
            <div className='col pt-3'>
                <form>
                    <MedicalAlertsView data={data}/>
                    <ContactView {...data}/>
                    { data.emergencyContacts && <ContactsView emergencyContacts={data.emergencyContacts}/>}
                </form>
            </div>
        </div>

    </div>
}

export default DataView