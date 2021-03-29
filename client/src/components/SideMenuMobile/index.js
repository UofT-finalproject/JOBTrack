import React, { useEffect, useState } from 'react';
import { Menu, Input, Icon } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import './style.css';
import { FILTER_JOBS } from '../../utils/actions';

function SideMenuMobile(props) {
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
  
  return (
    <Menu stackable={props.stackable} className='side-menu' fluid>
      <Menu.Item>
        <Input 
          icon='search' 
          placeholder='Search in saved jobs'
          onChange={handleInputChange}
          value={search}
           />
      </Menu.Item>

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

    </Menu>
  )
}

export default SideMenuMobile;
