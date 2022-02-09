import './Grid.css';
import React from 'react';

function Grid() {
  const rows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];

  return (
    <div className="grid-container">
      {rows.map((row, rowIndex) => (
        <div id={'row-' + rowIndex} key={'row-' + rowIndex}>
          {row.map((cell, cellIndex) => (
            <div className="cell" id={'row-' + rowIndex + '-cell-' + cellIndex} value="A" key={'row-' + rowIndex + '-cell-' + cellIndex}>Z</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
