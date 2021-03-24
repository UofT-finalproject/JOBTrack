import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import axios from "axios";
import logo from '../../../assets/images/jobTrack-gr.png';
import background from '../../../assets/images/background.jpg'

const LoginForm = (props) => {
  const [state, setState] = useState({ first_name: "", last_name: "", success: false, error: false });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const onLogin = (e) => {
    e.preventDefault();
    const { email, password } = state;
    axios({
      url: "/auth/login",
      method: "POST",
      data: { email, password },
    })
    .then((res) => {
      console.log('Authenticated: ', res);
      setIsAuthenticated(true);
      if (res.status === 200) {
        setState({ success: true, error: false });
        props.history.push("/dashboard");
      }
    })
    .catch(({ response }) => {
      setState({ error: response.data.message, success: false });
      console.log(state.error)
    });
  };
    
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({...state,
      [name]: value,
      error: false,
      success: false,
    });
  };

  return (
    <div className='bg' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
    <Grid style={{ height: '100vh' }} 
      verticalAlign='middle'
      >
        <Grid.Row computer={3} mobile={1}>
          <Grid.Column width={4} only='tablet computer'></Grid.Column>
        <Grid.Column style={{ maxWidth: 450 }} tablet={8} mobile={16}>
        <Header as='h2' color='teal' textAlign='center'>
            <Image src={logo} style={{width: 100}} /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={onLogin}>
          <Segment inverted color='grey' stacked>
            <Form.Input fluid icon='user'
              name='email'
              iconPosition='left' 
              placeholder='E-mail address'
              onChange={onChange}
              required
            />
            <Form.Input
              name='password'
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              onChange={onChange}
              type='password'
              required
            />
            <Button 
              color='teal' 
              fluid size='large'
              type='submit'
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message >
            New to us? <Link to={"/register"}>Register</Link>
        </Message>
        </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>
  )
}

export default LoginForm