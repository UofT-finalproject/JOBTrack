import React, { Component } from 'react'
import {
    Header,
    Grid,
    Icon,
    Container,
    Image,
    Card,
    Form,
    Segment
 } from 'semantic-ui-react'
 //import { useStoreContext } from "../../utils/GlobalState";

 //TODO:
 // Move edit form to it's own component in EditProfileInfo as a modal
 // Connect state to global store
 // Make onSubmit save to global state
 // Add select gender
 // Create a nicer UI for the Profile Info segment
 // Allow users to upload their own profile picture and save it to profile

 /* To select gender to implement in the future
 const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]*/

class ProfileInfo extends Component {
    state = { 
        ...this.state,
        name: '',
        email: '',
        submittedName: '',
        submittedEmail: '',
        submittedOccupation: ''
        }
  
    handleChange = (e, { name, value, }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { name, email, about, occupation } = this.state
  
      this.setState({ submittedName: name, submittedEmail: email, submittedAbout: about, submittedOccupation: occupation })
    }
  
    render() {
      const {
        name,
        email,
        about,
        occupation,
        submittedName,
        submittedEmail,
        submittedAbout,
        submittedOccupation,
    } = this.state
  
      return (
        <div>
        <Container style={{ marginTop: '2em' }}>
        <Grid>
        <Grid.Column floated='center' width={5}>
        <Header as='h1'>My Profile</Header>
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} circular />
          <Card.Content>
            <Card.Header>{submittedName}</Card.Header>
            <Card.Meta>
              <span className='occupation'>{submittedOccupation}</span>
            </Card.Meta>
            <Card.Description
            placeholder='About Me'
            >
            {submittedAbout}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="mailto:{submittedEmail}" >
              <Icon name='user' />
              {submittedEmail}
            </a>
          </Card.Content>
        </Card>
          </Grid.Column>
        <Grid.Column floated='left' width={6}>

    <Header as='h2'>Edit your Information:</Header>

        <Form onSubmit={this.handleSubmit}>
        <Form.Group widths={1}>
            <Form.Input
              label='Name'
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              label='Email'
              placeholder='Email'
              name='email'
              
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input
              label='Occupation'
              placeholder='Occupation'
              name='occupation'
              
              value={occupation}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea
              label='About Me'
              placeholder='About'
              name='about'
              value={about}
              onChange={this.handleChange}
          />
            <Form.Button content='Submit' />
        
        </Form>
        <Segment.Group name={submittedName, submittedEmail, submittedAbout} >
          <Segment>Name: {name}</Segment>
          <Segment>Email: {email}</Segment>
          <Segment>Occupation: {occupation}</Segment>
          <Segment>About Me: {about}</Segment>
      
        </Segment.Group>
        
        </Grid.Column>
        </Grid>
      </Container>
      
        </div>
      )
    }
  }
  
  export default ProfileInfo

  /* Following code is the changed states for profile info in JSON form for both onSubmit and onChange
                  <strong>onChange:</strong>
                <pre>{JSON.stringify({ name, email, about }, null, 2)}</pre>
                <strong>onSubmit:</strong>
                <pre>{JSON.stringify({ submittedName, submittedEmail, submittedAbout }, null, 2)}</pre>
  */
