import React from 'react'
import dynamic from 'next/dynamic'
const AccComponent = dynamic(() => import('@/components/AccountComponent'), {
ssr: false,
});
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai'
import { BsFillDiscFill } from 'react-icons/bs'

export default function HeaderComponent() {
  return (
    <div className='flex justify-between items-center py-2 px-4 w-full h-20'>
        <p className='font-bold text-white text-4xl'>Soundfolio</p>
        <div className='flex gap-8'>
          <Link href='/dashboard' className='vertHighlight p-4 transition-shadow'>
            <AiFillHome size={25} fill='rgb(200 200 200)'/>
          </Link>
          <Link href='/jukebox' className='vertHighlight p-4 transition-shadow'>
            <BsFillDiscFill size={25} fill='rgb(200 200 200)'/>
          </Link>
        </div>
        <AccComponent/>
    </div>
  )
}
