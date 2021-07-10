import React from "react";

export default function Usercard({ users }) {
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </div>
  );
}
