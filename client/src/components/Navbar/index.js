import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, Icon } from 'semantic-ui-react';
import logoWhite from '../../assets/images/jobTrack-white.png';
import moment from "moment";
import './style.css';

function Navbar() {
    const activeItem = 'Dashboard';
    const [date, setDate] = useState(moment().format("LL"));
    const handleItemClick = (e, { name }) => {};

    useEffect(() => {
      setDate(moment().format("LL"))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Menu stackable fixed='top' color={'grey'} inverted size='huge'>
          <Menu.Item>
            <img src={logoWhite} size='huge' className='logo-nav' alt='logo' />
          </Menu.Item >
          <Menu.Item position='right'>
            {date}
            </Menu.Item>
          <Menu.Item
            as={ NavLink } to="/dashboard"
            position='right'
            name='dashboard'
            active={activeItem === 'features'}
            onClick={handleItemClick}
          >
              <Icon name='clipboard list' />
            Dashboard
          </Menu.Item>
  
          <Menu.Item
            as={ NavLink } to="/search"
            float='right'
            name='Job Search'
            active={activeItem === 'testimonials'}
            onClick={handleItemClick}
          >
              <Icon name='search plus' />
            Job Search
          </Menu.Item>
  
          <Menu.Item
            float='right'
            name='sign-in'
            active={activeItem === 'sign-in'}
            user
            onClick={handleItemClick}
          >
            <Icon name='user outline' />
            John Smith
          </Menu.Item>
        </Menu>
      )
}

export default Navbar;