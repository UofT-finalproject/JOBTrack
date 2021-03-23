import React, { useState } from "react";
import { Header, Button, Grid, Select, Icon, Container, Image, Table, Checkbox, Feed, Card  } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, LOADING_DONE } from '../../utils/actions';
import { NavLink, useHistory } from "react-router-dom";
import moment from "moment";
import API from '../../utils/API';

/*const EditProfile = () => {
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
        attachments: '',
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
      <a>
        <Icon name='user' />
        contactsProp Contacts
      </a>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content>
      <Card.Header>Recent Activity</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label icon='add square' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              You added <a>Full-Stack Developer</a> to your <a>Saved Jobs.</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label icon='add user' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a contact.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label icon='write' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You set <a>Front-End Developer</a> status to Applied.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
    </Grid.Column>

    <Grid.Column floated='left' width={5}>
    <Card fluid color='red' header='Column 2' />
    <Header as='h1'>Contacts</Header>
    <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Registration Date</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Add User
          </Button>
          <Button size='small'>Approve</Button>
          <Button disabled size='small'>
            Approve All
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
    </Grid.Column>
    <Grid.Column floated='right' width={5}>
    <Card fluid color='orange' header='Column 3' />
    </Grid.Column>
  </Grid>
</Container>

  </div>
)

export default ProfileInfo;
