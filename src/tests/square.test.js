import React from 'react';
import { shallow, mount } from 'enzyme';
import Square from '../containers/Square';

describe("S Q U A R E --- Mount Component with props", () => {

    let wrapper;
    const onClick = jest.fn();

    beforeEach(() => {
        wrapper = mount(<Square value="x" onClick={onClick}/>)
    });
    
    it("Renders without crashing", () => {
        expect(wrapper.length).toBe(1);
    })

    it("Has value passed by props", () => {
        expect(wrapper.prop("value")).toBe("x");
    })

    it("Displays the value passed by props", () => {
        expect(wrapper.text()).toBe("x");
    })

    it("Calls the onClick function when Square is clicked", () => {
        wrapper.simulate('click'),
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})