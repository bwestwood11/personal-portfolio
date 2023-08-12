import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import membership from "../../public/projects/membership.png";
import Monitor1 from "../../public/projects/Monitor1.png";
import EchoAIMonitor from "../../public/EchoAIMonitor.png";

const VoiceAI = () => {
  return (
    <div className="w-full pt-32">
      <h1 className="text-center text-5xl">Echo Voice AI</h1>
      <p className="text-center text-xl font-semibold mt-3">SaaS Application using ElevenLabs API</p>
      <div className="w-full items-center justify-center align-middle mx-auto">
        <Image
          className="mx-auto object-contain lg:max-w-[1240px]"
          src={EchoAIMonitor}
          alt="Computer Mockup"
        />
        {/* <Image src={test} alt='/' className="absolute top-0 left-0 object-contain"/> */}
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="mb-2">Project</p>
          <h2 className="mb-4">Overview</h2>
          <a href="https://echo-voice-ai.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/bwestwood11/echo-voice-ai">
            <button className="px-8 py-2 mt-4 mb-8" py-2 mt-4>
              Code
            </button>
          </a>
          <p className="mb-8">
            AI Saas products are becoming more and more popular. I wanted to 
            create a SaaS application that would allow users to sign up for a
            membership and be able to use natural sounding AI voices to help with 
            their content creation, audio books and much more.
          </p>
          <p className="mb-8">
            There are many different API endpoints I could have went with, but after researching,
            I found that ElevenLabs API was the best fit for my project. It was easy to use and
            had a lot of different voices to choose from.
          </p>
          <p className="mb-8">
            I used Next.js for the front-end and Tailwind CSS for the styling. I used 
            MongoDB for the database and Stripe for the payment processing. I also used
            next-auth for the authentication and session management.
          </p>
          <p className="mb-8">
           Click the demo button above to see the application in action. You can sign up for 
           completely free and get 5 free credits toward using the AI voices. If you would like
           to access more credits you can use test card number 4242 4242 4242 4242 when you sign up
           with Stripe. This will give you access to 100 credits.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 sm:h-[75%]">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React - Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwindcss 
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Shadcn/ui
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ElevenLabs API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Prisma
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Stripe API
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

export default VoiceAI;
