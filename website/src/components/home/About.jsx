import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            Hi there! I'm a passionate frontend developer with experience in building modern web applications.
            I specialize in React and related technologies, focusing on creating responsive, accessible,
            and performant websites.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            With a background in [Your Background], I bring a unique perspective to every project.
            I'm particularly interested in [Your Interests/Specialties] and always excited to learn
            new technologies.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, you can find me [Your Hobbies/Interests]. I'm always open to
            new opportunities and collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;