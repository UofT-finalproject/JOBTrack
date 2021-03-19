import React from 'react'
import { Image, Card, Button, Icon } from 'semantic-ui-react';
import { useStoreContext } from "../../utils/GlobalState";
import moment from "moment";

const SearchList = () => {
    const [state, dispatch] = useStoreContext();
    const handleSave = (e) => {
        console.log(e.target.id)
    }
    const jobItems = state.searchedJobs.map( job => {
        let diff = moment().diff(job.created_at, 'days')
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
                    <Card.Meta>added {
                        !diff ? 'today' : (diff === 1 ? '1 day ago' : `${diff} days ago`)
                    }</Card.Meta>
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
                        as='a'
                        as="a" href={job.url} 
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
