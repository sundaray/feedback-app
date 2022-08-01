import React from "react";

const FeedbackStats = ({ feedback }) => {
  let ratingSum = feedback.reduce((acc, cur) => acc + cur.rating, 0);

  let ratingCount = feedback.length;

  const ratingAverage = ratingSum / ratingCount;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avearge Rating: {isNaN(ratingAverage) ? 0 : ratingAverage}</h4>
    </div>
  );
};

export default FeedbackStats;
