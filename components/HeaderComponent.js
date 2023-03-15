import React from 'react'
import dynamic from 'next/dynamic'
const AccComponent = dynamic(() => import('@/components/AccountComponent'), {
ssr: false,
});
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai'
import { BsFillDiscFill } from 'react-icons/bs'
import {GoSearch} from 'react-icons/go'

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
          <div className='flex focus:outline-pfpColor1 focus:outline mr-10 items-center'>
            <GoSearch size={25} color='lightgrey' className='absolute ml-2'/>
            <input placeholder='Search someone..' className='rounded-xl py-2 pl-10'/>
          </div>
          <AccComponent/>
        </div>
    </div>
  )
}
