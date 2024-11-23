import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link 
      to={`/projects/${project.slug}`}
      className="block bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      {project.image && (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a 
          href={project.link}
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          Live Demo <ExternalLink className="ml-1 w-4 h-4" />
        </a>
        <a 
          href={project.github}
          className="inline-flex items-center text-gray-600 hover:text-gray-800"
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