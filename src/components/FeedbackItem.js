import React, { useState } from "react";

const FeedbackItem = () => {
  const [FeedbackRating, setFeedbackRating] = useState(10);
  const [FeedbackText, setFeedbackText] = useState("This is a feedback.");

  return (
    <div className="card">
      <div className="num-display">{FeedbackRating}</div>
      <div className="text-display">{FeedbackText}</div>
    </div>
  );
};

export default FeedbackItem;
