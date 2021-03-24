import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, Icon } from 'semantic-ui-react';
import { useStoreContext } from "../../utils/GlobalState";
import logoWhite from '../../assets/images/jobTrack-white.png';
import moment from "moment";
import './style.css';
import { USER_AUTHENTICATED } from '../../utils/actions';

function Navbar() {
    const activeItem = 'Dashboard';
    const [date, setDate] = useState(moment().format("LL"));
    const handleItemClick = (e, { name }) => {};
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
      setDate(moment().format("LL"));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const user = JSON.parse(localStorage.getItem('user'));
    const first_name = user.first_name || ''
    const last_name = user.last_name || ''
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
            active={activeItem === 'dashboard'}
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