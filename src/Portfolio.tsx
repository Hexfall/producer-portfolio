import React, { useEffect, useRef, useState } from 'react';
import ouas_showcase from './assets/OUaS - Showcase.png';
import ouas_title from './assets/OUaS - Title.png';
import shaemmy_showcase from './assets/Shaemmy - Showcase.png';
import shaemmy_title from './assets/Shaemmy - Title.png';
import cank_showcase from './assets/CANK - Showcase.png';
import cank_title from './assets/CANK - Title.png';
import chibo_showcase from './assets/Chibo - Showcase.png';
import chibo_title from './assets/Chibo - Title.png';
import home_icon from './assets/home.svg';
import photo from './assets/photo.jpg';
import ConnectModal from './components/ConnectModal';
import ProjectLinks from './components/ProjectLinks';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  titleGraphic?: string;
  features: string[];
  color?: string;
  links?: {
    steam?: string;
    itch?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Once Upon a Shell',
    description: 'Challenge the hares once again in this roguelike fairy tale racer.',
    image: ouas_showcase,
    titleGraphic: ouas_title,
    features: ['Responsive design', 'Project spotlight carousel', 'Scroll snap sections'],
    color: '#bde7b3',
    links: {itch: 'https://razzledazzle-studio.itch.io/once-upon-a-shell', steam: 'https://store.steampowered.com/app/4107970/Once_Upon_a_Shell/'},
  },
  {
    id: 2,
    title: 'Shaemmy',
    description: 'A Nordic game jam game where you devour the solar system as a nascent black hole.',
    image: shaemmy_showcase,
    titleGraphic: shaemmy_title,
    features: ['Interactive product cards', 'Minimal checkout layout', 'Fast animations'],
    color: '#abbbe6',
    links: {itch: 'https://hexfall.itch.io/shaemmy'},
  },
  {
    id: 3,
    title: 'CANK!',
    description: 'A vertical slice of a playful third-person exploration game set in a tiny open world built on cans.',
    image: cank_showcase,
    titleGraphic: cank_title,
    features: ['Story-driven pages', 'Photo-rich design', 'Map and itinerary view'],
    color: '#efbdb1',
    links: {itch: 'https://razzledazzle-studio.itch.io/cank'},
  },
  {
    id: 4,
    title: 'Chibo: Journey of Fate',
    description: 'A story-focused journey through fate and freedom.',
    image: chibo_showcase,
    titleGraphic: chibo_title,
    features: ['Data visualizations', 'Clean card layout', 'Multiple device support'],
    color: '#ffd6ad',
    links: {itch: 'https://simmix-dev.itch.io/chibo-journey-of-fate'},
  },
];

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [timerResetKey, setTimerResetKey] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement | null>(null);

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
    }, 10000);
    return () => window.clearInterval(interval);
  }, [timerResetKey]);

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
            }}
          >
            <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.6rem'}}>
              <img
                src={photo}
                alt="Viktor"
                style={{width: '32px', height: '32px', borderRadius: '999px', objectFit: 'cover', flexShrink: 0}}
              />
              Connect
            </span>
          </button>
        </div>
      </div>

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
        <div ref={headerRef} style={{ width: '100%', maxWidth: '1920px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '80%', maxWidth: '1920px' }}>
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
                style={{ width: '100%', height: '600px', objectFit: 'cover', display: 'block', willChange: 'transform, opacity' }}
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
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            alignItems: 'center',
            gap: '2rem',
            background: project.color,
            color: '#0f172a',
          }}
        >
          <div style={{ maxWidth: '700px' }}>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', opacity: 0.8 }}>Project detail</span>
            {project.titleGraphic ? (
              <div style={{ width: '100%', maxWidth: '1680px', height: '360px', margin: '1rem auto 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={project.titleGraphic}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>
            ) : (
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', margin: '1rem 0 0 0' }}>{project.title}</h2>
            )}
            <ProjectLinks steam={project.links?.steam} itch={project.links?.itch} />
            <p style={{ fontSize: '1.05rem', lineHeight: '1.9', margin: 0 }}>{project.description}</p>
            <ul style={{ margin: '1.5rem 0 0', paddingLeft: '1.2rem', color: '#334155' }}>
              {project.features.map((feature) => (
                <li key={feature} style={{ marginBottom: '0.75rem' }}>
                  {feature}
                </li>
              ))}
            </ul>
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
