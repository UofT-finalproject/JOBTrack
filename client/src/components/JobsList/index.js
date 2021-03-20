import React, { useEffect, useState } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import API from '../../utils/API';
import moment from "moment";
import { LOADING, UPDATE_JOBS } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

function JobsList() {
  const [state, dispatch] = useStoreContext();
  const [clickedButtonId, setClickedButtonId] = useState('');

  useEffect(() => {
    loadJobs()
  }, []);

    const loadJobs = () => {
      dispatch({type: LOADING})
      API.getSavedJobs()
      .then(res => {
        dispatch({
          type: UPDATE_JOBS,
          savedJobs: res.data
        })
      });
    }

    const handleDelete = (e) => {
      setClickedButtonId(e.target.id);
      dispatch({type: LOADING})
      API.deleteJob(e.target.id)
      .then(res => {
        setClickedButtonId('');
        loadJobs()})
      .catch(err => console.log(err));
    }
    const jobs = state.savedJobs;
    console.log(jobs);
    return (
      <Table celled fixed striped selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan={2}>Title</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Company</Table.HeaderCell>
          <Table.HeaderCell colSpan={3}>Description</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Date Posted</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Date Applied</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
          <Table.HeaderCell>Attachments</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

    <Table.Body>
      {jobs.length > 0 ? (jobs.map(job => {
          const {_id, title, company, description, location, created_at, date_applied, status, notes } = job;
          let strippedDescription = description ? description.replace(/(<([^>]+)>)/gi, "") : "No description";
          const m = moment(created_at, "ddd MMM DD hh:mm:ss YYYY")
          return (
            <Table.Row key={_id}>
              <Table.Cell colSpan={2}>{title}</Table.Cell>
                <Table.Cell colSpan={2}>{company}</Table.Cell>
                <Table.Cell singleLine colSpan={3}>{strippedDescription}</Table.Cell>
                <Table.Cell>{location}</Table.Cell>
                <Table.Cell colSpan={2}>{m.format('ll')}<br/>{m.fromNow()}</Table.Cell>
                <Table.Cell>{status}</Table.Cell>
                <Table.Cell>{ date_applied }</Table.Cell>
                <Table.Cell>{ notes }</Table.Cell>
                <Table.Cell> -- </Table.Cell>
                <Table.Cell>
                <Button icon id={_id} onClick={handleDelete} loading={(clickedButtonId === _id) && state.loading}>
                    <Icon name ='delete' id={_id} />
                </Button>
                </Table.Cell>
            </Table.Row>)
        }
        )) : (
          <Table.Row><Table.Cell colSpan={14}>No saved jobs yet...</Table.Cell></Table.Row>
        )}
      
    </Table.Body>
  </Table>
        
      )
}

export default JobsList;