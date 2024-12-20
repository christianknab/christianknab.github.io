import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16 bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          All Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;