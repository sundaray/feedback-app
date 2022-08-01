import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

const Question = () => {
  return (
    <Link to="/about">
      <div className="question-icon-container">
        <FaQuestion className="question-icon" />
      </div>
    </Link>
  );
};

export default Question;
