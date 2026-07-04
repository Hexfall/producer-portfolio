import type { Project } from "../types/Project";

import cank_showcase from '../assets/CANK/CANK - gameplay.webm';
import cank_main from '../assets/CANK/CANK - Showcase.png';
import cank_title from '../assets/CANK/CANK - Title.png';
import under_construction from '../assets/Under-Construction.png';
import main_house from '../assets/CANK/Main House.png';
import racoon from '../assets/CANK/Racoon.png';
import alley from '../assets/CANK/Alley.png';
import sharpshooter from '../assets/CANK/Sharpshooter.png';

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
            title: "Under construction",
            body: ["This part of the portfolio is still being developed. Enjoy these images from the project in the mean time."],
            image: { type: 'image', src: under_construction },
    }],
    info: {
         duration: "3 weeks",
        teamSize: 13,
        year: "2025",
    },
    graphics: [
        { type: 'video', src: cank_showcase },
        { type: 'image', src: main_house },
        { type: 'image', src: racoon },
        { type: 'image', src: alley },
        { type: 'image', src: sharpshooter },
    ],
}

export default Cank;