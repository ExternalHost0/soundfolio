import React from 'react'
import dynamic from 'next/dynamic'
const AccComponent = dynamic(() => import('@/components/AccountComponent'), {
ssr: false,
});
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai'
import { BsFillDiscFill } from 'react-icons/bs'
import { HiSearch } from 'react-icons/hi'

export default function HeaderComponent() {
  return (
    <div className='flex justify-between items-center py-3 px-4 w-full'>
        <p className='font-bold text-white text-4xl'>Soundfolio</p>
        <div className='flex gap-8'>
          <Link href='/dashboard' className='vertHighlight p-4 transition-shadow'>
            <AiFillHome size={25} fill='rgb(200 200 200)'/>
          </Link>
          <Link href='/jukebox' className='vertHighlight p-4 transition-shadow'>
            <BsFillDiscFill size={25} fill='rgb(200 200 200)'/>
          </Link>
        </div>
        <div className='flex'>
          <div className='flex flex-row-reverse mr-10 items-center '>
            <input placeholder='Search someone..' className='rounded-lg bg-neutral-500 text-neutral-50 py-[0.67rem] placeholder:text-neutral-200 pl-4 focus:outline-forest-300 focus:outline focus:outline-2 focus:shadow-slg focus:shadow-forest-400 transition-all'/>
            <button className='absolute bg-forest-400 p-2 rounded-lg border-2 border-neutral-500'>
              <HiSearch size={25} color='white'/>
            </button>
          </div>
          <AccComponent/>
        </div>
    </div>
  )
}
