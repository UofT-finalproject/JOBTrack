import React, { useEffect, useState } from 'react'
import { Form, Grid, Button, Header, Icon } from 'semantic-ui-react'
import { SAVE_SEARCH, CLEAR_SEARCH, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import moment from "moment";
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

    // UseEffect to show or hide clear form and list button if form or list is empty
    useEffect(() => {
        if (search.title || state.searchedJobs.length) {
            setClearBtn(true)
        } else setClearBtn(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const handleChange = (e, { name, value }) => setSearch({ ...search, [name]: value })

    function handleRadioButtonChange(radioValue, e) {
        e.preventDefault();
        setRadioValue(radioValue);
    }

    const handleClearSearch = (e) => {
        e.preventDefault();
        setSearch({ title: '', location: '' });
        dispatch({
            type: CLEAR_SEARCH,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { title, location } = search;
        if (title || location) {
            const { title, location } = search;
            dispatch({ type: LOADING });
            API.searchJobs(title, location, radioValue)
                .then(res => {
                    // Extract data to common format
                    const jobData = [];
                    if (radioValue === 'gh') {
                        res.data.forEach((item) => {
                          let m = moment(item.created_at, "ddd MMM DD HH:mm:ss YYYY")
                            let job = {
                                company: item.hasOwnProperty('company') ? item.company : "",
                                company_logo: item.hasOwnProperty('company_logo') ? item.company_logo : "",
                                company_url: item.hasOwnProperty('company_url') ? item.company_url : "",
                                created_at: item.hasOwnProperty('created_at') ? m.format() : "",
                                description: item.hasOwnProperty('description') ? item.description : "",
                                how_to_apply: item.hasOwnProperty('how_to_apply') ? item.how_to_apply : "",
                                id: item.hasOwnProperty('id') ? item.id : "",
                                location: item.hasOwnProperty('location') ? item.location : "",
                                title: item.hasOwnProperty('title') ? item.title : "",
                                type: item.hasOwnProperty('type') ? item.type : "",
                                url: item.hasOwnProperty('url') ? item.url : "",
                            }
                            jobData.push(job)
                        })
                    } else if (radioValue === 'li') {
                        res.data.results.forEach((item) => {
                          let m = moment(item.publication_date, "YYYY-MM-DDThh:mm:ssZ");
                            let job = {
                                company: item.company.name,
                                company_logo: "",
                                company_url: item.refs.landing_page,
                                created_at: m.format(),
                                description: item.contents,
                                how_to_apply: item.refs.landing_page,
                                id: item.id.toString(),
                                location: item.locations[0].name,
                                title: item.name,
                                type: item.type,
                                url: item.refs.landing_page,
                            }
                            jobData.push(job)
                        });
                    }
                    dispatch({
                        type: SAVE_SEARCH,
                        searchedJobs: jobData
                    })
                })
                .catch(err => console.log(err));
        }
    }

    const { title, location } = search;

    return (
        <div>
            <Grid centered>
                <Form className="search-form" onSubmit={handleSubmit}>
                  <Header as='h3' >
                    <Icon name='search plus' color='green'/>
                    Search for a Job
                  </Header>
                  <Form.Group widths="equal">
                      <Form.Input
                          placeholder="Job Title"
                          name="title"
                          value={title}
                          onChange={handleChange}
                      />{" "}
                      <Form.Input
                          placeholder="Location"
                          name="location"
                          value={location}
                          onChange={handleChange}
                      />{" "}
                      <Form.Button content="Search" icon="search" loading={state.loading} />{" "}
                      {clearBtn && (
                          <Button basic hidden icon="close" onClick={handleClearSearch} />
                      )}{" "}
                  </Form.Group>{" "}
                  <Form.Group inline>
                      <label> Job Site: </label>{" "}
                      <Form.Radio
                          label="The Muse"
                          value="li"
                          checked={radioValue === "li"}
                          onChange={(e) => handleRadioButtonChange("li", e)}
                      />{" "}
                      <Form.Radio
                          label="GitHub"
                          value="gh"
                          checked={radioValue === "gh"}
                          onChange={(e) => handleRadioButtonChange("gh", e)}
                      />{" "}
                  </Form.Group>{" "}
                </Form>{" "}
            </Grid>{" "}
        </div>
    );
}

export default SearchForm;