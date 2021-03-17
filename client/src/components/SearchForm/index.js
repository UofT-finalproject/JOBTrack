import React, { Component } from 'react'
import { Container, Form } from 'semantic-ui-react'
import API from '../../utils/API'

class SearchForm extends Component {
  state = { title: '', location: '', fullTime: false }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { title, location } = this.state
    this.setState({ title: title, location: location });
    API.searchJobs(title, location)
    .then(data => console.log(data))
    .catch(err => console.log(err));
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
