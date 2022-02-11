import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

export default function Key({ children, onClick }) {
  return (
    <>
      {children.type?.toString().includes('Backspace()') ? (
        <button type="button" onClick={onClick} className="keyboard-key-svg">
          {children}
        </button>
      ) : (
        <button type="button" onClick={onClick} className="keyboard-key">
          {children}
        </button>
      )}
    </>
  );
}

Key.defaultProps = {
  children: '',
  onClick: null,
};

Key.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]),
  onClick: PropTypes.func,
};
