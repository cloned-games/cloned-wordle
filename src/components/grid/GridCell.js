import React from 'react';
import PropTypes from 'prop-types';
import './GridCell.css';

export default function GridCell({ gridStyle, letter }) {
  return (
    <div className="grid-cell" style={gridStyle}>
      {letter}
    </div>
  );
}

GridCell.defaultProps = {
  gridStyle: {},
  letter: '',
};

GridCell.propTypes = {
  gridStyle: PropTypes.instanceOf(Object),
  letter: PropTypes.string,
};
