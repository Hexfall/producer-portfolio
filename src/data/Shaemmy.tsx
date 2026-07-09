import type { Project } from "../types/Project";

import shaemmy_showcase from '../assets/Shaemmy/Shaemmy - gameplay.webm';
import shaemmy_main from '../assets/Shaemmy/Shaemmy - Showcase.png';
import shaemmy_title from '../assets/Shaemmy/Shaemmy - Title.png';
import under_construction from '../assets/Under-Construction.png';
import saturn from '../assets/Shaemmy/Saturn.png';
import Sun from '../assets/Shaemmy/Sun.png';
import Wide from '../assets/Shaemmy/Wide.png';
import mind from '../assets/Shaemmy/Mind Map.jpg'
import ranked from '../assets/Shaemmy/Ranked Ideation.jpg'
import tracking from '../assets/Shaemmy/Task Tracking.jpg'
import celebration from '../assets/Shaemmy/Celebration.jpg'

const Shaemmy: Project = {
    id: 2,
    title: 'Shaemmy',
    description: 'A Nordic game jam game where you devour the solar system as a nascent black hole.',
    image: shaemmy_showcase,
    titleGraphic: shaemmy_title,
    color: '#caecef',
    links: {itch: 'https://hexfall.itch.io/shaemmy'},
    points: [{
            title: "Overview",
            body: [
                (<p>Is there any use for a producer in a game jam project? That was the question I set out to answer during the Nordic Game Jam 2026. I took on the role of producer for a team of 10 people, and we made a game called Shaemmy, where you devour the solar system as a nascent black hole.</p>),
                (<div className="project-point-bullet">
                    <p style={{ marginBottom: '-1rem' }}>
                        Having barely two days to complete the project, any production processes I set up had to be, first and foremost, lean. This meant stripping down my usual tools down to their essentials and doing my best to make sure we were always moving. For this, I used:
                    </p>
                    <ul>
                        <li>Mind Mapping, to establish early themes in our ideation.</li>
                        <li>Basic macro and micro level feature tracking using post-its, to ensure features weren't falling behind.</li>
                        <li>Active monitoring, to make sure that the people who needed to talk to one another did so.</li>
                        <li>Clear areas of responsibility, so people could be empowered to make choices on their own.</li>
                    </ul>
                </div>),
            ],
            image: { type: 'image', src: shaemmy_main },
        }, {
            title: "Under construction",
            body: [
                (<p>Oh no! You've discovered my embarrassing secret. This part of the portfolio is still being developed. Enjoy these images from the project in the meantime.</p>),
                (<p>Want to learn more about how I manage projects? Check out the page for Once Upon a Shell, which is fully developed. If you were really excited to hear about how I managed this particular project, try checking back in in a couple of days or feel free to contact me directly through any of the methods listed in my "about me" section.</p>),
            ],
            image: { type: 'image', src: under_construction },
        /*}, {
            title: "Stripped Down Task Management",
            body: [
                (<p>Players navigate through procedurally generated tracks, collecting power-ups and avoiding obstacles while racing against time and other competitors.</p>)
            ],
            image: { type: 'image', src: shaemmy_main },
        }, {
            title: "Something Vigilance",
            body: [
                (<p>Through an extended ideation process, we refined our ideas and explored them well before leaping into development.</p>)
            ],
            image: { type: 'image', src: shaemmy_main },*/
    }],
    info: {
        duration: "2 days",
        teamSize: 10,
        year: "2026",
    },
    graphics: [
        { type: 'video', src: shaemmy_showcase },
        { type: 'image', src: saturn },
        { type: 'image', src: Sun },
        { type: 'image', src: Wide },
        { type: 'image', src: mind },
        { type: 'image', src: ranked },
        { type: 'image', src: tracking },
        { type: 'image', src: celebration },
    ],
}

export default Shaemmy;