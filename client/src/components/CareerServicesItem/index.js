import React from "react";
import { Item } from "semantic-ui-react";
import careerpic from "../../assets/images/careerpic.jpg";

const CareerServicesItem = () => (
  <Item.Group relaxed>
    <Item>
      <Item.Image size="smaller" src={careerpic} />
    </Item>

    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Header>Find useful links below:</Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Description>
          <a
            href="https://docs.google.com/document/d/1Ztb_iITF8UE_kMAzbeqfBi72PN__tqaCMEE3_BAp6IU/preview?pru=AAABeDiiB2c*ZdFd_2jR1J03HgrQAxmJnQ#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strategies for Today's Job Search
          </a>
        </Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Description>
          <a
            href="https://docs.google.com/document/d/1ysD_f_W3iwrSK8kKFeCyd1dNJg9XZW-QYeaObotxXP8/preview?pru=AAABeDiyf0w*dsUwnlsi6IpCvCupv6BPMw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guide to Remote Networking
          </a>
        </Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Description>
          <a
            href="https://docs.google.com/document/d/1qUTfdBz4_7mqVzs--AYKMOZocsq5W8b8rWwpC9bPmXg/edit#heading=h.nj23sjpj5u97"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interview Prep Guide
          </a>
        </Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Description>
          <a
            href="https://careerservicesjobboard.splashthat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Career Services Job Board
          </a>
        </Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Description>
          <a
            href="https://www.youtube.com/channel/UCKTSy3Jsa2zczjAptE7isyQ/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            Career Services YouTube Channel
          </a>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default CareerServicesItem;
