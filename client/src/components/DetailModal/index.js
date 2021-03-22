import React from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react';
import { OPEN_MODAL } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";
import moment from "moment";
import './style.css'
import DetailForm from '../DetailForm';

function DetailModal(props) {
  const [state, dispatch] = useStoreContext();
    const {
        title, company, url, description, location, created_at } = state.currentJob;
    const m = moment(created_at);
  return (
    <Modal
        closeIcon
        onClose={() => dispatch({type: OPEN_MODAL, modal: false})}
        onOpen={() => dispatch({type: OPEN_MODAL, modal: true})}
        open={state.modal}
    >
      <Modal.Header as='a' href={url} target="blank">
        {title} | { company } | { location } <br /> 
        <span className="small">posted {m.fromNow()} - {m.format('ll')}</span>
      </Modal.Header>
      <Modal.Content style={{paddingBottom: 5}}>
        <DetailForm />
      </Modal.Content>
      <Modal.Header className="header">Description
      <Button animated='fade'
              as='a'
              href={url}
              target='blank'
              floated='right'
              type="button" 
            >
              <Button.Content hidden>Visit</Button.Content>
              <Button.Content visible>
                <Icon name='arrow up' />
              </Button.Content>
            </Button>
      </Modal.Header>
      
      <Modal.Content scrolling>
        <Modal.Description dangerouslySetInnerHTML = {{__html: description}}>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default DetailModal;

