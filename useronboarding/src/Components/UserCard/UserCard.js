import React from "react";

import "./userCard.css";

export default function UserCard({ users }) {
  return (
    <div className="users-wrapper">
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <p>
            <span>First name: </span>
            {user.firstName}
          </p>
          <p>
            <span>Last name: </span>
            {user.lastName}
          </p>
          <p>
            <span>Age: </span>
            {user.age}
          </p>
          <p>
            <span>Role: </span>
            {user.role}
          </p>
          <p>
            <span>Email: </span>
            {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}
