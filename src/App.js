import { useState, useCallback } from "react";
import Grid from "./components/grid/Grid";
import Keyboard from "./components/keyboard/Keyboard";
import Header from "./components/header/Header";
import "animate.css";
import WORD_LIST from "./Words";
import "./App.css";

function withoutTime(dateTime = new Date()) {
  var date = new Date(dateTime.getTime());
  date.setHours(0, 0, 0, 0);
  return date;
}

const WORD_LENGTH = 5;

const FINDING_WORD = WORD_LIST[withoutTime().getTime() % WORD_LIST.length];

function App() {
  const [letters, setLetters] = useState([]);
  const [word, setWord] = useState("");
  const [status, setStatus] = useState(null);

  const addLetter = useCallback(
    (letter) => {
      setStatus(null);
      if (word.length === WORD_LENGTH) return;

      setWord(word + letter.toLowerCase());
    },
    [word]
  );

  const validateWord = useCallback(() => {
    if (!WORD_LIST.includes(word)) {
      setStatus("invalid");
    } else if (word === FINDING_WORD) {
      setLetters([
        ...letters,
        ...word.split("").map((letter) => ({ status: "correct", letter })),
      ]);
      setWord("");
    } else {
      setLetters([
        ...letters,
        ...word.split("").map((letter, idx) => {
          if (FINDING_WORD[idx] === letter) {
            return { status: "correct", letter };
          }
          if (
            FINDING_WORD.indexOf(letter) >= 0 &&
            word[FINDING_WORD.indexOf(letter)] !== letter
          ) {
            return { status: "missplaced", letter };
          }
          return { status: "wrong", letter };
        }),
      ]);
      setWord("");
    }
  }, [word, letters]);

  return (
    <div className="game-container">
      <Header name="Cloned Wordle"/>
      <Grid
        letters={[
          ...letters,
          ...word.split("").map((letter) => ({ status, letter })),
        ]}
      />
      <Keyboard
        onKeyPress={addLetter}
        onEnter={validateWord}
        onBackspace={() => setWord(word.slice(0, -1))}
        letters={letters}
      />
  </div>
  );
}

export default App;
