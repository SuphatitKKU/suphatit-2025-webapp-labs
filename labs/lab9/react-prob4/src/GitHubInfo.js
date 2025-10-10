import React from "react";
import { GitHubAvatar, GitHubRepoURL } from "./GitHubComponents";
import "./App.css";

export default function GitHubInfo({ userInfo }) {
  if (!userInfo) return null;

  return (
    <li>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={100} />
      {" "}
      <GitHubRepoURL 
        url={userInfo.url} 
        username={userInfo.alt}
        followers={userInfo.followers}
      />
    </li>
  );
}