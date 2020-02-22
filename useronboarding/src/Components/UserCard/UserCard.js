import React from "react";

import "./userCard.css";

export default function UserCard({ users }) {
  return (
    <div className="users-wrapper">
      {users.map(user => (
        <div className="user-card">
          <h3>
            First name: <span>{user.firstName}</span>
          </h3>
          <h3>
            Last name: <span>{user.lastName}</span>
          </h3>
          <h3>
            Email: <span>{user.email}</span>
          </h3>
        </div>
      ))}
    </div>
  );
}
