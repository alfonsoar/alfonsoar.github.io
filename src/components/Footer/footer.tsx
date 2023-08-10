import React from "react";
import { ReactComponent as GitHubLogo } from "../../resources/github.svg";
import { ReactComponent as LinkedinLogo } from "../../resources/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../../resources/twitter.svg";

export const Footer = () => (
  <div className="footer">
    <span className="footer legal">
      &copy; {new Date().getFullYear()} Alfonso Austin-Rivera
    </span>
    <a
      href="https://twitter.com/alfonsoar_"
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterLogo className="footer logo" />
    </a>
    <a
      href="https://www.linkedin.com/in/alfonso-austin/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinLogo className="footer logo" />
    </a>
    <a
      href="https://github.com/alfonsoar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubLogo className="footer logo" />
    </a>
  </div>
);
