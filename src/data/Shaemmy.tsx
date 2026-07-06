import type { Project } from "../types/Project";

import shaemmy_showcase from '../assets/Shaemmy/Shaemmy - gameplay.webm';
import shaemmy_main from '../assets/Shaemmy/Shaemmy - Showcase.png';
import shaemmy_title from '../assets/Shaemmy/Shaemmy - Title.png';
import under_construction from '../assets/Under-Construction.png';
import saturn from '../assets/Shaemmy/Saturn.png';
import Sun from '../assets/Shaemmy/Sun.png';
import Wide from '../assets/Shaemmy/Wide.png';

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
                (<p>Is there any use for a producer in a game jam project? That was the question I set out to answer during the Nordic Game Jam 2026. I took on the role of producer for a team of 10 people, and we made a game called Shaemmy, where you devour the solar system as a nascent black hole.</p>)
            ],
            image: { type: 'image', src: shaemmy_main },
        }, {
            title: "Under construction",
            body: [
                (<p>This part of the portfolio is still being developed. Enjoy these images from the project in the mean time.</p>)
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
    ],
}

export default Shaemmy;