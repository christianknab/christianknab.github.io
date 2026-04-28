import React, { useState } from 'react';

const About = () => {
	// const [showFullText, setShowFullText] = useState(false);
	//
	// const handleToggleText = () => {
	//   setShowFullText(!showFullText);
	// };

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
					<div className={`text-gray-600 dark:text-gray-300 leading-relaxed`}>
						{/* <div */}
						{/*   className={`text-gray-600 dark:text-gray-300 leading-relaxed ${ */}
						{/*     showFullText ? 'max-h-full' : 'max-h-[9rem] overflow-hidden' */}
						{/*   } transition-all duration-300`} */}
						{/* > */}
						<p className="mb-4">
							Hello! I am an incoming Masters student at the University of Illinois Urbana-Champaign. I got my B.S. in Computer Science and Computer Engineering at the University of California, Santa Cruz.
						</p>
						<p className="mb-4">
							I have interests broadly in Computer Systems. More specifically, in researching and working on optimizations in distributed systems and at the intersection between hardware and software.
						</p>
						<p>
							When I'm not studying or working on projects, you can find me at the bouldering gym, cycling, cooking, or obsessing over my coffee.
							Reach out to talk about whatever :0
						</p>
					</div>
					{/* <button */}
					{/*   onClick={handleToggleText} */}
					{/*   className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none" */}
					{/* > */}
					{/*   {showFullText ? 'Show Less' : 'Show More'} */}
					{/* </button> */}
				</div>
			</div>
		</section>
	);
};

export default About;
