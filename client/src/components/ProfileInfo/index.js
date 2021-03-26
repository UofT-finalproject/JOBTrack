import React from "react";
import { Header, Button, Grid, Icon, Container, Image, Table, Checkbox, Feed, Card  } from 'semantic-ui-react'
/*import { DateInput } from 'semantic-ui-calendar-react';
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, LOADING_DONE } from '../../utils/actions';
import { NavLink, useHistory } from "react-router-dom";
import moment from "moment";
import API from '../../utils/API';

const EditProfile = () => {
    const [input, setInput] = useState(
      {
        Name: '',
        description: '',
        type: '',
        location: '',
        company: '',
        url: '',
        created_at: moment().format('DD/MM/YYYY'),
        applied: false ,
        date_applied: '',
        status: 'None',
        notes: '',
        attachments: '',mer
      });*/

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
