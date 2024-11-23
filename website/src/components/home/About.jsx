import React, { useState } from 'react';

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section
      id="about"
      className="py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
          <div
            className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
              showFullText ? 'max-h-full' : 'max-h-[9rem] overflow-hidden'
            } transition-all duration-300`}
          >
            <p className="mb-4">
              Hello! I am a student at University of California, Santa Cruz working towards a B.S.
              in Computer Science and Computer Engineering and set to graduate (early!) in December 2025.
              I aspire to get my masters in a Computer Engineering related department after graduation.
            </p>
            <p className="mb-4">
              I have interests in Distributed Systems and hope to spend some time researching
              complex data management at UC Santa Cruz. I am also interested in computer hardware and am
              excited to explore specific concentrations in my last year.
            </p>
            <p className="mb-4">
              I have experience working on a variety of full-stack projects. I am passionate about
              identifying problems and building software solutions to address them. I am excited
              and open to learning new technologies. I am looking for summer internships where I can
              contribute to a dynamic team where I design innovative features, gain experience in
              shipping commercial products, and tackle technical challenges in a collaborative environment.
            </p>
            <p>
              When I'm not coding, you can find me at the bouldering gym, biking, cooking, or obsessing over my coffee.
              I'm always open to new opportunities and collaborations.
            </p>
          </div>
          <button
            onClick={handleToggleText}
            className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none"
          >
            {showFullText ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
