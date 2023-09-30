import Image from 'next/image'
import React from 'react'
import HTML from '../../public/skills/html.png';
import CSS from '../../public/skills/css.png';
import Javascript from '../../public/skills/javascript.png';
import ReactPic from '../../public/skills/react.png';
import Tailwind from '../../public/skills/tailwind.png';
import Firebase from '../../public/skills/firebase.png';
import Github from '../../public/skills/github1.png';
import NextJS from '../../public/skills/nextjs.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full pt-24 px-8'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='text-xl tracking-widest uppercase text-[#f1592a]'>Skills</p>
          <h2 className='py-4'>What I Can Do</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={HTML} 
                    width='64px' 
                    height='64px' 
                    alt='/' 
                    />
                    </div>
                 <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                 </div>
            </div>
             </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={CSS} 
                    width='64px' 
                    height='64px' 
                    alt='/' 
                    />
                    </div>
                 <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                 </div>
            </div>
             </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={Javascript} 
                    width='64px' 
                    height='64px' 
                    alt='/' 
                    />
                    </div>
                 <div className='flex flex-col items-center justify-center'>
                  <h3>JavaScript</h3>
                 </div>
            </div>
             </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={ReactPic} 
                    width='64px' 
                    height='64px' 
                    alt='/' 
                    />
                    </div>
                 <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                 </div>
            </div>
             </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={Tailwind} 
                    width='64px' 
                    height='64px' 
                    alt='/' 
                    />
                    </div>
                 <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind</h3>
                 </div>
            </div>
             </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={Firebase} 
                    width='64px' 
                    height='64px' 
                    alt='/' 
                    />
                    </div>
                 <div className='flex flex-col items-center justify-center'>
                  <h3>Firebase</h3>
                 </div>
            </div>
             </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={Github}
                    width='64px' 
                    height='64px' 
                    alt='/' 
                    />
                    </div>
                 <div className='flex flex-col items-center justify-center'>
                  <h3>Github</h3>
                 </div>
            </div>
             </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={NextJS}
                    width='64px' 
                    height='64px' 
                    alt='/' 
                    />
                    </div>
                 <div className='flex flex-col items-center justify-center'>
                  <h3>Next JS</h3>
                 </div>
            </div>
             </div>
            


          </div>
        </div>
          
    </div>
  )
}

export default Skills