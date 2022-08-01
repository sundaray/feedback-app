import React, { useState } from "react";
import Card from "./sharedStyling/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <h2>How would you rate our service?</h2>
      <div className="feedback-form-group">
        <input onChange={handleChange} value={text} />
        <button>Send</button>
      </div>
    </Card>
  );
};

export default FeedbackForm;
