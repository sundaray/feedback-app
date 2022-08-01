import React from "react";

const FeedbackItem = ({ feedback: { rating, text } }) => {
  return (
    <div className="feedback-item-container">
      <div className="feedback-rating">{rating}</div>
      <div className="feedback-text">{text}</div>
    </div>
  );
};

export default FeedbackItem;
