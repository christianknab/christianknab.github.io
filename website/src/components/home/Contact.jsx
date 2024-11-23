import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: Mail
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together or just want to say hello!
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                className="text-gray-600 hover:text-gray-900 transition-colors"
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