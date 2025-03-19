import React from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Projects from './Projects';

function Work() {
  return (
    <div className='px-8 py-16 sm:px-44 sm:py-32 flex flex-col gap-6 sm:gap-8 bg-gray-100'>
      <Heading className="text-center sm:text-left">My Work</Heading>
      <Paragraph className="text-center sm:text-left">
        Showcasing My Projects here
      </Paragraph>
      <Projects />
    </div>
  );
}

export default Work;
