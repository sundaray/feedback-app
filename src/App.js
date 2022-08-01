import React, { useState } from "react";
import { createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackDataArray from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";

export const FeedbackContext = createContext();

export const useFeedback = () => {
  return useContext(FeedbackContext);
};

const App = () => {
  const [feedbackData, setFeedbackData] = useState(feedbackDataArray);

  const feedback = {
    feedbackData,
    setFeedbackData,
  };

  return (
    <>
      <Header />
      <FeedbackContext.Provider value={feedback}>
        <div className="feedback-container">
          <FeedbackForm />
          <FeedbackStats feedback={feedbackData} />
          <FeedbackList feedback={feedbackData} />
        </div>
      </FeedbackContext.Provider>
      <FaQuestion className="question-icon" />
    </>
  );
};

export default App;
