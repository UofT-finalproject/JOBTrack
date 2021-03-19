import React, { useEffect, useState } from 'react';
import { Table, Icon } from 'semantic-ui-react';
import API from '../../utils/API';
import moment from "moment";
import DescriptionCell from '../DescriptionCell';

function JobsList() {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    loadJobs()
  }, []);

    const loadJobs = () => {
      API.getSavedJobs()
      .then(res => {
        
        setJobs(res.data)});
    }
    
    return (
      <Table celled fixed striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan={2}>Title</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Company</Table.HeaderCell>
          <Table.HeaderCell colSpan={4}>Description</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Date Posted</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Date Applied</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
          <Table.HeaderCell>Attachments</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

    <Table.Body>
      {jobs ? (jobs.map(job => {
          const {_id, title, company, description, location, created_at, date_applied, status, notes } = job;
          let strippedDescription = description.replace(/(<([^>]+)>)/gi, "")
          return (<Table.Row key={job._id}>
            <Table.Cell colSpan={2}>{title}</Table.Cell>
              <Table.Cell colSpan={2}>{company}</Table.Cell>
              <Table.Cell singleLine colSpan={4}>{strippedDescription}</Table.Cell>
              <Table.Cell>{location}</Table.Cell>
              <Table.Cell colSpan={2}>{moment(job.created_at).format('ll')}<br/>{moment(job.created_at).fromNow()}</Table.Cell>
              <Table.Cell>{status}</Table.Cell>
              <Table.Cell>{ date_applied }</Table.Cell>
              <Table.Cell>{ notes }</Table.Cell>
              <Table.Cell> -- </Table.Cell>
          </Table.Row>)
        }
        )) : (
          <h1>No saved jobs yet...</h1>
        )}
      
    </Table.Body>
  </Table>
        
      )
}

export default JobsList;