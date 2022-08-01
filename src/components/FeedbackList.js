import React from "react";
import FeedbackItem from "./FeedbackItem";
import feedbackData from "../data/feedbackData";

const FeedbackList = () => {
  return (
    <ul>
      {feedbackData.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};

export default FeedbackList;
