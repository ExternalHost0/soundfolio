import React from 'react'
import { BsTwitter, BsPinterest, BsReddit, BsSnapchat, BsTwitch, BsYoutube, BsGithub } from 'react-icons/bs'
import { FaSteam } from 'react-icons/fa'

export default function ProfileBadges() {

  return (
    <div className='flex gap-3 pt-2 pb-1'>
        <BsTwitter size={25} className='fill-white hover:fill-neutral-400 transition-colors'/>
        <BsYoutube size={25} className='fill-white hover:fill-neutral-400 transition-colors'/>
        <BsSnapchat size={25} className='fill-white hover:fill-neutral-400 transition-colors'/>
        <FaSteam size={25} className='fill-white hover:fill-neutral-400 transition-colors'/>
        <BsGithub size={25} className='fill-white hover:fill-neutral-400 transition-colors'/>
        <BsPinterest size={25} className='fill-white hover:fill-neutral-400 transition-colors'/>
        <BsTwitch size={25} className='fill-white hover:fill-neutral-400 transition-colors'/>
        <BsReddit size={25} className='fill-white hover:fill-neutral-400 transition-colors'/>

    </div>
  )
}
