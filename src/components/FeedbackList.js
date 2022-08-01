import React, { useState } from "react";
import FeedbackItem from "./FeedbackItem";
import feedbackDataArray from "../data/feedbackData";

const FeedbackList = () => {
  const [feedbackData, setFeedbackData] = useState(feedbackDataArray);

  return (
    <ul>
      {feedbackData.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};

export default FeedbackList;
