import React from "react";
import Card from "./sharedStyling/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ feedback: { id, rating, text }, handleDelete }) => {
  return (
    <>
      <Card>
        <div className="feedback-rating">{rating}</div>
        <button onClick={() => handleDelete(id)}>
          <FaTimes />
        </button>
        <p className="feedback-text">{text}</p>
      </Card>
    </>
  );
};

export default FeedbackItem;

Card.propTypes = {
  feedback: PropTypes.object,
};
