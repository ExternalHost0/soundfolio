import Head from "next/head"

import ProfileComponent from "@/components/ProfileComponent"
import HeaderComponent from "@/components/HeaderComponent"
import FriendsComponent from "@/components/FriendsComponent"

export default function dashboard() {
  return(
      <>
      <Head>
        <title>Soundfolio Dashboard</title>
        <meta property="og:title" content="Soundfolio Dashboard"/>
        <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon.ico"/>
      </Head>
      <div>
        <div className="bg-neutral-800">
          <HeaderComponent/>
        </div>
        <div className='flex justify-between'>
          <div className="-translate-x-56 hover:translate-x-0 transition-transform group-[viewer] group">
            <span className="-rotate-90 w-max absolute z-30 left-[73%] top-[40%] text-neutral-300 text-[2rem] group-[viewer]:hover:opacity-0 transition-opacity">Hover Over Profile</span>
            <div className="brightness-50 hover:brightness-100 transition">
              <ProfileComponent/>
            </div>
          </div>
          <FriendsComponent/>
        </div>
      </div>
    </>
  )
}