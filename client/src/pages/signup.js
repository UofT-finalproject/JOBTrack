import React from 'react'
import { Button, Form, Segment, Header } from 'semantic-ui-react'

const FormExampleInverted = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid placeholder='Email' />
        <Form.Input fluid placeholder='Password' />
        <Form.Input fluid placeholder='Confirm password' />
      </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Sign up</Button>
    </Form>
  </Segment>
)
export default FormExampleInverted


const Header = () => (
  <div>
    <Header as='h1'>Track your job search - save applications!</Header>
    </div>
)

export default Header