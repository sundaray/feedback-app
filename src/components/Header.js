import React from "react";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <header>
      <h2>{text}</h2>
    </header>
  );
};

Header.defaultProps = {
  text: "Review",
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
