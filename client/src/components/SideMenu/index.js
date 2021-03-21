import React, { useState } from 'react';
import { Menu, Input, Icon, Dropdown, Image } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/jobTrack-logo.png';
import './style.css';

function SideMenu() {
  const [state, setState ] = useState('')
  const handleItemClick = (e, { name }) => setState({ activeItem: name });
  const { activeItem } = state;
  return (
    <Menu vertical className='side-menu' style={{flex: 'auto'}}>
      <Menu.Item>
        <Input icon='search' placeholder='Search in saved jobs' />
      </Menu.Item>

      <Dropdown item  text='Profile' >
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='log out' text='Logout' color='grey'/>
          </Dropdown.Menu>
        </Dropdown>

      <Menu.Item 
        as={ NavLink } to="/dashboard"
        name='dashboard'
        active={activeItem === 'dashboard'}
        onClick={handleItemClick}
      >
        <Icon name='clipboard list' color='grey'/>
        Dashboard
      </Menu.Item>
      <Menu.Item 
        as={ NavLink } to="/search"
        name='search'
        active={activeItem === 'search'}
        onClick={handleItemClick}
      >
        <Icon name='search plus' color='grey'/>
        Search new
      </Menu.Item>

      <Menu.Item
        name='add'
        active={activeItem === 'add'}
        onClick={handleItemClick}
      >
        <Icon name='add square' color='grey'/>
        Add Job
      </Menu.Item>
      
    </Menu>
  )
}

export default SideMenu;