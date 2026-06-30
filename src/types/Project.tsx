export interface ProjectPoint {
    title: string;
    body: string[];
    image?: Graphic;
}

export interface Graphic {
    type: 'image' | 'youtube';
    src: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  titleGraphic?: string;
  color?: string;
  links?: {
    steam?: string;
    itch?: string;
  };
  info: {
    duration: string;
    teamSize: number;
    year: string;
  }
  points: ProjectPoint[];
}