import React from 'react'
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='User Name' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Button type='submit'>Login</Button>
    <Button type='submit'>Sign up</Button>
  </Form>
)

const Header = () => (
  <div>
    <Header as='h1'>Track your job search - save applications!</Header>
    </div>
)

export default Header
export default FormExampleForm
