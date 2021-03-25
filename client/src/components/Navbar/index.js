import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, Icon } from 'semantic-ui-react';
import logoWhite from '../../assets/images/jobTrack-white.png';
import moment from "moment";
import './style.css';

function Navbar() {
    const [date, setDate] = useState(moment().format("LL"));
    const [activeItem, setActiveItem] = useState('Dashboard')
    const handleItemClick = (e, { name }) => { setActiveItem(name)};

    useEffect(() => {
      setDate(moment().format("LL"));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const user = JSON.parse(localStorage.getItem('user'));
    const first_name = user ? user.first_name : ''
    const last_name = user ? user.last_name : ''

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
            name='Dashboard'
            active={activeItem === 'Dashboard'}
            onClick={handleItemClick}
          >
              <Icon name='clipboard list' />
            Dashboard
          </Menu.Item>
  
          <Menu.Item
            as={ NavLink } to="/search"
            float='right'
            name='Job Search'
            active={activeItem === 'Job Search'}
            onClick={handleItemClick}
          >
              <Icon name='search plus' />
            Job Search
          </Menu.Item>
  
          <Menu.Item
            as={ NavLink } to="/profile"
            float='right'
            name='profile'
            active={activeItem === 'profile'}
            onClick={handleItemClick}
          >
            <Icon name='user outline' />
            {first_name} {last_name}
          </Menu.Item>
          <Menu.Item
            as={ NavLink } to="/logout"
            float='right'
            name='logout'
            active={activeItem === 'logout'}
          >
            <Icon name='sign-out' />
          </Menu.Item>
        </Menu>
      )
}

export default Navbar;