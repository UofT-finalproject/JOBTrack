import React, { Component } from 'react'
import { Container, Form } from 'semantic-ui-react'

class SearchForm extends Component {
  state = { title: '', location: '', fullTime: false }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { title, location } = this.state

    this.setState({ title: title, location: location });
    console.log(this.state);
  }

  render() {
    const { title, location, fullTime } = this.state;

    return (
      <div>
        <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Job Title'
              name='title'
              value={title}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Location'
              name='location'
              value={location}
              onChange={this.handleChange}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
        </Container>
      </div>
    )
  }
}

export default SearchForm;
