import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import Key from './Key';
import Backspace from '../../assets/Backspace';
import './Keyboard.css';

const KEYS = 'qwertyuiop::asdfghjkl::zxcvbnm'
  .trim()
  .split('::')
  .map((x) => x.split(''));

function isLastRow(row) {
  return row === KEYS[KEYS.length - 1];
}

export default function Keyboard({
  onKeyPress, onBackspace, onEnter, letters = [],
}) {
  useEffect(() => {
    function onKeyUp(event) {
      if (KEYS.flat().includes(event.key)) onKeyPress(event.key);
      if (event.key === 'Backspace') onBackspace();
      if (event.key === 'Enter') onEnter();
    }

    window.addEventListener('keyup', onKeyUp);
    return () => window.removeEventListener('keyup', onKeyUp);
  });

  return (
    <div className="keyboard-container">
      {KEYS.map((row) => (
        <>
          {row.map((key) => {
            const updatedLetters = letters
              .filter(({ letter }) => letter === key)
              .map(({ status }) => status)
              .sort()[0];
            return (
              <Key key={key} onClick={() => onKeyPress(key)}>
                {key}
              </Key>
            );
          })}
          {isLastRow(row) && (
            <Key key="BACKSPACE" onClick={onBackspace}>
              {'<<'}
            </Key>
          )}
          {isLastRow(row) && (
            <Key key="ENTER" onClick={onEnter}>
              ENTER
            </Key>
          )}
        </>
      ))}
    </div>
  );
}

Keyboard.defaultProps = {
  onKeyPress: null,
  onBackspace: null,
  onEnter: null,
  letters: [],
};

Keyboard.propTypes = {
  onKeyPress: PropTypes.func,
  onBackspace: PropTypes.func,
  onEnter: PropTypes.func,
  letters: PropTypes.instanceOf(Array),
};
