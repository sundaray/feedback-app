import React, { useState } from "react";
import Card from "./sharedStyling/Card";
import Button from "./sharedStyling/Button";
import FeedbackRating from "./FeedbackRating";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [, setRating] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value);
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
        <form>
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
