import React, { useState } from "react";
import { Form, Segment, Header, Button, Grid, Select, Icon, Card, List, Input  } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, LOADING_DONE } from '../../utils/actions';
import { NavLink, useHistory } from "react-router-dom";
import moment from "moment";
import API from '../../utils/API';

const statusOptions = [
  { key: 'n', text: 'None', value: 'None' },
  { key: 'a', text: 'Applied', value: 'Applied' },
  { key: 'i', text: 'Interviewed', value: 'Interviewed' },
  { key: 'ap', text: 'Approved', value: 'Approved' },
  { key: 'd', text: 'Declined', value: 'Declined' },
  { key: 'ar', text: 'Archived', value: 'Archived' },
]

const AddJob = () => {
  const [input, setInput] = useState(
    {
      searchId: '',
      title: '',
      description: '',
      type: '',
      location: '',
      company: '',
      url: '',
      created_at: moment().format('DD/MM/YYYY'),
      applied: false ,
      date_applied: '',
      status: 'None',
      notes: '',
      attachments: [],
      file: ''
    });

const [state, dispatch] = useStoreContext();
let history = useHistory();

const handleChange = (e, { name, value }) => {
  setInput({ ...input, [name]: value })
}
const handleUpload = async (e) => {
  dispatch({type: LOADING})
  // setInput({ ...input, [name]: value });
  const file = (e.target.files)[0];
  setInput({ ...input, file: e.target.value});
  await API.uploadFile(file).then(url => {
    setInput({ ...input, attachments: [url, ...input.attachments]});
    dispatch({type: LOADING_DONE, loading: false})
  })
}

const handleSubmit = async () => {
  const userId = await JSON.parse(localStorage.getItem('user'))._id
    input.created_at = moment().format();
    dispatch({type: LOADING});
    API.saveJob({ ...input, user: userId })
    .then(res => 
      {dispatch({ type: LOADING_DONE })
      history.push('/dashboard')
    })
    .catch(err => console.log(err));
  }

  const { title, description, type, location, company, url, created_at, date_applied,
    status, notes, attachments, file } = input;
    const fileList = attachments.map((link, i) => {
      // Making file Icon class depending on file type
      const type = link.split('.').pop();
      let fileIcon = '';
      switch(type) {
        case 'pdf': fileIcon = ' pdf';
        break;
        case 'docx': fileIcon = ' word';
        break;
        case 'jpg' : fileIcon = ' image';
        break;
        default: fileIcon = ' alternate';
      }

      return (<List.Item key={i}>
      <List.Icon name={`file${fileIcon}`} color='grey' />
      <List.Content>
        <a href={link} target='blank'>{ link.split('/').pop()}</a>
      </List.Content>
    </List.Item>)
    })

  return (<Grid centered>
    <Grid.Column computer={14} tablet={16}>
    <Segment style={{backgroundColor: '#f1f1f1'}}>
    <Form onSubmit={handleSubmit} loading={state.loading}>
      <Header as='h2'>
        <Icon name='calendar plus outline' color='green'/>
        Add new Job
      </Header>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Job title' placeholder='Job title' required
          name='title'
          onChange={handleChange}
          value={title}
        />
        <Form.Input fluid label='Company' placeholder='Company' required
          name='company'
          onChange={handleChange}
          value={company}
        />
        <Form.Input fluid label='Location' placeholder='Location' required
          name='location'
          onChange={handleChange}
          value={location}
        />
      </Form.Group> 
      <Form.Group>
        <Form.Input fluid label='Job Type' placeholder='Job type'
          width={4}
          name='type'
          onChange={handleChange}
          value={type}
        />
        <Form.Input fluid label='URL' placeholder='URL to job posting'
          width={12}
          name='url'
          onChange={handleChange}
          value={url}
        />
      </Form.Group> 
      <Form.TextArea label='Description' placeholder='Enter Job Description' 
        name='description'
        onChange={handleChange}
        value={description}
      />
      <Form.Group widths='equal'>
        <DateInput label='Date Posted'
          name="created_at"
          onChange={handleChange}
          value={created_at}
        />
        <Form.Field
              control={Select}
              name='status'
              options={statusOptions}
              label={{ children: 'Status', htmlFor: 'form-select-control-status' }}
              placeholder='Status'
              search
              searchInput={{ id: 'form-select-control-status' }}
              onChange={handleChange}
              value={status}
          />
          <DateInput label='Date Applied' 
            name="date_applied"
            onChange={handleChange}
            value={date_applied}
          />
      </Form.Group>
      <Form.Field>
        <Form.TextArea label='Notes' placeholder='Add some notes here...' 
        name="notes"
        onChange={handleChange}
        value={notes}
        />
      </Form.Field>
      <Form.Group>
        <Form.Field width={6} >
          <label>Upload File:</label>
          <Input type="file" placeholder='Attachments'
          loading={state.loading}
          name="file"
          onChange={handleUpload}
          value={file}
          />
        </Form.Field>
        <Card width={10}>
          <Card.Content>
            <Card.Header>Attachments</Card.Header>
            <Card.Description>
              <List>
                {fileList}
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      </Form.Group>
      <div>
        <Button icon labelPosition='left'
          as={ NavLink } to="/dashboard"
        >
          <Icon name='cancel' />
          Cancel
        </Button>
        <Button positive icon labelPosition='right' type='submit'>
          Save
          <Icon name='check' />
        </Button>
      </div>
    </Form>
    </Segment>
    </Grid.Column>
  </Grid>
    )
}

export default AddJob
