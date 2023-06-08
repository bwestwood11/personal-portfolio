import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import MonitorFitness from '../../public/MonitorFitness.png'



const AppliancePlug = () => {
  return (
    <div className="w-full pt-32">
      <h1 className="text-center text-5xl">Fitness App: Case Study</h1>
 <div className="w-full items-center justify-center align-middle mx-auto">
  <Image className="mx-auto object-contain lg:max-w-[1240px]" src={MonitorFitness} alt="Computer Mockup" />
  {/* <Image src={test} alt='/' className="absolute top-0 left-0 object-contain"/> */}
</div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="mb-2">Project</p>
          <h2 className="mb-8">Overview</h2>
          <a href="https://brettwestwood-gym.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/bwestwood11/Fitness-Exercises-API-App">
            <button className="px-8 py-2 mt-4 mb-8" py-2 mt-4>
              Code
            </button>
          </a>
          <p className="mb-8">
          This application is designed to empower and inspire, providing you with a comprehensive collection of workouts and exercises meticulously sourced from the esteemed RapidAPI marketplace. With a plethora of options at your fingertips, you can customize your fitness regimen to align perfectly with your goals and preferences. Leveraging the exceptional capabilities of Axios, I seamlessly integrated smooth and efficient HTTP requests, ensuring a seamless flow of data between the app and the RapidAPI marketplace.
          </p>
          <p className="mb-8">
          Behind the scenes, the seamless integration of Axios seamlessly facilitates communication between the fitness app clone and the RapidAPI marketplace. With Axios expertly handling the HTTP requests, you can rest assured that data retrieval is reliable, efficient, and always up-to-date. This frictionless interaction ensures that the latest workouts, exercises, and fitness trends are readily available at your fingertips, allowing you to stay at the forefront of the ever-evolving fitness landscape.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-[40%]">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React - NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwindcss
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
            </div>
          </div>
        </div>
        <a href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </a>
      </div>
    </div>
  );
};

export default AppliancePlug;