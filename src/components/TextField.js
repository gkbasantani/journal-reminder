import React, { useState } from "react";
import emailjs from "emailjs-com";
import emailKey from "../key/emailKey";
import "./App.css";

const TF = (props) => {
  const [reason, setReason] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const showTextBox = (event) => {
    setReason(event.target.value);
  };

  const onSend = (event) => {
    event.preventDefault();

    var templateParams = {
      to_name: props.toName,
      from_name: props.fromName,
      to_email: props.toEmail,
      message: reason,
    };

    emailjs
      .send(
        emailKey.Service_ID,
        emailKey.Template_ID_TWO,
        templateParams,
        emailKey.User_ID
      )
      .then(() => {
        setEmailSent(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="field">
      <input
        type="text"
        name="message"
        className="reasonBox"
        placeholder="I have not written today's journal because"
        value={reason}
        onChange={showTextBox}
      />
      <br />
      {!emailSent ? (
        <button className="reason left-button" onClick={onSend}>
          Send
        </button>
      ) : (
        <button className="reason left-button-sent">Sent</button>
      )}
    </div>
  );
};

export default TF;
