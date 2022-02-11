import React from 'react';
import PropTypes from 'prop-types';
import GridCell from './GridCell';
import './Grid.css';

// const invalidWordAnimation = 'animate__animated animate__shakeX';

export default function Grid({ letters = [] }) {
  const gridArray = Array.from(new Array(5 * 6));
  return (
    <div className="grid-container">
      {gridArray.map((key, index) => {
        const hasStatus = ['correct', 'missplaced', 'wrong'].includes(letters[index]?.status);
        let bgColor = 'white';
        let textColor = 'black';
        if (hasStatus) {
          if (letters[index]?.status.match('correct')) {
            bgColor = '#538d4e';
            textColor = 'white';
          } else if (letters[index]?.status.match('misplaced')) {
            bgColor = '#b49f3b';
            textColor = 'white';
          } else {
            bgColor = '#aeaeae';
            textColor = 'white';
          }
        }
        const gridStyle = { backgroundColor: bgColor, color: textColor, animationDelay: hasStatus ? `${(index % 5) / 4}s` : '0s' };
        return (
          <GridCell
            gridStyle={gridStyle}
            letter={letters[index]?.letter}
          />
        );
      })}
    </div>
  );
}

Grid.defaultProps = {
  letters: [],
};

Grid.propTypes = {
  letters: PropTypes.instanceOf(Array),
};
