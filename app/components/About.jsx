import Image from "next/image";
import Link from "next/link";
import React from "react";
import headshot from '../../public/headshot.png';

const About = () => {

  return (
    <div
      id="about-section"
      className="w-full p-2 flex items-center md:pt-72 md:-mb-72 sm:mt-80"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-10">
       <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            src={headshot}
            width="875"
            height="1175"
            alt="/"
            
            priority
          />
        </div>
         <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f1592a]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
          As a software engineer with one year of experience, I have developed a range of skills that make me a valuable asset to any team. My proficiency in the MERN stack, ReactJS, Javascript, HTML, Typescript, Firebase, NextJS, and Restful APIs has allowed me to successfully complete a variety of projects. I am able to create high-quality, scalable, and efficient code that meets client requirements. 
          </p>
          <p className="py-2 text-gray-600">
          My ability to work well in a team environment and communicate effectively ensures that projects are completed on time and to the highest standards. I am passionate about learning new technologies and finding innovative solutions to complex problems. If you are looking for a skilled software engineer who is dedicated to delivering exceptional results, I would be a great addition to your team.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default About;
