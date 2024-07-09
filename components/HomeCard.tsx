import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface HomeCardProps {
    classname: string,
    img: string,
    title: string,
    description: string,
    handleClick: () => void,
}

const HomeCard = ({classname, img, title, description, handleClick}: HomeCardProps) => {
  return (
    <div className={cn('px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer', classname)} onClick={handleClick}>
            <div className='flex-center glassmorphism size-9 rounded-[10px]'>
                <Image 
                    src={img}
                    alt='meeting'
                    width={20}
                    height={20}
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='text-lg font-normal'>{description}</p>
            </div>
        </div>
  )
}

export default HomeCard