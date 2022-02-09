import './Grid.css';
import PropTypes from 'prop-types';
import React from 'react';
import GridRow from './GridRow';

function Grid({ letters }) {
  const num = Number(letters);
  return (
    <div className="grid-container">
      <GridRow letters={num} key="0" />
    </div>
  );
}

Grid.defaultProps = {
  letters: '5',
};

Grid.propTypes = {
  letters: PropTypes.string,
};

export default Grid;
