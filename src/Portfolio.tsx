import React, { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hexfall Studio',
    description: 'A clean portfolio experience with animated project highlights and modern interface.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    features: ['Responsive design', 'Project spotlight carousel', 'Scroll snap sections'],
  },
  {
    id: 2,
    title: 'Pixel Shop',
    description: 'An e-commerce landing page designed to showcase product visuals and conversion flows.',
    image: 'https://images.unsplash.com/photo-1545235617-9465f330f3d4?auto=format&fit=crop&w=1200&q=80',
    features: ['Interactive product cards', 'Minimal checkout layout', 'Fast animations'],
  },
  {
    id: 3,
    title: 'Travel Guide',
    description: 'A travel and destination guide that presents locations with rich imagery and storytelling.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    features: ['Story-driven pages', 'Photo-rich design', 'Map and itinerary view'],
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'A sleek dashboard concept for tracking metrics and team performance in real time.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    features: ['Data visualizations', 'Clean card layout', 'Multiple device support'],
  },
];

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToProject = (index: number) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);
    return () => window.clearInterval(interval);
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
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => scrollToProject(index)}
              style={{
                padding: '0.55rem 0.9rem',
                borderRadius: '999px',
                border: index === activeIndex ? '1px solid #38bdf8' : '1px solid rgba(148,163,184,0.24)',
                background: index === activeIndex ? 'rgba(56,189,248,0.16)' : 'transparent',
                color: index === activeIndex ? '#38bdf8' : '#f8fafc',
                fontSize: '0.85rem',
                fontWeight: index === activeIndex ? 600 : 500,
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
            style={{
              padding: '0.75rem 1.2rem',
              borderRadius: '999px',
              border: '1px solid rgba(148,163,184,0.24)',
              background: 'transparent',
              color: '#f8fafc',
              cursor: 'pointer',
              fontSize: '0.95rem',
            }}
          >
            About me
          </button>
          <button
            type="button"
            style={{
              padding: '0.75rem 1.2rem',
              borderRadius: '999px',
              border: 'none',
              background: '#38bdf8',
              color: '#0f172a',
              cursor: 'pointer',
              fontSize: '0.95rem',
            }}
          >
            Connect
          </button>
        </div>
      </div>
      <header
        style={{
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
        <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <p style={{ letterSpacing: '0.35em', textTransform: 'uppercase', opacity: 0.8, fontSize: '0.8rem' }}>Portfolio Showcase</p>
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: 0 }}>Projects in motion</h1>
          <div
            onClick={() => scrollToProject(activeIndex)}
            role="button"
            tabIndex={0}
            style={{
              width: '100%',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(15,23,42,0.35)',
              position: 'relative',
              maxWidth: '1000px',
              cursor: 'pointer',
            }}
          >
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              style={{ width: '100%', height: '450px', objectFit: 'cover', display: 'block' }}
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
            >
              <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>{projects[activeIndex].title}</h2>
              <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>{projects[activeIndex].description}</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => scrollToProject(index)}
                style={{
                  width: '0.85rem',
                  height: '0.85rem',
                  borderRadius: '999px',
                  border: 'none',
                  background: index === activeIndex ? '#38bdf8' : '#334155',
                  cursor: 'pointer',
                }}
                aria-label={`Show ${project.title}`}
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
