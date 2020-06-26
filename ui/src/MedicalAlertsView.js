import * as React from "react";
import AlertView from "./AlertView";

export default function MedicalAlertsView({data}) {
    return <div>
        {data.asthma && <AlertView message='I have asthma' link='https://www.nhs.uk/conditions/asthma/'/>}
        {data.diabetes1 && <AlertView message='I have diabetes (Type 1)' link='https://www.nhs.uk/conditions/type-1-diabetes/'/>}
        {data.diabetes2 && <AlertView message='I have diabetes (Type 2)' link='https://www.nhs.uk/conditions/type-2-diabetes/'/>}
        {data.epilepsy && <AlertView message='I have epilepsy' link='https://www.nhs.uk/conditions/epilepsy/'/>}
        {data.seizures && <AlertView message='I have seizures' link='https://www.nhs.uk/conditions/what-to-do-if-someone-has-a-seizure-fit/'/>}
        {data.hypertension && <AlertView message='I have hypertension' link='https://www.nhs.uk/conditions/high-blood-pressure-hypertension/'/>}
        {data.strokeHistory && <AlertView message='I have a stroke history' link='https://www.nhs.uk/conditions/stroke/'/>}
        {data.hearingLoss && <AlertView message='I have hearing loss' link='https://www.nhs.uk/conditions/hearing-loss/'/>}
        {data.alzheimers && <AlertView message="I have Alzheimer's" link='https://www.nhs.uk/conditions/alzheimers-disease/'/>}
    </div>
}