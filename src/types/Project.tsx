import type {Graphic} from "./Graphic.tsx";

export interface ProjectPoint {
    title: string;
    body: React.ReactNode[];
    image?: Graphic;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: Graphic;
  titleGraphic?: string;
  color: string;
  links?: {
    steam?: string;
    itch?: string;
  };
  info?: {
    duration: string;
    teamSize: number;
    year: string;
  }
  points: ProjectPoint[];
  graphics?: Graphic[];
}