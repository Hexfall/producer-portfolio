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
  width: '36px',
  height: '36px',
  borderRadius: '8px',
  background: 'transparent',
  color: '#0f172a',
  textDecoration: 'none',
  outline: 'none',
};

const iconStyle: React.CSSProperties = {
  width: '22px',
  height: '22px',
  display: 'block',
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ steam, itch }) => (
  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', marginBottom: '1.5rem' }}>
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
