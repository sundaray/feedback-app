import React, { useState } from "react";
import { createContext, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
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
    <FeedbackContext.Provider value={feedback}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="feedback-container">
              <FeedbackForm />
              <FeedbackStats feedback={feedbackData} />
              <FeedbackList feedback={feedbackData} />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Link to="/about">
        <FaQuestion className="question-icon" />
      </Link>
    </FeedbackContext.Provider>
  );
};

export default App;
