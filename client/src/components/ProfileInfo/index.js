import React from "react";
import { Header, Grid, Icon, Container, Image, Card  } from 'semantic-ui-react'

const ProfileInfo = () => (
  <div>
  <Container style={{ marginTop: '2em' }}>
    <Header as='h1'>My Profile</Header>
  <Grid>
  <Grid.Column floated='left' width={5}>
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} circular />
    <Card.Content>
      <Card.Header>UsernameProp</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in DateJoinedProp</span>
      </Card.Meta>
      <Card.Description>
        User Description
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="https://jobs.github.com/" >
        <Icon name='user' />
        contactsProp Contacts
      </a>
    </Card.Content>
  </Card>
 
    </Grid.Column>

  </Grid>
</Container>

  </div>
)

export default ProfileInfo;
