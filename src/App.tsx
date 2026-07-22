import './App.css'
import TopBar from "./components/TopBar/TopBar.tsx";
import projects from "./data/Projects.tsx";
import EmblaCarousel from "./components/EmblaCarousel.tsx";
import ProjectShowcase from "./components/ProjectShowcase.tsx";
import ProjectSection from "./components/ProjectSection.tsx";
import Transition from "./components/Transition.tsx";

function App() {

    return (
        <div className='app'>
            <TopBar projects={projects} />
            <header
                id={'home'}
                style={{
                    scrollSnapAlign: 'start',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    marginTop: '-4rem',
                }}
            >
                <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', margin: '0.2rem', color: '#575360' }}>Viktor Máni Mønster</h1>
                <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', margin: '0rem', color: '#6b6375' }}>Game Producer</h2>
                <div style={{ width: '100%', maxWidth: '1200px', maxHeight: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                    <EmblaCarousel slides={projects.map((project) => (
                        <ProjectShowcase project={project} onClick={() => document?.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
                    ))} options={{ loop: true }} autoplay={true} />
                    <p style={{ letterSpacing: '0.35em', textTransform: 'uppercase', opacity: 0.8, fontSize: '0.8rem' }}>Portfolio Showcase</p>
                </div>
            </header>
            <Transition color1={'aquamarine'} color2={projects[0].color} />
            {projects.map((project, index) => (
                <div>
                    <ProjectSection project={project} />
                    {index !== projects.length - 1 && (
                        <Transition color1={project.color} color2={projects[index+1].color} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default App
