import React, { useEffect, useState } from 'react'
import useSpotify from '@/hooks/useSpotify'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

function FriendsComponent() {
  const { data: session, status } = useSession()
  const spotifyApi = useSpotify()
  const [ followedArtists, setFollowedArtists ] = useState([])

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getFollowedArtists({limit: 15})
        .then((data) => {
          console.log(data)
          setFollowedArtists(data.body.artists.items)
        })
    }
  }, [session, spotifyApi])
  
  return (
    <div>
      <p>Followed Artist</p>
      {followedArtists.map((el, i) => {
        return (
          <div key={i} className='flex items-center gap-4 py-1'>
            <div className='relative w-fit h-10'>
            <a href={el.external_urls.spotify} target='/'>
              <button className='flex gap-5 w-fit hover:brightness-75 justify-center items-center group'>
                <div className='relative w-10 h-10'>
                  <Image fill src={el.images[2].url} className='rounded-full' quality={10}/>
                </div>
                <p className='text-neutral-200 group-hover:underline'>{el.name}</p>
              </button>
            </a>
            </div> 
          </div>
        ) 
      })}
    </div>
  )
}


export default FriendsComponent