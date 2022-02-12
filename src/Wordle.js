import { React, useState, useCallback } from 'react';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import AppConfig from './configs/AppConfig';
import WordList from './configs/WordList';
import './Wordle.css';

function withoutTime(dateTime = new Date()) {
  const date = new Date(dateTime.getTime());
  date.setHours(0, 0, 0, 0);
  return date;
}

const FINDING_WORD = WordList[withoutTime().getTime() % WordList.length];

console.log(FINDING_WORD);

function Wordle() {
  const [letters, setLetters] = useState([]);
  const [word, setWord] = useState('');
  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSettings = () => {
    setShowModal(true);
  };

  const handleHelp = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleStatistics = () => {
    setShowModal(true);
  };

  const addLetter = useCallback(
    (letter) => {
      setStatus(null);
      if (word.length === AppConfig.wordLength) return;
      setWord(word + letter.toLowerCase());
    },
    [word],
  );

  const validateWord = useCallback(() => {
    if (!WordList.includes(word)) {
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
    <div className="app-container">
      <Header
        appName={AppConfig.applicationName}
        handleHelp={handleHelp}
        handleSettings={handleSettings}
        handleStatistics={handleStatistics}
      />
      <div className="game-container">
        <div className="board-container">
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
        <Modal
          displayModal={showModal ? 'flex' : 'none'}
          handleClose={handleCloseModal}
        />
      </div>
    </div>
  );
}

export default Wordle;
