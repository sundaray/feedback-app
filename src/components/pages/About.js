import React from "react";
import { Link } from "react-router-dom";
import Card from "../sharedStyling/Card";
import Button from "../sharedStyling/Button";
const About = () => {
  return (
    <Card className="about">
      <h1>About</h1>
      <p>
        This is a React project that you can use to give your review for a
        product or a service.
      </p>
      <p>The packages used for the project are as follows:</p>
      <ul>
        <li>Animation: Auto Animate</li>
        <li>Icons: React Icons</li>
        <li>Routing: React Router Dom</li>
      </ul>
      <Link to="/">
        <Button className="home">Home</Button>{" "}
      </Link>
    </Card>
  );
};

export default About;
