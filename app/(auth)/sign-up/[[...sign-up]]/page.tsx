import { SignUp } from '@clerk/nextjs';
import React from 'react';
import Image from 'next/image';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SignUpPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='flex flex-col h-screen w-full overflow-hidden'>
      <main className='flex flex-1 w-full overflow-hidden'>
        {/* Left Column */}
        <div className='flex w-full md:w-1/2 items-center justify-center'>
          <SignUp />
        </div>

        {/* Right Column */}
        <div className='hidden md:flex w-1/2 flex-col overflow-hidden'>
          {/* Welcome Text */}
          <div className='flex flex-col h-1/4 items-center justify-center pt-10 gap-3 mr-20'>
            <div className="flex items-center justify-center">
              <h1 className='text-3xl font-thin text-white text-center'>
                Welcome to <span className="text-yellow-500 font-semibold">Wave</span>!
              </h1>
              <Image
                src="/icons/wave-logo.png"
                alt='Wave Logo'
                width={40}
                height={40}
                className='max-sm:size-10 ml-3'
              />
            </div>
            <p className="text-lg text-gray-300 text-center font-light italic">Connect, communicate, and wave at your colleagues.</p>
          </div>

          {/* Image Row */}
          <div className='flex items-center justify-center flex-1'>
            <Image
              src="/icons/signUpsvg.svg"
              alt='Sign Up Image'
              width={700}
              height={700}
              className='max-w-full h-auto mr-20'
            />
          </div>
        </div>
      </main>
      <footer className='flex flex-col md:flex-row items-center justify-evenly w-full text-center p-3 bg-white bg-opacity-10 text-white'>
        <p className='text-sm opacity-100'>© {currentYear} Wave. All rights reserved.</p>
        <p className='text-sm opacity-100 md:ml-4'>Designed and Developed by Kunal Rajput.</p>

        <ul className="flex items-center mt-2 md:mt-2 md:ml-4">
          <li className="social-icons">
            <a
              href="https://github.com/kunalrajput7"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={24} />
            </a>
          </li>
          &nbsp;
          <li className="social-icons mx-2">
            <a
              href="https://www.linkedin.com/in/kunalrajput007/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={24} />
            </a>
          </li>
          <li className="social-icons mx-2">
            <a
              href="https://www.instagram.com/kunaaaaall_"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={24} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default SignUpPage;
