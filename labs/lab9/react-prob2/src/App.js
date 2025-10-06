import React from "react";
import { GitHubAvatar, GitHubRepoURL } from "./GitHubComponents";
import "./App.css";

export default function App() {
  const userInfo = {
    url: "https://github.com/SuphatitKKU",
    imgURL: "https://avatars.githubusercontent.com/u/144255039?v=4",
    alt: "Suphatit Srichat",
  };

  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200} />
      <br />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}
