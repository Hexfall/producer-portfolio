import React from 'react';
import emailLogo from '../assets/email.svg';
import discordLogo from '../assets/discord.svg';
import linkedinLogo from '../assets/linkedin.svg';
import photo from '../assets/photo.jpg';

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

const ConnectModal: React.FC<ConnectModalProps> = ({ onClose }) => {
  const [visible, setVisible] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => {
      cancelAnimationFrame(raf);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const closeWithAnimation = () => {
    setVisible(false);
    // Wait for the longest transition (220ms) plus a small buffer
    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null;
      onClose();
    }, 150);
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
    closeWithAnimation();
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
      onClick={closeWithAnimation}
    >
      <div
        style={{
          background: '#1e293b',
          borderRadius: '1.5rem',
          padding: '2.5rem',
          maxWidth: '420px',
          boxShadow: '0 40px 100px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.96)',
          opacity: visible ? 1 : 0,
          transition: 'transform 220ms cubic-bezier(0.2,0.9,0.2,1), opacity 180ms ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <img
            src={photo}
            alt="Viktor"
            style={{ width: '100px', height: '100px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
          />
          <div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#f8fafc' }}>Viktor Máni Mønster</h3>
            <p style={{ margin: 0, lineHeight: 1.6, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Hey, I'm Viktor - a game producer with a passion for creating engaging and meaningful experiences. I love helping to bring out the best in people's ideas and collaborating with talented individuals. Let's connect and explore how we can create something amazing together.
            </p>
          </div>
        </div>
        <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.5rem', color: '#f8fafc' }}>Let's connect</h3>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.75rem', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={() => openLink('https://www.linkedin.com/in/viktor-m%C3%A1ni-m%C3%B8nster-525231203/')}
            aria-label="LinkedIn"
            title="Viktor Máni Mønster"
            style={iconButtonStyle}
          >
            <img src={linkedinLogo} alt="LinkedIn" style={logoStyle} />
          </button>
          <button
            type="button"
            onClick={() => {openLink('https://www.linkedin.com/in/viktor-m%C3%A1ni-m%C3%B8nster-525231203/')          }}
            aria-label="Email"
            title="viktor@mani.monster"
            style={iconButtonStyle}
          >
            <img src={emailLogo} alt="Email" style={logoStyle} />
          </button>
          <button
            type="button"
            onClick={() => openLink('https://discord.com/users/hexfall')}
            aria-label="Discord"
            title="hexfall"
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
