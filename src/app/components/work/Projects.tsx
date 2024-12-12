import React from 'react'
import Project from './Project'

function Projects() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <Project link="https://blog-bice-rho-26.vercel.app/signup" title="Medium-Website-Blog" src="medium.png" target="_blank" />
      <Project link="https://movie-stream-movies.netlify.app/" title="Disney-Hotstar-Website" src="dh.png" target="_blank" />
      <Project link="https://my-portfolio-nextjs-tailwind.netlify.app/" title="Portfolio-Website" src="portfolio.png" target="_blank" />
      <Project link="https://car-website-react-js.netlify.app/" title="Car-Website" src="car.png" target="_blank" />
      <Project link="https://github.com/SharanKarchella/car-website" title="Car-Website" src="car3.png" target="_blank" />
      <Project link="https://github.com/SharanKarchella/git-prof-finder" title="git-profile-finder" src="git.png" target="_blank" />


    </div>
  )
}

export default Projects