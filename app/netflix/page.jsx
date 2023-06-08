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
          <a href="https://netflix-clone-3f4da.web.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/bwestwood11/netflix-build">
            <button className="px-8 py-2 mt-4 mb-8" py-2 mt-4>
              Code
            </button>
          </a>
          <p className="mb-8">
          Step into the world of immersive entertainment with my groundbreaking creation—a Netflix clone built with the power of ReactJS, complemented by the seamless state management capabilities of Redux. Immerse yourself in a visually stunning user interface meticulously crafted using CSS, where every pixel exudes elegance and intuitive design. Elevating the user experience to new heights, I seamlessly integrated Firebase, empowering users with secure authentication that ensures their personal data remains safeguarded at all times.
          </p>
          <p className="mb-8">
          Harnessing the vast wealth of content from the moviedb API, my Netflix clone becomes a gateway to a treasure trove of cinematic delights. With a few clicks, users can dive into an extensive library of movies and TV shows, effortlessly browsing and discovering their next favorite piece of entertainment. The integration of the moviedb API enables real-time data fetching, ensuring that the clone remains up-to-date with the latest releases and trends, delivering an unrivaled streaming experience that keeps viewers captivated.
          </p>
          <p className="mb-8">
          From the moment users land on the Netflix clone, they are greeted with a seamless fusion of aesthetics and functionality. The synergy between ReactJS and Redux provides a solid foundation for dynamic content rendering and intuitive user interactions. Leveraging Redux's robust state management capabilities, the clone effortlessly handles complex data flow, ensuring a smooth and uninterrupted streaming experience. By tapping into the power of Firebase, authentication becomes a breeze, offering users a secure environment to create accounts, manage profiles, and unlock personalized recommendations.
          </p>
          <p className="mb-8">
          Embark on an extraordinary streaming journey with my Netflix clone, where ReactJS, Redux, CSS, Firebase, and the moviedb API converge to redefine the way you enjoy your favorite movies and TV shows. Lose yourself in a world of limitless entertainment, enhanced by an elegant UI, secure authentication, and a vast array of captivating content at your fingertips.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 sm:h-[40%]">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
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