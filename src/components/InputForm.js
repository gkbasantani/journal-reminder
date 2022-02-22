import { useState, useEffect } from "react";
import "./App.css";
import emailjs from "emailjs-com";
import emailKey from "../key/emailKey";
import TF from "./TextField";

const InputForm = () => {
  const [toEmail, setToEmail] = useState("");
  const [toName, setToName] = useState("");
  const [fromName, setFromName] = useState("");
  const [showJournalForm, setShowJournalForm] = useState(true);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (toEmail === "garvita.gun.00@gmail.com") {
      setFromName("Ajinkya");
      setToName("Garvita");
    } else if (toEmail === "noreply.progressor@gmail.com") {
      setFromName("Garvita");
      setToName("Ajinkya");
    }
  }, [toEmail]);
 
  const handleToEmailChange = (event) => {
    setToEmail(event.target.value);
  };

  const ChangeFromName = (event) => {
    setFromName(event.target.value);
  };
  const ChangeToName = (event) => {
    setToName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        emailKey.Service_ID,
        emailKey.Template_ID,
        event.target,
        emailKey.User_ID
      )
      .then(() => {
        setEmailSent(true);
      })
      .catch((err) => console.log(err));
  };

  
  return (
    <div className="form-container">
      <form className="form" onSubmit={onSubmit} >
      {showJournalForm === true ? (
          <>
            <div className="field">
              <label>To:</label>
              <input
                type="email"
                name="to_email"
                className="form-control1"
                placeholder="Enter receiver's email"
                value={toEmail}
                onChange={handleToEmailChange}
              />
            </div>

            <div className="field">
              <label>Receiver's Name:</label>
              <input
                type="text"
                name="to_name"
                className="form-control"
                value={toName}
                onChange={ChangeToName}
              />
            </div>

            <div className="field">
              <label>Your Name:</label>
              <input
                type="text"
                name="from_name"
                className="form-control"
                value={fromName}
                onChange={ChangeFromName}
              />
            </div>
 
            <div className="button-container">
              {!emailSent ? (
                <button className="left-button" size="large" >
                  Send
                </button>
              ) : (
                <button className="left-button-sent" size="large">
                  Sent
                </button>
              )}
              <br />
              <button
                type="button"
                className="right-button"
                onClick={() => setShowJournalForm(false)}
              >
                Haven't written the journal
              </button>
            </div>
          </>
        ) : (
        <TF toName={toName} fromName={fromName} toEmail={toEmail}/>
        )}
      </form>
    </div>
  );
};

export default InputForm;
