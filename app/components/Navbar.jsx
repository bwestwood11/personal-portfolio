"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between sm:justify-around  items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width="115"
            height="115"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex scroll-smooth">
          <ul className="hidden sm:flex gap-8">
            <a href="/#home">
              <li className="ml-10 uppercase font-semibold hover:text-[#f1592a] text-xl">
                Home
              </li>
            </a>
            <a href="#about-section">
              <li className="ml-10 uppercase font-semibold hover:text-[#f1592a] text-xl">
                About Me
              </li>
            </a>
            <a href="/#projects">
              <li className="ml-10 uppercase font-semibold hover:text-[#f1592a] text-xl">
                Projects
              </li>
            </a>
            <a href="/#skills">
              <li className="ml-10 uppercase font-semibold hover:text-[#f1592a] text-xl ">
                Skills
              </li>
            </a>
            <a href="/#contact">
              <li className="mx-10 uppercase font-semibold hover:text-[#f1592a] text-xl ">
                Contact
              </li>
            </a>
          </ul>
        </div>
        <div>
          <Link href="/blog">
            <button className="hidden sm:flex className='mt-8 w-full justify-center rounded-md border border-transparent bg-[#f1592a] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'">
              My Blog
            </button>
          </Link>{" "}
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-10"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <a href="/#home">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </a>
            <a href="/#about-section">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                About Me
              </li>
            </a>
            <a href="/#projects">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Projects
              </li>
            </a>
            <a href="/#skills">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Skills
              </li>
            </a>
            <a href="/#contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Contact Me
              </li>
            </a>
            <Link href="/blog">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                My Blog
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width="145"
            height="95"
            className="pt-6 mx-auto"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
