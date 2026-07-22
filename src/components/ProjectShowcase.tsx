import type { Project } from '../types/Project';

const ProjectShowcase: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '80%', maxWidth: '1920px' }}>
            <div
                role="button"
                onClick={() => onClick()}
                tabIndex={0}
                style={{
                    flex: 1,
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    maxHeight: '800px',
                }}
            >
                {project.image.type == 'video' ? (
                <video
                    src={project.image.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        minHeight: '350px',
                        maxHeight: '800px',
                        objectFit: 'cover',
                        display: 'block',
                        willChange: 'transform, opacity'
                    }}
                    />
                ) : null}
                <div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: '1.5rem',
                    background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.7))',
                    objectFit: 'contain',
                }}
                >
                <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>{project.title}</h2>
                <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>{project.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectShowcase;