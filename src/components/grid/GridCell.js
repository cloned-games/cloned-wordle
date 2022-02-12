import React from 'react';
import PropTypes from 'prop-types';
import { keyframes } from 'styled-components';
import './GridCell.css';

const flip = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

export default function GridCell({ index, letterObject }) {
  const hasStatus = ['correct', 'missplaced', 'wrong']
    .includes(letterObject?.status);
  let bgColor = '';
  if (hasStatus) {
    if (letterObject?.status.match('correct')) {
      bgColor = '#538d4e';
    } else if (letterObject?.status.match('misplaced')) {
      bgColor = '#b59f3a';
    } else {
      bgColor = '#3a3a3c';
    }
    const style = {
      animation: '0.5s linear flip',
      animationDelay: (index % 5) / 2 + 's',
      transitionDelay: (index % 5) / 2 + 's',
      background: bgColor,
      color: 'white',
    };
    return (
      <div className="grid-cell" style={style}>
        {letterObject?.letter}
      </div>
    );
  }
  return (
    <div className="grid-cell">
      {letterObject?.letter}
    </div>
  );
}

GridCell.defaultProps = {
  index: 0,
  letterObject: {},
};

GridCell.propTypes = {
  index: PropTypes.number,
  letterObject: PropTypes.instanceOf(Object),
};
