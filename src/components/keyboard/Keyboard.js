import './Keyboard.css';
import React from 'react';

function Keyboard() {
  const keyboardKeys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
  ];

  const handleClick = (letter) => {
    console.log('clicked: ', letter);
  };

  return (
    <div className="keyboard-container">
      {keyboardKeys.map((letter, index) => (
        <button type="button" onClick={() => handleClick(letter)} key={index}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
