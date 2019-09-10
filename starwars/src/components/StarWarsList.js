import React, { useState, useEffect } from "react";
import axios from "axios";
import {image} from "semantic-ui-react";

export default function StarWarsList(){

    // const [character, setCharacter] = useState([]);

    useEffect(()=>{
        // setCharacter([]);

        axios
            .get(`https://dog.ceo/api/breed/hound/images/random/25`)
            .then(result=>{
                console.log({result});
                // setCharacter(result);
            })
            .catch(err => {
                console.log(err);
            })
        }, []);

    // return(
    //     console.log(character)
    // );
}