
export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface NavLink {
  name: string;
  href: string;
}
