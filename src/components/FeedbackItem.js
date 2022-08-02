import React from "react";
import Card from "./sharedStyling/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useFeedback } from "../App";

const FeedbackItem = ({ feedback: { id, rating, text } }) => {
  const { feedbackData, setFeedbackData, edit, setEdit } = useFeedback();
  return (
    <>
      <Card>
        <div className="feedback-rating">{rating}</div>
        <FaEdit
          className="edit-icon"
          onClick={() =>
            setEdit({ ...edit, item: { id, rating, text }, editStatus: true })
          }
        />
        <FaTimes
          className="close-icon"
          onClick={() =>
            setFeedbackData(feedbackData.filter((item) => item.id !== id))
          }
        />
        <p className="feedback-text">{text}</p>
      </Card>
    </>
  );
};

export default FeedbackItem;

Card.propTypes = {
  feedback: PropTypes.object,
};
