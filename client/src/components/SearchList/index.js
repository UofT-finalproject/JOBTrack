import React, { useState } from 'react'
import { Image, Card, Button, Icon, Transition } from 'semantic-ui-react';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_JOB, LOADING } from '../../utils/actions';
import moment from "moment";
import API from '../../utils/API';
import './style.css';

const SearchList = () => {
    const [state, dispatch] = useStoreContext();
    const [clickedButtonId, setClickedButtonId] = useState('');
    const [visible, setVisible] = useState(false)

    const showSavedMessage = () => {
        setVisible(true);
        setInterval(() => setVisible(false), 3000);
    }

    const handleSave = (e) => {
        const id = e.target.id;
        setClickedButtonId(id);
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
            applied: false,
            status: 'None',
            notes: '',
            attachments: '',
        };
        dispatch({ type: LOADING });
        API.saveJob(newJob)
            .then(res => {
                dispatch({
                    type: ADD_JOB,
                    jobToSave: res
                });
                showSavedMessage();
            })
            .catch(err => console.log(err));

    }

    const jobItems = state.searchedJobs.map(job => {
        const pattern = /\D/g;
        let m;
        if (pattern.test(job.id)) {
            // if we get here then API is GitHub
            m = moment(job.created_at, "ddd MMM DD hh:mm:ss YYYY")
        } else {
            // it's The Muse
            m = moment(job.created_at, "YYYY-MM-DDThh:mm:ssZ");
            console.log(`For job creation date of ${job.created_at}, this was ${m.fromNow()} ago`);
        }
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
                        <div className="saved-msg">
                            <Transition visible={(clickedButtonId === job.id) && visible} animation='slide right' duration={500}>
                                <p className='green'>Saved</p>
                            </Transition>
                        </div>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button
                            basic color='grey'
                            id={job.id}
                            onClick={handleSave}
                            loading={(clickedButtonId === job.id) && state.loading}
                        >
                            <Icon name='download' id={job.id} />
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
