import React from 'react'
import { Image, Card, Button, Icon } from 'semantic-ui-react';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_JOB } from '../../utils/actions';
import moment from "moment";
import API from '../../utils/API';

const SearchList = () => {
    const [state, dispatch] = useStoreContext();
    const handleSave = (e) => {
        const id = e.target.id;
        const jobToSave = state.searchedJobs.filter(job => job.id === id).pop();
        const newJob = {
            searchId: jobToSave.id,
            title: jobToSave.title,
            description: jobToSave.description,
            type: jobToSave.type,
            location: jobToSave.location,
            company: jobToSave.company,
            url: jobToSave.url,
            created_at: jobToSave.created_at,
            applied: false ,
            status: 'None',
            notes: '',
            attachments: '',
          }
          API.saveJob(newJob)
          .then(res => {
            dispatch({
                type: ADD_JOB,
                jobToSave: res
            })
          })
          .catch(err => console.log(err));
        
    }
    const jobItems = state.searchedJobs.map( job => {
        const m = moment(job.created_at, "ddd MMM DD hh:mm:ss YYYY")
        return (
            <Card key={job.id}>
                <Card.Content>
                    <Image
                    floated='right'
                    size='tiny'
                    src={job.company_logo}
                    as="a" href={job.company_url} 
                    target="blank"
                    />
                    <Card.Header>{job.title}</Card.Header>
                    <Card.Meta>{job.type}</Card.Meta>
                    <Card.Description>
                    {job.company} | <strong>{job.location}</strong>
                    <Card.Meta>added {m.fromNow()}</Card.Meta>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button 
                        basic color='grey'
                        id={job.id}
                        onClick={handleSave}
                        >
                        <Icon name='download' />
                        Save  
                    </Button>
                    <Button basic color='green'
                        as="a" 
                        href={job.url} 
                        target="blank"
                     >
                        View
                        <Icon name='arrow right' />
                    </Button>
                    </div>
                </Card.Content>
                </Card>

        )
    })

    return (
    <Card.Group centered >
       {jobItems}
    </Card.Group>
    )
}

export default SearchList;
