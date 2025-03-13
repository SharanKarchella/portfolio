import React from 'react'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Projects from './Projects'

function Work() {
  return (
    <div className='px-44 py-32 flex flex-col gap-6 bg-gray-100'>
        <Heading>My Work</Heading>
        <Paragraph>Showcasing My Projects here</Paragraph>
        <Projects />
    </div>
    
  )
}

export default Work