import React, { useEffect, useState } from 'react'
import { Form, Grid, Button } from 'semantic-ui-react'
import { SAVE_SEARCH, CLEAR_SEARCH, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from "../../utils/GlobalState";
import './style.css'

function SearchForm() {
  const [state, dispatch] = useStoreContext();
  // state = { title: '', location: '', fullTime: false }
  const [search, setSearch] = useState({title: '', location: ''});
  const [clearBtn, setClearBtn] = useState(false);
  
  // UseEffect to show or hide clear form and list button if form or list is empty
  useEffect(() => {
    if(search.title || state.searchedJobs.length) {
      setClearBtn(true)
    } else setClearBtn(false);
  }  , [search]);

  const handleChange = (e, { name, value }) => setSearch({ ...search,[name]: value })

  const handleClearSearch = (e) => {
    e.preventDefault();
    setSearch({title: '', location: ''});
    dispatch({
      type: CLEAR_SEARCH,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, location } = search;
    if (title || location) {
      // setSearch({ title: title, location: location });
      const { title, location } = search;
      dispatch({type: LOADING});
      API.searchJobs(title, location)
      .then(res => {
        dispatch({
          type: SAVE_SEARCH,
          searchedJobs: res.data
        });
        setSearch({title: '', location: ''});
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
            <Form.Button content='Search' icon='search' loading={state.loading} />
            {clearBtn && <Button basic hidden icon='close' onClick={handleClearSearch} />}
          </Form.Group>
        </Form>
        </Grid>
      </div>
    )
  
}

export default SearchForm;
