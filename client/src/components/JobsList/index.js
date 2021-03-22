import React, { useEffect, useState } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import API from '../../utils/API';
import moment from "moment";
import { LOADING, OPEN_MODAL, UPDATE_JOBS, SET_CURRENT_JOB } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";
import DetailModal from '../DetailModal';

function JobsList() {
  const [state, dispatch] = useStoreContext();
  const [clickedButtonId, setClickedButtonId] = useState('');

  useEffect(() => {
    loadJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const handleClick = (e) => {
    const id = e.target.parentNode.id;
    const job = state.savedJobs.filter( job => job._id === id);
    dispatch({ type: SET_CURRENT_JOB, currentJob: job[0] })
    dispatch({ type: OPEN_MODAL, modal: true, jobId: id });
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    setClickedButtonId(e.target.id);
    dispatch({type: LOADING})
    API.deleteJob(e.target.id)
    .then(res => {
      setClickedButtonId('');
      loadJobs()})
    .catch(err => console.log(err));
  }
  const jobs = state.savedJobs;
    return (
      <div>
      <Table celled fixed striped selectable >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan={2}>Title</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Company</Table.HeaderCell>
          {/* <Table.HeaderCell colSpan={3}>Description</Table.HeaderCell> */}
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Date Posted</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Date Applied</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Notes</Table.HeaderCell>
          <Table.HeaderCell>Attachments</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    <Table.Body>
      {jobs.length > 0 ? (jobs.map(job => {
          const {_id, searchId, title, company, location, 
            created_at, date_applied, status, notes, attachments } = job;
          // let strippedDescription = description ? description.replace(/(<([^>]+)>)/gi, "") : "No description";
      
          const pattern = /\D/g;
          let m;
          if (pattern.test(searchId)) {
            // if we get here then API is GitHub
            m = moment(created_at, "ddd MMM DD hh:mm:ss YYYY")
          } else {
            // it's The Muse
            m = moment(created_at, "YYYY-MM-DDThh:mm:ssZ");
          }
          return (
            <Table.Row key={_id} id={_id} 
                  positive = {status === 'Approved' ? true : false}                
                  negative = {status === 'Declined' ? true : false}                
                  warning = {status === 'Applied' || status === 'Interviewed' ? true : false}                
                  active = {status === 'Archived' ? true : false}                
                 onClick={handleClick}>
              <Table.Cell  colSpan={2}>{title}</Table.Cell>
                <Table.Cell colSpan={2}>{company}</Table.Cell>
                {/* <Table.Cell singleLine colSpan={3}>{strippedDescription}</Table.Cell> */}
                <Table.Cell>{location}</Table.Cell>
                <Table.Cell colSpan={2}>{m.format('ll')}<br/>{m.fromNow()}</Table.Cell>
                <Table.Cell>{status}</Table.Cell>
                <Table.Cell>{ date_applied }</Table.Cell>
                <Table.Cell colSpan={2}>{ notes }</Table.Cell>
                <Table.Cell>{attachments}</Table.Cell>
                <Table.Cell>
                <Button icon id={_id} onClick={handleDelete} loading={(clickedButtonId === _id) && state.loading}>
                    <Icon name ='delete' id={_id} />
                </Button>
                </Table.Cell>
            </Table.Row>)
    
        }
        )) : (
          <Table.Row><Table.Cell colSpan={13}>No saved jobs yet...</Table.Cell></Table.Row>
        )}
    </Table.Body>
  </Table>
        <DetailModal />
        </div>
      )
}

export default JobsList;