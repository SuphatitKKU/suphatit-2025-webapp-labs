import React from "react";
import "./App.css";

export function GitHubRepoURL({ url, username, followers }) {
  const displayText = followers > 10000 
    ? `${username} (${followers.toLocaleString()} followers)`
    : username;
  
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {displayText}
    </a>
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