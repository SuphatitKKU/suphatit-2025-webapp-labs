// src/App.js
import React from "react";
import GitHubInfo from "./GitHubInfo";
import { users } from "./users";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Sample GitHub Repositories</h1>
      <ol>
        {users.map((user) => (
          <GitHubInfo key={user.url} userInfo={user} />
        ))}
      </ol>
    </div>
  );
}