import React from 'react';
import {shallow} from 'enzyme';
import DataController from "./DataController";
import DataView from "./DataView";
import nock from "nock";
import {wait} from "@testing-library/react";
import LoginController from "./LoginController";


describe('DataController', () => {

    it('should pass loading state to login', () => {
        const wrapper = shallow(<DataController/>);

        expect(wrapper.find(LoginController).props().loading).toEqual(undefined)
        wrapper.setState({loading: true})
        expect(wrapper.find(LoginController).props().loading).toEqual(true)
    })

    it("should hide login when data is loaded", () => {

        const wrapper = shallow(<DataController/>);

        expect(wrapper.find(LoginController)).toHaveLength(1);
        wrapper.setState({data: {}})
        expect(wrapper.find(LoginController)).toHaveLength(0);
    })

    it("should show data view when data is loaded", () => {

        const wrapper = shallow(<DataController/>);

        expect(wrapper.find(DataView)).toHaveLength(0);
        wrapper.setState({data: {}})
        expect(wrapper.find(DataView)).toHaveLength(1);
    })

    it('should call data api', async () => {

        process.env.REACT_APP_DATA_URL = "http://example.com/data";
        const scope = nock('http://example.com')
            .defaultReplyHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            })
            .post('/data', {password: "changeme"})
            .reply(200, {name: "Jon Doe"})

        const wrapper = shallow(<DataController/>);

        wrapper.find(LoginController).props().onLogin({password: "changeme"})

        await wait(() => {
            expect(wrapper.find(DataView).props().data).toEqual({name: "Jon Doe"});
        })
    })

    it('should show login when data api returns non 200', async () => {
        process.env.REACT_APP_DATA_URL = "http://example.com/data";
        const scope = nock('http://example.com')
            .defaultReplyHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        })
            .post('/data', {password: "changeme"})
            .reply(401, {message: "error"})

        const wrapper = shallow(<DataController/>);

        expect(wrapper.find(LoginController)).toHaveLength(1);

        wrapper.find(LoginController).props().onLogin({password: "changeme"})

        await wait(() => {
            expect(wrapper.find(LoginController).props().errorMessage).toEqual("error");
        })
    })
})