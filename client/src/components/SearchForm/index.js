import React, { useState } from 'react'
import { Form, Grid } from 'semantic-ui-react'
import { SAVE_SEARCH } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from "../../utils/GlobalState";
import './style.css'

function SearchForm() {
  const [state, dispatch] = useStoreContext();
  // state = { title: '', location: '', fullTime: false }
  const [search, setSearch] = useState({title: '', location: ''});
  const handleChange = (e, { name, value }) => setSearch({ ...search,[name]: value })

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
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
        </Grid>
      </div>
    )
  
}

export default SearchForm;
