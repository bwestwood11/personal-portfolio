import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import junkremovalImg from "../../public/projects/junkimg.png";

const junkRemoval = () => {
  return (
    <div className="w-full pt-32">
      <h1 className="text-center text-5xl">
        Competitive Edge Junk Removal: Case Study
      </h1>
      <div className="w-full items-center justify-center align-middle mx-auto">
        <Image
          className="mx-auto object-contain lg:max-w-[1240px]"
          src={junkremovalImg}
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
          Competitive Edge Junk Removal, a reputable junk removal company based in Tampa, FL, is actively seeking opportunities to grow its business and expand its customer base. Recognizing the need to leverage the power of the internet to attract a wider audience and boost revenue, they approached me to design a dynamic website tailored to their specific requirements. By harnessing the combined capabilities of NextJS 13 and TailwindCSS, I successfully crafted a user-friendly website that not only enables customers to effortlessly rent dumpsters online but also provides comprehensive information about the company's exceptional range of services.
          </p>
          <p className="mb-8">
          The newly developed website serves as a powerful tool that not only showcases Competitive Edge Junk Removal's expertise but also significantly enhances their accessibility and convenience for potential customers. With the seamless integration of NextJS, visitors can now conveniently schedule appointments through a secure online booking system, eliminating the need for time-consuming phone calls or in-person inquiries. This modern approach not only saves customers valuable time but also enhances their overall experience, leading to increased satisfaction and repeat business.
          </p>
          <p className="mb-8">
          I utilized the Stripe API so that customers can pay for their dumpster rentals online. This feature is a significant improvement over the company's previous payment system, which required customers to pay in person or over the phone. The new system is not only more convenient for customers but also more secure, as it eliminates the need for customers to share their credit card information over the phone. The Stripe API also allows the company to accept a wide range of payment methods, including credit cards, debit cards, and Apple Pay.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 sm:h-[40%]">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React - NextJS 13
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwindcss
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Stripe API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
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
