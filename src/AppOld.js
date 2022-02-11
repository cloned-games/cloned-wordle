import './App.css';
import { React, useState } from 'react';
import Grid from './components/grid/Grid';
import Header from './components/header/Header';
import Keyboard from './components/keyboard/Keyboard';

import WORD_LIST from "./Words";
function withoutTime(dateTime = new Date()) {
  var date = new Date(dateTime.getTime());
  date.setHours(0, 0, 0, 0);
  return date;
}
const WORD_LENGTH = 5;
const FINDING_WORD = WORD_LIST[withoutTime().getTime() % WORD_LIST.length];

function App() {
  const [grid, setGrid] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ])
  const addLetter = (letter) => {
    console.log('letter clicked on keyboard: ', letter);
    let newGrid = grid;
    newGrid[0][0] = letter;
    setGrid(...grid, newGrid);
  };

  return (
    <>
      <main className="flex flex-col justify-between items-center h-[100vh] max-w-[500px] m-auto">
        <header className="flex flex-row justify-center items-center p-1 min-w-full border-b border-neutral-300">
          {/* <Help className="text-neutral-500" /> */}
          <h1 className="uppercase font-bold text-4xl tracking-wider">
            WORDLE (ES)
          </h1>
          {/* <div className="flex gap-1">
          <Chart className="text-neutral-500" />
          <Settings className="text-neutral-500" />
        </div> */}
        </header>
        <Grid
          letters={[
            ...letters,
            ...word.split("").map((letter) => ({ status, letter })),
          ]}
        />

        <Keyboard
          onKeyPressed={addLetter}
          onEnter={validateWord}
          onBackspace={() => setWord(word.slice(0, -1))}
          letters={letters}
        />
      </main>
      <a
        href="https://github.com/magarcia/wordle"
        title="Source code"
        target="_blank"
        rel="noreferrer"
      >
        <Github className="absolute right-2 top-2" />
      </a>
    </>
  );

  return (
    <div className="game-container">
      <Header name="Cloned Wordle" />
      <Grid letters="5" grid={grid} />
      <Keyboard type="QWERTY" onKeyClick={addLetter} />
    </div>
  );
}

export default App;
