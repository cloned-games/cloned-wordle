import './Header.css';
import PropTypes from 'prop-types';
import React from 'react';
import Help from '../../assets/Help';
import Settings from '../../assets/Settings';
import Statistics from '../../assets/Statistics';

export default function Header({
  appName, handleHelp, handleSettings, handleStatistics,
}) {
  return (
    <div className="header-container">
      <div className="header-menu-left">
        <button
          id="button-help"
          type="button"
          className="button-help"
          aria-label="Help menu"
          onClick={handleHelp}
        >
          <Help />
        </button>
      </div>
      <div className="header-title">
        { appName }
      </div>
      <div className="header-menu-right">
        <button
          id="button-statistics"
          type="button"
          className="button-statistics"
          aria-label="Statistics menu"
          onClick={handleStatistics}
        >
          <Statistics />
        </button>
        <button
          id="button-settings"
          type="button"
          className="button-settings"
          aria-label="Settings menu"
          onClick={handleSettings}
        >
          <Settings />
        </button>
      </div>
    </div>
  );
}

Header.defaultProps = {
  appName: 'Cloned Wordle',
  handleHelp: null,
  handleSettings: null,
  handleStatistics: null,
};

Header.propTypes = {
  appName: PropTypes.string,
  handleHelp: PropTypes.func,
  handleSettings: PropTypes.func,
  handleStatistics: PropTypes.func,
};
