import React from 'react'
import Project from './Project'

function Projects() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <Project link="https://github.com/SharanKarchella/blog" title="Medium-Website-Blog" src="medium.png" 
      liveSite="https://blog-bice-rho-26.vercel.app/signup" />
      <Project link="https://github.com/SharanKarchella/Disney-Hotstar" title="Disney-Hotstar-Website" src="dh.png" 
      liveSite="https://blog-bice-rho-26.vercel.app/signup" />
      <Project link="https://github.com/SharanKarchella/git-prof-finder" title="git-profile-finder" src="git.png" />
      <Project link="https://github.com/SharanKarchella/car-website" title="Car-Website" src="car.png" />
      <Project link="https://github.com/SharanKarchella/car-website" title="Car-Website" src="car3.png" />

    </div>
  )
}

export default Projects