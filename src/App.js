import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackDataArray from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Question from "./components/Question";
import About from "./components/pages/About";

export const FeedbackContext = createContext();

export const useFeedback = () => {
  return useContext(FeedbackContext);
};

const App = () => {
  const [feedbackData, setFeedbackData] = useState(feedbackDataArray);
  const [edit, setEdit] = useState({ editStatus: false });

  const feedback = {
    edit,
    setEdit,
    feedbackData,
    setFeedbackData,
  };

  useEffect(() => {
    console.log(edit);
  }, [edit]);

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
              <Question />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </FeedbackContext.Provider>
  );
};

export default App;
