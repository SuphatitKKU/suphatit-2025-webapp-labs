// src/App.js
import React from "react";
import GitHubInfo from "./GitHubInfo";
import { users } from "./users";
import "./App.css";

export default function App() {
  return (
    <div>
      <GitHubInfo userInfo={users[0]} />
      <GitHubInfo userInfo={users[1]} />
      <GitHubInfo userInfo={users[2]} />
    </div>
  );
}