import React from 'react';
import { shallow } from 'enzyme';
import Unauthorized from '../components/Unauthorized';
import { Container, Message } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

describe('<Unauthorized/ > shallow rendering test', () => {
    it('renders <Container />, <Message />, <p> and <Message.Header /> components one of each', () => {
        const wrapper = shallow(<Unauthorized />);
        expect(wrapper.find(Container)).toHaveLength(1);
        expect(wrapper.find(Message)).toHaveLength(1);
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find(Message.Header)).toHaveLength(1);
    });
});