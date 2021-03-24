import React, { useEffect, useState } from 'react'
import { Form, Select, Input, TextArea, Button, Icon } from 'semantic-ui-react';
import { OPEN_MODAL, SET_CURRENT_JOB, UPDATE_JOB, FILTER_JOBS } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from "../../utils/GlobalState";
import { DateInput } from 'semantic-ui-calendar-react';

function DetailForm() {
  const [input, setInput] = useState({ status: '', date_applied: '', attachments: '', notes: '' });
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    const { status, date_applied, attachments, notes } = state.currentJob;
      setInput({ status, date_applied, attachments, notes })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleChange = (e, { name, value }) => {
      setInput({ ...input, [name]: value })
    }

  const handleSubmit = () => {
    const { status, date_applied, attachments, notes } = input;
    setInput({ status, date_applied, attachments, notes });
    const updatedJob = {...state.currentJob, ...input};
    dispatch({type: SET_CURRENT_JOB, currentJob: updatedJob});
    API.updateJob(updatedJob._id, updatedJob)
    .then(res => {
        dispatch({type: UPDATE_JOB, updatedJob: updatedJob});
    })
    .catch(err => console.log(err))
  }

  const statusOptions = [
    { key: 'n', text: 'None', value: 'None' },
    { key: 'a', text: 'Applied', value: 'Applied' },
    { key: 'i', text: 'Interviewed', value: 'Interviewed' },
    { key: 'ap', text: 'Approved', value: 'Approved' },
    { key: 'd', text: 'Declined', value: 'Declined' },
    { key: 'ar', text: 'Archived', value: 'Archived' },
  ]
 
    const { status, date_applied, attachments, notes } = input;

    return (
        <Form unstackable onSubmit={handleSubmit} >
          <Form.Group >
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
            
            <DateInput
                id='form-input-control-date-applied'
                name='date_applied'
                control={Input}
                label='Date Applied'
                placeholder='Date Applied'
                onChange={handleChange}
                value={date_applied}
            />
            <Form.Field
                id='form-input-control-attachments'
                name='attachments'
                control={Input}
                type="file"
                label='Attachments'
                placeholder='Upload Files'
                onChange={handleChange}
                value={attachments}
            />
            
            <Button animated='fade'
              onClick={() => {
                dispatch({type: OPEN_MODAL, modal: false});
                handleSubmit();
              }}
              positive
              floated='right'
              type="button" 
            >
              <Button.Content hidden>Save</Button.Content>
              <Button.Content visible>
                <Icon name='check' />
              </Button.Content>
            </Button>
           
            </Form.Group>
            <Form.Field
                name='notes'
                id='form-textarea-control-notes'
                control={TextArea}
                label='Notes'
                placeholder='Notes | Contacts...'
                onChange={handleChange}
                value={notes}
            />
        </Form>
    )
  
}

export default DetailForm;
