import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
//import jobTrackLogo from '../assets/images/jobTrack-logo.png';
import background from "../assets/images/background.jpg";
import logo from "../assets/images/jobTrack-gr.png"
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Sidebar
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (
  
  <Container text>
    <Image
      src={logo}
      size='big'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Simplify your search with jobTrack'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button as={ NavLink } to="/home" positive size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  showLogin = () => this.setState({ login: true })

  componentDidMount(){
    let isLoggedIn = localStorage.getItem('user');
    if (!isLoggedIn) {
      this.setState({ isLoggedIn: true });
    } else this.setState({ isLoggedIn: false });
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { isLoggedIn } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
          <Segment
            textAlign='center'
            style={{ minHeight: '100vh', padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item position='right'>
                  { isLoggedIn ? (
                    <Button as={ NavLink } to="/login" inverted={!fixed}>
                      Log in
                    </Button>
                  ) : (
                    <Button as={ NavLink } to="/logout" inverted={!fixed}>
                      Log out
                    </Button>
                  )}
                  <Button as={ NavLink } to="/register" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
          </div>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}


class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a' 
              href="https://mycareerspot.org/"
              target="blank"
            >Careers</Menu.Item>
            <Menu.Item as={ NavLink } to="/login">Log in</Menu.Item>
            <Menu.Item as={ NavLink } to="/register">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children, handleLogin }) => (
  <MediaContextProvider>
    <DesktopContainer handleLogin={handleLogin}>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Landing = ({ children, handleLogin }) => (
  <ResponsiveContainer handleLogin={handleLogin}>
    <Segment style={{ padding: '2em 1em', marginTop: '1.5em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We make your job search simple
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Searching for a job? Don't remember what jobs you've applied to and which ones you haven't? Can't keep up with your upcoming interviews? Say no more! jobTrack is an application that allows a user to help keep track of the jobs they've applied to. This app offers a smooth, clean and easy-to-use user interface to help users focus on organizing their applied jobs and upcoming interviews. We hope JOBTrack helps you keep organized and find your dream job as soon as possible!
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Powered by Github Jobs
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Job track allows you to browse, search, and save jobs to your dashboard using Github Jobs' API, making it easy to search for openings and keep track of them for your convenience.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://i.imgur.com/mtniqCD.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button as={ NavLink } to="/home" size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "jobTrack is a lifesaver"
            </Header>
            <p style={{ fontSize: '1.33em' }}><i>-UofT SCS Web Development Bootcamp Alumni</i></p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I don't know what I would've done without jobTrack.."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://i.imgur.com/7TDjPKd.png' />
              <b>Nan</b> <i>Front-End Developer</i>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '2em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em', marginTop: '1em' }}>
          Users say jobTrack is the best way to keep your job search organized
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          All the users are talking about the impact that jobTrack is having on careers.
          It's nice to see that there has been a shift in unemployment since jobTrack has risen in popularity.
        </p>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='https://jobs.github.com/'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Start tracking your jobs today!
        </Header>
        <p style={{ fontSize: '1.33em', paddingBottom: '2em' }}>
          Using our app, you will have the easiest user experience to help you find your dream job as soon as possible.
        </p>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '3em 2em' }}>
      <Container style={{ marginTop: '0em' }}>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a' href='mailto:groupone.finalproject@gmail.com'>Contact Us</List.Item>
                <List.Item as='a' href='https://github.com/UofT-finalproject/JOBTrack'>Github Repo</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Our Team' />
              <List link inverted>
                <List.Item as='a' href='https://github.com/elogonme'>Eldar Humbatov</List.Item>
                <List.Item as='a' href='https://github.com/omair-muhi'>Omair Muhi</List.Item>
                <List.Item as='a' href='https://github.com/nagck'>Nagesh Kalegowda</List.Item>
                <List.Item as='a' href='https://github.com/dazrin'>Dazrin Tioseco</List.Item>
                <List.Item as='a' href='https://github.com/tasad667023/'>Tayyaba Asad</List.Item>
                <List.Item as='a' href='https://github.com/ivanduranic'>Ivan Duranic</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Technologies + APIs' />
              <List link inverted>
                <List.Item as='a' href='https://react.semantic-ui.com/'>Semantic UI React</List.Item>
                <List.Item as='a' href='https://jobs.github.com/'>Github Jobs</List.Item>
                <List.Item as='a' href='https://www.themuse.com/search'>The Muse</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={4}>
              <Header inverted as='h4' content='Copyright' />
              <List link inverted>
              <List.Item as='a' href='https://jobtrack-search.herokuapp.com/'>©2020 by jobTrack</List.Item>
              
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default Landing