import React from 'react';
import PropTypes from 'prop-types';
import GridCell from './GridCell';
import './Grid.css';

export default function Grid({ letters = [] }) {
  const gridArray = Array.from(new Array(5 * 6));
  return (
    <div className="grid-container">
      {gridArray.map((key, index) => (
        <GridCell index={index} letterObject={letters[index]} />
      ))}
    </div>
  );
}

Grid.defaultProps = {
  letters: [],
};

Grid.propTypes = {
  letters: PropTypes.instanceOf(Array),
};
