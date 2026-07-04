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
            body: ["Once Upon a Shell is a roguelike fairy tale racer where you challenge the hares in a whimsical journey through enchanted forests and mystical realms."],
            image: { type: 'image', src: shaemmy_main },
        }, {
            title: "Under construction",
            body: ["This part of the portfolio is still being developed. Enjoy these images from the project in the mean time."],
            image: { type: 'image', src: under_construction },
        /*}, {
            title: "Stripped Down Task Management",
            body: ["Players navigate through procedurally generated tracks, collecting power-ups and avoiding obstacles while racing against time and other competitors."],
            image: { type: 'image', src: shaemmy_main },
        }, {
            title: "Something Vigilance",
            body: ["Through an extended ideation process, we refined our ideas and explored them well before leaping into developmtent."],
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