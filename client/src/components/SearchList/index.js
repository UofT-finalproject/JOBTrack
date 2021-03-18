import React from 'react'
import { Image, Card, Button } from 'semantic-ui-react';
import { useStoreContext } from "../../utils/GlobalState";

const SearchList = () => {
    const [state, dispatch] = useStoreContext();
    const handleSave = (e) => {
        console.log(e.target.id)
    }
    const jobItems = state.searchedJobs.map( job => {
        return (
            <Card key={job.id}>
                <Card.Content>
                    <Image
                    floated='left'
                    size='tiny'
                    src={job.company_logo}
                    as="a" href={job.company_url} 
                    target="blank"
                    />
                    <Card.Header>{job.title}</Card.Header>
                    <Card.Meta>{job.type}</Card.Meta>
                    <Card.Description>
                    {job.company} | <strong>{job.location}</strong>
                    <Card.Meta>{job.created_at}</Card.Meta>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green' 
                        as='a'
                        as="a" href={job.url} 
                        target="blank"
                     >
                        View
                    </Button>
                    <Button 
                        basic color='red'
                        id={job.id}
                        onClick={handleSave}
                        >
                        Save
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
