import type { Project } from "../types/Project";

import chibo_showcase from '../assets/Chibo/Chibo - gameplay.webm';
import chibo_main from '../assets/Chibo/Chibo - Showcase.png';
import chibo_title from '../assets/Chibo/Chibo - Title.png';
import under_construction from '../assets/Under-Construction.png';

import macro from '../assets/Chibo/Macro - Snapshot.png'
import simple from '../assets/Chibo/Simple Schedule.png'
import schedule from '../assets/Chibo/Schedule.png'

const captain: string = 'https://img.itch.zone/aW1hZ2UvMzY0NTU0Ni8yMTY5MzM2MS5wbmc=/794x1000/JZcxuE.png';
const pool: string = 'https://img.itch.zone/aW1hZ2UvMzY0NTU0Ni8yMTY5MjgwMi5wbmc=/794x1000/Wxs4do.png';

const Chibo: Project = {
    id: 4,
    title: 'Chibo: Journey of Fate',
    description: 'A story-focused journey through fate and freedom.',
    image: {
        type: "video",
        src:chibo_showcase,
    },
    titleGraphic: chibo_title,
    color: 'khaki',
    links: {itch: 'https://simmix-dev.itch.io/chibo-journey-of-fate'},
    points: [{
            title: "Overview",
            body: [
                (<p>Set in the world of Raad where fate is a living force of nature, Chibo: Journey of Fate explores the weight of responsibility and the conflict between duty and freedom. It was made by a team of 7 over a 15 week period.</p>),
                (<div className="project-point-bullet">
                    <p style={{ marginBottom: '-1rem' }}>
                        Wanting to use Chibo as an opportunity to explore the requirements of a project and the investment vs. payoff of various tools, I explored a breadth of producer methodologies during the project. Just some of which include:
                    </p>
                    <ul>
                        <li>A Game Design Macro, as defined by Richard LeMarchand, to "tableify" the flow of our game comprehensively.</li>
                        <li>A Simple Schedule, which compares work hours to full project estimates in a work-centric scope check.</li>
                        <li>Retrospectives, to adjust our processes on the fly.</li>
                        <li>GANTT Charts to plan and timetable our production.</li>
                        <li>MoSCoW prioritization, to ensure that we were always working on the features that delivered the most value.</li>
                    </ul>
                </div>),
            ],
            image: { type: 'youtube', src: 'MxJ5GkymzOs' },
        }, {
            title: "Under construction",
            body: [
                (<p>Oh no! You've discovered my embarrassing secret. This part of the portfolio is still being developed. Enjoy these images from the project in the meantime.</p>),
                (<p>Want to learn more about how I manage projects? Check out the page for Once Upon a Shell, which is fully developed. If you were really excited to hear about how I managed this particular project, try checking back in in a couple of days or feel free to contact me directly through any of the methods listed in my "about me" section.</p>),
            ],
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
        { type: 'image', src: macro },
        { type: 'image', src: simple },
        { type: 'image', src: schedule },
    ],
}

export default Chibo;