import type { Project } from "../types/Project";

import chibo_showcase from '../assets/Chibo/Chibo - gameplay.webm';
import chibo_main from '../assets/Chibo/Chibo - Showcase.png';
import chibo_title from '../assets/Chibo/Chibo - Title.png';
import under_construction from '../assets/Under-Construction.png';

var captain: string = 'https://img.itch.zone/aW1hZ2UvMzY0NTU0Ni8yMTY5MzM2MS5wbmc=/794x1000/JZcxuE.png';
var pool: string = 'https://img.itch.zone/aW1hZ2UvMzY0NTU0Ni8yMTY5MjgwMi5wbmc=/794x1000/Wxs4do.png';

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
            body: ["Set in the world of Raad where fate is a force of nature, Chibo: Journey of Fate explores the weight of responsibility and the conflict between duty and freedom. It was made by a team of 7 over a 15 week period."],
            image: { type: 'youtube', src: 'MxJ5GkymzOs' },
        }, {
            title: "Under construction",
            body: ["This part of the portfolio is still being developed. Enjoy these images from the project in the mean time."],
            image: { type: 'image', src: under_construction },
    }],
    info: {
        duration: "15 weeks",
        teamSize: 7,
        year: "2025",
    },
    graphics: [
        { type: 'image', src: chibo_main },
        { type: 'video', src: chibo_showcase },
        { type: 'image', src: pool },
        { type: 'image', src: captain },
    ],
}

export default Chibo;