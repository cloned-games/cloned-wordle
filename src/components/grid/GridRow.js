import './GridRow.css';
import PropTypes from 'prop-types';
import React from 'react';

function GridRow({ num }) {
  const emptyCells = Array.from(Array(num));
  return (
    <div className="grid-row">
      {emptyCells.map((_, index) => (
        <div className="grid-cell" data-state="empty" key={String(index)}>
          {num}
        </div>
      ))}
    </div>
  );
}

GridRow.defaultProps = {
  num: '5',
};

GridRow.propTypes = {
  num: PropTypes.number,
};

export default GridRow;
