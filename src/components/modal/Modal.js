import React from 'react';
import PropTypes from 'prop-types';
import Close from '../../assets/Close';
import GridCell from '../grid/GridCell';
import './Modal.css';

const EXAMPLES = ['WEARY', 'PILLS', 'VAGUE'];

export default function Modal({ handleClose, displayModal }) {
  return (
    <div className="modal-container" style={{ display: displayModal }}>
      <div className="modal-content-container">
        <header className="modal-header">
          <h1 className="modal-header-title">how to play?</h1>
          <button
            id="button-close"
            type="button"
            className="button-close"
            aria-label="Close menu"
            onClick={handleClose}
          >
            <Close />
          </button>
        </header>
        <div className="model-content">
          <div className="modal-instructions">
            <p>
              Guess the
              <strong> WORDLE </strong>
              in six tries.
            </p>
            <p>
              Each guess must be a valid five-letter word. Hit the enter button to submit.
            </p>
            <p>
              After each guess, the color of the tiles will change to show how close your guess was to the word.
            </p>
          </div>
          <div className="modal-examples">
            <p>
              <strong>Examples</strong>
            </p>
            <div className="modal-example">
              <div className="modal-example-grid">
                {EXAMPLES[0].split('').map((x) => x.split('')).map((key, index) => {
                  const letterObject = [];
                  letterObject.push({ status: index === 0 ? 'correct' : '', letter: key.toString() });
                  return (
                    <GridCell
                      index={index}
                      letterObject={letterObject[0]}
                    />
                  );
                })}
              </div>
              <p>
                The letter
                <strong> W </strong>
                is in the word and in the correct spot.
              </p>
            </div>
            <div className="modal-example">
              <div className="modal-example-grid">
                {EXAMPLES[1].split('').map((x) => x.split('')).map((key, index) => {
                  const letterObject = [];
                  letterObject.push({ status: index === 1 ? 'misplaced' : '', letter: key.toString() });
                  console.log(letterObject);
                  return (
                    <GridCell
                      index={index}
                      letterObject={letterObject[0]}
                    />
                  );
                })}
              </div>
              <p>
                The letter
                <strong> I </strong>
                is in the word but in the wrong spot.
              </p>
            </div>
            <div className="modal-example">
              <div className="modal-example-grid">
                {EXAMPLES[2].split('').map((x) => x.split('')).map((key, index) => {
                  const letterObject = [];
                  letterObject.push({ status: index === 4 ? 'wrong' : '', letter: key.toString() });
                  console.log(letterObject);
                  return (
                    <GridCell
                      index={index}
                      letterObject={letterObject[0]}
                    />
                  );
                })}
              </div>
              <p>
                The letter
                <strong> U </strong>
                is not in the word in any spot.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <p>
              <strong>A new WORDLE will be available each day!</strong>
            </p>
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
