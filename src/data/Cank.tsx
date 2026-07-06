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
            body: [
                (<p>CANK! was developed as a vertical slice as a proof-of-fun for a full game. Set in a playful world built on cans, players explore a unique environment and help set up the town's cultural festival. Although it showed promise, we ultimately decided not to go further with the project. It was developed in 3 weeks by a team of 13 as part of the DADIU program.</p>)
            ],
            image: { type: 'image', src: cank_main },
        }, {
            title: "Under construction",
            body: [
                (<p>Oh no! You've discovered my embarrasing secret. This part of the portfolio is still being developed. Enjoy these images from the project in the mean time.</p>),
                (<p>Want to learn more about how I manage projects? Check out the page for Once Upon a Shell, which is fully developed. If you were really excited to hear about how I managed this particular project, try checking back in in a couple of days days or feel free to contact me directly through any of the methods listed in my "about me" section.</p>),
            ],
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