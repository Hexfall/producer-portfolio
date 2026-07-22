import './TopBar.css'
import home_icon from '../../assets/home.svg';
import type {Project} from "../../types/Project.tsx";

type PropType = {
    projects: Project[];
}

function TopBar(props: PropType) {
    const projects = props.projects || []

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
        </div>
    )
}

export default TopBar