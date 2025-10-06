import React from 'react'
import "./App.css";

function GitHubAvatar() {
  return (
    <img
        src="https://github.com/SuphatitKKU.png"
        alt="GitHub Avatar"
    />
  );
}

function GitHubRepoURL() {
  return (
    <p>
      <u style={{color: "blue",}}>
        <a
          href="https://github.com/SuphatitKKU"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}
        >
          My GitHub repository
        </a>
      </u>
    </p>
  );
}

function App() {
  return (
    <div className="container">
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </div>
  );
}

export default App