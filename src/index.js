import React from "react";
import ReactDOM from "react-dom";
import { Button, ButtonKind } from "./components/Button";
import { SignUpForm } from "./components/SignUpForm";
import { Users } from "./components/Users";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <>
      <div className="demo-container">
        <Button>Default</Button>
      </div>
      <div className="demo-container">
        <Button kind={ButtonKind.INFO}>Info</Button>
      </div>
      <div className="demo-container">
        <Button kind={ButtonKind.DANGER}>Danger</Button>
      </div>
      <div className="demo-container">
        <Button kind={ButtonKind.INFO} isBig={true}>
          Big button
        </Button>
      </div>
      <div className="demo-container">
        <SignUpForm
          onSignUp={console.log}
          onCancel={() => console.log("cancelled")}
        />
      </div>
      <div>
        <Users
          users={[
            { id: 1, name: "Bill Mitchell" },
            { id: 2, name: "Leanne Morley" },
            { id: 3, name: "Said Norton" },
            { id: 4, name: "Isaac Molina" },
            { id: 5, name: "Aleena O'Ryan" },
          ]}
          onDelete={(id) => console.log(`user with id ${id} was deleted`)}
          onEdit={(id) => console.log(`user with id ${id} should be edited`)}
        />
      </div>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
