// eslint-disable-next-line import/no-webpack-loader-syntax
import project1 from '!!raw-loader!../content/projects/project1.md';

export const projects = [
  {
    id: 1,
    slug: "project-1", // Used for routing
    title: "Project 1",
    description: "A full-stack web application built with React and Node.js",
    content: project1,
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
    featured: true,
    image: "/path-to-image.jpg"
  },
  // Add more projects...
];