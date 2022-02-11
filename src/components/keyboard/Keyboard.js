import { useEffect } from "react";
import Key from "./Key";
import Backspace from "../../icons/Backspace";
import "./Keyboard.css";

const KEYS = `qwertyuiop::asdfghjkl::zxcvbnm`
  .trim()
  .split("::")
  .map((x) => x.split(""));

function isLastRow(row) {
  return row === KEYS[KEYS.length - 1];
}

export default function Keyboard({onKeyPress, onBackspace, onEnter, letters = []}) {
  useEffect(() => {
    function onKeyUp(event) {
      if (KEYS.flat().includes(event.key)) onKeyPress(event.key);
      if (event.key === "Backspace") onBackspace();
      if (event.key === "Enter") onEnter();
    }
    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  });

  return (
    <div className="keyboard-container">
      {KEYS.map((row) => {
        return (
          <>
            {isLastRow(row) && (
              <Key onClick={onEnter}>
                enter
              </Key>
            )}
            {row.map((key) => {
              const status = letters
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
              <Key onClick={onBackspace}>
                <Backspace />
              </Key>
            )}
          </>
        );
      })}
    </div>
  );
}
