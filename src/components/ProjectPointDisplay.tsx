import type { ProjectPoint } from '../types/Project';

const ProjectPointDisplay: React.FC<{ point: ProjectPoint; isEven: boolean }> = ({ point, isEven }) => {
    return (
    <div
        style={{
        display: 'flex',
        gap: '5% 15%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: isEven ? 'row' : 'row-reverse',
        flexWrap: 'wrap',
        width: '90%',
        borderRadius: '1rem',
        overflow: 'hidden',
        padding: '1.25rem',
        textAlign: 'left',
        }}
    >
        <div className="project-point-text">
        <h1 style={{ margin: '0.5rem', textAlign: 'center', color: '#0f172a' }}>{point.title}</h1>
        {point.body.map((text) => text)}
        </div>
        <div style={{ flex: '1 1 320px', minWidth: '280px', display: 'flex', justifyContent: 'center' }}>
        {point.image?.type === 'youtube' ? (
            <div style={{ width: '100%', maxWidth: '720px', aspectRatio: '16/9', background: '#000', borderRadius: '0.75rem', overflow: 'hidden' }}>
            <iframe
                title={`${point.title} video`}
                src={`https://www.youtube.com/embed/${point.image.src}`}
                style={{ width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            </div>
        ) : point.image?.type === 'video' ? (
            <div style={{ width: '100%', maxWidth: '720px', aspectRatio: '16/9', background: '#000', borderRadius: '0.75rem', overflow: 'hidden' }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                title={`${point.title} video`}
                src={point.image.src}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            </div>
        ) : (
            <img src={point.image?.src} alt={point.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem' }} />
        )}
        </div>
    </div>
    );
}

export default ProjectPointDisplay;