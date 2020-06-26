import React from 'react';
import {act} from "react-dom/test-utils";
import {render} from "react-dom";
import MedicalAlertsView from "./MedicalAlertsView";
import exampleData from '../../server/data.example.json'


describe('MedicalAlertsView', () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    it('should render with empty data', () => {
        const data = {}
        act(() => {
            render(<MedicalAlertsView data={data}/>, container);
        })
        expect(container).toMatchSnapshot();

    })

    it('should render with data', () => {
        const data = {}
        act(() => {
            render(<MedicalAlertsView data={exampleData}/>, container);
        })
        expect(container).toMatchSnapshot();

    })
})