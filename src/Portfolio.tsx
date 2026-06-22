import React, { useEffect, useRef, useState } from 'react';
import ouas_showcase from './assets/OUaS - Showcase.png';
import shaemmy_showcase from './assets/Shaemmy - Showcase.png';
import cank_showcase from './assets/CANK - Showcase.png';
import chibo_showcase from './assets/Chibo - Showcase.png';
import steamLogo from './assets/steam.svg';
import itchLogo from './assets/itch-io.svg';
import emailLogo from './assets/email.svg';
import discordLogo from './assets/discord.svg';
import linkedinLogo from './assets/linkedin.svg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  links?: {
    steam?: string;
    itch?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Once Upon a Shell',
    description: 'A clean portfolio experience with animated project highlights and modern interface.',
    image: ouas_showcase,
    features: ['Responsive design', 'Project spotlight carousel', 'Scroll snap sections'],
    links: {itch: 'https://razzledazzle-studio.itch.io/once-upon-a-shell', steam: 'https://store.steampowered.com/app/4107970/Once_Upon_a_Shell/'},
  },
  {
    id: 2,
    title: 'Shaemmy',
    description: 'An e-commerce landing page designed to showcase product visuals and conversion flows.',
    image: shaemmy_showcase,
    features: ['Interactive product cards', 'Minimal checkout layout', 'Fast animations'],
    links: {itch: 'https://hexfall.itch.io/shaemmy'},
  },
  {
    id: 3,
    title: 'CANK!',
    description: 'A travel and destination guide that presents locations with rich imagery and storytelling.',
    image: cank_showcase,
    features: ['Story-driven pages', 'Photo-rich design', 'Map and itinerary view'],
    links: {itch: 'https://razzledazzle-studio.itch.io/cank'},
  },
  {
    id: 4,
    title: 'Chibo: Journey of Fate',
    description: 'A sleek dashboard concept for tracking metrics and team performance in real time.',
    image: chibo_showcase,
    features: ['Data visualizations', 'Clean card layout', 'Multiple device support'],
    links: {itch: 'https://simmix-dev.itch.io/chibo-journey-of-fate'},
  },
];

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [timerResetKey, setTimerResetKey] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const headerRef = useRef<HTMLElement | null>(null);

  const scrollToProject = (index: number) => {
    setActiveSectionIndex(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNextProject = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
    setTimerResetKey((prev) => prev + 1);
  };

  const handlePrevProject = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
    setTimerResetKey((prev) => prev + 1);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setTimerResetKey((prev) => prev + 1);
  };

  const showcaseImgRef = useRef<HTMLImageElement | null>(null);
  const showcaseOverlayRef = useRef<HTMLDivElement | null>(null);
  const prevIndexRef = useRef(0);

  // Handle exit animation when activeIndex changes
  useEffect(() => {
    if (activeIndex === displayedIndex) return;

    const img = showcaseImgRef.current;
    const overlay = showcaseOverlayRef.current;
    if (!img || !overlay) return;

    // Determine direction for smooth transition
    const isNext = (activeIndex > prevIndexRef.current) || (prevIndexRef.current === projects.length - 1 && activeIndex === 0);
    prevIndexRef.current = activeIndex;
    const exitOffset = isNext ? -40 : 40;

    // Animate out the current image
    img.style.transition = 'transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms ease';
    overlay.style.transition = 'transform 750ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 650ms ease';
    img.style.transform = `translateX(${exitOffset}px)`;
    img.style.opacity = '0';
    overlay.style.transform = `translateX(${exitOffset * 0.65}px)`;
    overlay.style.opacity = '0';

    // After exit animation, update image and animate in
    const timer = setTimeout(() => {
      setDisplayedIndex(activeIndex);
    }, 600);

    return () => clearTimeout(timer);
  }, [activeIndex, displayedIndex]);

  // Handle entrance animation when displayedIndex updates
  useEffect(() => {
    const img = showcaseImgRef.current;
    const overlay = showcaseOverlayRef.current;
    if (!img || !overlay) return;

    const isNext = (displayedIndex > prevIndexRef.current) || (prevIndexRef.current === projects.length - 1 && displayedIndex === 0);
    const enterOffset = isNext ? 40 : -40;

    // Step 1: Remove transitions and set initial state
    img.style.transition = 'none';
    overlay.style.transition = 'none';
    img.style.transform = `translateX(${enterOffset}px)`;
    img.style.opacity = '0';
    overlay.style.transform = `translateX(${enterOffset * 0.65}px)`;
    overlay.style.opacity = '0';

    // Step 2: Force reflow to apply initial state
    void img.offsetHeight;

    // Step 3: Enable transitions and animate to final state
    img.style.transition = 'transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms ease';
    overlay.style.transition = 'transform 750ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 650ms ease';
    img.style.transform = 'translateX(0)';
    img.style.opacity = '1';
    overlay.style.transform = 'translateX(0)';
    overlay.style.opacity = '1';
  }, [displayedIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [timerResetKey]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((section) => section === entry.target);
            if (index !== -1) {
              setActiveSectionIndex(index);
            }
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        fontFamily: 'Inter, system-ui, sans-serif',
        background: '#0f172a',
        color: '#f8fafc',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          background: 'rgba(15,23,42,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(148,163,184,0.16)',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => {
              setActiveSectionIndex(-1);
              headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            style={{
              padding: '0.55rem 0.9rem',
              borderRadius: '999px',
              border: activeSectionIndex === -1 ? '1px solid #38bdf8' : '1px solid rgba(148,163,184,0.24)',
              background: activeSectionIndex === -1 ? 'rgba(56,189,248,0.16)' : 'transparent',
              color: activeSectionIndex === -1 ? '#38bdf8' : '#f8fafc',
              fontSize: '0.85rem',
              fontWeight: activeSectionIndex === -1 ? 600 : 500,
              cursor: 'pointer',
            }}
          >
            Home
          </button>

          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => scrollToProject(index)}
              style={{
                padding: '0.55rem 0.9rem',
                borderRadius: '999px',
                border: index === activeSectionIndex ? '1px solid #38bdf8' : '1px solid rgba(148,163,184,0.24)',
                background: index === activeSectionIndex ? 'rgba(56,189,248,0.16)' : 'transparent',
                color: index === activeSectionIndex ? '#38bdf8' : '#f8fafc',
                fontSize: '0.85rem',
                fontWeight: index === activeSectionIndex ? 600 : 500,
                cursor: 'pointer',
              }}
            >
              {project.title}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="button"
            onClick={() => setShowConnectModal(true)}
            style={{
              padding: '0.3rem 0.8rem',
              borderRadius: '999px',
              border: 'none',
              background: '#38bdf8',
              color: '#0f172a',
              cursor: 'pointer',
              fontSize: '0.95rem',
            }}
          >
            <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.6rem'}}>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100055314564431&f=1&nofb=1&ipt=2dc36bb7a68d577380c589193bb947873bd7ccc348a8a2ffddfcd7c1c1f4c7d5"
                alt="Viktor"
                style={{width: '32px', height: '32px', borderRadius: '999px', objectFit: 'cover', flexShrink: 0}}
              />
              Connect
            </span>
          </button>
        </div>
      </div>
      {showConnectModal && (
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
          onClick={() => setShowConnectModal(false)}
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
            <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100055314564431&f=1&nofb=1&ipt=2dc36bb7a68d577380c589193bb947873bd7ccc348a8a2ffddfcd7c1c1f4c7d5" alt="Viktor" style={{width: '100px', height: '100px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0}} />
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
                onClick={() => {
                  window.open('https://www.linkedin.com/in/viktor-m%C3%A1ni-m%C3%B8nster-525231203/', '_blank');
                  setShowConnectModal(false);
                }}
                aria-label="LinkedIn"
                style={{
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
                }}
              >
                <img src={linkedinLogo} alt="LinkedIn" style={{ width: '36px', height: '36px', display: 'block', filter: 'brightness(0)' }} />
              </button>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText('viktor@mani.monster');
                  setShowConnectModal(false);
                }}
                aria-label="Email"
                style={{
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
                }}
              >
                <img src={emailLogo} alt="Email" style={{ width: '36px', height: '36px', display: 'block', filter: 'brightness(0)' }} />
              </button>
              <button
                type="button"
                onClick={() => {
                  window.open('https://discord.gg', '_blank');
                  setShowConnectModal(false);
                }}
                aria-label="Discord"
                style={{
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
                }}
              >
                <img src={discordLogo} alt="Discord" style={{ width: '36px', height: '36px', display: 'block', filter: 'brightness(0)' }} />
              </button>
            </div>
          </div>
        </div>
      )}

      <header
        style={{
          // allow scrolling to showcase via headerRef
          scrollSnapAlign: 'start',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          gap: '2rem',
          background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
        }}
      >
        <div ref={headerRef} style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <p style={{ letterSpacing: '0.35em', textTransform: 'uppercase', opacity: 0.8, fontSize: '0.8rem' }}>Portfolio Showcase</p>
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: 0 }}>Projects in motion</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', maxWidth: '1000px' }}>
            <button
              type="button"
              onClick={handlePrevProject}
              aria-label="Previous project"
              style={{
                flexShrink: 0,
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '999px',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#f1f5f9',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                transition: 'background 200ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
            >
              ←
            </button>
            <div
              onClick={() => scrollToProject(activeIndex)}
              role="button"
              tabIndex={0}
              style={{
                flex: 1,
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(15,23,42,0.35)',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <img
                src={projects[displayedIndex].image}
                alt={projects[displayedIndex].title}
                ref={showcaseImgRef}
                style={{ width: '100%', height: '450px', objectFit: 'cover', display: 'block', willChange: 'transform, opacity' }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '1.5rem',
                  background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.95))',
                }}
                ref={showcaseOverlayRef}
              >
                <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>{projects[displayedIndex].title}</h2>
                <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>{projects[displayedIndex].description}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleNextProject}
              aria-label="Next project"
              style={{
                flexShrink: 0,
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '999px',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#f1f5f9',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                transition: 'background 200ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
            >
              →
            </button>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => handleDotClick(index)}
                aria-label={`Showcase ${project.title}`}
                style={{
                  width: '0.85rem',
                  height: '0.85rem',
                  borderRadius: '999px',
                  border: 'none',
                  background: index === activeIndex ? '#38bdf8' : '#334155',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </header>

      {projects.map((project, index) => (
        <section
          key={project.id}
          id={`project-${project.id}`}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          style={{
            scrollSnapAlign: 'start',
            minHeight: '100vh',
            padding: '4rem 2rem',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            alignItems: 'center',
            gap: '2rem',
            background: index % 2 === 0 ? '#f8fafc' : '#e2e8f0',
            color: '#0f172a',
          }}
        >
          <div style={{ maxWidth: '700px' }}>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', opacity: 0.8 }}>Project detail</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', margin: '1rem 0' }}>{project.title}</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.9', margin: 0 }}>{project.description}</p>
            <ul style={{ margin: '1.5rem 0 0', paddingLeft: '1.2rem', color: '#334155' }}>
              {project.features.map((feature) => (
                <li key={feature} style={{ marginBottom: '0.75rem' }}>
                  {feature}
                </li>
              ))}
            </ul>
            {/* Links (itch / steam) */}
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              {project.links?.itch && (
                <a
                  href={project.links.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on itch.io"
                  style={{
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
                  }}
                >
                  <img src={itchLogo} alt="itch.io" style={{ width: '22px', height: '22px', display: 'block' }} />
                </a>
              )}

              {project.links?.steam && (
                <a
                  href={project.links.steam}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on Steam"
                  style={{
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
                  }}
                >
                  <img src={steamLogo} alt="Steam" style={{ width: '22px', height: '22px', display: 'block' }} />
                </a>
              )}
            </div>
          </div>
          <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 60px rgba(15,23,42,0.16)' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', minHeight: '420px', objectFit: 'cover' }} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
