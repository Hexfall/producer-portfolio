import type { Project } from "../types/Project";

import chibo_showcase from '../assets/Chibo/Chibo - gameplay.webm';
import chibo_main from '../assets/Chibo/Chibo - Showcase.png';
import chibo_title from '../assets/Chibo/Chibo - Title.png';

const Chibo: Project = {
    id: 4,
    title: 'Chibo: Journey of Fate',
    description: 'A story-focused journey through fate and freedom.',
    image: chibo_showcase,
    titleGraphic: chibo_title,
    color: '#ffd6ad',
    links: {itch: 'https://simmix-dev.itch.io/chibo-journey-of-fate'},
    points: [{
            title: "Overview",
            body: ["Once Upon a Shell is a roguelike fairy tale racer where you challenge the hares in a whimsical journey through enchanted forests and mystical realms."],
            image: { type: 'youtube', src: 'MxJ5GkymzOs' },
        }, {
            title: "Gameplay",
            body: ["Players navigate through procedurally generated tracks, collecting power-ups and avoiding obstacles while racing against time and other competitors."],
            image: { type: 'image', src: chibo_main },
        }, {
            title: "Ideation",
            body: ["Through an extended ideation process, we refined our ideas and explored them well before leaping into developmtent."],
            image: { type: 'image', src: chibo_main },
    }],
    info: {
        duration: "15 weeks",
        teamSize: 7,
        year: "2025",
    },
}

export default Chibo;