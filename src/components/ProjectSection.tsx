import type {Project} from "../types/Project.tsx";
import ProjectLinks from "./ProjectLinks.tsx";
import ProjectInfo from "./ProjectInfo.tsx";
import EmblaCarousel from "./EmblaCarousel.tsx";
import ProjectPointDisplay from "./ProjectPointDisplay.tsx";

import duration_icon from '../assets/stopwatch.svg';
import people_icon from '../assets/people.svg';
import calendar_icon from '../assets/calendar.svg';

type PropType = {
    project: Project;
}

function ProjectSection (props: PropType) {
    const project: Project = props.project;
    return (
        <section
            key={project.id}
            id={`project-${project.id}`}
            style={{
                scrollSnapAlign: 'start',
                minHeight: '100vh',
                padding: '4rem 2rem 8rem',
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
                {project.links && project.info ? (
                    <div className="meta-info">
                        <ProjectLinks steam={project.links?.steam} itch={project.links?.itch} />
                        <hr className="meta-divider" style={{color: '#000000', height: '16px'}} />
                        <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'start', justifyContent: 'center', marginTop: '0rem', marginBottom: '0rem' }}>
                            <ProjectInfo icon={calendar_icon} title={project.info?.year} />
                            <ProjectInfo icon={duration_icon} title={project.info?.duration} />
                            <ProjectInfo icon={people_icon} title={project.info?.teamSize} />
                        </div>
                    </div>
                ) : (<div style={{height:'4rem'}}/>)}

                {/* Points placed under title/description and centered */}
                {project.points.length > 1 ? (
                <EmblaCarousel slides={project.points.map((pt, pIndex) => (
                    <ProjectPointDisplay key={pIndex} point={pt} isEven={pIndex % 2 === 0} />
                ))} options={{ loop: false }} />
                ) : (
                    <ProjectPointDisplay key={1} point={project.points[0]} isEven={true} />
                )}
                {project.graphics && project.graphics.length > 0 && (
                    <div className="project-container">
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
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProjectSection;