import React from "react";
import { GitHubAvatar, GitHubRepoURL } from "./GitHubComponents";
import "./App.css";

export default function GitHubInfo({ userInfo }) {
  if (!userInfo) return null;

  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} />
      <br />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}
