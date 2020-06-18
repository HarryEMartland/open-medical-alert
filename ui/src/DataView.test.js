import {render} from "@testing-library/react";
import * as React from "react";
import Login from "./Login";

import exampleData from '../../server/data.example.json'
import DataView from "./DataView";

describe('Login', () => {

    it('should render with data', () => {

        const {container} = render(<DataView data={exampleData}/>);
        expect(container).toMatchSnapshot();

    })

    it('should render with empty data', () => {

        const {container} = render(<DataView data={{}}/>);
        expect(container).toMatchSnapshot();

    })
})