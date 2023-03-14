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
        <HeaderComponent/>
        <div className='px-4 flex justify-between'>
          <ProfileComponent/>
          <FriendsComponent/>
        </div>
      </div>
    </>
  )
}