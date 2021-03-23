import React, { useEffect, useState, useMemo } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import API from '../../utils/API';
import moment from "moment";
import { LOADING, OPEN_MODAL, UPDATE_JOBS, SET_CURRENT_JOB } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";
import DetailModal from '../DetailModal';
// Custom Hook for keeping sort state
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
// Remember sorted array of jobs and do not do sorting if data is not changed 
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key].toUpperCase() < b[sortConfig.key].toUpperCase()) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key].toUpperCase() > b[sortConfig.key].toUpperCase()) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

// Helper function to toggle sort order
  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

// Main job list component
function JobsList() {
  const [state, dispatch] = useStoreContext();
  const [clickedButtonId, setClickedButtonId] = useState('');
  const { items, requestSort, sortConfig } = useSortableData(state.savedJobs);

  // Generate classname for sort order icon in table header
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return '';
    }
    return sortConfig.key === name ? (' ' + sortConfig.direction) : '';
  };
// Load saved jobs on initialization
  useEffect(() => {
    loadJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helper function to get saved jobs from server API
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

  // Handler when user clicks on row to display job details
  const handleClick = (e) => {
    const id = e.target.parentNode.id;
    const job = state.savedJobs.filter( job => job._id === id);
    dispatch({ type: SET_CURRENT_JOB, currentJob: job[0] })
    dispatch({ type: OPEN_MODAL, modal: true, jobId: id });
  }

  // Delete button handler to delete job
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
  
  // JSX for table of jobs using Semantic UI
  // Each table header has onClick handler to request Sorting by header and order
  // Each row has handler to triger Job Detail Modal to open
  return (
    <div>
      <Table celled fixed striped selectable >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={2}
                onClick={() => requestSort('title')} >
                <Icon name={'sort' + getClassNamesFor('title')} onClick={() => requestSort('title')} />
                Title
              </Table.HeaderCell>
            <Table.HeaderCell colSpan={2}
              onClick={() => requestSort('company')} >
              <Icon name={'sort' + getClassNamesFor('company')} onClick={() => requestSort('company')} />
              Company
            </Table.HeaderCell>
            <Table.HeaderCell colSpan={2}
              onClick={() => requestSort('location')} >
              <Icon name={'sort' + getClassNamesFor('location')} onClick={() => requestSort('location')} />
              Location
              </Table.HeaderCell>
            <Table.HeaderCell colSpan={2}
              onClick={() => requestSort('created_at')}>
              <Icon name={'sort' + getClassNamesFor('created_at')} onClick={() => requestSort('created_at')} />
              Date Posted
            </Table.HeaderCell>
            <Table.HeaderCell colSpan={2}
              onClick={() => requestSort('status')} >
              <Icon name={'sort' + getClassNamesFor('status')} onClick={() => requestSort('status')} />
              Status
            </Table.HeaderCell>
            <Table.HeaderCell colSpan={2}
              onClick={() => requestSort('date_applied')} >
              <Icon name={'sort' + getClassNamesFor('date_applied')} onClick={() => requestSort('date_applied')} />
              Date Applied</Table.HeaderCell>
            <Table.HeaderCell colSpan={2}>Notes</Table.HeaderCell>
            <Table.HeaderCell>Attachments</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.length > 0 ? (items.map(job => {
              const {_id, title, company, location, 
                created_at, date_applied, status, notes, attachments } = job;
                const m = moment(created_at);
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
                    <Table.Cell colSpan={2}>{location}</Table.Cell>
                    <Table.Cell colSpan={2}>{m.format('ll')}<br/>{m.fromNow()}</Table.Cell>
                    <Table.Cell colSpan={2}>{status}</Table.Cell>
                    <Table.Cell colSpan={2}>{ date_applied }</Table.Cell>
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
