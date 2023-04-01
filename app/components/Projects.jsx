import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import fitness from '../../public/projects/fitness.jpg'
import restaurantImg from '../../public/projects/restaurantImg.png'
import netflixImg from '../../public/projects/netflixImg.png'
import membership from '../../public/projects/membership.png'
import junkremoval from '../../public/projects/junkremoval.jpg'


const Projects = () => {
  return (
    <div id='projects' className='w-full pt-28 sm:mt-40'>
         <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='text-xl tracking-widest uppercase text-[#f1592a]'>Projects</p>
          <h2 className='py-4'>What Ive Built</h2>
          <div className='grid md:grid-cols-2 gap-8'>

      <ProjectItem 
      title='The Appliance Plug Membership Program' 
      backgroundImg={membership}
      projectUrl='/applianceplug'
      number='01'
      technology = 'MERN Stack'
      />
      <ProjectItem 
      title='Fitness Application' 
      backgroundImg={fitness}
      projectUrl='/fitness'
      number='02'
      technology='React JS'
      />
      <ProjectItem 
      title='Competitive Edge Junk Removal' 
      backgroundImg={junkremoval}
      projectUrl='/competitiveedgejunkremoval'
      number='03'
      technology='Next JS 13'
      />
      <ProjectItem 
      title='Netflix Clone with Authentication' 
      backgroundImg={netflixImg}
      projectUrl='/netflix'
      number='04'
      technology = 'React JS & Firebase'
      />

    

          </div>
         </div>
    </div>
  )
}

export default Projects