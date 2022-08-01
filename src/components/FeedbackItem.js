import React from "react";
import Card from "./sharedStyling/Card";
import PropTypes from "prop-types";

const FeedbackItem = ({ feedback: { rating, text } }) => {
  return (
    <Card>
      <div className="feedback-rating">{rating}</div>
      <div className="feedback-text">{text}</div>
    </Card>
  );
};

export default FeedbackItem;

Card.propTypes = {
  feedback: PropTypes.object,
};
