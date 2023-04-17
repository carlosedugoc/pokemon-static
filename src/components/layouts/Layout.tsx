import Head from "next/head"
import { Navbar } from '../ui/Navbar';
import { NextPage } from 'next';

interface Props {
  title?: string;
  children: React.ReactNode
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: NextPage<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon APP'}</title>
            <meta name="author" content="Carlos González"/>
            <meta name="description" content={`Información sobre el pokemon ${title} `}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la página sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

      <Navbar/>


        <main style={{
          padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
