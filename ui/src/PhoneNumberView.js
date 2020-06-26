import * as React from "react";

export default function PhoneNumberViews({name, number}) {
    return <div className="form-group">
        <label>{name}</label>
        <div className="input-group">
            <div className="input-group-prepend">
                <div className="input-group-text"><a href={`tel:${number}`}><span role='img' aria-label='phone'>📞</span></a></div>
            </div>
            <input type="text" value={number} readonly className="form-control" />
        </div>
        <small className="form-text text-muted">
            Click the phone icon to call
        </small>
    </div>
}