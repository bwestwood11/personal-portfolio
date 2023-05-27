import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Monitor1 from "../../public/projects/Monitor1.png";

const junkRemoval = () => {
  return (
    <div className="w-full pt-32">
      <h1 className="text-center text-5xl">
        Competitive Edge Junk Removal: Case Study
      </h1>
      <div className="w-full items-center justify-center align-middle mx-auto">
        <Image
          className="mx-auto object-contain lg:max-w-[1240px]"
          src={Monitor1}
          alt="Computer Mockup"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="mb-2">Project</p>
          <h2 className="mb-8">Overview</h2>
          <a href="https://competitiveedgedumpsters.com/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/bwestwood11/competitive-edge-junk-removal">
            <button className="px-8 py-2 mt-4 mb-8" py-2 mt-4>
              Code
            </button>
          </a>
          <p className="mb-8">
            Competitive Edge Junk Removal is a local junk removal company in
            Tampa, FL that is looking to expand their business. They wanted a
            website that would allow them to reach more customers and increase
            their revenue. I created a website for them using NextJS and
            TailwindCSS that allows customers to book appointments online and
            learn more about their services.
          </p>
          <p className="mb-8">
            The membership site using the MERN stack, which was a very rewarding
            experience. To begin, I set up my MongoDB database to store user
            information, such as email addresses, usernames, and passwords.
            Then, I used Express to create a RESTful API that allowed my React
            frontend to communicate with the MongoDB database.
          </p>
          <p className="mb-8">
            One of the most important features of my membership site was
            authentication, which I implemented using JWT tokens. I created a
            login form for users to enter their credentials, and I stored
            session data to keep users logged in across pages. This ensured that
            only authorized users could access my membership site.
          </p>
          <p className="mb-8">
            Next, I integrated Stripe to allow users to pay for their membership
            using a credit or debit card. I used the Stripe API to create
            payment forms and handle payment processing on the server-side. This
            made it easy for users to sign up and pay for their membership,
            which was a key part of my site's functionality.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 sm:h-[30%]">
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

export default junkRemoval;
