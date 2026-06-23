import React from 'react';
import emailLogo from '../assets/email.svg';
import discordLogo from '../assets/discord.svg';
import linkedinLogo from '../assets/linkedin.svg';

interface ConnectModalProps {
  onClose: () => void;
}

const iconButtonStyle: React.CSSProperties = {
  width: '75px',
  height: '75px',
  borderRadius: '18px',
  border: '1px solid rgba(148, 163, 184, 0.24)',
  background: 'rgba(56, 189, 248, 0.08)',
  color: '#38bdf8',
  cursor: 'pointer',
  padding: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const logoStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  display: 'block',
  filter: 'brightness(0)',
};

const profileImageUrl =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100055314564431&f=1&nofb=1&ipt=2dc36bb7a68d577380c589193bb947873bd7ccc348a8a2ffddfcd7c1c1f4c7d5';

const ConnectModal: React.FC<ConnectModalProps> = ({ onClose }) => {
  const openLink = (url: string) => {
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#1e293b',
          borderRadius: '1.5rem',
          padding: '2.5rem',
          maxWidth: '420px',
          boxShadow: '0 40px 100px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <img
            src={profileImageUrl}
            alt="Viktor"
            style={{ width: '100px', height: '100px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
          />
          <div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#f8fafc' }}>Viktor Máni Mønster</h3>
            <p style={{ margin: 0, lineHeight: 1.6, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Frontend-focused developer who loves crafting clean, interactive interfaces and animation-forward experiences. React, TypeScript and modern CSS.
            </p>
          </div>
        </div>
        <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.5rem', color: '#f8fafc' }}>Let's connect</h3>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.75rem', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={() => openLink('https://www.linkedin.com/in/viktor-m%C3%A1ni-m%C3%B8nster-525231203/')}
            aria-label="LinkedIn"
            style={iconButtonStyle}
          >
            <img src={linkedinLogo} alt="LinkedIn" style={logoStyle} />
          </button>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText('viktor@mani.monster');
              onClose();
            }}
            aria-label="Email"
            style={iconButtonStyle}
          >
            <img src={emailLogo} alt="Email" style={logoStyle} />
          </button>
          <button
            type="button"
            onClick={() => openLink('https://discord.gg')}
            aria-label="Discord"
            style={iconButtonStyle}
          >
            <img src={discordLogo} alt="Discord" style={logoStyle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
