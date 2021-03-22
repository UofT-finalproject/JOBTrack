import React, { useEffect, useState } from 'react'
import { Form, Grid, Button, Header, Icon } from 'semantic-ui-react'
import { SAVE_SEARCH, CLEAR_SEARCH, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from "../../utils/GlobalState";
import './style.css'

function SearchForm() {
  const [state, dispatch] = useStoreContext();
  // state = { title: '', location: '', fullTime: false }
  const [search, setSearch] = useState({title: '', location: ''});
  const [clearBtn, setClearBtn] = useState(false);
  // radio button state
  const [radioValue, setRadioValue] = useState('gh');
  
  // UseEffect to show or hide clear form and list button if form or list is empty
  useEffect(() => {
    if(search.title || state.searchedJobs.length) {
      setClearBtn(true)
    } else setClearBtn(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }  , [search]);

  const handleChange = (e, { name, value }) => setSearch({ ...search,[name]: value })

  function handleRadioButtonChange(radioValue, e) {
    e.preventDefault();
    setRadioValue(radioValue);
  }

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
      API.searchJobs(title, location, radioValue)
        .then(res => {
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
        <Header as='h3' >
          <Icon name='search plus' color='grey'/>
          Search for a Job
          </Header>
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
          <Form.Group inline>
            <label>Job Site:</label>
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
