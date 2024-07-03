import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-2'>
      <Image 
        src="/icons/wave-logo.png"
        alt='Wave Logo'
        width={42}
        height={42}
        className='max-sm:size-10'
      />
      <p className='text-[24px] font-thin text-white max-sm:hidden'>Wave</p>
      </Link>

      <div className='flex flex-between gap-5'>
        {/* Clerk User Management */}

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar