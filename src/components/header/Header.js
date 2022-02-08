import './Header.css';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ name }) => (
  <div className="header-container">
    { name }
  </div>
);

Header.defaultProps = {
  name: 'Cloned Wordle',
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
