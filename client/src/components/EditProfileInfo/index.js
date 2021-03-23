import React from 'react'
import { Form, Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>
//TODO: finish creating edit modal and capture input to update ProfileInfo 
const Edit = () => {
    const [input, setInput] = useState(
      {
        firstname: '',
        lastname: '',
        about: '',
        location: '',
        company: '',
        github: '',
        created_at: moment().format('DD/MM/YYYY'),
        applied: false ,
        date_joined: '',
        status: 'None',
        notes: '',
        attachments: '',
      });

const EditModal = () => {
    return (
    <Modal trigger={<Button>Edit Profile</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>

      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
    )
}

export default () => (<div>{style}<EditModal/></div>)
