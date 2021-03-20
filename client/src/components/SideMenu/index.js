import React, { useState } from 'react';
import { Menu, Input, Icon } from 'semantic-ui-react';
import './style.css';

function SideMenu() {
  const [state, setState ] = useState('')
  const handleItemClick = (e, { name }) => setState({ activeItem: name });
  const { activeItem } = state;
  return (
    <Menu vertical className='side-menu' >
      <Menu.Item>
        <Input icon='search' placeholder='Search for a job...' />
      </Menu.Item>

      <Menu.Item
        name='profile'
        active={activeItem === 'profile'}
        onClick={handleItemClick}
      >
        <Icon name='user' color='grey'/>
        Profile
      </Menu.Item>

      <Menu.Item
        name='contact'
        active={activeItem === 'contact'}
        onClick={handleItemClick}
      >
        <Icon name='share alternate' color='grey'/>
        Contacts
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