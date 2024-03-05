import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import useSpotify from '@/hooks/useSpotify'
import Image from 'next/image'

export default function SongStories() {
  const [ stories, setStories ] = useState([])
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
  
  // every user will have their freinds as part of this list, will be interactable and display said friend's music or smth
  // for now im just using artists profiles because i dont have friends
  return (
    <div className='flex gap-3 h-fit things my-3 z-0 relative'>
      {followedArtists.map((el) => {
        return(
            <button className='relative w-14 h-14 transition-all -rotate-[25deg]'>
              <Image fill src={el.images[2].url}/>
            </button>
        )
      })}
   </div>
  )
}
