import React from "react";
import { Button, ButtonKind } from "../Button";

export const User = ({ name, onDelete, onEdit }) => (
  <div className="user-list__user">
    {name}
    <div className="user-list__buttons">
      <Button kind={ButtonKind.INFO} onClick={onEdit}>
        Edit
      </Button>
      <Button kind={ButtonKind.DANGER} onClick={onDelete}>
        Delete
      </Button>
    </div>
  </div>
);
