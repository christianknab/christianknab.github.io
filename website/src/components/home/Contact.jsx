import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/christianknab/',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/christian-knab',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:ctknab@ucsc.edu',
      icon: Mail
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-600 mb-8 dark:text-gray-400">
            I'm currently looking for an internship over the summer. 
            Feel free to reach out to talk if you would like to work on a project!
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;