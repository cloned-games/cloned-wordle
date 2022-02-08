import './Keyboard.css';
import PropTypes from 'prop-types';
import React from 'react';

const Keyboard = ({ keys }) => (
  <div className="keyboard-container">
    { keys }
  </div>
);

Keyboard.defaultProps = {
  keys: 'QWERTY',
};

Keyboard.propTypes = {
  keys: PropTypes.string,
};

export default Keyboard;
