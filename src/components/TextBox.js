import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.bg-royal{
  background-color: hsla(227, 74%, 35%, 1);
}

.title{
  align-items: center;
  justify-content: center;
  font-size: calc(12px + 2vmin);
}

.champagne{
  color: hsla(35, 18%, 96%, 1);
}

.input_area {
  height: 80px;
  width: 40%;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 15px;
  padding: 20px;
  border: 0px;
  box-shadow: black 5px 8px 5px;
}

.text{
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 10px;
  padding: 25px;
}
}
`;

export function TextBox(){
  return (
    <Styles>
      <div className="text champagne">
        Text. For the text we will create a function that fetches 45 - 60 random words from a list of the 200 most commonly used words in the english language. This text box has to be sized similar to input box and the font needs some oppacity so we apply full color whe a word is written
      </div>
      <input class=" bg-royal champagne input_area"
        placeholder="start typing here..."
        oninput="processCurrentText()"
        onfocus="startGame()">
      </input>
    </Styles>
  );
}


// we can use this as guide https://www.geeksforgeeks.org/design-a-typing-speed-test-game-using-javascript/
