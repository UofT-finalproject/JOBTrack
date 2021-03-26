import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Menu, Container, Transition } from 'semantic-ui-react'
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useStoreContext } from "../../../utils/GlobalState";
import logo from '../../../assets/images/jobTrack-gr.png';
import background from '../../../assets/images/background.jpg';
import { LOADING, USER_AUTHENTICATED } from '../../../utils/actions';
import { login as loginUtil }  from '../../../utils'

const LoginForm = (props) => {
  const [login, setLogin] = useState({email: '', password: '', first_name: "", last_name: "", success: false, error: '' });
  const [state, dispatch] = useStoreContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
   if (state.isAuthenticated) {
    props.history.push("/home");
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isAuthenticated])
  
  const onLogin = (e) => {
    e.preventDefault();
    const { email, password } = login;
    axios({
      url: "/auth/login",
      method: "POST",
      data: { email, password },
    })
    .then((res) => {
      if (res.status === 200) {
        const user = {first_name: res.data.first_name, last_name: res.data.last_name}
        dispatch({type: LOADING, loading: true})
        dispatch({ type: USER_AUTHENTICATED, user });
        loginUtil(user);
      }
    })
    .catch(({ response }) => {
      if(typeof response.data !== 'object') {
        setLogin({ error: response.data, success: false });
        setVisible(true);
        setTimeout(() => setVisible(false), 2000);
      }
    });
  };
    
  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({...login,
      [name]: value,
      error: '',
      success: false,
    });
  };

  return (
    <div className='bg' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div style={{height: 1}}></div>
      <Menu 
        inverted
        pointing
        secondary
        size='large'
      >
        <Container>
          <Menu.Item as={ NavLink } to="/">
            Home
          </Menu.Item>
          <Menu.Item position='right'>
            <Button as={ NavLink } to="/login" inverted>
            {/* <Button onClick={handleLogin} inverted={!fixed}> */}
              Log in
            </Button>
            <Button as={ NavLink } to="/register" inverted style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>

    <Grid style={{ 
      height: '100vh',
      //marginLeft: '30em',
     }} 
      verticalAlign='middle'
      >
        <Grid.Row computer={3} mobile={1}>
          <Grid.Column width={4} only='tablet computer'></Grid.Column>
        <Grid.Column style={{ maxWidth: 450 }} tablet={8} mobile={16}>
        <Header as='h2' color='green' textAlign='center' style={{ fontSize: 20 }}>
            <Image src={logo} style={{width: 100, marginRight: '2em'}} /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={onLogin} loading={state.loading}>
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
            <div style={{height: 25}}>
            <Transition visible={visible} animation='fade' duration={500}>
              <p>{login.error}</p>
            </Transition>
            </div>
            <Button 
              positive 
              fluid size='large'
              type='submit'
              content='Login'
            >
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