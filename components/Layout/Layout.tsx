import { useTheme } from "@nextui-org/react";
import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar } from '../Ui/Navbar';

interface Props extends PropsWithChildren {
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title = 'Pokemon App' }) => {
  const { theme } = useTheme()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Brayan Yevenes" />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={` ${title}, pokemon,. pokedex `} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ height: '100%', padding: '0px 20px' }}>
        {children}
      </main>
    </>
  )
}
