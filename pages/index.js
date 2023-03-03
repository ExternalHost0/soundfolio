import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { AiFillGithub } from 'react-icons/ai'


const inter = Inter({ subsets: ['latin'] })

function HomeHeader() {
  return (
    <header className='flex justify-between rounded-lg border-white'>
      <div className='border-b-2 border-white'>
        <div className='flex items-center p-1 bg-[#0c8b21]'>
          <p className='z-10 text-6xl font-hele text-white'>soundfolio</p>
        </div>
      </div>
        <div className='flex items-center gap-6 px-4 mr-8 border-white vertHighlight active:scale-75'>
          <a href='https://github.com/ExternalHost0' target='/'>
            <AiFillGithub size={40} className="fill-neutral-100"/>
          </a>
        </div>
      </header>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>spotfolio</title>
        <meta property="og:title" content="spotfolio"/>
      </Head>
      <div className='w-full h-full fixed bg-neutral-900 p-4'>
        <HomeHeader/>
        <div className='pt-5 pb-20 h-full'>
          <div className='grid grid-rows-[2fr_5fr] h-full gap-2 p-2'>
            <div className='grid grid-cols-2 items-center justify-items-center gap-2 h-full'>
              <div className='bg-[#A5AE9D] w-full h-full rounded-md'>

              </div>
              <div className='bg-[#006D87] w-full h-full rounded-md'>

              </div>
              
            </div>
            <div className='grid grid-cols-[5fr_6fr_1fr] items-center justify-items-center gap-2 h-full'>
              <div className='bg-[#41493A] w-full h-full rounded-md p-8 flex items-center'>
                {/* <div className='flex items-start justify-center p-5 ml-32 flex-col'> */}
                  <p className='text-6xl font-hele leading-[1.2] text-white'>Simple music sharing <u>and</u> discovery with <span className='bg-[#0c8b21]'>soundfolio</span></p>
                {/* </div> */}
              </div>
              <div className='bg-[#00BC97] w-full h-full rounded-md'>
              <button className='py-3 px-16 font-gotham font-medium bg-green-500 align-middle hover:bg-green-600 rounded-3xl text-neutral-50 hover:shadow-green-500' onClick={signIn}>SIGN IN WITH SPOTIFY</button>
              </div>
              <a className='bg-amber-400 flex justify-center items-center w-[7rem] h-full rounded-[3rem] hover:bg-orange-700' href='/login'>
                <p className='font-hele text-6xl -rotate-90'>ABOUT</p>
              </a>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
