import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import Markdown from 'react-markdown';

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Project not found
        </h1>
        <Link to="/projects" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-16 bg-white dark:bg-gray-800">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to projects
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded dark:bg-blue-700 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.link}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkText}<ExternalLink className="ml-1 w-4 h-4" />
          </a>
          <a
            href={project.github}
            className="inline-flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <Github className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full md:h-full object-cover rounded-lg mb-8"
        />
      )}

      {/* Project Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <Markdown>{project.content}</Markdown>
      </div>
    </article>
  );
};

export default ProjectPage;