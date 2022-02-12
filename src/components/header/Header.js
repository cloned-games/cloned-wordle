import './Header.css';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ appName, handleSettings }) => (
  <div className="header-container">
    <div className="header-menu-left">
      Modes
    </div>
    <div className="header-title">
      { appName }
    </div>
    <button type="button" className="header-menu-right" onClick={handleSettings}>
      Settings
    </button>
  </div>
);

Header.defaultProps = {
  appName: 'Cloned Wordle',
  handleSettings: null,
};

Header.propTypes = {
  appName: PropTypes.string,
  handleSettings: PropTypes.func,
};

export default Header;
