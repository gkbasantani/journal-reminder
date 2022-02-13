import React, { useState } from "react";
import "./App.css";

const TF = () => {
  const [reason, setReason] = useState("");

  const showTextBox = (event) => {
    setReason(event.target.value);
  };
  return (
    <div className="field">
      <input
        type="text"
        name="message"
        className="form-control"
        placeholder="Enter Reason"
        value={reason}
        onChange={showTextBox}
      />
      <button>Send Reason</button>
    </div>
  );
};

export default TF;
