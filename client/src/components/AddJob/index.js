import React, { useState, useEffect } from "react";
import { Form, Segment, Dropdown, Checkbox, Button, Container, Grid, Select  } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';

const statusOptions = [
  { key: 'n', text: 'None', value: 'None' },
  { key: 'a', text: 'Applied', value: 'Applied' },
  { key: 'i', text: 'Interviewed', value: 'Interviewed' },
  { key: 'ap', text: 'Approved', value: 'Approved' },
  { key: 'd', text: 'Declined', value: 'Declined' },
  { key: 'ar', text: 'Archived', value: 'Archived' },
]



const AddJob = () => {
  const [input, setInput] = useState({ status: '', date_applied: '', attachments: '', notes: '' });

const handleChange = (e, { name, value }) => {
  setInput({ ...input, [name]: value })
}
  return (<Grid centered>
    <Grid.Column computer={14} tablet={16}>
    <Segment style={{backgroundColor: '#f1f1f1'}}>
    <Form >
      <Form.Group widths='equal'>
        <Form.Input fluid label='Job title' placeholder='First name' required/>
        <Form.Input fluid label='Company' placeholder='Company' required/>
        <Form.Input fluid label='Location' placeholder='Location' required/>
      </Form.Group> 
      <Form.TextArea label='Description' placeholder='Enter Job Description' />
      <Form.Group widths='equal'>
        <DateInput label='Date Posted' />
        <Form.Field
              control={Select}
              name='status'
              options={statusOptions}
              label={{ children: 'Status', htmlFor: 'form-select-control-status' }}
              placeholder='Status'
              search
              searchInput={{ id: 'form-select-control-status' }}
              onChange={handleChange}
              value={false}
          />
          <DateInput label='Date Applied' />
      </Form.Group>
      <Form.Field>
        <Form.TextArea label='Notes' placeholder='Add some notes here...' />
      </Form.Field>
      <Form.Field>
        <label>Attachments:</label>
        <input type="file" placeholder='Attachments' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    </Segment>
    </Grid.Column>
  </Grid>
    )
}

export default AddJob
