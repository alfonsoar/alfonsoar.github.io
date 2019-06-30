import * as React from "react";
import { ReactComponent as  GitHubLogo } from '../../resources/github.svg';
import { ReactComponent as  LinkedinLogo } from '../../resources/linkedin.svg';
import { ReactComponent as  TwitterLogo } from '../../resources/twitter.svg';

const Footer: React.FC = () => {
  
  const handleTwitterClick = () => window.location.href = 'https://twitter.com/f0nzi_';
  
  const handleLinkedinClick = () =>  window.location.href = 'https://www.linkedin.com/in/alfonso-austin/';

  const handleGitubClick = () => window.location.href = 'https://github.com/agar23';

  return (
    <div className="footer">
      <span className="footer legal"> &copy; {new Date().getFullYear()} Alfonso Austin</span>
      <TwitterLogo className="footer logo" onClick={handleTwitterClick}/>
      <LinkedinLogo className="footer logo" onClick={handleLinkedinClick}/>
      <GitHubLogo className="footer logo" onClick={handleGitubClick}/>
    </div>
  );
};

export default Footer;
