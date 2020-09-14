import React from "react";
import { User } from "./User";
import "./UserList.css";

export const UserList = ({ users = [], onEdit, onDelete }) => {
  return (
    <div className="user-list">
      <h1>Our users</h1>
      {users.map((user) => (
        <User
          key={user.id}
          {...user}
          onEdit={() => onEdit(user.id)}
          onDelete={() => onDelete(user.id)}
        />
      ))}
    </div>
  );
};
