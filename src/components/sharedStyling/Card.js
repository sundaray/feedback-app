import React from "react";
import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return <div className={`card card-${className}`}>{children}</div>;
};

export default Card;

Card.propTypes = {
  children: PropTypes.node,
};
