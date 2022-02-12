import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export default function Modal({ handleClose, displayModal }) {
  return (
    <div className="modal-container" style={{ display: displayModal }}>
      <div className="modal-content-container">
        <button type="button" className="modal-close" onClick={handleClose}>
          X
        </button>
        <div className="model-content">
          <div className="modal-section-1">
            Modal1
            <br />
            Stats
            <br />
            Close Icon
            <br />
            Share details
          </div>
          <div className="modal-section-2">
            Stats
            <br />
            Close Icon
            <br />
            Share details
            <br />
            Modal
          </div>
          <div className="modal-section-3">
            Stats
            <br />
            Close Icon
            <br />
            Share details
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  handleClose: '',
  displayModal: 'none',
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  displayModal: PropTypes.string,
};
