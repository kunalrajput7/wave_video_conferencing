import { SignIn } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'

const SignInPage = () => {
  return (
    <main className='flex h-screen w-full'>
      {/* Left Column */}
      <div className='flex w-1/2'>
        {/* Clerk's Sign In Component */}
        <div className='flex w-full items-center justify-center'>
          <SignIn />
        </div>
      </div>

      {/* Right Column */}
      <div className='flex w-1/2 flex-col max-md:hidden max-lg:hidden'>

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
        <div className='flex items-center justify-center'>
          <Image
            src="/icons/signInsvg.svg"
            alt='Sign In Image'
            width={900}
            height={900}
            className='max-w-full h-auto max-md:hidden max-lg:hidden mr-20'
          />
        </div>

      </div>
    </main>
  )
}

export default SignInPage
