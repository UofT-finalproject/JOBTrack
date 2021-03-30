import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar';
import { Menu } from 'semantic-ui-react';

describe('<Navbar/ > shallow render test', () => {
    it('renders correct number and types of components', () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.find(Menu)).toHaveLength(1);
        expect(wrapper.find(Menu.Item)).toHaveLength(6);
    });
});
