interface Project {
  key: string;
  starred: boolean;
  title: string;
  images: string[];
  techstack: {
    name: string;
    image: string;
  }[];
  description: string;
  github: string;
  demo: string;
}
