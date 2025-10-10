import React from "react";
import "./App.css";

export function GitHubRepoURL({ url, username, followers }) {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        {username}
      </a>
      <span> ({followers.toLocaleString()} followers)</span>
    </>
  );
}

export function GitHubAvatar({ imgURL, alt, size = 100 }) {
  return (
    <img
      src={imgURL}
      alt={alt}
      width={size}
      height={size}
    />
  );
}