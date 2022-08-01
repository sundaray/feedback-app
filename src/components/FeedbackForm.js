import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./sharedStyling/Card";
import Button from "./sharedStyling/Button";
import FeedbackRating from "./FeedbackRating";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newFeedback = {
      id,
      text,
      rating,
    };
    handleAdd(newFeedback);
  };

  return (
    <Card>
      <h2>How would you rate our service?</h2>
      <FeedbackRating
        select={(rating) => {
          setRating(rating);
        }}
      />
      <div className="feedback-form-group">
        <form onSubmit={handleFeedbackSubmit}>
          <input onChange={handleChange} value={text} />
          <span>
            {text !== "" && text.trim().length < 10
              ? "The feedback must be greater than 10 characters long."
              : ""}
          </span>
          <Button btnDisabled={text.trim().length < 10 ? true : false}>
            Send
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default FeedbackForm;
