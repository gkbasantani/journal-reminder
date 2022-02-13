import React from "react";
import InputForm from "./InputForm";
import "./App.css";
import journal from "../assets/journal.png";
import girl from "../assets/girl.png";

const App = () => {
  return (
    <div className="container">
      <div className="headerLogo">
        <div className="image-container">
          <img className="icon" src={journal} alt="icon" />
        </div>

        <div>
          <h1 className="content">Journal Reminder</h1>
        </div>
      </div>
      <InputForm />

      <div className="girlImage">
        <img className="girl" src={girl} alt="girl" />
      </div>
    </div>
  );
};

export default App;
