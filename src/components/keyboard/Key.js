import React from "react";
import "./Key.css";

export default function Key({ children, className, ...props }) {
  return (
    <>
      {children.type && children.type.toString().includes("Backspace()") ? (
        <button {...props} className="keyboard-key-svg">
            {children}
        </button>
        ) : (
          <button {...props} className="keyboard-key">
            {children}
          </button>
      )}
    </>
  );
}
