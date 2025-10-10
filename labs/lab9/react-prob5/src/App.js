// src/App.js
import React from "react";
import GitHubInfo from "./GitHubInfo";
import { users } from "./users";
import "./App.css";

export default function App() {
  const popularUsers = users.filter(user => user.followers > 10000);
  
  return (
    <div>
      <h1>Popular GitHub Repositories</h1>
      <ol>
        {popularUsers.map((user) => (
          <GitHubInfo key={user.url} userInfo={user} />
        ))}
      </ol>
    </div>
  );
}