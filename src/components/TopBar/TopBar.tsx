import './TopBar.css'
import home_icon from '../../assets/home.svg';
import type {Project} from "../../types/Project.tsx";
import burger_icon from '../../assets/burger-icon.svg';
import {useState} from "react";

type PropType = {
    projects: Project[];
}

function TopBar(props: PropType) {
    const projects = props.projects || []
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="top-bar">
            <button
                className="top-bar__button"
                onClick={() => document?.getElementById(`home`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
                <img src={home_icon} alt="Home" style={{ width: '100%', maxHeight: '100%', objectFit: 'scale-down', display: 'block' }} />
            </button>
            {projects.map(project => (
                <button
                    className="top-bar__button"
                    onClick={() => document?.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                    <img
                        src={project.titleGraphic}
                        alt={project.title}
                        style={{
                            width: '100%',
                            maxHeight: '100%',
                            objectFit: 'scale-down',
                            display: 'block',
                        }}
                    />
                </button>
            ))}
            <button
                className="top-bar__burger-button"
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <img src={burger_icon} alt="menu" style={{ width: 22, height: 22, display: 'block' }} />
            </button>
            {mobileMenuOpen && (
                <div className="top-bar__mobile_overlay" role="dialog" aria-modal="true" onClick={() => setMobileMenuOpen(false)}>
                    <div className="top-bar__nav-items">
                        <button
                            type="button"
                            className="top-bar__button-mobile"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                document?.getElementById(`home`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        >
                            <img src={home_icon} alt="Home" style={{ width: '100%', maxHeight: '80%', display: 'block' }} />
                        </button>

                        {projects.map((project) => (
                            <button
                                key={project.id}
                                className="top-bar__button-mobile"
                                type="button"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    document?.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                </div>
            )}
        </div>
    )
}

export default TopBar