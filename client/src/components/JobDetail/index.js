import React from "react";
import { Item } from "semantic-ui-react";

const title = ["Title"].join(" ");

const company = ["Company"].join(" ");

const description = ["Description"].join(" ");

const location = ["Location"].join(" ");

const created_at = ["Date Posted"].join(" ");

const status = ["Status"].join(" ");

const date_applied = ["Date Applied"].join(" ");

const notes = ["Notes"].join(" ");

const attachments = ["Attachments"].join(" ");

const JobDetail = () => (
  <Item.Group>
    <Item>
      <Item.Image
        size="small"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content>
        <Item.Header as="a">{title}</Item.Header>
        <Item.Description>
          <p>{company}</p>
          <p>{description}</p>
          <p>{location}</p>
          <p>{created_at}</p>
          <p>{status}</p>
          <p>{date_applied}</p>
          <p>{notes}</p>
          <p>{attachments}</p>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default JobDetail;
