import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import logo from '../../assets/images/jobTrack-logo.png';
import logoWhite from '../../assets/images/jobTrack-white.png';
import './style.css';

function Navbar() {
    const activeItem = 'Dashboard';
    const handleItemClick = (e, { name }) => console.log( name );

    return (
        <Menu stackable color={'grey'} inverted size='huge' >
        <Container>
          <Menu.Item>
            <img src={logoWhite} size='huge' className='logo-nav' />
          </Menu.Item>
  
          <Menu.Item
            position='right'
            name='dashboard'
            active={activeItem === 'features'}
            onClick={handleItemClick}
          >
              <Icon name='clipboard list' />
            Dashboard
          </Menu.Item>
  
          <Menu.Item
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
            onClick={handleItemClick}
          >
            <Icon name='user outline' />
            John Smith
          </Menu.Item>
        </Container>
        </Menu>
      )
}

export default Navbar;