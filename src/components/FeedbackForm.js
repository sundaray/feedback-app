import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./sharedStyling/Card";
import Button from "./sharedStyling/Button";
import FeedbackRating from "./FeedbackRating";
import { useFeedback } from "../App";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);

  const { edit, setEdit, feedbackData, setFeedbackData } = useFeedback();

  useEffect(() => {
    if (edit.editStatus === true) {
      setText(edit.item.text);
      setRating(edit.item.rating);
    }
  }, [edit]);

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

    if (edit.editStatus === true) {
      setFeedbackData(
        feedbackData.map((item) =>
          item.id === edit.item.id ? { ...item, ...newFeedback } : item
        )
      );
      setEdit({ ...edit, editStatus: false });
    } else {
      setFeedbackData([newFeedback, ...feedbackData]);
    }
    setText("");
  };

  return (
    <Card className="form">
      <h1>Give your feedback:</h1>
      <FeedbackRating
        select={(rating) => {
          setRating(rating);
        }}
      />
      <div className="feedback-form-group">
        <form onSubmit={handleFeedbackSubmit}>
          <input type="text" onChange={handleChange} value={text} />
          <span>
            {text !== "" && text.trim().length < 10 ? (
              <span className="form-validation-warning">
                The feedback must be greater than 10 characters long.
              </span>
            ) : (
              ""
            )}
          </span>
          <Button
            className="submit"
            type="submit"
            btnDisabled={text.trim().length < 10 ? true : false}
          >
            {edit.editStatus ? "Update" : "Add"}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default FeedbackForm;
