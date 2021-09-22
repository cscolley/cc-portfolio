import React from 'react';
import ExternalLinkIcon from './ExternalLinkIcon';
import GitHubIcon from './GitHubIcon';
import LinkedinIcon from './LinkedinIcon';
import TwitterIcon from './TwitterIcon';
import EmailIcon from './EmailIcon';
import Logo from './Logo';

const Icon = ({ name }) => {
  switch (name) {
    case 'External':
      return <ExternalLinkIcon />;
    case 'GitHub':
      return <GitHubIcon />;
    case 'Linkedin':
      return <LinkedinIcon />;
    case 'Twitter':
      return <TwitterIcon />;
    case 'Logo':
      return <Logo />;
    case 'Email': 
      return <EmailIcon />;
    default:
      return <Logo />;
  }
};

export default Icon;
