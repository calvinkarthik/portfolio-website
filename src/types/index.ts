export interface Experience {
  title: string;
  organization: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    devpost?: string;
  };
  thumbnail?: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  type: string;
}

export interface Skill {
  category: string;
  items: string[];
}