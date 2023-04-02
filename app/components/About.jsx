"use client"

import Image from "next/image";
import Link from "next/link";
import {AiOutlineArrowRight} from 'react-icons/ai'
import headshot2 from '../../public/headshot2.png';

const About = () => {

  const handleClick = () => {
    window.open('/resume.pdf')
  }

  return (
    <div
      id="about-section"
      className="w-full p-2 flex items-center md:mt-60 mx-auto max-w-[1280px]"
    >
     <div className="flex flex-col">
       <h1>About</h1>
       <div className="border-2 border-[#ffa012] mt-2 sm:w-[190px] w-[115px]" />
       <div className="flex flex-col sm:flex-row pt-12">
        <div className="flex flex-col basis-1/2 sm:mr-8 items-center">
            <p className="text-xl mb-4">Hi, my name is Brett Westwood and I am a full stack developer that 
              specializes in ReactJS, Javascript, TypeScript and the MERN stack.</p>
            <p className="text-xl mb-6">I have been working as a software engineer for an appliance company 
            to implement their monthly membership program for their new repair department. 
            </p>
            <p className="text-xl">
              Late nights and growing new gray hairs is part of the process I love going through 
              on a daily basis. I even have my own YouTube channel, blog and TikTok which is all about Software Engineering!
            </p>
      <button onClick={handleClick} className="w-1/3 py-2 mt-16">Resume</button>
              </div>
              <div className="flex basis-1/2 border-2 rounded-xl shadow-2xl mt-8 sm:mt-0">
           <Image 
           src={headshot2}
          alt='brett-westwood'
           priority
           />
              </div>
       </div>
     </div>
    </div>
  );
};

export default About;
