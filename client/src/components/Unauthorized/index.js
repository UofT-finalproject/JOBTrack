import React from 'react'
import { Container, Message } from 'semantic-ui-react'

const Unauthorized = () => (
    <Container>
    <Message negative>
        <Message.Header>Unauthorized</Message.Header>
        <p>Please login</p>
    </Message>
  </Container>
)

export default Unauthorized
