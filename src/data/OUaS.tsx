import type { Project } from "../types/Project";

import ouas_title from '../assets/OUaS/OUaS - Title.png';
import ouas_main from '../assets/OUaS/OUaS - Showcase.png';
import ouas_lods from '../assets/OUaS/OUaS - LoDs.png';
import peter_rabbit from '../assets/OUaS/peter_rabbit.png';
import ouas_upgrades from '../assets/OUaS/OUaS - Upgrades.png';
import ouas_story_book from '../assets/OUaS/OUaS - Book.png';

import concept from '../assets/OUaS/concept_turtle.png'
import wanted from '../assets/OUaS/Wanted_Poster.png'
import gannt1 from '../assets/OUaS/Epics GANTT - 1.png'
import gannt2 from '../assets/OUaS/Epics GANTT - 2.png'
import schedule1 from '../assets/OUaS/Schedule - 1.png'
import schedule2 from '../assets/OUaS/Schedule - 2.png'
import postmortem1 from '../assets/OUaS/Postmortem - 1.jpg'
import postmortem2 from '../assets/OUaS/Postmortem - 2.jpg'
import tags from '../assets/OUaS/TAGS.jpg'

const ouas_showcase: string = 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4107970/extras/6edac1953155a96d804446f02df26213.webm';
const ouas_small_run: string = 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4107970/extras/890122d11b67732d4342a50823ee735a.webm';
const ouas_bridge: string = 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4107970/extras/5e16ecad2317ada016792eed54fc414e.webm';

const OUaS: Project = {
    id: 1,
    title: 'Once Upon a Shell',
    description: 'Challenge the hares once again in this roguelike fairy tale racer.',
    image: ouas_showcase,
    titleGraphic: ouas_title,
    color: 'palegreen',
    links: {itch: 'https://razzledazzle-studio.itch.io/once-upon-a-shell', steam: 'https://store.steampowered.com/app/4107970/Once_Upon_a_Shell/'},
    points: [{
            title: "Overview",
            body: [
                (<p>Once Upon a Shell is a roguelike fairy tale racer where you, as a tortoise, once again challenge the hares to a contest of speed. You must build up speed by sliding down hills to have a chance to beat the much faster hares. It was made in 7 weeks by a team of 13 people as part of the DADIU program. It released on Steam and has had over 6000 unique players. </p>),
                (<div className="project-point-bullet">
                    <p style={{ marginBottom: '-1rem' }}>
                        During the development of Once Upon a Shell, some of the key tools I employed included:
                    </p>
                    <ul>
                        <li>A 4-phase production process (ideation, pre-production, production, & post-production).</li>
                        <li>1:1's with team members.</li>
                        <li>Scrum and sprint-based production cycles.</li>
                        <li>Player-centric value delivery.</li>
                        <li>Level of Done feature development.</li>
                    </ul>
                </div>),
            ],
            image: { type: 'youtube', src: 'hUoZwh0RoH4' },
        }, {
            title: "Laying Solid Groundwork",
            body: [
                (<p>I believe that strong projects are built on strong foundations. That is why I alloted a full week of our 7 week production schedule solely to ideation. Here, my goal was to nurture an open and curious atmosphere to develop our base concept as much as reasonably possible. Programmers, artists, and designers alike got to throw caution to the wind and throw anything at the wall to see what stuck without having to worry about future-proofing or deliverables.</p>),
                (<p>To further facilitate creativity, I organized small activities to challenge our ideas and ways of thinking. Already at this stage, I set up playtests with people from outside the team on our digital and paper prototypes to test mechanics and get feedback on our ideas. I organized a visit to our local library, so we could explore how fairy tales are typically told and in search of unorthodox inspiration. At every step, I emphasized keeping a wide breadth of our team involved, as I believe that great ideas come from diverse sources.</p>),
            ],
            image: { type: 'image', src: peter_rabbit },
        }, {
            title: "Meaningful Milestones",
            body: [
                (<p>Inspired by Sebastien Ebacher's Emotion Based Creation Pipeline framework, we developed a Level of Done system to align expectations across the team. Based in our teams pride in showcasing a feature, it ensured that our feature quality is rooted in player expectations over any technical specifications.</p>),
                (<p>Settling on a target quality ahead of time also allowed us to better plan how we would spend our time and resources and agree on what aspects of the project we thought were the most important. Since our process involved us iterating through the levels, it also meant that we could schedule each step far ahead of time and evaluate the scope of our project and adapt in a reasonable time if we were falling behind.</p>),
            ],
            image: { type: 'image', src: ouas_lods },
        }, {
            title: "A Proactive Approach to Conflict",
            body: [
                (<p>Game development is a creative contact sport. Butting heads should be encouraged, as ideas improve when challenged. I therefore emphasized cultivating an environment where people can safely engage in discourse without it spilling into real conflict. I set up a team agreement at the start to establish shared understanding of communication, disagreement handling, and decision-making. Using the RACI model, we clarified responsibilities within our work so people were less likely to feel stepped on.</p>),
                (<p>Yet quarrelling is human nature. Regardless of guardrails, I monitor and address conflicts early, even when uncomfortable, as conflicts only simmer and escalate when left alone. When confronting conflicts, I believe that empathy is key. People engage in conflict because they are hurt, not because they enjoy it. Using Non-Violent Communication, I attempt to get to the bottom of that hurt and try to rectify it.</p>),
            ],
            image: { type: 'video', src: ouas_bridge },
    }],
    info: {
        duration: "7 weeks",
        teamSize: 13,
        year: "2025",
    },
    graphics: [
        { type: 'image', src: ouas_main },
        { type: 'video', src: ouas_small_run },
        { type: 'image', src: ouas_story_book },
        { type: 'video', src: ouas_showcase },
        { type: 'image', src: ouas_upgrades },
        { type: 'image', src: concept },
        { type: 'image', src: wanted },
        { type: 'image', src: gannt1 },
        { type: 'image', src: gannt2 },
        { type: 'image', src: schedule1 },
        { type: 'image', src: schedule2 },
        { type: 'image', src: postmortem1 },
        { type: 'image', src: postmortem2 },
        { type: 'image', src: tags },
    ],
}

export default OUaS;