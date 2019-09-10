import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import './App.css';
import StarWarsCard from"./components/StarWarsCard" ;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const ModalExampleTopAligned = () => (
    <Modal trigger={<Button>Show Modal</Button>} centered={false}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
  const [character, setCharacter] = useState([]);

  useEffect(()=>{
    setCharacter([]);

    axios
        .get(`https://swapi.co/api/people/`)
        .then(result=>{
            console.log(result.data.results);
            setCharacter(result.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);


  return (
    <div className="App">{
      <h1 className="Header">React Wars</h1>,
      character.map((character, index)=>{
        console.log(character)
        return <StarWarsCard character={character} key={index}/>
      })

    }
    </div>
  );
}

export default App;
