import { SignUp } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'

const SignUpPage = () => {
  return (
    <main className='flex h-screen w-full'>
      <div className='flex flex-row w-full relative'>

        {/* Clerk's Sign In Component */}
        <div className='flex w-1/2 items-center justify-center'>
          <SignUp />
        </div>

        {/* SVG Image */}
        <div className='fixed w-1/2 h-full bottom-0 right-0 pr-20 flex items-end'>
          <Image
            src="/icons/signUpsvg.svg"
            alt='Sign Up Vector'
            width={700}
            height={700}
            className='max-w-full h-auto opacity-95 max-md:hidden max-lg:hidden'
          />
        </div>
        
      </div>
    </main>
  )
}

export default SignUpPage