import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profile_image from '../../images/profile_image.jpeg';
import beach_image from '../../images/beach.jpg';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${beach_image})` }}
    >
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm mx-auto py-10 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
          <img
            src={profile_image}
            alt="profile"
            className="object-cover h-40 w-40 rounded-lg border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>
        <div className="mt-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Christian Knab</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-800 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl">
            Student at UC Santa Cruz building full stack applications
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
