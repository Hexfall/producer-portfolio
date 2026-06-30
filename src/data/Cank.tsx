import type { Project } from "../types/Project";

import cank_showcase from '../assets/CANK/CANK - gameplay.webm';
import cank_main from '../assets/CANK/CANK - Showcase.png';
import cank_title from '../assets/CANK/CANK - Title.png';

const Cank: Project = {
    id: 3,
    title: 'CANK!',
    description: 'A vertical slice of a playful third-person exploration game set in a tiny open world built on cans.',
    image: cank_showcase,
    titleGraphic: cank_title,
    color: '#efbdb1',
    links: {itch: 'https://razzledazzle-studio.itch.io/cank'},
    points: [{
            title: "Overview",
            body: ["Once Upon a Shell is a roguelike fairy tale racer where you challenge the hares in a whimsical journey through enchanted forests and mystical realms."],
            image: { type: 'image', src: cank_main },
        }, {
            title: "Gameplay",
            body: ["Players navigate through procedurally generated tracks, collecting power-ups and avoiding obstacles while racing against time and other competitors."],
            image: { type: 'image', src: cank_main },
        }, {
            title: "Ideation",
            body: ["Through an extended ideation process, we refined our ideas and explored them well before leaping into developmtent."],
            image: { type: 'image', src: cank_main },
    }],
    info: {
         duration: "3 weeks",
        teamSize: 13,
        year: "2025",
    },
}

export default Cank;