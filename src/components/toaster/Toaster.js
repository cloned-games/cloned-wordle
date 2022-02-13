import React from 'react';
import PropTypes from 'prop-types';
import './Toaster.css';

export default function Toaster({ message, showToaster }) {
  return (
    <div className="toaster-container">
      <div className="toaster" style={{ display: showToaster ? 'block' : 'none' }}>
        {message}
      </div>
    </div>
  );
}

Toaster.defaultProps = {
  message: '',
  showToaster: false,
};

Toaster.propTypes = {
  message: PropTypes.string,
  showToaster: PropTypes.bool,
};
