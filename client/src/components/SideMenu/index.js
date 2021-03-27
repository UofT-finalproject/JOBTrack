import React, { useEffect, useState } from 'react';
import { Menu, Input, Icon, Dropdown } from 'semantic-ui-react';
import { NavLink, useHistory } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import './style.css';
import { FILTER_JOBS } from '../../utils/actions';

function SideMenu(props) {
  const [menuItem, setMenuItem ] = useState('')
  const [search, setSearch ] = useState('');
  const [state, dispatch] = useStoreContext();

  useEffect(() => 
  {
    // Filter jobs deppending on search input filtering from title, company or location
    const filteredJobs = state.savedJobs.filter(job => {
      const titleFilter = job.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      const companyFilter = job.company.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      const locationFilter = job.location.toLowerCase().indexOf(search.toLowerCase()) !== -1
      return titleFilter || companyFilter || locationFilter;
    } );
    dispatch({ type: FILTER_JOBS, sortedFilteredJobs: filteredJobs });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const handleInputChange = (e) => setSearch(e.target.value);
  
  const handleItemClick = (e, { name }) => setMenuItem({ activeItem: name });
  const { activeItem } = menuItem;
  
  let history = useHistory();

  return (
    <Menu vertical className='side-menu' style={{flex: 'auto', marginLeft: 5}}>
      <Menu.Item>
        <Input 
          icon='search' 
          placeholder='Search in saved jobs'
          onChange={handleInputChange}
          value={search}
           />
      </Menu.Item>

      <Dropdown item text='Profile'>
          <Dropdown.Menu>
            <Dropdown.Item 
            icon='user' 
            text='View Profile'
            as={ NavLink } to="/profile"
            active={activeItem === 'profile'}
            onClick={handleItemClick}
             />
          {
            // TODO: Make edit profile section a modal that can be opened by this sidemenu item
            //<Dropdown.Item icon='edit' text='Edit Profile' />
          }
            <Dropdown.Item icon='log out' text='Logout' color='grey'
              onClick={() => history.push('logout')}
            />
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
        as={ NavLink } to="/add"
        name='add'
        active={activeItem === 'add'}
        onClick={handleItemClick}
      >
        <Icon name='add square' color='grey'/>
        Add Job
      </Menu.Item>

      <Menu.Item
        as={ NavLink } to="/career"
        name='career'
        active={activeItem === 'career'}
        onClick={handleItemClick}
      >
        <Icon name='life ring outline' color='grey'/>
        Job Search Help
      </Menu.Item>
    </Menu>
  )
}

export default SideMenu;
