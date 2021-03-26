import React from "react";
import { Item } from "semantic-ui-react";
import careerpic from "../../assets/images/careerpic.jpg";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/jobTrack-logo.png';
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
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const CareerServicesItem = () => (
  <Container>
      <Segment style={{ padding: '8em 8em' }} vertical>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={20}>
    <Image
      src={logo}
      size='large'
      centered
      style={{
        fontWeight: 'normal',
        marginTop: '0em'
      }}
    />


          <Header as='h1' style={{ fontSize: '2em' }}>
          <Image src={careerpic} />Find Helpful Links From Career Services Below:
          </Header>

            <p style={{ fontSize: '1.30em' }}>
             We at jobTrack are committed to simplify your job search. 
             To give you some further assistance, we have provided some links from Trilogy's Career Services portal to equip you to find the job you're looking for.
            </p>

<Item.Group relaxed>
    <Item>
    <Icon name='searchengin' size='massive' />

      <Item.Content>
        <Item.Header>
          <a
            href="https://docs.google.com/document/d/1Ztb_iITF8UE_kMAzbeqfBi72PN__tqaCMEE3_BAp6IU/preview?pru=AAABeDiiB2c*ZdFd_2jR1J03HgrQAxmJnQ#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strategies for Today's Job Search
          </a></Item.Header>
        <Item.Description>In this link, you will find a very detailed document that will guide you and educate you on strategies to find a position in the current job landscape as soon as possible!</Item.Description>
        <Item.Extra>
        <Button floated="right" size='small'><a
            href="https://docs.google.com/document/d/1Ztb_iITF8UE_kMAzbeqfBi72PN__tqaCMEE3_BAp6IU/preview?pru=AAABeDiiB2c*ZdFd_2jR1J03HgrQAxmJnQ#"
            target="_blank"
            rel="noopener noreferrer"
          >Check Them Out</a></Button>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
    <Icon name='slideshare' size='massive' />

      <Item.Content >
        <Item.Header>
          <a
            href="https://docs.google.com/document/d/1ysD_f_W3iwrSK8kKFeCyd1dNJg9XZW-QYeaObotxXP8/preview?pru=AAABeDiyf0w*dsUwnlsi6IpCvCupv6BPMw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guide to Remote Networking
          </a></Item.Header>
        <Item.Description>This link contains a detailed guide about how to network properly in the current job landscape. Networking is an essential part of making your job search easier, as more connections will give you more opportunities!</Item.Description>
        <Item.Extra>
        <Button floated="right" size='small'><a
            href="https://docs.google.com/document/d/1ysD_f_W3iwrSK8kKFeCyd1dNJg9XZW-QYeaObotxXP8/preview?pru=AAABeDiyf0w*dsUwnlsi6IpCvCupv6BPMw"
            target="_blank"
            rel="noopener noreferrer"
          >Check Them Out</a></Button>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
    <Icon name='book' size='massive' />

      <Item.Content>
        <Item.Header>
        <a
            href="https://docs.google.com/document/d/1qUTfdBz4_7mqVzs--AYKMOZocsq5W8b8rWwpC9bPmXg/edit#heading=h.nj23sjpj5u97"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interview Prep Guide
        </a>
        </Item.Header>
        <Item.Description>
             We at jobTrack are committed to simplify your job search. 
             To give you some further assistance, we have provided some links from Trilogy's Career Services portal to equip you to find the job you're looking for.
        </Item.Description>
        <Item.Extra>
        <Button floated="right" size='small'><a
            href="https://docs.google.com/document/d/1qUTfdBz4_7mqVzs--AYKMOZocsq5W8b8rWwpC9bPmXg/edit#heading=h.nj23sjpj5u97"
            target="_blank"
            rel="noopener noreferrer"
          >Check Them Out</a></Button>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
    <Icon name='clipboard list' size='massive' />

      <Item.Content>
        <Item.Header>
        <a
            href="https://careerservicesjobboard.splashthat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Career Services Job Board
        </a>
        </Item.Header>
        <Item.Description>This link contains a job board available to bootcamp students where you will be able to view a variety of different listings from multiple companies. Have a look to get hired today!</Item.Description>
        <Item.Extra>
        <Button floated="right" size='small'><a
            href="https://careerservicesjobboard.splashthat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >Check Them Out</a></Button>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
    <Icon name='youtube square' size='massive' />
      <Item.Content>
        <Item.Header>          <a
            href="https://www.youtube.com/channel/UCKTSy3Jsa2zczjAptE7isyQ/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            Career Services YouTube Channel
          </a></Item.Header>
        <Item.Description>Here, you can find the Career Services youtube channel, where they have a plethora of videos available for you to help you with your job search!</Item.Description>
        <Item.Extra>
        <Button floated="right" size='small'><a
            href="https://www.youtube.com/channel/UCKTSy3Jsa2zczjAptE7isyQ/featured"
            target="_blank"
            rel="noopener noreferrer"
          >Check Them Out</a></Button>
        </Item.Extra>
      </Item.Content>
    </Item>


  </Item.Group>
        </Grid.Column>

      </Grid.Row>
    </Grid>
  </Segment>
</Container>
 
);

export default CareerServicesItem;
