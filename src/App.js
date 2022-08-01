import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackDataArray from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";

const App = () => {
  const [feedbackData, setFeedbackData] = useState(feedbackDataArray);

  const deleteFeedback = (id) => {
    setFeedbackData(feedbackData.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className="feedback-container">
        <FeedbackStats feedback={feedbackData} />
        <FeedbackList feedback={feedbackData} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
