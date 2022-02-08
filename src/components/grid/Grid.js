import './Grid.css';
import PropTypes from 'prop-types';
import React from 'react';

const Grid = ({ input }) => (
  <div className="grid-container">
    { input }
  </div>
);

Grid.defaultProps = {
  input: 'ABCZX',
};

Grid.propTypes = {
  input: PropTypes.string,
};

export default Grid;
