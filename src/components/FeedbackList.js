import React, { useState } from "react";
import FeedbackItem from "./FeedbackItem";
import feedbackDataArray from "../data/feedbackData";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Card from "./sharedStyling/Card";

const FeedbackList = () => {
  const [feedbackData, setFeedbackData] = useState(feedbackDataArray);

  console.log(feedbackData.length);

  const [parent] = useAutoAnimate();

  const deleteFeedback = (id) => {
    setFeedbackData(feedbackData.filter((item) => item.id !== id));
  };

  return (
    <div className="feedbackListContainer">
      {feedbackData.length === 0 ? (
        <Card>
          <p>No Feedbacks Yet.</p>
        </Card>
      ) : (
        <ul ref={parent}>
          {feedbackData.map((feedback) => (
            <FeedbackItem
              key={feedback.id}
              feedback={feedback}
              handleDelete={deleteFeedback}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
