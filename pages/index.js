import Head from 'next/head'
import Image from 'next/image'
import background from 'public/images/henning.jpg'

import { AiFillGithub } from 'react-icons/ai'
import { BsSpotify, BsFillFileEarmarkMusicFill } from 'react-icons/bs'

import { getProviders, signIn } from "next-auth/react"
import { useEffect, useState } from 'react'

function ActualPageComponent({ providers }) {
  const footerDisclaimer = "Soundfolio is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Spotify. All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them."

  return (
    <div className='flex items-center justify-start flex-col h-full w-full'>
      <div className='flex justify-between p-8 w-full items-center'>
        <div className='flex items-center gap-4'>
          <BsFillFileEarmarkMusicFill color='white' size={45}/>
          <p className='font-bold text-white text-4xl'>Soundfolio</p>
        </div>
        <a className='flex items-center transition-all active:scale-75' href='https://github.com/ExternalHost0' target='/'>
          <AiFillGithub size={45} className="fill-neutral-100"/>
        </a>
      </div>
      <div className='flex flex-col px-[9rem] gap-8 h-full items-center justify-center'>
        <p className='mt-auto font-semibold text-white text-6xl leading-[1.1]'>Start  <span className='greenGradText'>sharing</span> <span className='text-white underline'>and</span> <span className='greenGradText'>discovering</span> new music with others.</p>
        <p className='text-white'>Soundfolio allows anyone with a Spotify account to immediately connect with friends!</p>
        { providers &&
        <>
          {Object.values(providers).map((provider, i) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id, { callbackUrl: "/dashboard"})} className='w-[20rem] h-[3rem] font-gotham font-medium bg-green-500 align-middle hover:bg-green-600 rounded-3xl text-neutral-50 hover:shadow-green-500 transition-colors'>
                <div className='flex gap-3 items-center justify-center'>
                  <BsSpotify color='white' size={30}/> 
                  <span>LOG IN WITH SPOTIFY</span>
                </div>
              </button>
            </div>
          ))}
        </>
        }
        <div className='text-[#565656] mt-auto pb-8'>
          <p>{footerDisclaimer}</p>
        </div>
      </div>
    </div>
  )
}

// problem here
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers
    }
  }
}

export default function Home({ providers }) {
  return (
    <>
      <Head>
        <title>Soundfolio</title>
        <meta property="og:title" content="Soundfolio Home"/>
        <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon.ico"/>
      </Head>
      <div className='fixed w-full h-full'>
        <div className='grid grid-cols-[2fr_3fr] grid-rows-1 items-center h-full'>
          <div className='w-full h-full relative bg-gradient-to-t from-[#1e693c]'>
            <Image src={background} alt='home page image' fill className='object-cover -z-10' sizes='100%'/>
          </div>
          <ActualPageComponent providers={providers}/>
        </div>
      </div>
    </>
  )
}
