"use client"

import Image from "next/image";
import Link from "next/link";
import {AiOutlineArrowRight} from 'react-icons/ai'
import headshot2 from '../../public/headshot2.png';
import profileImage from '../../public/profileImg.png'

const About = () => {

  const handleClick = () => {
    window.open('/professionalresume.pdf')
  }

  return (
    <div
      id="about-section"
      className="w-full p-2 flex items-center md:mt-60 mx-auto max-w-[1280px]"
    >
     <div className="flex flex-col">
       <h1>About</h1>
       <div className="border-2 border-[#ffa012] mt-2 sm:w-[190px] w-[115px]" />
       <div className="flex flex-col md:flex-row pt-12">
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
              <div className="flex basis-1/2 mt-8 sm:mt-0">
           <Image 
           src={profileImage}
          alt='brett-westwood'
          height={500}
          width={500}
           priority
           className="rounded-full shadow-2xl shadow-black/70 mt-8 md:mt-0"
           />
              </div>
       </div>
     </div>
    </div>
  );
};

export default About;
