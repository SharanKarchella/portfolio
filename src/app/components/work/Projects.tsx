import React from 'react'
import Project from './Project'

function Projects() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <Project link="https://blog-bice-rho-26.vercel.app/signup" title="Medium-Website-Blog" src="medium.png" />
      <Project link="https://movie-stream-movies.netlify.app/" title="Disney-Hotstar-Website" src="dh.png" />
      <Project link="https://my-portfolio-nextjs-tailwind.netlify.app/" title="Portfolio-Website" src="portfolio.png" />
      <Project link="https://github.com/SharanKarchella/car-website" title="Car-Website" src="car.png" />
      <Project link="https://github.com/SharanKarchella/car-website" title="Car-Website" src="car3.png" />
      <Project link="https://github.com/SharanKarchella/git-prof-finder" title="git-profile-finder" src="git.png" />


    </div>
  )
}

export default Projects