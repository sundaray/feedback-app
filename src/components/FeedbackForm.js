import React, { useState } from "react";
import Card from "./sharedStyling/Card";
import Button from "./sharedStyling/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <h2>How would you rate our service?</h2>
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
