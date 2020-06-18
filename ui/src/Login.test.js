import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Login from "./Login";

describe('Login', () => {

    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('should render with data', () => {

        act(() => {
            render(<Login/>, container);
        })
        expect(container).toMatchSnapshot();

    })

    it('should fire callback when submit is clicked', () => {

        const onLoginCallback = jest.fn();

        act(() => {
            render(<Login onLogin={onLoginCallback} valid={true}/>, container);
        });

        container.querySelector("[type='submit']").dispatchEvent(new MouseEvent("click", {bubbles: true}));

        expect(onLoginCallback).toHaveBeenCalled();
    })

    it('should disable when loading', () => {

        act(() => {
            render(<Login loading={true}/>, container);
        })
        expect(container).toMatchSnapshot();
    })

    it('should render error message', ()=>{
        act(() => {
            render(<Login errorMessaGE='THIS IS AN ERROR MESSAGE'/>, container);
        })
        expect(container).toMatchSnapshot();
    })
});