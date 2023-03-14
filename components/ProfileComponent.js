import React, { useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import useSpotify from '@/hooks/useSpotify'
import Image from 'next/image'
import HobbySelectorComponent from './HobbySelectorComponent'
import ProfileBadges from './ProfileBadges'
import { HiCheckBadge } from 'react-icons/hi2'

function ProfileComponent() {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [ topArtists, setTopArtists ] = useState([])
  const [ topTracks, setTopTracks ] = useState([])
  const [ profile, setProfile ] = useState([])
  const [ country, setCountry ] = useState()
  const [ charCount, setCharCount ] = useState(50)

  const charCountRef = useRef()

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getMyTopArtists({ limit: 3})
        .then((data) => {
          setTopArtists(data.body.items)
        })
      spotifyApi.getMyTopTracks({ limit: 3})
        .then((data) => {
          setTopTracks(data.body.items)
        })
      spotifyApi.getMe()
        .then((data) => {
          setProfile(data.body)
          let a = (JSON.stringify(data.body.country))
          let b = (a.toLowerCase()).replace(/['"]+/g, '')
          setCountry(b)
        })
    }
  }, [session, spotifyApi])  

  
  const charChange = function(e) {
    setCharCount(e.target.getAttribute('maxLength') - e.target.value.length)
  }
  const handleMouseOut = function() {
    charCountRef.current.style.opacity = 0;
  };
  const handleMouseIn = function() {
    charCountRef.current.style.opacity = 1;
};

  return (
    <div className='w-[20rem] h-fit rounded-2xl border-4 border-orange-300 shadow-lg shadow-orange-400 bg-neutral-800 overflow-hidden'>
      <div className='grid grid-cols-1 grid-rows-[2fr_6fr] gap-4 h-full'>
        <div className='relative mb-10 max-h-[10rem]'>
          <Image fill alt='User Banner Image' src='/images/back.jfif'/>
          <div className='relative w-20 h-20 mx-auto top-[70%]'>
            <Image fill alt='User Profile Image' className='rounded-xl border-4 border-orange-200' src={session?.user.image}/>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <p className='font-medium text-xl text-white'>{session?.user.name}</p>
          <div className='flex gap-1 justify-center items-center'>
            <p className='text-neutral-300'>{profile.country} | </p>
            { country &&
            <div className='relative h-8 w-10'>
              <Image fill alt='Country Flag' className='object-contain' src={`https://raw.githubusercontent.com/hampusborgos/country-flags/main/png100px/${country}.png`}/>
            </div>  
            }
          </div>
          <ProfileBadges/>
          <div className='py-1'>
            <button className='bg-orange-600 hover:bg-orange-700 rounded-xl font-semibold text-lg py-1 px-2 transition-colors'>View Full Profile</button>
          </div>
          <hr className='bg-stone-400 my-2'/>
          <div className='px-4 w-full'>
            <div className='w-full'>
              <textarea onInput={charChange} onMouseEnter={handleMouseIn} onMouseOut={handleMouseOut} className='bg-neutral-600 w-full h-12 text-sm rounded-lg px-2 py-1 text-white placeholder:text-neutral-400 resize-none overflow-hidden focus:outline-orange-500 focus:outline-none' maxLength={50} name="User's Bio" placeholder='A short bio..'/>
              <span ref={charCountRef} className='text-neutral-500 -translate-x-[25px] translate-y-[20px] absolute transition-opacity'>{charCount}</span>
            </div>
          </div>
          <hr className='bg-stone-400 my-2'/>
          <div className='w-full px-4'>
            <HobbySelectorComponent/>
          </div>
          <hr className='bg-stone-400 my-2'/>
          <div className='w-full px-4 pb-3'>
            <p className='text-neutral-400 font-medium'>Favorite Artists</p>
            {topArtists.map((top, i) => {
              return (
                <div key={i} className='flex items-center gap-4 py-1'>
                  <div className='relative w-10 h-10'>
                  <a href={top.external_urls.spotify} target='/'>
                    <Image fill src={top.images[2].url} className='rounded-full hover:brightness-75' quality={10}/>
                  </a>
                  </div> 
                  <p className='text-neutral-200'>{top.name}</p>
                </div>
              ) 
            })}
            <p className='text-neutral-400 font-medium'>Favorite Songs</p>
            {topTracks.map((top, i) => {
              return (
                <div key={i} className='flex items-center gap-4 py-1'>
                  <div className='relative w-10 h-10'>
                    <a href={top.external_urls.spotify} target='/'>
                      <Image fill src={top.album.images[2].url} className='rounded-sm hover:brightness-75' quality={10}/>
                    </a>
                  </div> 
                  <p className='text-neutral-200'>{top.name}</p>
                </div>
              ) 
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent