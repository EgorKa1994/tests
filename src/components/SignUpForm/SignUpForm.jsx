import React, { useState } from "react";
import { Button, ButtonKind } from "../Button";
import "./SignUpForm.css";

export const SignUpForm = ({ onSignUp, onCancel }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showValidationError, setShowValidationError] = useState(false);

  return (
    <form
      className="sign-up-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="login">Login</label>
      <input
        name="login"
        type="text"
        onChange={(e) => setLogin(e.target.value)}
        placeholder="Enter login"
        value={login}
      />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        value={password}
      />

      <label htmlFor="password-confirmation">Repeat password</label>
      <input
        name="password-confirmation"
        type="password"
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        placeholder="Enter password"
        value={passwordConfirmation}
      />
      {showValidationError && (
        <div className="sign-up-form__alert">
          Password and password confirmation should match
        </div>
      )}
      <div className="sign-up-form__buttons">
        <Button onClick={() => onCancel()}>Cancel</Button>
        <Button
          kind={ButtonKind.INFO}
          onClick={() => {
            const passwordMatchesConfirmation =
              password === passwordConfirmation;

            setShowValidationError(!passwordMatchesConfirmation);

            if (passwordMatchesConfirmation) {
              onSignUp({ login, password, passwordConfirmation });
            }
          }}
        >
          Confirm
        </Button>
      </div>
    </form>
  );
};
