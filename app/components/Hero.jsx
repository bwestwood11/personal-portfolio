"use client"

import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import Typed from 'react-typed'
import blur from '../../public/blur.png'
import Image from "next/image";

const Hero = () => {
  return (
    <div id="home" className="w-full text-center relative pt-32 pb-20 md:py-40 h-full">
      <Image
        src={blur}
        alt="blur1"
        objectFit="cover"
        layout="fill"
        className="absolute animate-pulse z-[-1]"
        quality={100}
        priority
      />
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets Build Something Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, Im <span className="text-[#f1592a]">Brett</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            <Typed
            strings={[
              'A Full-Stack Software Engineer',
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
            />
           </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Im a Full-Stack Software Engineer specializing in building exceptional digital experiences.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/brett-westwood/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin />
              </div>
            </a>
            <a href="https://github.com/bwestwood11">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href='https://www.youtube.com/channel/UCUbz7tRWnl82NHKRrQWWolg'>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaYoutube />
              </div>
            </a>
            <a href="https://www.tiktok.com/@brett_westwood?_t=8XGG5SVUohy&_r=1">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTiktok />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
