import * as React from "react";
import PhoneNumberView from "./PhoneNumberView";

export default function PhoneNumbersViews({phoneNumbers}) {
    return phoneNumbers.map(number => <PhoneNumberView key={number.name} {...number} />)
}