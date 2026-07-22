import type { Project } from "../types/Project";

import self_showcase from '../assets/AboutMe/DADIU Presentation - Fullscreen.png';
import title from '../assets/AboutMe/Title.png'
import focus_shot from '../assets/AboutMe/DADIU Presentation - Focus shot.png';

import linkedinLogo from "../assets/linkedin.svg";
import emailLogo from "../assets/email.svg";
import discordLogo from "../assets/discord.svg";
import React from "react";

const logoStyle: React.CSSProperties = {
    width: '36px',
    height: '36px',
    display: 'block',
    filter: 'brightness(0)',
};

const AboutMe: Project = {
    id: 5,
    title: 'About me',
    description: 'Learn more about the man himself.',
    image: {
        type: "image",
        src:self_showcase,
    },
    titleGraphic: title,
    color: 'wheat',
    points: [{
        title: "Who am I?",
        body: [
            (<p>Hey, I'm Viktor - a game producer with a passion for creating engaging and meaningful experiences. I love helping to bring out the best in people's ideas and collaborating with talented individuals. Let's connect and explore how we can create something amazing together.</p>),
            (<h1 style={{ textAlign: 'center', color: '#0f172a' }} >Let's connect</h1>),
            (<div style={{ display: 'flex', flexDirection: 'row', gap: '0.75rem', justifyContent: 'center' }}>
                <button
                    type="button"
                    className={'top-bar__button'}
                    onClick={() => window.open('https://www.linkedin.com/in/viktor-m%C3%A1ni-m%C3%B8nster-525231203/', '_blank')}
                    aria-label="LinkedIn"
                    title="Viktor Máni Mønster"
                >
                    <img src={linkedinLogo} alt="LinkedIn" style={logoStyle} />
                </button>
                <button
                    type="button"
                    className={'top-bar__button'}
                    onClick={() => window.open('mailto:viktor@mani.monster', '_blank')}
                    aria-label="Email"
                    title="viktor@mani.monster"
                >
                    <img src={emailLogo} alt="Email" style={logoStyle} />
                </button>
                <button
                    type="button"
                    className={'top-bar__button'}
                    onClick={() => window.open('https://discord.com/users/hexfall', '_blank')}
                    aria-label="Discord"
                    title="hexfall"
                >
                    <img src={discordLogo} alt="Discord" style={logoStyle} />
                </button>
            </div>),
        ],
        image: { type: 'image', src: focus_shot },
    }],
}

export default AboutMe;