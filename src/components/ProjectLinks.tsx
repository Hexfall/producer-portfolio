import React from 'react';
import itchLogo from '../assets/itch-io.svg';
import steamLogo from '../assets/steam.svg';

interface ProjectLinksProps {
  steam?: string;
  itch?: string;
}

const linkButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '30px',
  borderRadius: '0px',
  background: 'transparent',
  color: '#0f172a',
  textDecoration: 'none',
  outline: 'none',
};

const iconStyle: React.CSSProperties = {
  width: '30px',
  height: '30px',
  display: 'block',
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ steam, itch }) => (
  <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'center', justifyContent: 'center', marginTop: '0rem', marginBottom: '0rem' }}>
    {steam && (
      <a href={steam} target="_blank" rel="noopener noreferrer" title="View on Steam" style={linkButtonStyle}>
        <img src={steamLogo} alt="Steam" style={iconStyle} />
      </a>
    )}
    {itch && (
      <a href={itch} target="_blank" rel="noopener noreferrer" title="View on itch.io" style={linkButtonStyle}>
        <img src={itchLogo} alt="itch.io" style={iconStyle} />
      </a>
    )}
  </div>
);

export default ProjectLinks;
