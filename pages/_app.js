import '@/styles/globals.css'
import '@/styles/specific.css'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter'})

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return(
    <main className={`${inter.variable} font-sans`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )
    
}
