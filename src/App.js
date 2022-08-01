import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  return (
    <>
      <Header />
      <div className="feedback-container">
        <FeedbackList />
      </div>
    </>
  );
};

export default App;
