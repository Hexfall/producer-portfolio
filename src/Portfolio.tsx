import React, { useEffect, useRef, useState } from 'react';
import home_icon from './assets/home.svg';
import burger_icon from './assets/burger-icon.svg';
import photo from './assets/photo.jpg';
import ConnectModal from './components/ConnectModal';
import EmblaCarousel from './components/EmblaCarousel';
import ProjectPointDisplay from './components/ProjectPointDisplay';
import ProjectLinks from './components/ProjectLinks';
import ProjectInfo from './components/ProjectInfo';

import duration_icon from './assets/stopwatch.svg';
import people_icon from './assets/people.svg';
import calendar_icon from './assets/calendar.svg';

import projects from './data/Projects';
import ProjectShowcase from './components/ProjectShowcase';

const Portfolio: React.FC = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const scrollToProject = (index: number) => {
    setActiveSectionIndex(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setActiveSectionIndex(-1);
              return;
            }
            const index = sectionRefs.current.findIndex((section) => section === entry.target);
            if (index !== -1) {
              setActiveSectionIndex(index);
            }
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

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
        fontFamily: 'IBM Plex Sans, Inter, system-ui, sans-serif',
        background: '#0f172a',
        color: '#f8fafc',
      }}
    >
      <button
        className="burger-btn"
        type="button"
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen(true)}
      >
        <img src={burger_icon} alt="menu" style={{ width: 22, height: 22, display: 'block' }} />
      </button>

      <div className="topbar">
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => {
              setActiveSectionIndex(-1);
              headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            aria-label="Home"
            style={{
              width: '3rem',
              height: '3rem',
              padding: 0,
              borderRadius: '1rem',
              border: activeSectionIndex === -1 ? '1px solid #38bdf8' : '1px solid rgba(148,163,184,0.24)',
              background: activeSectionIndex === -1 ? 'rgba(56,189,248,0.16)' : 'transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={home_icon} alt="Home" style={{ width: '1.2rem', height: '1.2rem', display: 'block' }} />
          </button>

          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => scrollToProject(index)}
              style={{
                height: '3rem',
                padding: '0 0.6rem',
                borderRadius: '1rem',
                border: index === activeSectionIndex ? '1px solid #38bdf8' : '1px solid rgba(148,163,184,0.24)',
                background: index === activeSectionIndex ? 'rgba(56,189,248,0.16)' : 'transparent',
                color: index === activeSectionIndex ? '#38bdf8' : '#f8fafc',
                fontSize: '0.9rem',
                fontWeight: index === activeSectionIndex ? 600 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {project.titleGraphic ? (
                <img src={project.titleGraphic} alt={project.title} style={{ width: '10rem', height: '1.8rem', objectFit: 'contain', display: 'block' }} />
              ) : (
                project.title
              )}
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
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem'}}>
              <img
                src={photo}
                alt="Viktor"
                style={{width: '32px', height: '32px', borderRadius: '999px', objectFit: 'cover', flexShrink: 0, marginTop: '2px'}}
              />
              About me
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-overlay" role="dialog" aria-modal="true">
          <button type="button" className="mobile-close" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}>×</button>
          <div className="nav-items" style={{ width: '100%' }}>
            <button
              type="button"
              style={{
                height: '5rem',
                padding: '0 0.6rem',
                borderRadius: '1rem',
                border: -1 === activeSectionIndex ? '1px solid #38bdf8' : '1px solid rgba(148,163,184,0.24)',
                background: -1 === activeSectionIndex ? 'rgba(56,189,248,0.16)' : 'transparent',
                color: -1 === activeSectionIndex ? '#38bdf8' : '#f8fafc',
                fontSize: '0.9rem',
                fontWeight: -1 === activeSectionIndex ? 600 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
              onClick={() => {
                setActiveSectionIndex(-1);
                headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setMobileMenuOpen(false);
              }}
            >
              <img src={home_icon} alt="Home" style={{ width: '100%', maxHeight: '80%', display: 'block' }} />
            </button>

            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                style={{
                  height: '5rem',
                  padding: '0 0.6rem',
                  borderRadius: '1rem',
                  border: index === activeSectionIndex ? '1px solid #38bdf8' : '1px solid rgba(148,163,184,0.24)',
                  background: index === activeSectionIndex ? 'rgba(56,189,248,0.16)' : 'transparent',
                  color: index === activeSectionIndex ? '#38bdf8' : '#f8fafc',
                  fontSize: '0.9rem',
                  fontWeight: index === activeSectionIndex ? 600 : 500,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  scrollToProject(index);
                  setMobileMenuOpen(false);
                }}
              >
                {project.titleGraphic ? (
                  <img
                    src={project.titleGraphic}
                    alt={project.title}
                    style={{
                      width: '100%', 
                      maxHeight: '80%', 
                      objectFit: 'contain', 
                      display: 'block', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                    }}/>
                ) : (
                  project.title
                )}
              </button>
            ))}
          </div>

          <div className="mobile-connect">
            <button
              type="button"
              onClick={() => {
                setShowConnectModal(true);
                setMobileMenuOpen(false);
              }}
              style={{
                padding: '0.6rem 1.1rem',
                borderRadius: '999px',
                border: 'none',
                background: '#38bdf8',
                color: '#0f172a',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                <img src={photo} alt="Viktor" style={{ width: 28, height: 28, borderRadius: '999px', objectFit: 'cover' }} />
                Connect
              </span>
            </button>
          </div>
        </div>
      )}

      {showConnectModal && <ConnectModal onClose={() => setShowConnectModal(false)} />}

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
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', margin: '0.2rem' }}>Viktor Máni Mønster</h1>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', margin: '0rem' }}>Game Producer</h2>
        <div ref={headerRef} style={{ width: '100%', maxWidth: '1920px', maxHeight: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <EmblaCarousel slides={projects.map((project) => (
              <ProjectShowcase project={project} onClick={() => document?.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
            ))} options={{ loop: true }} autoplay={true} />
          <p style={{ letterSpacing: '0.35em', textTransform: 'uppercase', opacity: 0.8, fontSize: '0.8rem' }}>Portfolio Showcase</p>
        </div>
      </header>

      {projects.map((project, index) => (
        <section
          key={project.id}
          id={`project-${project.id}`}
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[index] = el;
          }}
          style={{
            scrollSnapAlign: 'start',
            minHeight: '100vh',
            padding: '4rem 2rem',
            gridTemplateColumns: '1.1fr 0.9fr',
            alignItems: 'center',
            gap: '0rem',
            background: project.color,
            color: '#0f172a',
          }}
        >
          <div style={{ maxWidth: '1920px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {project.titleGraphic ? (
              <div style={{ width: '100%', maxWidth: '1680px', maxHeight: '360px', margin: '2rem 0 1rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={project.titleGraphic}
                  alt={project.title}
                  style={{ width: '100%', maxHeight: '360p', objectFit: 'scale-down', display: 'block' }}
                />
              </div>
            ) : (
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', margin: '1rem 0 0 0' }}>{project.title}</h2>
            )}
            <div className="meta-info">
              <ProjectLinks steam={project.links?.steam} itch={project.links?.itch} />
              <hr className="meta-divider" style={{color: '#000000', height: '16px'}} />
              <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'start', justifyContent: 'center', marginTop: '0rem', marginBottom: '0rem' }}>
                <ProjectInfo icon={calendar_icon} title={project.info?.year} />
                <ProjectInfo icon={duration_icon} title={project.info?.duration} />
                <ProjectInfo icon={people_icon} title={project.info?.teamSize} />
              </div>
            </div>

            {/* Points placed under title/description and centered */}
            <EmblaCarousel slides={project.points.map((pt, pIndex) => (
              <ProjectPointDisplay key={pIndex} point={pt} isEven={pIndex % 2 === 0} />
            ))} options={{ loop: false }} />
            <div className="project-container">
              {project.graphics && project.graphics.length > 0 && (
                <div className="project-graphics">
                  {project.graphics.map((graphic, gIndex) => (
                    <div key={gIndex} style={{ width: '100%', maxWidth: '480px', background: 'transparent', borderRadius: '0.75rem', overflow: 'hidden' }}>
                      {graphic.type === 'youtube' ? (
                        <iframe
                          title={`${project.title} - graphic ${gIndex + 1}`}
                          src={`https://www.youtube.com/embed/${graphic.src}`}
                          style={{ width: '100%', border: 0, borderRadius: '0.75rem', }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : graphic.type === 'video' ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          title={`${project.title} - graphic ${gIndex + 1}`}
                          src={graphic.src}
                          style={{ width: '100%', objectFit: 'cover', borderRadius: '0.75rem', }}
                        />
                      ) : (
                        <img
                        src={graphic.src}
                        alt={`${project.title} - graphic ${gIndex + 1}`}
                        style={{
                          width: '100%',
                          objectFit: 'cover',
                          backgroundColor: 'transparent',
                          borderRadius: '0.75rem',
                        }} />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Spacing below projects, so they don't move along too quick */}
          { index !== projects.length - 1 ? (<div style={{ width: '100%', height: '40rem' }} />) : (null) }
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
