import Head from "next/head";

import ProfileComponent from "@/components/ProfileComponent";
import HeaderComponent from "@/components/HeaderComponent";
import FriendsComponent from "@/components/FriendsComponent";
import CenterComponent from "@/components/CenterComponent";

export default function dashboard() {
   return (
      <>
         <Head>
            <title>Soundfolio Dashboard</title>
            <meta property="og:title" content="Soundfolio Dashboard" />
            <link
               rel="icon"
               type="image/ico"
               sizes="32x32"
               href="/images/favicon.ico"
            />
         </Head>
         <div className="grid grid-cols-1 grid-rows-[1fr_7fr]"> {/* This <div> containts the entire page */}
            <div className="bg-neutral-800 z-10 relative">
               <HeaderComponent /> {/* This is the header area, or top most section you will find on the page */}
            </div>
            <div className="grid grid-rows-1 grid-cols-[2fr_7fr_2fr] justify-items-center">  {/* Everything below the header is part of the main page and remains below the header, expected to move around */}
               <div className="brightness-50 hover:brightness-100 transition w-max">
                  <ProfileComponent />
               </div>
               <CenterComponent />
               <div className="w-fit">
                  <FriendsComponent/>
               </div>

            </div>
         </div>
      </>
   );
}
