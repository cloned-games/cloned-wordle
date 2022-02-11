import { React, useState, useCallback } from 'react';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';
import Header from './components/header/Header';
import 'animate.css';
import WORD_LIST from './Words';
import './App.css';

function withoutTime(dateTime = new Date()) {
  const date = new Date(dateTime.getTime());
  date.setHours(0, 0, 0, 0);
  return date;
}

const WORD_LENGTH = 5;

const FINDING_WORD = WORD_LIST[withoutTime().getTime() % WORD_LIST.length];

console.log(FINDING_WORD);

function App() {
  const [letters, setLetters] = useState([]);
  const [word, setWord] = useState('');
  const [status, setStatus] = useState(null);

  const addLetter = useCallback(
    (letter) => {
      setStatus(null);
      if (word.length === WORD_LENGTH) return;
      setWord(word + letter.toLowerCase());
    },
    [word],
  );

  const validateWord = useCallback(() => {
    if (!WORD_LIST.includes(word)) {
      console.log('invalid word not in dict');
      setStatus(null);
    } else if (word === FINDING_WORD) {
      setLetters([
        ...letters,
        ...word.split('').map((letter) => ({ status: 'correct', letter })),
      ]);
      setWord('');
      console.log('Winner');
    } else {
      setLetters([
        ...letters,
        ...word.split('').map((letter, idx) => {
          if (FINDING_WORD[idx] === letter) {
            console.log('letter is correctly placed ' + letter);
            return { status: 'correct', letter };
          }
          if (
            FINDING_WORD.indexOf(letter) >= 0
            && word[FINDING_WORD.indexOf(letter)] !== letter
          ) {
            console.log('letter is mispplaced ' + letter);
            return { status: 'misplaced', letter };
          }
          console.log('letter is wrong ' + letter);
          return { status: 'wrong', letter };
        }),
      ]);
      setWord('');
    }
  }, [word, letters]);

  return (
    <div className="game-container">
      <Header name="Cloned Wordle" />
      <Grid
        letters={[
          ...letters,
          ...word.split('').map((letter) => ({ status, letter })),
        ]}
      />
      <Keyboard
        letters={letters}
        onKeyPress={addLetter}
        onBackspace={() => setWord(word.slice(0, -1))}
        onEnter={validateWord}
      />
    </div>
  );
}

export default App;
