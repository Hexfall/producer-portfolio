import React from 'react';

interface ProjectInfoProps {
  icon: string;
  title: string | number;
}

const iconStyle: React.CSSProperties = {
  width: '30px',
  height: '30px',
  display: 'block',
};

const ProjectInfo: React.FC<ProjectInfoProps> = ({ icon, title }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '.2rem', alignItems: 'center', justifyContent: 'center', marginTop: '0rem', marginBottom: '0rem' }}>
    <img src={icon} alt={String(title)} style={iconStyle} />
    <span style={{ fontSize: '1rem', color: '#0f172a' }}>{title}</span>
  </div>
);

export default ProjectInfo;
