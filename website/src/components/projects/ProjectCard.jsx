import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:text-gray-100"
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-contain max-h-full rounded-lg mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 dark:text-gray-400">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded dark:bg-blue-700 dark:text-blue-300">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {project.link && (
          <a
            href={project.link}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {project.linkText}
            <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        )}
        <a
          href={project.github}
          className="inline-flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub <Github className="ml-1 w-4 h-4" />
        </a>
      </div>
    </Link>
  );
};

export default ProjectCard;