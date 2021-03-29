import React, { useEffect, useState } from 'react';
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import logoWhite from '../../assets/images/jobTrack-white.png';
import { NavLink, useHistory } from "react-router-dom";
import moment from "moment";
import './style.css';

// TODO: Update <Search> usage after its will be implemented

const NavBarMobile = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const user = JSON.parse(localStorage.getItem('user'));
  const first_name = user ? user.first_name : '';
  const last_name = user ? user.last_name : '';
  let history = useHistory();
  const handleItemClick = (e, { name }) => { setActiveItem(name)};
  return (
    <div>
      <Menu fixed='top' color='grey' inverted size='huge'>
        <Dropdown item icon='bars' simple >
          <Dropdown.Menu >
            <Dropdown.Item
              as={ NavLink } to="/profile"
              float='right'
              name='profile'
              active={activeItem === 'profile'}
              onClick={handleItemClick}
            >
              <Icon name='user outline' />
              {first_name} {last_name}
            </Dropdown.Item>
              <Menu.Item
                as={ NavLink } to="/career"
                name='career'
                active={activeItem === 'career'}
                onClick={handleItemClick}
              >
                <Icon name='life ring outline' />
                Job Search Help
              </Menu.Item>
              <Dropdown.Item icon='log out' text='Logout' color='grey'
                onClick={() => history.push('logout')}
              />
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
          <Menu.Item >
            {moment().format("LL")}
          </Menu.Item>
          <Menu.Item 
            as={ NavLink } exact to="/"
            name='Home'
            active={activeItem === 'Home'}
            onClick={ () => window.location.replace('/') }
          >
            <img src={logoWhite} size='huge' className='logo-nav' alt='logo' />
          </Menu.Item >
        </Menu.Menu>
      </Menu>
    </div>
  )}

export default NavBarMobile;