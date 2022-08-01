import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Card from "./sharedStyling/Card";

const FeedbackList = ({ feedback, handleDelete }) => {
  const [parent] = useAutoAnimate();

  return (
    <div className="feedbackListContainer">
      {feedback.length === 0 ? (
        <Card>
          <p>No Feedbacks Yet.</p>
        </Card>
      ) : (
        <ul ref={parent}>
          {feedback.map((feedback) => (
            <FeedbackItem
              key={feedback.id}
              feedback={feedback}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
