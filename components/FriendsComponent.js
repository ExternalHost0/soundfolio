import React, { useEffect, useState } from 'react'
import useSpotify from '@/hooks/useSpotify'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

function FriendsComponent() {
  const { data: session, status } = useSession()
  const spotifyApi = useSpotify()
  const [ friends, setFriends ] = useState([])
  const [ isClose, setIsClose ] = useState(false)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getFollowedArtists({limit: 15})
        .then((data) => {
          console.log(data)
          setFriends(data.body.artists.items)
        })
    }
  }, [session, spotifyApi])
  
  return (
  <>
  <p className='text-white text-2xl font-semibold text-center mb-2'>Friends</p>
  <div className='overflow-y-scroll flex-1 h-36'>
    {friends.map((el, i) => {
      return (
        <div key={i} className='flex items-center py-2 pr-5'>
          <div className='relative translate-x-7 -translate-y-7 w-14 h-14 z-20'>
            <a href={el.external_urls.spotify} target='/'>
              {isClose &&
                <AiFillStar className='z-[20] fill-amber-400 relative translate-x-11 translate-y-1' size={25}/>
              }
              <Image fill src={el.images[2].url} className='rounded-full hover:brightness-75 transition' quality={10}/>
            </a>
          </div>
          <div className='w-48 h-20 overflow-hidden rounded-tr-xl rounded-bl-xl'>
            <div className='h-full relative bg-gradient-to-l from-[#3f3f3f_30%]'>
              <Image fill className='object-cover -z-10 blur-sm' src={el.images[1].url}/>
              <div className='flex flex-col h-full justify-between'>
                <p className='text-neutral-200 w-auto h-auto overflow-hidden overflow-ellipsis whitespace-nowrap ml-10 font-semibold text-md'>{el.name}</p>
                <p className='text-neutral-200 w-auto h-auto overflow-hidden overflow-ellipsis whitespace-nowrap ml-10 font-semibold text-xs'>{el.genres[0]}</p>
                <div className='py-1 flex justify-center'>
                  <button className='bg-forest-800 border border-forest-600 text-neutral-300 hover:bg-forest-400 hover:shadow-slg hover:shadow-forest-300 hover:text-neutral-50 hover:border-forest-300 w-fit py-1 px-2 font-semibold rounded-lg transition'>
                    Similar Music
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) 
    })}
  </div>
  </>
  )
}


export default FriendsComponent