import React from "react";
import JobsList from "../components/JobsList";
import SideMenu from "../components/SideMenu";
import { Image, Item } from "semantic-ui-react";

const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);

function SavedJobs() {
  <Item.Group>
    <Item>
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content>
        <Item.Header>Junior Web Developer</Item.Header>
        <Item.Meta>
          <span className="company">Pinterest</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content>
        <Item.Header>Software Engineer</Item.Header>
        <Item.Meta>
          <span className="company">Uber Technologies</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content>
        <Item.Header>Senior Software Engineer</Item.Header>
        <Item.Meta>
          <span className="company">Airbnb</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>;
}

export default SavedJobs;
