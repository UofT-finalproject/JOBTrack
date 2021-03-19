import React, { useState } from 'react'
import { Form, Grid, Checkbox } from 'semantic-ui-react'
import { SAVE_SEARCH } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from "../../utils/GlobalState";
import './style.css'

function SearchForm() {
  const [state, dispatch] = useStoreContext();
  // state = { title: '', location: '', fullTime: false }
  const [search, setSearch] = useState({ title: '', location: '' });
  const handleChange = (e, { name, value }) => setSearch({ ...search, [name]: value })
  // radio button state
  const [radioValue, setRadioValue] = useState('');
  function handleRadioButtonChange(radioValue, e) {
    e.preventDefault();
    setRadioValue(radioValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search) {
      // setSearch({ title: title, location: location });
      const { title, location } = search;
      API.searchJobs(title, location)
        .then(res => {
          console.log(res.data);
          dispatch({
            type: SAVE_SEARCH,
            searchedJobs: res.data
          })
        })
        .catch(err => console.log(err));
    }
  }

  const { title, location } = search;

  return (
    <div>
      <Grid centered>
        <Form className='search-form' onSubmit={handleSubmit}>
          <Form.Group widths='equal' >
            <Form.Input
              placeholder='Job Title'
              name='title'
              value={title}
              onChange={handleChange}
            />
            <Form.Input
              placeholder='Location'
              name='location'
              value={location}
              onChange={handleChange}
            />
            <Form.Button content='Search' icon='search' />
          </Form.Group>
          <Form.Group inline>
            <label>Job-board</label>
            <Form.Radio
              label='LinkedIn'
              value='li'
              checked={radioValue === 'li'}
              onChange={(e) => handleRadioButtonChange('li', e)}
            />
            <Form.Radio
              label='GitHub'
              value='gh'
              checked={radioValue === 'gh'}
              onChange={(e) => handleRadioButtonChange('gh', e)}
            />
          </Form.Group>
        </Form>
      </Grid>
    </div>
  )

}

export default SearchForm;
