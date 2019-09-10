import React, { useState, useEffect } from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";

const ModalExampleTopAligned = () => (
    <Modal trigger={<Button>Show Modal</Button>} centered={false}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='{props.character.name}' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )

export default function StarWarsCard(props){
    return(
        <div>
        <button class="ui button" onCLick={ModalExampleTopAligned}> {props.character.name}</button>
            {/* <h1>{props.character.name}</h1> */}
        </div>
    )
}

