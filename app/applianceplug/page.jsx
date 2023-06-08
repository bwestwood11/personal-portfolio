import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import membership from "../../public/projects/membership.png";
import Monitor1 from "../../public/projects/Monitor1.png";
import AppliancePlugMonitor from "../../public/AppliancePlugMonitor.png";

const AppliancePlug = () => {
  return (
    <div className="w-full pt-32">
      <h1 className="text-center text-5xl">The Appliance Plug: Case Study</h1>
      <div className="w-full items-center justify-center align-middle mx-auto">
        <Image
          className="mx-auto object-contain lg:max-w-[1240px]"
          src={AppliancePlugMonitor}
          alt="Computer Mockup"
        />
        {/* <Image src={test} alt='/' className="absolute top-0 left-0 object-contain"/> */}
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="mb-2">Project</p>
          <h2 className="mb-4">Overview</h2>
          <a href="https://appliance-plug-membership-app.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/bwestwood11/membership-app">
            <button className="px-8 py-2 mt-4 mb-8" py-2 mt-4>
              Code
            </button>
          </a>
          <p className="mb-8">
            Introducing The Appliance Plug, a local appliance store in Tampa,
            FL. As a software engineer, I implemented a rewarding paid
            membership program using the MERN stack.
          </p>
          <p className="mb-8">
            Using MongoDB, I set up a secure database to store user information.
            Express facilitated communication between the React frontend and
            MongoDB through a RESTful API.
          </p>
          <p className="mb-8">
            Authentication was a vital feature. I implemented JWT tokens,
            allowing authorized users to log in and stay logged in across pages.
            For seamless payments, I integrated Stripe. Its API enabled easy
            signup and payment processing using credit or debit cards.
          </p>
          <p className="mb-8">
          The Appliance Plug now boasts a transformative paid membership program, combining cutting-edge technology with convenience for customers in Tampa, FL.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 sm:h-[70%]">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React - Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwindcss
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ExpressJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Stripe
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
