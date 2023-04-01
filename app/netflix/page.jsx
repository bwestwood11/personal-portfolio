import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Netflix from '../../public/projects/Netflix.png'



const AppliancePlug = () => {
  return (
    <div className="w-full pt-32">
      <h1 className="text-center text-5xl">Netflix Clone: Case Study</h1>
 <div className="w-full items-center justify-center align-middle mx-auto">
  <Image className="mx-auto object-contain lg:max-w-[1240px]" src={Netflix} alt="Computer Mockup" />
  {/* <Image src={test} alt='/' className="absolute top-0 left-0 object-contain"/> */}
</div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="mb-2">Project</p>
          <h2 className="mb-8">Overview</h2>
          <p className="mb-8">
            The Appliance Plug is a local appliance store here in Tampa, FL. I have
            been working alongside this company as a software engineer to
            implement a paid membership program. 
          </p>
          <p className="mb-8">
          The membership site using the MERN stack, which was a very rewarding experience. To begin, I set up my MongoDB database to store user information, such as email addresses, usernames, and passwords. Then, I used Express to create a RESTful API that allowed my React frontend to communicate with the MongoDB database.
          </p>
          <p className="mb-8">
          One of the most important features of my membership site was authentication, which I implemented using JWT tokens. I created a login form for users to enter their credentials, and I stored session data to keep users logged in across pages. This ensured that only authorized users could access my membership site.
          </p>
          <p className="mb-8">
          Next, I integrated Stripe to allow users to pay for their membership using a credit or debit card. I used the Stripe API to create payment forms and handle payment processing on the server-side. This made it easy for users to sign up and pay for their membership, which was a key part of my site's functionality.
          </p>
          <a href="https://appliance-plug-membership-app.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/bwestwood11/membership-app">
            <button className="px-8 py-2 mt-4" py-2 mt-4>
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
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