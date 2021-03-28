import React, { useEffect, useState } from 'react'
import { Form, Select, Input, TextArea, Button, Icon, Card, List } from 'semantic-ui-react';
import { OPEN_MODAL, SET_CURRENT_JOB, UPDATE_JOB, LOADING, LOADING_DONE } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from "../../utils/GlobalState";
import { DateInput } from 'semantic-ui-calendar-react';
import FileListContainer from '../FileList/FileListContainer';

function DetailForm() {
  const [input, setInput] = useState({ status: '', date_applied: '', attachments: [], notes: '' });
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

  const handleUpload = async (e) => {
    dispatch({type: LOADING})
    // setInput({ ...input, [name]: value });
    const file = (e.target.files)[0];
    setInput({ ...input, file: e.target.value});
    await API.uploadFile(file)
      .then(url => {
        setInput({ ...input, attachments: [url, ...input.attachments]});
        dispatch({type: LOADING_DONE, loading: false})
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
      <Form onSubmit={handleSubmit} >
        <Form.Group >
          <Form.Field
                width={8}
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
                width={8}
                id='form-input-control-date-applied'
                name='date_applied'
                control={Input}
                label='Date Applied'
                placeholder='Date Applied'
                onChange={handleChange}
                value={date_applied}
            />
            <Button 
              style={{marginTop: 5}}
              width={2}
              animated='fade'
              floated='right'
              positive
              type="button"
              onClick={() => {
                dispatch({type: OPEN_MODAL, modal: false});
                handleSubmit();
              }}
            >
              <Button.Content hidden>Save</Button.Content>
              <Button.Content visible>
                <Icon name='check' />
              </Button.Content>
            </Button>
          </Form.Group>
          <Form.Group>
            <Form.Field width={14} >
              <label>Upload File:</label>
              <Input type="file" placeholder='Attachments'
              loading={state.loading}
              name="file"
              icon='upload'
              onChange={handleUpload}
              />
              <label style={{fontWeight: 200, color: 'grey'}}>
                Upload Supporting Documents: Resumer, Cover Letter etc.
              </label>
            </Form.Field>
            <Card fluid>
              <Card.Content>
                <Card.Header>Attachments</Card.Header>
                <Card.Description>
                  <List>
                    <FileListContainer attachments={attachments}/>
                  </List>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <p>
                  <Icon name='warning circle' />
                  Size Limit per file 10MB, Files are stored for 90 days only
                </p>
              </Card.Content>
            </Card>
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
